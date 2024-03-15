type User = {
    id: number,
    name: string,
}

//Initial State
export type UserState = {
    user: User | null
}

//Action
type SignInUser = {
    type: "SIGNIN",
    payload: {user : User}
}

type SignOutUser = {
    type: "SIGNOUT"
}

//Exporta all Actions
export type UserAction = SignInUser | SignOutUser