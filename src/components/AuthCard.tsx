import { useContext } from "react";
import { Context } from "../contexts/Context";

export const AuthCard = () => {
    const { state: {user: {user}}, dispatch } = useContext(Context);

    const handleSignIn = () => 
        dispatch({
            type: "SIGNIN",
            payload: {
                user: {
                    id: 1,
                    name: "Sidnei de Souza Junior"
                }
            }
        });
    

    const handleSignOut = () =>
        dispatch({
            type: "SIGNOUT"
        });

    return (
        <div>
            {user ? 
                <>
                    <div>
                        id: {user.id} <br />
                        name: {user.name}
                    </div>

                    <button onClick={handleSignOut}>Deslogar</button>
                </>
                :
                <>
                    <button onClick={handleSignIn}>Fazer Login</button>
                </>
            }
        </div>
    )
}