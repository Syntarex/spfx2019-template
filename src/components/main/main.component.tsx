import * as React from "react";
import { getAllIdeas } from "../../data/idea.data";
import { Idea } from "../../model/idea.model";
import { IdeaCard } from "../idea-card/idea-card.component";

export const Main = () => {
    const [ideas, setIdeas] = React.useState<Idea[]>([]);

    // Effect Hook
    // Führt Funktion beim ersten Rendering aus
    React.useEffect(() => {
        getAllIdeas().then((result) => {
            const filteredIdeas = result.filter((each) => each.volume > 1000);
            setIdeas(filteredIdeas);
        });
    });

    return (
        <div>
            {ideas.map((each) => (
                <IdeaCard idea={each} />
            ))}
        </div>
    );
};
