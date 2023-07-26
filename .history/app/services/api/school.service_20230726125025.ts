import axios, { AxiosResponse } from "axios";
import config from "../config";

export interface School {
  schoolName: string;
  schoolAddress: string;
  schoolPhoneNumber: string;
  schoolWebsite: string;
  schoolEmail: string;
  schoolLogo: string;
}
const API_URL: string = config.API_BASE_URL;

class SchoolService {
  static client = axios.create({
    baseURL: API_URL,
  });

  async registerSchool(school: School): Promise<AxiosResponse<School>> {
    const response = await SchoolService.client.post<School>(
      "/schools",
      school
    );
    return response;
  }

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
