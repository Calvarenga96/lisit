import { People } from "@/types/people";
import { DetailsCardProps } from "./DetailsCard";
import { Starships } from "@/types/starships";

export default function DetailItemTopCards({
    data,
    type,
}: Omit<DetailsCardProps, "backLink" | "returnTo" | "title">) {
    const getCommonDetails = () => {
        switch (type) {
            case "person":
                return [
                    {
                        label: "Altura",
                        value: `${(data as People).height || "N/A"} cm`,
                    },
                    {
                        label: "Peso",
                        value: `${(data as People).mass || "N/A"} kg`,
                    },
                ];
            case "starship":
                return [
                    {
                        label: "Longitud",
                        value: `${(data as Starships).length || "N/A"} metros`,
                    },
                    {
                        label: "Velocidad máxima",
                        value: `${
                            (data as Starships).max_atmosphering_speed || "N/A"
                        } km/h`,
                    },
                ];
            default:
                return [];
        }
    };

    const commonDetails = getCommonDetails();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {commonDetails.map(({ label, value }) => (
                <div
                    key={label}
                    className="bg-gray-100 p-4 rounded-lg shadow-md"
                >
                    <h3 className="font-medium text-lg text-gray-700">
                        {label}
                    </h3>
                    <p className="text-xl text-gray-800">{value}</p>
                </div>
            ))}
        </div>
    );
}
