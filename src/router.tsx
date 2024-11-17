import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    Navigate,
} from "react-router-dom";
import People from "./app/people/People";
import Planets from "./app/planets/Planets";
import Starships from "./app/starships/Starships";
import Error from "./app/error/Error";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route
                path="/"
                element={<Navigate to="/people" replace />}
                errorElement={<Error />}
            />
            <Route
                path="/people"
                element={<People />}
                errorElement={<Error />}
            />
            <Route
                path="/planets"
                element={<Planets />}
                errorElement={<Error />}
            />
            <Route
                path="/starships"
                element={<Starships />}
                errorElement={<Error />}
            />
        </>
    )
);
