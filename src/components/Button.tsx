import { useContext } from "react";
import { Context } from "../contexts/Context";

export const Button = () => {
    const {state, dispatch} = useContext(Context)

    const handleClick = () => {
        if (state.theme.theme === "light") {
            dispatch({type: "CHANGE_THEME", payload: "dark"})
        } else {
            dispatch({type: "CHANGE_THEME", payload: "light"})
        }
    }

    return (
        <div>
            <h1 style={{background: state.theme.theme == "light" ? "white" : "black", color: "red"}}>o tema é {state.theme.theme} </h1>
            <button onClick={handleClick}>Change Theme</button>
        </div>
    );
}