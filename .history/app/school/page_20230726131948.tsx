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
};
