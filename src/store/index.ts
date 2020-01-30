import Vue from 'vue';
import Vuex from 'vuex';
import { Employee } from '@/modals/Employee';
import { EmployeeService } from "@/http/EmployeeService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    employees: [] as Employee[],
    employee: {} as Employee,
  },
  
  mutations: {
    setEmployees(state, payload) {
      console.log("mutations payload",payload);
      state.employees = payload;
      console.log("mutations state.employees",state.employees);
    },
    setEmployee(state,payload) {
      console.log("mutations payload",payload);
      state.employee = payload;
      console.log("mutations state.employee",state.employee);
    }
  },
  actions: {
    getAllemployees({commit }): void {
      EmployeeService.getAllEmployees()
        .then(res => {
          console.log("res in vuex action",res);
          commit('setEmployees',res.data)
      })
    },
    getEmployeeById({commit},payload){
      EmployeeService.getEmployee(payload)
        .then(res => {
          console.log("res in vuex action",res);
          commit('setEmployee', res.data);
        })
    },
    deleteEmployeeX({dispatch}, payload){
      console.log('deleteEmployeeX',payload);
      EmployeeService.deleteEmployee(payload)
        .then(res => {
          console.log("res",res);
          dispatch('getAllemployees');
        })
    }
  },
  modules: {
  },
});
