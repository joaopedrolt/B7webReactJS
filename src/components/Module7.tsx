import { Link } from "react-router-dom";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";

export const Module7 = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    return (
        <>
            <div> Elemento no path /modulo7</div>
            <button onClick={handleClick}>Home</button>
        </>
    );

}

export const Home = () => {

    return (
        <>
            <div>Elemento no path /</div>
            <ul>
                <li><Link to={"/modulo7"}>Modulo7</Link></li>
            </ul>
        </>
    );

}

export const Slug = () => {

    const params = useParams();

    return (
        <div>Slug passsada na rota = {params.slug}</div>
    );

}

export const NotFound = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    }

    return (
        <>
            <div>/404 - Nao encontrado ou sem permissao para visualizar</div>
            <button onClick={handleClick}>Voltar</button>
        </>
    );
}

export const QuerryString = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <>
            <div>Querry String Senha</div>
            <div>{searchParams.get('pass')}</div>
            <button>Voltar</button>
        </>
    );
}

export const Dashboard = () => {
    return (
        <div>Voce tem permissao para ver essa tela</div>
    );
}

export const RouteHook = () => {
    return (
        <div>Renderizado pelo hook de rotas</div>
    );
}