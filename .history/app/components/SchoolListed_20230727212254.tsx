"use client";

import React, { useState, useEffect } from "react";
import SchoolService, { School } from "@/app/services/api/school.service";

const SchoolListed: React.FC = () => {
  const [schoolArray, setSchoolArray] = useState<School[]>([]);

  useEffect(() => {});
  return <div></div>;
};

export default SchoolListed;
