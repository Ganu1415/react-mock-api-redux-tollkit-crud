import React from "react";

const Services = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Services</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Add User</h2>
          <p className="text-gray-600">Add a new user to the system.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Edit User</h2>
          <p className="text-gray-600">Edit an existing user's information.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Delete User</h2>
          <p className="text-gray-600">Delete a user from the system.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Show User</h2>
          <p className="text-gray-600">Display information about users.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
