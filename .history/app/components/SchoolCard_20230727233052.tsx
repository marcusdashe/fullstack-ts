import React from "react";

type SchoolProps = {
  schoolName: string;
  schoolAddress: string;
  schoolPhoneNumber: string;
  schoolWebsite: string;
  schoolEmail: string;
  schoolLogo: string;
};
const SchoolCard = (school: SchoolProps) => {
  return (
    <>
      <div>
        <h3>{school.schoolName}</h3>
        <div>
          <small>{school.schoolAddress}</small> |{" "}
          <span>{school.schoolEmail}</span> |{" "}
          <span>{school.schoolPhoneNumber}</span>
        </div>
        <p>{school.schoolWebsite}</p>
      </div>
    </>
  );
};

export default SchoolCard;
