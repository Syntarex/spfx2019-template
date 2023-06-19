import { Text } from "office-ui-fabric-react";
import * as React from "react";
import { Idea } from "../../model/idea.model";
import styles from "./idea-card.module.scss";

interface IdeaCardProps {
    idea: Idea;
}

export const IdeaCard = (props: IdeaCardProps) => {
    // const expensiveClass = props.idea.volume > 1000 ? styles.expensive : undefined;

    return (
        <div className={styles.card + " " + (props.idea.volume > 1000 ? styles.expensive : undefined)}>
            <header>
                <Text variant={"xLarge"}>{props.idea.Title}</Text>
            </header>
            <div>
                <Text block>{props.idea.description}</Text>
                <Text block>{props.idea.volume}€</Text>
            </div>
        </div>
    );
};
