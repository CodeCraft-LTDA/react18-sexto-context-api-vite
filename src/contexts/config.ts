import { ThemeAction } from "../types/ThemeReducer"
import { ThemeReducer, themeInitialState } from "./reducers/themeReducer"

// Exportar todas os status iniciais
export const InitialState = {
    theme: themeInitialState
}

//Exportando todos os reducers
export const Reducers = (state: InitialStateType, action: ActionType) => ({
    theme: ThemeReducer(state.theme, action)
})

//Exportando todos os types
export type InitialStateType = typeof InitialState
export type ActionType = ThemeAction