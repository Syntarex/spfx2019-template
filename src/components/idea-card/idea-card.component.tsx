import { Text } from "office-ui-fabric-react";
import * as React from "react";
import styles from "./idea-card.module.scss";

export const IdeaCard = () => {
    return (
        <div className={styles.card}>
            <header>
                <Text variant={"xLarge"}>Titel</Text>
            </header>
            <div>
                <Text block>Lorem Ispum blablkjwelfk weölfkjwe löfkjwef</Text>
                <Text block>300000€</Text>
            </div>
            <footer>
                <Text variant={"small"}>Erstellt von: Dominic Fuchs</Text>
            </footer>
        </div>
    );
};
