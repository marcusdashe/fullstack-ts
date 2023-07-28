"use client";

import React, { useState, useEffect, MouseEventHandler } from "react";
import SchoolService, { School } from "@/app/services/api/school.service";
import SchoolCard from "@/app/components/SchoolCard";

const SchoolListed: React.FC = () => {
  const [schoolArray, setSchoolArray] = useState<School[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [schoolId, setSchoolId] = useState<number>();

  const handleDelete = async (e: MouseEventHandler, id: number) => {
    try {
      const response = await SchoolService.delSchoolById(id);
      console.log(response.data);
      // Perform any additional actions or update the component state if needed
    } catch (error) {
      console.error("Error deleting school:", error);
      // Handle errors, show an error message, or take appropriate actions
    }
  };

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await SchoolService.fetchAllSchools();
        // if (response.statusText !== "ok")
        //   throw Error("Did not receive expected data");
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
  return (
    <>
      <div className="grid grid-cols-1">
        {schoolArray.length > 0 ? (
          <>
            {schoolArray.map((school: School) => (
              <SchoolCard key={school.id} fn={handleDelete} {...school} />
            ))}
          </>
        ) : (
          <>
            <p>Loading...</p>
          </>
        )}
      </div>
    </>
  );
};

export default SchoolListed;
