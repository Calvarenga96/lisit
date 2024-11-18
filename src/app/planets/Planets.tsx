import usePlanets from "@/hooks/planets/usePlanets";
import ResourceList from "@/components/ResourceList";

export default function Planets() {
    return (
        <ResourceList
            title="Planetas de Star Wars"
            useResource={usePlanets}
            resourcePath="planets"
        />
    );
}
