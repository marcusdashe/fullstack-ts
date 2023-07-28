import axios, { AxiosResponse } from "axios";
import config from "../config";

export interface School {
  id: number;
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
      "/schools/create",
      school
    );
    return response;
  }

  async fetchAllSchools(): Promise<AxiosResponse<School[]>> {
    const response = await SchoolService.client.get<School[]>("/schools/all");
    return response;
  }

  async fetchSchoolById(id: number): Promise<AxiosResponse<School>> {
    const response = await SchoolService.client.get<School>(`/school/${id}`);
    return response;
  }

  async updateSchool6(
    school: School,
    id: number
  ): Promise<AxiosResponse<School>> {
    const response = await SchoolService.client.put<School>(
      `/schools/${id}`,
      school
    );
    return response;
  }

  async delSchoolById(id: number): Promise<AxiosResponse<void>> {
    const response = await SchoolService.client.delete<void>(`/schools/${id}`);
    return response;
  }

  async fetchSchoolByName(schoolName: string): Promise<AxiosResponse<School>> {
    const response = await SchoolService.client.get<School>(
      `/schools/byName/${schoolName}`
    );
    return response;
  }

  async fetchSchoolByPhoneNumber(
    phoneNumber: string
  ): Promise<AxiosResponse<School>> {
    const response = await SchoolService.client.get<School>(
      `/schools/byPhoneNumber/${phoneNumber}`
    );
    return response;
  }

  async fetchSchoolByWebsite(
    schoolWebsite: string
  ): Promise<AxiosResponse<School>> {
    const response = await SchoolService.client.get<School>(
      `/schools/byWebsite/${schoolWebsite}`
    );
    return response;
  }

  async fetchSchoolByEmail(email: string): Promise<AxiosResponse<School>> {
    const response = await SchoolService.client.get<School>(
      `/schools/byEmail/${email}`
    );
    return response;
  }
}

export default new SchoolService();
