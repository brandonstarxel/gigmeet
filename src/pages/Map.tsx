import React, { useState, useRef, useEffect } from 'react';

// TypeScript interface for Friend data with figure type
interface Friend {
  id: number;
  name: string;
  job: string;
  location: string;
  position: {
    x: number; // percentage from left
    y: number; // percentage from top
  };
  days: string[];
  description: string;
  figureType: 'standing' | 'handsOnHips' | 'handsUp' | 'pointingLeft' | 'pointingRight' | 'celebration';
  color: string; // Color for the figure
}

const LondonSnapMap: React.FC = () => {
  // London friends and their jobs with stick figures - positions spread out more
  const friends: Friend[] = [
    { 
      id: 1, 
      name: "Zara", 
      job: "Furniture Mover", 
      location: "Shoreditch", 
      position: { x: 68, y: 35 },
      days: ["Monday", "Wednesday", "Friday"],
      description: "Working at an independent coffee shop. Says the tips are decent but her boss is moody.",
      figureType: 'pointingLeft',
      color: '#8B4513' // Brown
    },
    { 
      id: 2, 
      name: "Marcus", 
      job: "Tutor", 
      location: "Hampstead", 
      position: { x: 38, y: 18 },
      days: ["Tuesday", "Thursday"],
      description: "Teaching maths to rich kids. £25/hour and the parents give him dinner sometimes.",
      figureType: 'handsOnHips',
      color: '#8B4513' // Brown
    },
    { 
      id: 3, 
      name: "Aisha", 
      job: "Shopping Assistant", 
      location: "Oxford Street", 
      position: { x: 54, y: 42 },
      days: ["Saturday", "Sunday"],
      description: "Working at Zara. Gets 30% staff discount which she says makes up for dealing with tourists.",
      figureType: 'standing',
      color: '#8B4513' // Brown
    },
    { 
      id: 4, 
      name: "James", 
      job: "Bartender", 
      location: "Soho", 
      position: { x: 46, y: 47 },
      days: ["Thursday", "Friday", "Saturday"],
      description: "Mixing cocktails at a speakeasy. Late nights but says the atmosphere is worth it.",
      figureType: 'pointingRight',
      color: '#8B4513' // Brown
    },
    { 
      id: 5, 
      name: "Sofia", 
      job: "Dog Walker", 
      location: "Notting Hill", 
      position: { x: 28, y: 45 },
      days: ["Monday", "Wednesday", "Friday"],
      description: "Walking posh dogs. Flexible hours and gets to be outdoors, but has to carry a lot of poop bags.",
      figureType: 'celebration',
      color: '#8B4513' // Brown
    },
    { 
      id: 6, 
      name: "Liam", 
      job: "Food Delivery", 
      location: "Clapham", 
      position: { x: 52, y: 80 },
      days: ["Tuesday", "Thursday", "Friday", "Saturday"],
      description: "Deliveroo rider. Makes his own schedule but says the hills are killing his legs.",
      figureType: 'handsUp',
      color: '#8B4513' // Brown
    },
    { 
      id: 7, 
      name: "Maya", 
      job: "Museum Guide", 
      location: "South Kensington", 
      position: { x: 32, y: 58 },
      days: ["Monday", "Tuesday", "Sunday"],
      description: "Working at the Science Museum. Loves explaining exhibits to kids but gets tired of answering the same questions.",
      figureType: 'handsOnHips',
      color: '#8B4513' // Brown
    },
    { 
      id: 8, 
      name: "Theo", 
      job: "Catsitting", 
      location: "Brixton", 
      position: { x: 55, y: 82 },
      days: ["Friday", "Saturday"],
      description: "Playing at a local club. Late nights but says the vibe and networking opportunities are worth it.",
      figureType: 'standing',
      color: '#8B4513' // Brown
    },
    { 
      id: 9, 
      name: "Olivia", 
      job: "Photographer", 
      location: "Camden", 
      position: { x: 40, y: 29 },
      days: ["Wednesday", "Saturday"],
      description: "Taking photos at events and for small businesses. Unpredictable schedule but good for her portfolio.",
      figureType: 'pointingLeft',
      color: '#8B4513' // Brown
    },
    { 
      id: 10, 
      name: "Nathan", 
      job: "Rent-A-Boyfriend", 
      location: "Westminster", 
      position: { x: 48, y: 50 },
      days: ["Monday", "Thursday", "Sunday"],
      description: "Leading 'alternative history' walking tours. Loves telling stories but says his feet are always sore.",
      figureType: 'pointingRight',
      color: '#8B4513' // Brown
    }
  ];

  // State for map zooming and panning
  const [zoom, setZoom] = useState<number>(1);
  const [position, setPosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number, y: number }>({ x: 0, y: 0 });
  const [selectedDay, setSelectedDay] = useState<string>("All");
  const [selectedFriend, setSelectedFriend] = useState<number | null>(null);
  
  const mapContainerRef = useRef<HTMLDivElement>(null);
  
  // Days of the week for filter
  const days: string[] = ["All", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  
  // Filter friends based on selected day
  const filteredFriends: Friend[] = selectedDay === "All" 
    ? friends 
    : friends.filter(friend => friend.days.includes(selectedDay));
  
  // Handle zooming
  const handleZoomIn = () => {
    if (zoom < 2.5) {
      setZoom(prevZoom => prevZoom + 0.25);
    }
  };
  
  const handleZoomOut = () => {
    if (zoom > 0.5) {
      setZoom(prevZoom => prevZoom - 0.25);
    }
  };
  
  // Handle panning/dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      
      // Limit panning to keep map in view
      const containerWidth = mapContainerRef.current?.clientWidth || 0;
      const containerHeight = mapContainerRef.current?.clientHeight || 0;
      const mapWidth = containerWidth * zoom;
      const mapHeight = containerHeight * zoom;
      
      const minX = containerWidth - mapWidth;
      const minY = containerHeight - mapHeight;
      
      setPosition({
        x: Math.min(0, Math.max(newX, minX)),
        y: Math.min(0, Math.max(newY, minY))
      });
    }
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  // Handle touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y
      });
    }
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && e.touches.length === 1) {
      const newX = e.touches[0].clientX - dragStart.x;
      const newY = e.touches[0].clientY - dragStart.y;
      
      // Limit panning to keep map in view
      const containerWidth = mapContainerRef.current?.clientWidth || 0;
      const containerHeight = mapContainerRef.current?.clientHeight || 0;
      const mapWidth = containerWidth * zoom;
      const mapHeight = containerHeight * zoom;
      
      const minX = containerWidth - mapWidth;
      const minY = containerHeight - mapHeight;
      
      setPosition({
        x: Math.min(0, Math.max(newX, minX)),
        y: Math.min(0, Math.max(newY, minY))
      });
    }
  };
  
  const handleTouchEnd = () => {
    setIsDragging(false);
  };
  
  // Reset map position when zoom changes
  useEffect(() => {
    if (mapContainerRef.current) {
      const containerWidth = mapContainerRef.current.clientWidth;
      const containerHeight = mapContainerRef.current.clientHeight;
      const mapWidth = containerWidth * zoom;
      const mapHeight = containerHeight * zoom;
      
      const minX = containerWidth - mapWidth;
      const minY = containerHeight - mapHeight;
      
      setPosition({
        x: Math.min(0, Math.max(position.x, minX)),
        y: Math.min(0, Math.max(position.y, minY))
      });
    }
  }, [zoom]);
  
  // Add event listeners for handling mouse events outside the map
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
      }
    };
    
    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('touchend', handleGlobalMouseUp);
    
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('touchend', handleGlobalMouseUp);
    };
  }, [isDragging]);
  
  // Function to render stick figure based on type
  const renderStickFigure = (figureType: Friend['figureType'], color: string, isSelected: boolean) => {
    const size = isSelected ? 40 : 32;
    const strokeWidth = isSelected ? 3 : 2;
    const scale = isSelected ? 1.2 : 1;
    
    // Common styles for all figures
    const svgStyle = {
      transform: `scale(${scale})`,
      transition: 'all 0.3s ease',
      filter: isSelected ? 'drop-shadow(0 0 4px white)' : 'none'
    };
    
    switch (figureType) {
      case 'standing':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" style={svgStyle}>
            {/* Head */}
            <circle cx="12" cy="6" r="3.5" fill={color} />
            {/* Body */}
            <line x1="12" y1="9.5" x2="12" y2="18" stroke={color} strokeWidth={strokeWidth} />
            {/* Arms */}
            <line x1="12" y1="12" x2="8" y2="14" stroke={color} strokeWidth={strokeWidth} />
            <line x1="12" y1="12" x2="16" y2="14" stroke={color} strokeWidth={strokeWidth} />
            {/* Legs */}
            <line x1="12" y1="18" x2="9" y2="22" stroke={color} strokeWidth={strokeWidth} />
            <line x1="12" y1="18" x2="15" y2="22" stroke={color} strokeWidth={strokeWidth} />
          </svg>
        );
        
      case 'handsOnHips':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" style={svgStyle}>
            {/* Head */}
            <circle cx="12" cy="6" r="3.5" fill={color} />
            {/* Body */}
            <line x1="12" y1="9.5" x2="12" y2="18" stroke={color} strokeWidth={strokeWidth} />
            {/* Arms as hands on hips */}
            <path d="M12,12 Q8,12 8,15" stroke={color} strokeWidth={strokeWidth} fill="none" />
            <path d="M12,12 Q16,12 16,15" stroke={color} strokeWidth={strokeWidth} fill="none" />
            {/* Legs */}
            <line x1="12" y1="18" x2="9" y2="22" stroke={color} strokeWidth={strokeWidth} />
            <line x1="12" y1="18" x2="15" y2="22" stroke={color} strokeWidth={strokeWidth} />
          </svg>
        );
        
      case 'handsUp':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" style={svgStyle}>
            {/* Head */}
            <circle cx="12" cy="6" r="3.5" fill={color} />
            {/* Body */}
            <line x1="12" y1="9.5" x2="12" y2="18" stroke={color} strokeWidth={strokeWidth} />
            {/* Arms up */}
            <line x1="12" y1="12" x2="8" y2="8" stroke={color} strokeWidth={strokeWidth} />
            <line x1="12" y1="12" x2="16" y2="8" stroke={color} strokeWidth={strokeWidth} />
            {/* Legs */}
            <line x1="12" y1="18" x2="9" y2="22" stroke={color} strokeWidth={strokeWidth} />
            <line x1="12" y1="18" x2="15" y2="22" stroke={color} strokeWidth={strokeWidth} />
          </svg>
        );
        
      case 'pointingLeft':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" style={svgStyle}>
            {/* Head */}
            <circle cx="12" cy="6" r="3.5" fill={color} />
            {/* Body */}
            <line x1="12" y1="9.5" x2="12" y2="18" stroke={color} strokeWidth={strokeWidth} />
            {/* Arms - one pointing left */}
            <line x1="12" y1="12" x2="5" y2="12" stroke={color} strokeWidth={strokeWidth} />
            <line x1="12" y1="12" x2="16" y2="14" stroke={color} strokeWidth={strokeWidth} />
            {/* Legs */}
            <line x1="12" y1="18" x2="9" y2="22" stroke={color} strokeWidth={strokeWidth} />
            <line x1="12" y1="18" x2="15" y2="22" stroke={color} strokeWidth={strokeWidth} />
          </svg>
        );
        
      case 'pointingRight':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" style={svgStyle}>
            {/* Head */}
            <circle cx="12" cy="6" r="3.5" fill={color} />
            {/* Body */}
            <line x1="12" y1="9.5" x2="12" y2="18" stroke={color} strokeWidth={strokeWidth} />
            {/* Arms - one pointing right */}
            <line x1="12" y1="12" x2="19" y2="12" stroke={color} strokeWidth={strokeWidth} />
            <line x1="12" y1="12" x2="8" y2="14" stroke={color} strokeWidth={strokeWidth} />
            {/* Legs */}
            <line x1="12" y1="18" x2="9" y2="22" stroke={color} strokeWidth={strokeWidth} />
            <line x1="12" y1="18" x2="15" y2="22" stroke={color} strokeWidth={strokeWidth} />
          </svg>
        );
        
      case 'celebration':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" style={svgStyle}>
            {/* Head */}
            <circle cx="12" cy="6" r="3.5" fill={color} />
            {/* Body */}
            <line x1="12" y1="9.5" x2="12" y2="18" stroke={color} strokeWidth={strokeWidth} />
            {/* Arms up in celebration */}
            <line x1="12" y1="12" x2="7" y2="7" stroke={color} strokeWidth={strokeWidth} />
            <line x1="12" y1="12" x2="17" y2="7" stroke={color} strokeWidth={strokeWidth} />
            {/* Legs */}
            <line x1="12" y1="18" x2="9" y2="22" stroke={color} strokeWidth={strokeWidth} />
            <line x1="12" y1="18" x2="15" y2="22" stroke={color} strokeWidth={strokeWidth} />
          </svg>
        );
        
      default:
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" style={svgStyle}>
            {/* Default standing figure */}
            <circle cx="12" cy="6" r="3.5" fill={color} />
            <line x1="12" y1="9.5" x2="12" y2="18" stroke={color} strokeWidth={strokeWidth} />
            <line x1="12" y1="12" x2="8" y2="14" stroke={color} strokeWidth={strokeWidth} />
            <line x1="12" y1="12" x2="16" y2="14" stroke={color} strokeWidth={strokeWidth} />
            <line x1="12" y1="18" x2="9" y2="22" stroke={color} strokeWidth={strokeWidth} />
            <line x1="12" y1="18" x2="15" y2="22" stroke={color} strokeWidth={strokeWidth} />
          </svg>
        );
    }
  };
  
  return (
    <div className="min-h-screen bg-base-200 p-4 pt-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">Your Friends</h1>
          <p className="text-lg">Where your friends are working this week</p>
        </div>
        
        {/* Day filter */}
        <div className="flex justify-center mb-6 flex-wrap">
          {days.map(day => (
            <button 
              key={day} 
              className={`btn btn-sm m-1 ${selectedDay === day ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setSelectedDay(day)}
            >
              {day}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Map on the left/top */}
          <div className="lg:col-span-2 card bg-base-100 shadow-xl overflow-hidden">
            <div className="card-body p-2 relative">
              {/* Zoom controls */}
              <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                <button 
                  className="btn btn-circle btn-primary" 
                  onClick={handleZoomIn}
                  disabled={zoom >= 2.5}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
                <button 
                  className="btn btn-circle btn-primary" 
                  onClick={handleZoomOut}
                  disabled={zoom <= 0.5}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                  </svg>
                </button>
              </div>
              
              {/* Map container */}
              <div 
                ref={mapContainerRef}
                className="relative w-full h-[600px] overflow-hidden cursor-grab active:cursor-grabbing"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {/* Map image */}
                <div 
                  className="absolute"
                  style={{
                    transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
                    transformOrigin: '0 0',
                    width: '100%',
                    height: '100%'
                  }}
                >
                  {/* Using the london-map.png image */}
                  <img 
                    src="/london-map.png" 
                    alt="Map of London"
                    className="w-full h-full object-cover"
                    draggable="false"
                  />
                  
                  {/* Friend markers */}
                  {filteredFriends.map(friend => (
                    <div 
                      key={friend.id}
                      className={`absolute cursor-pointer transition-all duration-300 ease-in-out z-${selectedFriend === friend.id ? '20' : '10'}`}
                      style={{ 
                        left: `${friend.position.x}%`, 
                        top: `${friend.position.y}%`,
                        transform: `translate(-50%, -50%)`
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedFriend(friend.id);
                      }}
                    >
                      {/* Stick figure icon */}
                      <div className="flex items-center justify-center">
                        {renderStickFigure(friend.figureType, friend.color, selectedFriend === friend.id)}
                      </div>
                      
                      {/* Name and job label */}
                      <div 
                        className={`absolute top-12 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 px-3 py-1.5 rounded-full text-xs whitespace-nowrap transition-all shadow-md ${
                          selectedFriend === friend.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                        }`}
                        style={{
                          borderLeft: `3px solid ${friend.color}`
                        }}
                      >
                        <span className="font-bold">{friend.name}</span>: {friend.job}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Friend details on the right/bottom */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title mb-4">
                {selectedFriend 
                  ? `${friends.find(f => f.id === selectedFriend)?.name}'s Job` 
                  : "Select a friend on the map"}
              </h2>
              
              {selectedFriend ? (
                <div>
                  {(() => {
                    const friend = friends.find(f => f.id === selectedFriend);
                    if (!friend) return null;
                    
                    return (
                      <>
                        <div className="flex mb-4 items-center">
                          <div className="mr-4 flex items-center justify-center" style={{ width: '64px', height: '64px' }}>
                            {renderStickFigure(friend.figureType, friend.color, true)}
                          </div>
                          <div>
                            <h3 className="font-bold text-xl">{friend.name}</h3>
                            <p className="opacity-70">{friend.location}</p>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <div 
                            className="badge badge-lg mb-2 text-white"
                            style={{ backgroundColor: friend.color }}
                          >
                            {friend.job}
                          </div>
                          <p>{friend.description}</p>
                        </div>
                        
                        <div className="card-title text-sm mt-6 mb-2">Working Days</div>
                        <div className="flex flex-wrap gap-1">
                          {friend.days.map(day => (
                            <span 
                              key={day} 
                              className="badge badge-outline"
                              style={{ borderColor: friend.color }}
                            >
                              {day}
                            </span>
                          ))}
                        </div>
                      </>
                    );
                  })()}
                </div>
              ) : (
                <div className="flex items-center justify-center h-64 opacity-50">
                  <p>Click on a friend to see job details</p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Friend list below the map */}
        <div className="mt-8 card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title mb-4">All Jobs ({filteredFriends.length})</h2>
            <div className="overflow-x-auto">
              <table className="table table-zebra">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Job</th>
                    <th className="hidden md:table-cell">Location</th>
                    <th className="hidden md:table-cell">Days</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredFriends.map(friend => (
                    <tr 
                      key={friend.id} 
                      className={`cursor-pointer hover:bg-base-200 ${selectedFriend === friend.id ? 'bg-base-200' : ''}`}
                      onClick={() => setSelectedFriend(friend.id)}
                    >
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 flex items-center justify-center">
                            {renderStickFigure(friend.figureType, friend.color, false)}
                          </div>
                          <div>{friend.name}</div>
                        </div>
                      </td>
                      <td>{friend.job}</td>
                      <td className="hidden md:table-cell">{friend.location}</td>
                      <td className="hidden md:table-cell">
                        <div className="flex flex-wrap gap-1">
                          {friend.days.map(day => (
                            <span 
                              key={`${friend.id}-${day}`} 
                              className="badge badge-outline badge-xs"
                              style={{ borderColor: friend.color }}
                            >
                              {day.substring(0, 3)}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LondonSnapMap;