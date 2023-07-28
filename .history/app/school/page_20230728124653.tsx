"use client";

import { useState } from "react";
import SchoolService, { School } from "../services/api/school.service";

const RegisterSchoolPage: React.FC = () => {
  const initialFormData: School = {
    schoolName: "Zang Commercial Secondary School",
    schoolAddress: "Bukuru Road Opposite Tetengi Estate",
    schoolPhoneNumber: "08034477604",
    schoolWebsite: "www.zangcommercial.com",
    schoolEmail: "contact@zangcommercial.com",
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
    <div>
      <h1>Register a School</h1>

      <form onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
};

export default RegisterSchoolPage;
