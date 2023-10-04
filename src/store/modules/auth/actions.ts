import { ActionTree, Commit, Dispatch } from 'vuex';
import { MutationType } from './mutations';
import { State } from './interfaces';
import { router } from '@/router';
import { ROUTE_NAMES } from '@/constants';
import {default as createUser, login} from '@/api/auth';


export enum ActionType {
    SIGN_IN = 'signIn',
    SIGN_UP = 'signUp',
    SIGN_OUT = 'signOut'
}

type ActionContext = { commit: Commit, dispatch: Dispatch, state: State }; 

export type Actions = {
    [ActionType.SIGN_IN](context: ActionContext, payload: any): void
}

export const actions: ActionTree<State, State> & Actions = {
    [ActionType.SIGN_IN]: async ({ commit }, payload) => {
        payload.name = login(payload).firstName;

        if (login(payload).role == 'coach') {
            commit(MutationType.SETUP_USER, payload);
            router.push(ROUTE_NAMES.COACH);
        } else if (login(payload).role == 'student') {             
            commit(MutationType.SETUP_USER, payload);
            router.push(ROUTE_NAMES.MENTEE);
        }
    },

    [ActionType.SIGN_UP]: async ({ commit }, payload) => {
        createUser(payload);

        if (payload.role == 'coach') {
            commit(MutationType.SETUP_USER, payload);
            router.push(ROUTE_NAMES.COACH);
        } else if (payload.role == 'student') {             
            commit(MutationType.SETUP_USER, payload);
            router.push(ROUTE_NAMES.COACH.MENTEE);
        } 
    },

    [ActionType.SIGN_OUT]: async ({ commit }) => {
        commit(MutationType.CLEANUP_USER);
    }
}
