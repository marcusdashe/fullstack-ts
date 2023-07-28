import React from "react";
import { School } from "@/app/services/api/school.service";

const SchoolCard = (school: School) => {
  return (
    <>
      <div className="mb-8">
        <h3 className="text-2xl font-bold">{school.schoolName}</h3>
        <div>
          <small>{school.schoolAddress}</small> |{" "}
          <span>{school.schoolEmail}</span> |{" "}
          <span>{school.schoolPhoneNumber}</span>
        </div>
        <p className="text-blue-300">{school.schoolWebsite}</p>
      </div>
    </>
  );
};

export default SchoolCard;
