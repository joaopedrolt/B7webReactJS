import { Route, Routes } from "react-router-dom";

import { RequireAuth } from "../RequireAuth";
import * as Module7 from "../components/Module7";

export const RoutesList = () => {
    return (
        <Routes>
            <Route path="/modulo7" element={<Module7.Module7 />} />
            <Route path="/" element={<Module7.Home />} />
            <Route path="*" element={<Module7.NotFound />} />
            <Route path="/user/:slug" element={<Module7.Slug />} />
            <Route path="/user" element={<Module7.QuerryString />} />
            <Route path="/dashboard" element={
                <RequireAuth>
                    <Module7.Dashboard />
                </RequireAuth>
            } />
        </Routes>
    );
}