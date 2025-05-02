import React, { useState } from 'react';

interface UserStats {
  followers: number;
  following: number;
  posts: number;
}

interface UserDetails {
  name: string;
  username: string;
  bio: string;
  occupation: string;
  location: string;
  avatar: string;
  coverPhoto: string;
  stats: UserStats;
  age: number;
  university: string;
  skills: string[];
  achievements: {
    id: number;
    title: string;
    description: string;
    year: string;
  }[];
}

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('posts');
  
  // Mock user data - in a real app, this would come from an API or context
  const user: UserDetails = {
    name: "Jane Ligma balls",
    username: "@janedoe",
    bio: "UI/UX Designer passionate about creating intuitive and beautiful interfaces. Coffee enthusiast. Traveler.",
    occupation: "Senior Designer at DesignCo",
    location: "San Francisco, CA",
    avatar: "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp", // Using the provided image
    coverPhoto: "/images/cover.jpg", // You'd use a real image path
    stats: {
      followers: 1420,
      following: 356,
      posts: 42
    },
    age: 28,
    university: "Stanford University - Bachelor of Fine Arts",
    skills: ["UI/UX Design", "Figma", "Adobe Creative Suite", "Prototyping", "User Research", "Front-end Development"],
    achievements: [
      {
        id: 1,
        title: "Design Innovation Award",
        description: "Received the Design Innovation Award for the health app interface redesign",
        year: "2024"
      },
      {
        id: 2,
        title: "Design Conference Speaker",
        description: "Featured speaker at the International Design Conference",
        year: "2023"
      },
      {
        id: 3,
        title: "Portfolio of the Year",
        description: "Selected as Portfolio of the Year by Design Magazine",
        year: "2022"
      }
    ]
  };

  // Mock activity data - would come from an API in a real app
  const recentActivity = [
    { id: 1, type: 'post', content: 'Shared a new design portfolio', time: '2 hours ago' },
    { id: 2, type: 'like', content: 'Liked "Modern UI Principles"', time: '4 hours ago' },
    { id: 3, type: 'comment', content: 'Commented on "Design Trends 2025"', time: '1 day ago' },
  ];

  // Sample projects
  const projects = [
    { id: 1, title: 'E-commerce Redesign', description: 'Complete UI/UX overhaul for an e-commerce platform', image: '/images/project1.jpg' },
    { id: 2, title: 'Health App', description: 'Mobile app interface for health tracking', image: '/images/project2.jpg' },
    { id: 3, title: 'Dashboard UI Kit', description: 'Modular components for admin dashboards', image: '/images/project3.jpg' },
  ];

  return (
    <div className="min-h-screen bg-base-200">
      {/* Mobile app header with back button */}
      <div className="sticky top-0 z-50 bg-base-100 border-b border-base-200">
        <div className="navbar px-4">
          <div className="navbar-start">
            <button className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          <div className="navbar-center">
            <span className="font-semibold text-lg">Profile</span>
          </div>
          <div className="navbar-end">
            <button className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Cover photo and profile section */}
      <div className="relative">
        <div className="h-48 w-full bg-gradient-to-r from-primary to-secondary">
          {/* We're using a gradient as placeholder, but you could use an actual image */}
        </div>
        
        <div className="container mx-auto px-4">
          <div className="relative -mt-16 pb-6">
            <div className="bg-base-100 rounded-box shadow-xl p-6">
              <div className="flex flex-col gap-6">
                {/* Top section with avatar and name side by side */}
                <div className="w-full flex items-center gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="avatar">
                      <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user.avatar} alt={user.name} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h1 className="text-2xl font-bold">{user.name}</h1>
                    <p className="text-sm opacity-70">{user.username}</p>
                    <div className="mt-2 flex">
                      <button className="btn btn-sm btn-primary mr-2">Follow</button>
                      <button className="btn btn-sm btn-outline">Message</button>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <button className="btn btn-sm btn-ghost">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Bio and stats */}
                <div className="w-full">
                  <p className="mb-4">{user.bio}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm mb-6">
                    {user.occupation && (
                      <div className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>{user.occupation}</span>
                      </div>
                    )}
                    
                    {user.location && (
                      <div className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{user.location}</span>
                      </div>
                    )}
                    
                    <div className="flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{user.age} years old</span>
                    </div>
                    
                    <div className="flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                      <span>{user.university}</span>
                    </div>
                  </div>
                  
                  <div className="stats bg-base-200 shadow-sm mb-6 w-full">
                    <div className="stat">
                      <div className="stat-title">Posts</div>
                      <div className="stat-value text-primary">{user.stats.posts}</div>
                    </div>
                    
                    <div className="stat">
                      <div className="stat-title">Followers</div>
                      <div className="stat-value">{user.stats.followers}</div>
                    </div>
                    
                    <div className="stat">
                      <div className="stat-title">Following</div>
                      <div className="stat-value">{user.stats.following}</div>
                    </div>
                  </div>
                  
                  {/* Skills Section */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {user.skills.map((skill, index) => (
                        <span key={index} className="badge badge-primary">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tabs and content */}
      {/* Bottom navigation for mobile */}
      <div className="btm-nav bg-base-100 border-t border-base-200 lg:hidden">
        <button className="text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="btm-nav-label">Home</span>
        </button>
        <button className="active">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="btm-nav-label">Profile</span>
        </button>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
          </svg>
          <span className="btm-nav-label">Projects</span>
        </button>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="btm-nav-label">Alerts</span>
        </button>
      </div>

      <div className="container mx-auto px-4 pb-24 lg:pb-12">
        <div className="bg-base-100 rounded-box shadow-md">
          <div className="tabs tabs-bordered">
            <button 
              className={`tab ${activeTab === 'posts' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('posts')}
            >
              Posts
            </button>
            <button 
              className={`tab ${activeTab === 'projects' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('projects')}
            >
              Projects
            </button>
            <button 
              className={`tab ${activeTab === 'activity' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('activity')}
            >
              Activity
            </button>
            <button 
              className={`tab ${activeTab === 'achievements' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('achievements')}
            >
              Achievements
            </button>
          </div>
          
          <div className="p-6">
            {activeTab === 'posts' && (
              <div>
                <div className="alert alert-info mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>What's on your mind? Share a new post with your followers.</span>
                </div>
                
                <div className="card card-bordered">
                  <div className="card-body">
                    <div className="form-control">
                      <textarea className="textarea textarea-bordered h-24" placeholder="Write your post here..."></textarea>
                    </div>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Post</button>
                    </div>
                  </div>
                </div>
                
                <div className="divider">Recent Posts</div>
                
                <div className="card card-bordered mb-4">
                  <div className="card-body">
                    <h2 className="card-title">Latest Design Exploration</h2>
                    <p>Just wrapped up a new design project exploring neomorphic UI styles for a client's dashboard.</p>
                    <div className="card-actions">
                      <div className="badge badge-outline">Design</div>
                      <div className="badge badge-outline">UI</div>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-sm opacity-70">Posted 3 days ago</span>
                      <div className="flex gap-2">
                        <button className="btn btn-circle btn-ghost btn-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                        <button className="btn btn-circle btn-ghost btn-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'projects' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map(project => (
                  <div key={project.id} className="card card-bordered bg-base-100 shadow-md">
                    <figure className="h-48 bg-gray-300 flex items-center justify-center">
                      <div className="text-gray-600">Project Image</div>
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{project.title}</h2>
                      <p>{project.description}</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-sm btn-primary">View Details</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {activeTab === 'activity' && (
              <div className="overflow-x-auto">
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th>Activity</th>
                      <th>Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentActivity.map(activity => (
                      <tr key={activity.id}>
                        <td>
                          <div className="flex items-center space-x-3">
                            {activity.type === 'post' && (
                              <div className="badge badge-info">POST</div>
                            )}
                            {activity.type === 'like' && (
                              <div className="badge badge-success">LIKE</div>
                            )}
                            {activity.type === 'comment' && (
                              <div className="badge badge-warning">COMMENT</div>
                            )}
                            <div>{activity.content}</div>
                          </div>
                        </td>
                        <td>{activity.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            
            {activeTab === 'achievements' && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Past Achievements & Recognition</h3>
                
                <div className="timeline timeline-vertical">
                  {user.achievements.map((achievement) => (
                    <div key={achievement.id} className="timeline-item">
                      <div className="timeline-middle">
                        <div className="badge badge-primary">{achievement.year}</div>
                      </div>
                      <div className="timeline-start md:text-end mb-10">
                        <div className="card bg-base-200">
                          <div className="card-body p-4">
                            <h3 className="card-title text-lg">{achievement.title}</h3>
                            <p>{achievement.description}</p>
                          </div>
                        </div>
                      </div>
                      <hr/>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-center mt-4">
                  <button className="btn btn-outline btn-sm">View All Achievements</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;