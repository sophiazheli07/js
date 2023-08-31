import { store } from "./store";

export interface ReduxActionInterface {
    type: string;
    payload: any;
}

export type ReduxStoreType = typeof store;