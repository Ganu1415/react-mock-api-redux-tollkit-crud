import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../features/user/userDetailSlice";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
  });
  const [genderError, setGenderError] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear the gender error when the user makes a selection
    if (name === "gender") {
      setGenderError(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.gender) {
      // If gender is not selected, set genderError to true
      setGenderError(true);
      return;
    }
    dispatch(createUser(formData));
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 className="text-2xl mb-4">Create User</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="flex text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name "
            required // Adding the required attribute
          />
        </div>
        <div className="mb-4">
          <label
            className="flex text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email "
            required // Adding the required attribute
          />
        </div>
        <div className="mb-4">
          <label
            className="flex text-gray-700 text-sm font-bold mb-2"
            htmlFor="age"
          >
            Age
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="age"
            name="age"
            type="text"
            value={formData.age}
            onChange={handleChange}
            placeholder="Age"
          />
        </div>
        <div className="mb-4">
          <label className="flex text-gray-700 text-sm font-bold mb-2">
            Gender <span className="text-red-500">*</span>
          </label>
          <div className="flex">
            <label className="inline-flex items-center">
              <input
                className="form-radio"
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
              />
              <span className="ml-2">Male</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                className="form-radio"
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
              />
              <span className="ml-2">Female</span>
            </label>
          </div>
        </div>
        {genderError && (
          <p className="text-red-500 text-xs italic">Please select a gender.</p>
        )}
        <div className="flex items-center justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create User
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
