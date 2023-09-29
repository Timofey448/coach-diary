import { ActionTree, Commit, Dispatch } from 'vuex';
import { State } from './interfaces';
import { MutationType } from './mutations';


export enum ActionType {
    ADD_STUDENT = 'addStudent',
}

type ActionContext = { commit: Commit, dispatch: Dispatch, state: State };

export type Actions = {
    [ActionType.ADD_STUDENT](context: ActionContext, payload: any): void
}

export const actions: ActionTree<State, State> & Actions = {
    [ActionType.ADD_STUDENT]: async ({ commit }, payload) => {
        commit(MutationType.ADD_STUDENT, payload);
    }
}
