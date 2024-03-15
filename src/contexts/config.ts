import { ThemeAction } from "../types/ThemeReducer"
import { UserAction } from "../types/UserReducer"
import { ThemeReducer, themeInitialState } from "./reducers/themeReducer"
import { userInitialState, userReducer } from "./reducers/userReducer"

// Exportar todas os status iniciais
export const InitialState = {
    theme: themeInitialState,
    user: userInitialState
}

//Exportando todos os reducers
export const Reducers = (state: InitialStateType, action: ActionType) => ({
    theme: ThemeReducer(state.theme, action),
    user: userReducer(state.user, action)
})

//Exportando todos os types
export type InitialStateType = typeof InitialState
export type ActionType = ThemeAction | UserAction