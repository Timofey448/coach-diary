import { MutationTree } from 'vuex';
import { State } from './interfaces';


export enum MutationType {
    SETUP_USER = 'setupUser',
    CLEANUP_USER = 'cleanupUser'
}

export type Mutations = {
   [MutationType.SETUP_USER](state: State, payload: any): Promise<void> 
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationType.SETUP_USER]: async (state, payload) => {
        state.email = payload.email;
        state.password = payload.password;   
        state.name = payload.name;
    },
    [MutationType.CLEANUP_USER]: async (state) => {
        state.email = '';
        state.name = '';
        state.password = '';
        localStorage.removeItem('currentUser');
    },
}
