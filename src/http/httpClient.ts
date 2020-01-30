import axios from 'axios';

// Vue.use({
//     install(){
//         Vue.prototype.$axios = axios.create({
//             baseURL: 'http://localhost:3000',
//         });
//     },
// });

// declare module 'vue/types/vue' {
//     interface Vue {
//         $axios: AxiosStatic;
//     }
// }

const HTTP = axios.create({
    baseURL: 'http://localhost:3000',
});

export default HTTP;




