import { Link } from "react-router-dom";

interface DetailItemProps {
    label: string;
    value: string;
}

interface DetailsCardProps {
    data: {
        name: string;
        height?: string;
        mass?: string;
        birth_year?: string;
        gender?: string;
        hair_color?: string;
        eye_color?: string;
        model?: string;
        manufacturer?: string;
        cost_in_credits?: string;
        length?: string;
        starship_class?: string;
        [key: string]: string | undefined;
    };
    type: "person" | "starship";
}

export default function DetailsCard({ data, type }: DetailsCardProps) {
    return (
        <div className="p-6 max-w-4xl bg-white rounded-lg shadow-2xl w-full border-2 border-gray-800">
            <div className="text-center mb-6 w-full">
                <h1 className="text-4xl font-semibold text-yellow-400">
                    {data.name}
                </h1>
                <p className="text-lg text-gray-600 mt-2">
                    {type === "person"
                        ? "Detalles del personaje"
                        : "Detalles de la nave"}
                </p>
            </div>

            <DetailItemCard data={data} type={type} />

            {type === "person" && (
                <>
                    <DetailItem
                        label="Año de nacimiento"
                        value={data.birth_year || "N/A"}
                    />
                    <DetailItem label="Género" value={data.gender || "N/A"} />
                    <DetailItem
                        label="Color de cabello"
                        value={data.hair_color || "N/A"}
                    />
                    <DetailItem
                        label="Color de ojos"
                        value={data.eye_color || "N/A"}
                    />
                </>
            )}

            {type === "starship" && (
                <>
                    <DetailItem label="Modelo" value={data.model || "N/A"} />
                    <DetailItem
                        label="Fabricante"
                        value={data.manufacturer || "N/A"}
                    />
                    <DetailItem
                        label="Costo en créditos"
                        value={data.cost_in_credits || "N/A"}
                    />
                    <DetailItem label="Longitud" value={data.length || "N/A"} />
                    <DetailItem
                        label="Clase"
                        value={data.starship_class || "N/A"}
                    />
                </>
            )}

            <div className="mt-8 text-center w-full">
                <Link
                    to={`/${type === "person" ? "people" : "starships"}`}
                    className="text-blue-500 hover:underline"
                >
                    Regresar a la lista de{" "}
                    {type === "person" ? "personas" : "naves"}
                </Link>
            </div>
        </div>
    );
}

function DetailItem({ label, value }: DetailItemProps) {
    return (
        <p className="text-lg text-gray-700">
            <strong>{label}:</strong> {value}
        </p>
    );
}

function DetailItemCard({ data, type }: DetailsCardProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {type === "person" && (
                <>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h3 className="font-medium text-lg text-gray-700">
                            Altura
                        </h3>
                        <p className="text-xl text-gray-800">
                            {data?.height} cm
                        </p>
                    </div>

                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h3 className="font-medium text-lg text-gray-700">
                            Peso
                        </h3>
                        <p className="text-xl text-gray-800">{data?.mass} kg</p>
                    </div>
                </>
            )}

            {type === "starship" && (
                <>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h3 className="font-medium text-lg text-gray-700">
                            Longitud
                        </h3>
                        <p className="text-xl text-gray-800">
                            {data?.length} metros
                        </p>
                    </div>

                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h3 className="font-medium text-lg text-gray-700">
                            Velocidad máxima
                        </h3>
                        <p className="text-xl text-gray-800">
                            {data?.max_atmosphering_speed} km/h
                        </p>
                    </div>
                </>
            )}
        </div>
    );
}
