"use client";

import { User, Home, MessageSquare } from 'lucide-react';
import { useState } from "react";

export default function HomePage() {
  // Mock data for gig listings
  const [gigs] = useState([
    {
      id: 1,
      title: "Website Development",
      description: "Need a developer to build a responsive website for my business",
      price: "$500",
      location: "Remote",
      postedBy: "John Doe",
      postedAt: "2 hours ago"
    },
    {
      id: 2,
      title: "Logo Design",
      description: "Looking for a creative designer to create a modern logo for my startup",
      price: "$200",
      location: "Remote",
      postedBy: "Jane Smith",
      postedAt: "5 hours ago"
    },
    {
      id: 3,
      title: "Content Writing",
      description: "Need articles written for my tech blog, 5 articles per week",
      price: "$300",
      location: "Remote",
      postedBy: "Mike Johnson",
      postedAt: "1 day ago"
    },
    {
      id: 4,
      title: "Mobile App Testing",
      description: "Looking for QA testers for my iOS application",
      price: "$25/hour",
      location: "Remote",
      postedBy: "Sarah Williams",
      postedAt: "2 days ago"
    },
    {
      id: 5,
      title: "Social Media Management",
      description: "Need someone to manage Instagram and Facebook accounts",
      price: "$350/month",
      location: "Remote",
      postedBy: "Alex Brown",
      postedAt: "3 days ago"
    }
  ]);

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
                <div className="flex justify-between items-start">
                  <h2 className="card-title text-lg">{gig.title}</h2>
                  <div className="badge badge-primary">{gig.price}</div>
                </div>
                <p className="text-sm mt-2">{gig.description}</p>
                <div className="flex justify-between items-center mt-3 text-xs text-base-content/70">
                  <span>{gig.location}</span>
                  <span>{gig.postedAt}</span>
                </div>
                <div className="card-actions justify-end mt-2">
                  <button className="btn btn-sm btn-outline">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Bottom navigation */}
      <div className="btm-nav btm-nav-sm fixed bottom-0 bg-base-100 border-t">
        <button className="text-base-content">
          <User size={20} />
        </button>
        <button className="active text-primary">
          <Home size={20} />
        </button>
        <button className="text-base-content">
          <MessageSquare size={20} />
        </button>
      </div>
    </div>
  );
}
