"use client";

import { useState } from "react";
import SchoolService, { School } from "../services/api/school.service";

const RegisterSchoolPage: React.FC = () => {
  const initialFormData: School = {
    schoolName: "",
    schoolAddress: "",
    schoolPhoneNumber: "",
    schoolWebsite: "",
    schoolEmail: "",
    schoolLogo: "",
  };

  const [formData, setFormData] = useState<School>(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await SchoolService.registerSchool(formData);

      console.log("School registered successfully");
      setFormData(initialFormData);
    } catch (error) {
      console.error("Error registering school:", error);
    }
  };

  return (
    <div className="container mx-auto py-10 px-4 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8 px-0 text-blue-900">
        Register a School
      </h1>

      {/* <form onSubmit={handleSubmit}>
        <label>
          School Name:
          <input
            type="text"
            name="school"
            value={formData.schoolName}
            onChange={handleChange}
          />
        </label>
        <button
          type="submit"
          className="border-2 bg-green-300 rounded p-2 w-[200px]  "
        >
          Register School
        </button>
      </form> */}

      <form
        className="max-1/2 mx-auto p-6 shadow-md rounded-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="schoolName"
          >
            School Name
          </label>
          <input
            type="text"
            id="schoolName"
            name="schoolName"
            value={formData.schoolName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="schoolAddress"
          >
            School Address
          </label>
          <input
            type="text"
            id="schoolAddress"
            name="schoolAddress"
            value={formData.schoolAddress}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="schoolPhoneNumber"
          >
            School Phone Number
          </label>
          <input
            type="text"
            id="schoolPhoneNumber"
            name="schoolPhoneNumber"
            value={formData.schoolPhoneNumber}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="schoolWebsite"
          >
            School Website
          </label>
          <input
            type="text"
            id="schoolWebsite"
            name="schoolWebsite"
            value={formData.schoolWebsite}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="schoolEmail"
          >
            School Email
          </label>
          <input
            type="email"
            id="schoolEmail"
            name="schoolEmail"
            value={formData.schoolEmail}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="schoolLogo"
          >
            School Logo URL
          </label>
          <input
            type="text"
            id="schoolLogo"
            name="schoolLogo"
            value={formData.schoolLogo}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-green-300 p-2 w-[200px] text-black font-semibold rounded-lg hover:bg-green-900 hover:text-white duration-500 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterSchoolPage;
