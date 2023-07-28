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
        <a
          href={school.schoolWebsite}
          target="_blank"
          className="text-blue-600"
        >
          {school.schoolWebsite}
        </a>
      </div>
    </>
  );
};

export default SchoolCard;
