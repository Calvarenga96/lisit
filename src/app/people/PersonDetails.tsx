import { usePersonDetails } from "@/hooks/people/usePersonDetails";
import ResourceDetails from "@/components/ResourceDetails";

export default function PersonDetails() {
    return (
        <ResourceDetails
            useResourceDetails={usePersonDetails}
            type="person"
            backLink="/people"
            returnTo="personas"
            title="personaje"
        />
    );
}
