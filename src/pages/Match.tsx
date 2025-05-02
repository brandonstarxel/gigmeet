import React, { useEffect, useState } from 'react';

interface Coworker {
  id: number;
  name: string;
  role: string;
  avatarInitial: string;
  avatarColor: string;
}

const JobMatchPage: React.FC = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  
  useEffect(() => {
    // Show confetti after component mounts
    setShowConfetti(true);
    
    // Optional: Hide confetti after some time
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 8000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const coworkers: Coworker[] = [
    { id: 1, name: "Alex Johnson", role: "Sound Engineer", avatarInitial: "AJ", avatarColor: "bg-primary" },
    { id: 2, name: "Taylor Kim", role: "Event Host", avatarInitial: "TK", avatarColor: "bg-secondary" },
    { id: 3, name: "Jordan Smith", role: "Lighting Technician", avatarInitial: "JS", avatarColor: "bg-accent" },
    { id: 4, name: "Riley Lopez", role: "Photographer", avatarInitial: "RL", avatarColor: "bg-info" }
  ];
  
  return (
    <div className="min-h-screen bg-base-200 relative overflow-hidden flex items-center justify-center">
      {/* Confetti effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 100 }).map((_, i) => {
            const size = Math.random() * 10 + 5;
            const left = Math.random() * 100;
            const animationDuration = Math.random() * 3 + 2;
            const delay = Math.random() * 3;
            const color = [
              'bg-primary', 'bg-secondary', 'bg-accent', 
              'bg-info', 'bg-success', 'bg-warning'
            ][Math.floor(Math.random() * 6)];
            
            return (
              <div
                key={i}
                className={`absolute rounded-full ${color}`}
                style={{
                  left: `${left}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  top: `-50px`,
                  animation: `confetti ${animationDuration}s ease-in-out ${delay}s forwards`,
                }}
              />
            );
          })}
        </div>
      )}
      
      {/* Main content container */}
      <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center max-w-3xl">
        {/* Celebration title */}
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <div className="absolute inset-0 rounded-full bg-primary opacity-20 animate-pulse" style={{ transform: 'scale(1.2)' }}></div>
            <h1 className="text-6xl md:text-8xl font-bold text-primary tracking-wide mb-4 p-8 relative z-10">
              JOB MATCH
            </h1>
          </div>
          <p className="text-xl md:text-2xl animate-pulse mt-6">
            Congratulations! You're now DJ for Mia's Birthday Party!
          </p>
        </div>
        
        {/* Cards section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* Co-workers card */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Your Coworkers</h2>
              <div className="space-y-4">
                {coworkers.map(worker => (
                  <div key={worker.id} className="flex items-center gap-4">
                    <div className="avatar placeholder">
                      <div className={`${worker.avatarColor} text-base-100 rounded-full w-12`}>
                        <span>{worker.avatarInitial}</span>
                      </div>
                    </div>
                    <div>
                      <p className="font-bold">{worker.name}</p>
                      <p className="text-sm opacity-70">{worker.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Socials card */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Socials</h2>
              <div className="space-y-4">
                <button className="btn btn-success w-full justify-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                    <path d="M13.5 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                    <path d="M9 13.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5Z" />
                  </svg>
                  Join WhatsApp Group
                </button>
                
                <button className="btn btn-primary w-full justify-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  Follow Mia on Instagram
                </button>
                
                <button className="btn btn-neutral w-full justify-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  Email Mia
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="mt-12 space-x-4">
          <button className="btn btn-outline">Back to Dashboard</button>
          <button className="btn btn-primary">View Job Details</button>
        </div>
      </div>

      {/* CSS Animation for confetti */}
      <style>{`
        @keyframes confetti {
          0% {
            transform: translateY(0) rotate(0);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default JobMatchPage;