//Inicial State
export type ThemeState = {
    theme: "light" | "dark"
}

//Actions
type ChangeTheme = {
    type: "CHANGE_THEME"
    payload: ThemeState["theme"]
}

//Exportar todas actions
export type ThemeAction = ChangeTheme 