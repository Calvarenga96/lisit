import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPeople } from "@/services/people/getPeople";
import Layout from "@/components/Layout";

export default function PersonDetails() {
    const { id } = useParams(); // Obtener el ID de la URL
    const [person, setPerson] = useState<any>(null);

    useEffect(() => {
        if (id) {
            getPeople({ page: 1, searchQuery: id }).then((data) => {
                setPerson(data.results[0]); // Aquí asumimos que `id` es el nombre de la persona
            });
        }
    }, [id]);

    if (!person)
        return <div className="text-center text-gray-500">Cargando...</div>;

    return (
        <Layout>
            <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
                <div className="text-center mb-6">
                    <h1 className="text-4xl font-semibold text-yellow-400">
                        {person.name}
                    </h1>
                    <p className="text-lg text-gray-600 mt-2">
                        Detalles del personaje
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h3 className="font-medium text-lg text-gray-700">
                            Altura
                        </h3>
                        <p className="text-xl text-gray-800">
                            {person.height} cm
                        </p>
                    </div>

                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h3 className="font-medium text-lg text-gray-700">
                            Peso
                        </h3>
                        <p className="text-xl text-gray-800">
                            {person.mass} kg
                        </p>
                    </div>
                </div>

                <div className="mt-8">
                    <p className="text-lg text-gray-700">
                        Año de nacimiento: {person.birth_year}
                    </p>
                    <p className="text-lg text-gray-700">
                        Género: {person.gender}
                    </p>
                    <p className="text-lg text-gray-700">
                        Color de cabello: {person.hair_color}
                    </p>
                    <p className="text-lg text-gray-700">
                        Color de ojos: {person.eye_color}
                    </p>
                </div>

                <div className="mt-8 text-center">
                    <Link
                        to="/people"
                        className="text-blue-500 hover:underline"
                    >
                        Regresar a la lista de personas
                    </Link>
                </div>
            </div>
        </Layout>
    );
}
