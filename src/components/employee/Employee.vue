<template>
    <div>
        <h2>Employees</h2>
        <table v-if="employees && employees.length">
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact No</th>
            <th>Actions</th>
        </tr>
        <tr v-for="employee of employees" :key="employee.id" >
            <td>
                <router-link 
                    :to="{name: 'employeeDetail', params: {id: employee.id}}"
                    tag="a"
                    >
                {{ employee.firstName }} {{ employee.lastName }}
                </router-link> 
                
            </td>
            <td>{{ employee.email }}</td>
            <td>{{ employee.phone }}</td>
            <td>
                <router-link :to="{ name: 'editEmployee', params: { id: employee.id }}" tag="button">Edit</router-link> |
                <button @click="deleteEmployeeX(employee.id)">Delete</button>
            </td>
        </tr>
        </table>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { EmployeeService } from '../../http/EmployeeService'
import { Employee } from '@/modals/Employee';
import { mapActions, mapState } from "vuex";

export default Vue.extend({

    data() {
        return {
            
           
        }
    },

    mounted() {
        this.getAllemployees();
    },

    methods: {
         ...mapActions(['getAllemployees','deleteEmployeeX']),
         getAllEmployee(): void  {
             EmployeeService.getAllEmployees()
            .then(res => {
                console.log("res",res);
                this.employees = res.data;
                console.log(this.employees);
            });
        },
        deleteEmployee(id: string){
            EmployeeService.deleteEmployee(id)
                .then(res => {
                    console.log("Deleted",res);
                    this.getAllEmployee();
                });
        }
    },
    computed: {
        ...mapState(['employees'])
    }
    
})
</script>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>