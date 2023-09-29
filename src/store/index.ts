import { createStore } from 'vuex';
import students from '@/store/modules/students';
import auth from '@/store/modules/auth';


export default createStore({
    modules: {
        students,
        auth
    }
})
