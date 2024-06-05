import React from "react";

const About = () => {
  const data = {
    description:
      "We are a team of dedicated professionals committed to delivering top-notch services.",
    team: [
      {
        id: 1,
        name: "John Doe",
        role: "CEO",
        bio: "John is a seasoned executive with over 20 years of experience in the industry.",
      },
      {
        id: 2,
        name: "Jane Smith",
        role: "CTO",
        bio: "Jane is a technology visionary, leading our tech team to new heights.",
      },
      {
        id: 3,
        name: "Sara Wilson",
        role: "CFO",
        bio: "Sara oversees all financial aspects of the company, ensuring our fiscal health.",
      },
      {
        id: 4,
        name: "Michael Brown",
        role: "COO",
        bio: "Michael ensures our operations run smoothly and efficiently.",
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-4">About Us</h1>
      <p className="text-lg text-gray-700 text-center mb-8">
        {data.description}
      </p>
      <h5 className="text-lg text-gray-700 text-center mb-4">
        Note: (The data below is dummy).
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.team.map((member) => (
          <div key={member.id} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">{member.name}</h2>
            <p className="text-gray-600">{member.role}</p>
            <p className="mt-4">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
