import { isValidElement } from "react";
import ResidentLink from "./ResidentLink";

interface Resident {
    name: string;
}

interface DetailItemProps {
    label: string;
    value: string | JSX.Element | (string | JSX.Element | Resident)[];
}

const RenderListItem = (
    item: string | JSX.Element | Resident,
    index: number
) => {
    if (typeof item === "string" || isValidElement(item)) {
        return <span key={index}>{item}</span>;
    } else if ("name" in item) {
        return <ResidentLink key={index} name={item.name} />;
    }
    return null;
};

const RenderValue = ({
    value,
    isResidentLabel,
}: {
    value: DetailItemProps["value"];
    isResidentLabel: boolean;
}) => {
    if (Array.isArray(value)) {
        return (
            <div
                className={
                    isResidentLabel
                        ? "grid grid-cols-2 md:grid-cols-4 gap-5 justify-items-center mt-2"
                        : ""
                }
            >
                {value.map((item, index) => RenderListItem(item, index))}
            </div>
        );
    }

    return typeof value === "string" || isValidElement(value) ? (
        <span className="text-white text-sm text-right">{value}</span>
    ) : null;
};

const DetailItem = ({ label, value }: DetailItemProps) => {
    const isResidentLabel = label === "Residentes";

    return (
        <div
            className={`flex gap-2 my-4 ${
                isResidentLabel ? "flex-col" : "justify-between items-center"
            }`}
        >
            <strong
                className={`text-white ${isResidentLabel ? "text-center" : ""}`}
            >
                {label}
                {!isResidentLabel && ":"}
            </strong>

            <RenderValue value={value} isResidentLabel={isResidentLabel} />
        </div>
    );
};

export default DetailItem;
