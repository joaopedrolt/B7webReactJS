import { RouteHook } from "../components/Module7";
import { useRoutes } from "react-router-dom";

export const UseRoutesHook = () => {
    return useRoutes([{ path: "/hook" , element: <RouteHook></RouteHook>}])
}