import http from "../../shared/services/http-common";
import type { ListIHeaderOnely } from '../interfaces/HeaderOnly';

class HeaderService {
  getAll(): Promise<any> {    
    return http.get("/Header/GetHeaderOnly");
  }

  get(id: any): Promise<any> {
    return http.get(`/header/${id}`);
  }

  create(data: any): Promise<any> {
    return http.post("/header", data);
  }

  update(id: any, data: any): Promise<any> {
    return http.put(`/header/${id}`, data);
  }

  delete(id: any): Promise<any> {
    return http.delete(`/header/${id}`);
  }

  deleteAll(): Promise<any> {
    return http.delete(`/header`);
  }

  findByTitle(title: string): Promise<any> {
    return http.get(`/header?title=${title}`);
  }
}

export default new HeaderService();