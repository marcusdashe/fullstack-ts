import React from "react";
import { School } from "@/app/services/api/school.service";
import { IconButton, Icon } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const SchoolCard = (school: School) => {
  return (
    <>
      <div className="mb-8 flex flex-col">
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
        <span>
          <IconButton
            color="primary"
            className="w-max-content"
            onClick={() => {}}
          >
            <EditIcon className="text-black" />
          </IconButton>
          <IconButton onClick={() => {}}>
            <DeleteIcon className="text-red-400" />
          </IconButton>
        </span>
      </div>
    </>
  );
};

export default SchoolCard;
