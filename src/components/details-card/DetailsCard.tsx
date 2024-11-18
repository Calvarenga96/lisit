import { Link } from "react-router-dom";
import DetailItem from "./DetailItem";
import DetailItemTopCards from "./DetailItemTopCards";
import { detailMapping } from "@/constants/detailMapping";
import { Planets } from "@/types/planets";
import { Starships } from "@/types/starships";
import { People } from "@/types/people";

export interface DetailsCardProps {
    data: People | Starships | Planets;
    type: "person" | "starship" | "planet";
    returnTo: string;
    backLink: string;
    title: "personaje" | "nave" | "planeta";
}

export default function DetailsCard({
    data,
    type,
    backLink,
    returnTo,
    title,
}: DetailsCardProps) {
    const details = detailMapping[type];

    const handleValue = (value: string | string[] | undefined) =>
        value || "N/A";

    const getTitle = () => `${title === "nave" ? "de la" : "del"} ${title}`;

    return (
        <div className="p-6 max-w-4xl bg-white rounded-lg shadow-2xl w-full border-2 border-gray-800">
            <header className="text-center mb-6">
                <h1 className="text-4xl font-semibold text-yellow-400">
                    {data.name}
                </h1>
                <p className="text-lg text-gray-600 mt-2">
                    Detalles {getTitle()}
                </p>
            </header>

            <DetailItemTopCards data={data} type={type} />

            <section>
                {details.map(({ label, key }) => (
                    <DetailItem
                        key={key}
                        label={label}
                        value={handleValue(data[key as keyof typeof data])}
                    />
                ))}
            </section>

            <footer className="mt-8 text-center">
                <Link to={backLink} className="text-blue-500 hover:underline">
                    Regresar a la lista de {returnTo}
                </Link>
            </footer>
        </div>
    );
}
