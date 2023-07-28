"use client";

import React, { useState, useEffect } from "react";
import SchoolService, { School } from "@/app/services/api/school.service";

const SchoolListed: React.FC = () => {
  const [schoolArray, setSchoolArray] = useState<School[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await SchoolService.fetchAllSchools();
        if (response.statusText !== "ok")
          throw Error("Did not receive expected data");
        console.log(response.data);
        setSchoolArray(response.data);
      } catch (error: any) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    setTimeout(() => {
      (async () => await fetchSchools())();
    }, 2000);
  }, []);
  return <div></div>;
};

export default SchoolListed;
