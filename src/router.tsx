import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    Navigate,
} from "react-router-dom";
import People from "./app/people/People";
import PersonDetails from "./app/people/PersonDetails";
import Planets from "./app/planets/Planets";
import PlanetsDetails from "./app/planets/PlanetDetails";
import Starships from "./app/starships/Starships";
import StarshipsDetail from "./app/starships/StarshipDetails";
import Error from "./app/error/Error";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            {/* Redirect to people */}
            <Route
                path="/"
                element={<Navigate to="/people" replace />}
                errorElement={<Error />}
            />

            {/* PEOPLE ROUTER */}
            <Route
                path="/people"
                element={<People />}
                errorElement={<Error />}
            />
            <Route
                path="/people/:id"
                element={<PersonDetails />}
                errorElement={<Error />}
            />

            {/* PLANETS ROUTER */}
            <Route
                path="/planets"
                element={<Planets />}
                errorElement={<Error />}
            />
            <Route
                path="/planets/:id"
                element={<PlanetsDetails />}
                errorElement={<Error />}
            />

            {/* STARSHIPS ROUTER */}
            <Route
                path="/starships"
                element={<Starships />}
                errorElement={<Error />}
            />
            <Route
                path="/starships/:id"
                element={<StarshipsDetail />}
                errorElement={<Error />}
            />
        </>
    )
);
