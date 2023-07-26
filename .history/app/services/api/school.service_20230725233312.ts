import axios from "axios";
import config from "../config";

interface School {
  schoolName: string;
  schoolAddress: string;
  schoolPhoneNumber: string;
  schoolWebsite: string;
  schoolEmail: string;
  schoolLogo: string;
}

class SchoolService {
  static readonly API_URL = config.API_BASE_URL;

  registerSchool(school: School) {}

  fetchAllSchools() {}

  fetchSchoolById(id: number) {}

  updateSchool(school: School, id: number) {}

  delSchoolById(id: number) {}

  fetchSchoolByName(schoolName: string) {}

  fetchSchoolByPhoneNumber(phoneNumber: string) {}

  fetchSchoolByWebsite(schoolWebsite: string) {}

  fetchSchoolByEmail(email: string) {}
}

export default new SchoolService();
