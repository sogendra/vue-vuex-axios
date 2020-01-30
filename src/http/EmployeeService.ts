import HTTP from "./httpClient";
import { AxiosResponse } from 'axios';
import { Employee } from '@/modals/Employee';

export abstract class EmployeeService {

    private static END_POINT: string = '/employees';

    static getAllEmployees(): Promise<AxiosResponse> {
        return HTTP.get<Employee[]>(this.END_POINT);
    }

    static getEmployee(id: string): Promise<AxiosResponse> {
        const url = `${this.END_POINT}/${id}`;
        return HTTP.get<Employee>(url);
    }

    static deleteEmployee(id: string): Promise<AxiosResponse> {
        let url = `${this.END_POINT}/${id}`;
        return HTTP.delete<Employee>(url);
    }

    static editEmployee(employee: Employee): Promise<AxiosResponse> {
        let url = `${this.END_POINT}/${employee.id}`;
        return HTTP.put<Employee>(url,employee);
    }

    static addEmployee(employee: Employee): Promise<AxiosResponse> {
        return HTTP.post<Employee>(this.END_POINT,employee);
    }

} 

