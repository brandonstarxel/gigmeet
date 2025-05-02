"use client";

import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function HomePage({ onNewNotification }: { onNewNotification: () => void }) {
  const navigate = useNavigate();

  const location = useLocation();
  const timerRef = useRef<number | null>(null);

  // Whatever you want to run 5 s later
  const doSomething = () => {
    onNewNotification();
  };

  useEffect(() => {
    if (location.state?.startTimer) {
      const delay = location.state.delay ?? 1000;  // or whatever default
      timerRef.current = window.setTimeout(doSomething, delay);

      // “Consume” the flag without triggering React-Router
      // (first arg is the new state object, third is URL; leave pathname/search/hash unchanged)
      window.history.replaceState({}, "", window.location.href);
    }

    return () => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }
    };
  }, [location.state]);
  
  // Mock data for gig listings
  const [gigs] = useState([
    {
      id: 1,
      title: "Fix my bike",
      description: "Chain keeps slipping—need someone with tools & know-how.",
      price: "$30",
      location: "On-campus",
      postedAt: "45 min ago",
      postedBy: {
        name: "Sam Riley",
        avatar: "/student1.jpg"
      }
    },
    {
      id: 2,
      title: "DJ my birthday",
      description: "3-hour set, bring your own controller. Pop & indie vibes.",
      price: "$80",
      location: "Student Union Hall",
      postedAt: "2 h ago",
      postedBy: {
        name: "Jarrod Smith",
        avatar: "/student2.jpg"
      }
    },
    {
      id: 3,
      title: "DJ Needed - Mia's Birthday Party",
      description: "Seeking an experienced DJ to play my 23rd birthday party!! Especially into hip hop and afrobeats music. You can stay at the party afterwards and hang out :)",
      price: "$12/hour",
      location: "Hyde Park",
      postedAt: "6 h ago",
      postedBy: {
        name: "Mia Wu",
        avatar: "/miawu.png"
      }
    },
    {
      id: 4,
      title: "Move dorm furniture",
      description: "Need two strong people to shift a sofa (+pizza).",
      price: "$20 each",
      location: "North Residence",
      postedAt: "1 day ago",
      postedBy: {
        name: "Ollie Grant",
        avatar: "/student4.jpg"
      }
    },
    {
      id: 5,
      title: "Poster design for club night",
      description: "Looking for a bold, eye-catchy A3 poster—PSD preferred.",
      price: "$50",
      location: "Remote",
      postedAt: "2 days ago",
      postedBy: {
        name: "Danny DeVito",
        avatar: "/student5.jpg"
      }
    }
  ]);

  const handleViewDetails = (gig: typeof gigs[0]) => {
    if (gig.postedBy.name === "Mia Wu") {
      navigate("/job-description");
    } else {
      alert(`Viewing details for ${gig.title} by ${gig.postedBy.name}`);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-base-100">
      {/* Main content area with scrolling */}
      <main className="flex-1 overflow-y-auto pb-16">
        {/* Header */}
        <header className="sticky top-0 bg-base-100 p-4 border-b z-10">
          <h1 className="text-2xl font-bold text-center">Gig Listings</h1>
        </header>

        {/* Gig listings */}
        <div className="p-4 space-y-4">
          {gigs.map((gig) => (
            <div key={gig.id} className="card bg-base-200 shadow-md">
              <div className="card-body p-4">
                {/* top row: avatar + name + price */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <div className="avatar">
                      <div className="w-20 h-20 rounded-full">
                        <img src={gig.postedBy.avatar} alt={gig.postedBy.name} className="w-full h-full object-cover rounded-full" />
                      </div>
                    </div>
                    <span className="text-lg font-bold">{gig.postedBy.name}</span>
                  </div>

                  <div className="badge badge-primary">{gig.price}</div>
                </div>

                {/* title */}
                <h2 className="text-lg font-semibold mt-2">{gig.title}</h2>

                {/* description */}
                <p className="text-sm mt-1">{gig.description}</p>

                {/* location & time */}
                <div className="flex justify-between items-center mt-3 text-xs text-base-content/70">
                  <span>{gig.location}</span>
                  <span>{gig.postedAt}</span>
                </div>

                {/* action */}
                <div className="card-actions justify-end mt-2">
                  <button 
                    className="btn btn-sm btn-outline"
                    onClick={() => handleViewDetails(gig)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
