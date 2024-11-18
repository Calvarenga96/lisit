import useStarships from "@/hooks/starships/useStarships";
import ResourceList from "@/components/ResourceList";

export default function Starships() {
    return (
        <ResourceList
            title="Naves de Star Wars"
            useResource={useStarships}
            resourcePath="starships"
        />
    );
}
