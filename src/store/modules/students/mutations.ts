import { MutationTree } from 'vuex';
import { State } from "./interfaces";


export enum MutationType {
    ADD_STUDENT = 'addStudent'
}

export type Mutations = {
    [MutationType.ADD_STUDENT](state: State, payload: any): Promise<void>
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationType.ADD_STUDENT]: async (state, payload) => {
        state.students = payload;
    }
}
