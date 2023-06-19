import * as React from "react";
import { getAllIdeas } from "../../data/idea.data";
import { IdeaCard } from "../idea-card/idea-card.component";

export const Main = () => {
    // Effect Hook
    // Führt Funktion beim ersten Rendering aus
    React.useEffect(() => {
        getAllIdeas().then((ideas) => {
            console.log(ideas);
        });
    });

    return <IdeaCard></IdeaCard>;
};
