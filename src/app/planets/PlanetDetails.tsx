import { usePlanetDetails } from "@/hooks/planets/usePlanetDetails";
import ResourceDetails from "@/components/ResourceDetails";

export default function PlanetDetails() {
    return (
        <ResourceDetails
            useResourceDetails={usePlanetDetails}
            type="planet"
            backLink="/planets"
            returnTo="planetas"
            title="planeta"
            usePlanetDetails={true}
        />
    );
}
