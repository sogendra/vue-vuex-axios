<template>
    <div>
        <h1>Edit Employee</h1>
        <form >
            First name: <input type="text" name="FirstName" value="Mickey" v-model="employee.firstName"><br>
            Last name: <input type="text" name="LastName" value="Mouse" v-model="employee.lastName"><br>
            <button @click.prevent="updateEmployee">Submit</button>
        </form>
        {{employee}}
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Employee } from '../../modals/Employee'
import { EmployeeService } from "@/http/EmployeeService";
import { mapActions, mapState } from "vuex";

export default Vue.extend({
    data() {
        return {
            // employee: {} as Employee,
        }
    },
    mounted() {
        // this.getEmployee(this.$route.params.id);
        this.getEmployeeById(this.$route.params.id);
    },
    methods: {
        ...mapActions(['getEmployeeById']),

        getEmployee(id: string){
            EmployeeService.getEmployee(id)
                .then(res => {
                    this.employee = res.data;
                });
        },
        updateEmployee(){
            EmployeeService.editEmployee(this.employee)
                .then(res => {
                    console.log("updated", res);
                    this.$router.push('/employees');
                });
        }
    },
    computed: {
        ...mapState(['employee'])
    }
})
</script>

<style>

</style>