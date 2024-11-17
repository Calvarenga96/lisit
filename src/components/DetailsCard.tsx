import { Link } from "react-router-dom";

interface DetailsCardProps {
    person: {
        name: string;
        height: string;
        mass: string;
        birth_year: string;
        gender: string;
        hair_color: string;
        eye_color: string;
    };
}

export default function DetailsCard({ person }: DetailsCardProps) {
    return (
        <div className="p-6 max-w-4xl bg-white rounded-lg shadow-2xl w-full border-2 border-gray-800">
            <div className="text-center mb-6 w-full">
                <h1 className="text-4xl font-semibold text-yellow-400">
                    {person.name}
                </h1>
                <p className="text-lg text-gray-600 mt-2">
                    Detalles del personaje
                </p>
            </div>

            <DetailItemCard person={person} />

            <div className="mt-8 w-full">
                <DetailItem
                    label="Año de nacimiento"
                    value={person.birth_year}
                />
                <DetailItem label="Género" value={person.gender} />
                <DetailItem
                    label="Color de cabello"
                    value={person.hair_color}
                />
                <DetailItem label="Color de ojos" value={person.eye_color} />
            </div>

            <div className="mt-8 text-center w-full">
                <Link to="/people" className="text-blue-500 hover:underline">
                    Regresar a la lista de personas
                </Link>
            </div>
        </div>
    );
}

function DetailItemCard({ person }: DetailsCardProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <h3 className="font-medium text-lg text-gray-700">Altura</h3>
                <p className="text-xl text-gray-800">{person?.height} cm</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <h3 className="font-medium text-lg text-gray-700">Peso</h3>
                <p className="text-xl text-gray-800">{person?.mass} kg</p>
            </div>
        </div>
    );
}

function DetailItem({ label, value }: { label: string; value: string }) {
    return (
        <p className="text-lg text-gray-700">
            <strong>{label}:</strong> {value}
        </p>
    );
}
