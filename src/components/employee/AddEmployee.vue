<template>
    <div>
        <h1>Add New Employee</h1>
        <form >
            First name: <input type="text" name="FirstName" value="Mickey" v-model="employee.firstName"><br>
            Last name: <input type="text" name="LastName" value="Mouse" v-model="employee.lastName"><br>
            <button @click.prevent="addEmployee">Submit</button>
        </form>
        {{employee}}
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Employee } from '../../modals/Employee';
import { EmployeeService } from '../../http/EmployeeService';

export default Vue.extend({

    data(){
        return {
            employee: {} as Employee,
        }
    },
    methods: {
        addEmployee() {
            EmployeeService.addEmployee(this.employee)
                .then(res => {
                    console.log(res);
                    this.$router.push('./employees');
                })
        }
    }
})
</script>

<style scoped>

</style>