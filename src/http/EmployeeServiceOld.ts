import HTTP from "./httpClient";
import { Employee } from '@/modals/Employee';
import { AxiosResponse } from 'axios';

const END_POINT = '/employees'

export const getAllEmployee: Promise<Employee[]> = () => HTTP.get<Employee[]>(END_POINT);
