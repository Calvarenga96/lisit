import { useStarshipDetails } from "@/hooks/starships/useStashipDetails";
import ResourceDetails from "@/components/ResourceDetails";

export default function StarshipDetails() {
    return (
        <ResourceDetails
            useResourceDetails={useStarshipDetails}
            type="starship"
            backLink="/starships"
            returnTo="naves"
            title="nave"
        />
    );
}
