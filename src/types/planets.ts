import { People } from "./people";

export interface Planets {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: (string | People)[];
    films: string[];
    created: string;
    edited: string;
    url: string;
}
