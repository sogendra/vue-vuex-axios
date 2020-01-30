<template>
    <div>
        <h1>Employee Detail</h1>
        <p>Name: {{ employee.firstName }} {{ employee.lastName }}</p> 
        <p>Contact No: {{ employee.phone }} </p> 
        <p>Email: {{ employee.email }}</p> 
        <router-link
            :to="{name:'employeeList'}" 
            tag="button"   
            >
            Back
        </router-link> 
        <router-link 
            :to="{name: 'editEmployee', params: {id: employee.id}}" 
            tag="button"
            >
            Edit
        </router-link>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { EmployeeService } from "@/http/EmployeeService";
import { Employee } from '../../modals/Employee';

export default Vue.extend({
    data() {
        return {
            employee: {} as Employee,
        }
    },
    mounted() {
        this.getEmployee(this.$route.params.id);
    },
    methods: {
        getEmployee(id: string) {
            EmployeeService.getEmployee(id)
                .then(res => {
                    this.employee = res.data;
                })
        }
    }
})
</script>

<style>

</style>