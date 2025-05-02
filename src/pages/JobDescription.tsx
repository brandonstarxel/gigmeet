import React from 'react';

interface JobDetail {
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  postedDate: string;
  deadline: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

const JobDescription: React.FC = () => {
  // Sample job data - in a real application, this would come from an API or props
  const jobData: JobDetail = {
    title: "DJ Needed - Mia's Birthday Party",
    company: "Parties and",
    location: "London, UK",
    type: "One-time gig",
    salary: "£12/hour",
    postedDate: "April 25, 2025",
    deadline: "May 30, 2025",
    description: "Seeking an experienced DJ to play my 23rd birthday party!! Especially into hip hop and afrobeats music. You can stay at the party afterwards and hang out :)",
    responsibilities: [
      "Play music from 10pm until 2am",
      "No drinking on the job!"
    ],
    requirements: [
      "Nothing, just good vibes",
      "Would be a bit better if you've DJ'd at similar events before"
    ],
    benefits: [
      "Free food and drinks during the event",
    ]
  };

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="card bg-base-100 shadow-xl mb-8">
          <div className="card-body">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h1 className="text-3xl font-bold text-primary">{jobData.title}</h1>
                <p className="text-lg mt-2">{jobData.company}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="badge badge-outline">{jobData.location}</span>
                  <span className="badge badge-outline">{jobData.type}</span>
                  <span className="badge badge-outline">{jobData.salary}</span>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <button className="btn btn-primary">Apply Now</button>
              </div>
            </div>
          </div>
        </div>

        {/* Job Details Section */}
        <div className="card bg-base-100 shadow-xl mb-8">
          <div className="card-body">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">Job Overview</h2>
                <div className="overflow-x-auto">
                  <table className="table table-zebra w-full">
                    <tbody>
                      <tr>
                        <td className="font-medium">Posted Date</td>
                        <td>{jobData.postedDate}</td>
                      </tr>
                      <tr>
                        <td className="font-medium">Deadline</td>
                        <td>{jobData.deadline}</td>
                      </tr>
                      <tr>
                        <td className="font-medium">Job Type</td>
                        <td>{jobData.type}</td>
                      </tr>
                      <tr>
                        <td className="font-medium">Location</td>
                        <td>{jobData.location}</td>
                      </tr>
                      <tr>
                        <td className="font-medium">Salary</td>
                        <td>{jobData.salary}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Employer</h2>
                <div className="flex items-center mb-4">
                  <div className="avatar placeholder mr-4">
                    <div className="bg-neutral text-neutral-content rounded-full w-16">
                      <span className="text-xl">TS</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold">{jobData.company}</h3>
                    <p className="text-sm">Student • 22 years old</p>
                  </div>
                </div>
                <p className="text-sm">
                  Mia W is studying Architecture at UCL. She loves running, dogs, and going to concerts.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="card bg-base-100 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">Job Description</h2>
            <p className="mb-6">{jobData.description}</p>

            <h3 className="text-xl font-semibold mb-3">Key Responsibilities</h3>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              {jobData.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mb-3">Requirements</h3>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              {jobData.requirements.map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mb-3">Benefits</h3>
            <ul className="list-disc pl-5 space-y-2">
              {jobData.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Application Section */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn btn-primary">Apply for this position</button>
              <button className="btn btn-outline">Save for later</button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm opacity-70">
          <p>© 2025 GigMeet Solutions. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;

