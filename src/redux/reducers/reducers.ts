import { initialState } from "./state"
import { Action } from "../actions"
import { ActionType } from "../types/types"

export const reducer= (state=initialState, action:Action):any=> {
    switch(action.type){
        case ActionType.BANKRUPT:
        return {
        state,
        }    
         default:
      return state;
    }
    
}
export type State= ReturnType<typeof reducer>