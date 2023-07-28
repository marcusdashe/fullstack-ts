"use client";

import React, { useState } from "react";
import { IconButton, Icon } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SchoolService, { School } from "@/app/services/api/school.service";

interface SchoolCardProps {
  fn: (e: MouseEventHandler, id: number) => void;
  school: School;
}

const SchoolCard = ({ fn, school }: SchoolCardProps) => {
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
            <EditIcon className="text-green-300 hover:text-green-700" />
          </IconButton>
          <IconButton onClick={(e) => fn(e, school.id!)}>
            <DeleteIcon className="text-red-300 hover:text-red-800" />
          </IconButton>
        </span>
      </div>
    </>
  );
};

export default SchoolCard;
