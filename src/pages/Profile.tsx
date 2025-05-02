import React, { useState } from 'react';

interface UserStats {
  friends: number;
  jobs: number;
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
}

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('posts');
  
  // Mock user data - in a real app, this would come from an API or context
  const user: UserDetails = {
    name: "Raymond Z",
    username: "@stingray",
    bio: "Broke but talented finalist. I can DJ, bartend, cook, fix bikes, and lift heavy boxes.",
    occupation: "Undergrad student & side hussle king",
    location: "London, UK",
    avatar: "/raymond_profile.jpg", // Using the provided image
    coverPhoto: "/images/cover.jpg", // You'd use a real image path
    stats: {
      friends: 23,
      jobs: 4
    },
    age: 22,
    university: "Oxford University - Bachelor of Arts",
    skills: ["🎧 DJ", "🍸 Bartending", "👨‍🍳 Cooking (for girls only)", "🔧 Bike Fixing", "💪 Moving heavy boxes (I gym)", "📸 Wannabe Model"]
  };
  
  // Updated activity data - more casual and authentic
  const recentActivity = [
    { id: 1, type: 'post', content: 'Mid term break next week, hmp for any odd jobs!', time: '2 hours ago' },
    { id: 2, type: 'job', content: 'Bartending at The Alchemist. Come through for free drinks', time: '4 hours ago' },
    { id: 3, type: 'post', content: 'Ripped my trousers, anyone know how to sew?', time: '1 day ago' },
    { id: 4, type: 'project', content: 'DJ for Anime Society presidents drinks ', time: '3 days ago' },
    { id: 5, type: 'project', content: 'Jimmy bike repair - bike seat coming off', time: '2 weeks ago' }
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
                    <div className="mt-2 flex gap-4">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-lg">{user.stats.friends}</span>
                        <span className="text-sm opacity-70">Friends</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-lg text-primary">{user.stats.jobs}</span>
                        <span className="text-sm opacity-70">Jobs</span>
                      </div>
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
      


      <div className="container mx-auto px-4 pb-24 lg:pb-12">
        <div className="bg-base-100 rounded-box shadow-md">
          <div className="tabs tabs-bordered w-full">
            <button 
              className={`tab flex-1 ${activeTab === 'posts' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('posts')}
            >
              Posts
            </button>
            <button 
              className={`tab flex-1 ${activeTab === 'activity' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('activity')}
            >
              Activity
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
                    <div className="card-actions justify-between items-center mt-4">
                      <div className="flex gap-2">
                        <button className="btn btn-ghost btn-circle btn-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </button>
                        <button className="btn btn-ghost btn-circle btn-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </button>
                      </div>
                      <button className="btn btn-primary">Post</button>
                    </div>
                  </div>
                </div>
                
                <div className="divider">Recent Posts</div>
                
                {recentActivity
                  .filter(activity => activity.type === 'post')
                  .map(post => (
                    <div key={post.id} className="card card-bordered mb-4">
                      <div className="card-body">
                        <p className="text-lg">{post.content}</p>
                        <div className="flex justify-between items-center mt-4">
                          <span className="text-sm opacity-70">{post.time}</span>
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
                            {(activity.type === 'job' || activity.type === 'project') && (
                              <div className="badge badge-primary">GIG</div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;