/* import { Navigate } from 'react-router-dom' */

type Props = {
    children: JSX.Element
}

export const RequireAuth = ({ children }: Props) => {
    const isAuth = false;

    if (!isAuth) {
        return (<div>Voce nao tem permissao ver essa tela</div>);
        /* return <Navigate to={'/home'}></Navigate>; */
    }

    return children;
}