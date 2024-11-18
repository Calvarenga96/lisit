import { isValidElement } from "react";
import ResidentLink from "./ResidentLink";

interface Resident {
    name: string;
}

interface DetailItemProps {
    label: string;
    value: string | string[] | JSX.Element | JSX.Element[] | Resident[];
}

export default function DetailItem({ label, value }: DetailItemProps) {
    const renderResidents = (value: any) => {
        if (Array.isArray(value)) {
            return value.map((item, index) => {
                if (
                    typeof item !== "string" &&
                    !isValidElement(item) &&
                    "name" in item
                ) {
                    return <ResidentLink key={index} name={item.name} />;
                }
                return <span key={index}>{item}</span>;
            });
        }
        return <span>{value}</span>;
    };

    return (
        <div className="mb-4">
            <strong>{label}:</strong>
            {label === "Residentes" ? (
                <div className="mt-2">{renderResidents(value)}</div>
            ) : (
                <span className="text-lg text-gray-700 ml-2">
                    {renderResidents(value)}
                </span>
            )}
        </div>
    );
}
