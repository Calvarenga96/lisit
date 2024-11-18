import usePeople from "@/hooks/people/usePeople";
import ResourceList from "@/components/ResourceList";

export default function People() {
    return (
        <ResourceList
            title="Personas de Star Wars"
            useResource={usePeople}
            resourcePath="people"
        />
    );
}
