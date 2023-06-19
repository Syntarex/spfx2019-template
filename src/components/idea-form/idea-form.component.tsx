import { PrimaryButton, TextField } from "office-ui-fabric-react";
import * as React from "react";
import { addIdea } from "../../data/idea.data";

interface IdeaFormProps {
    userGotPermission: boolean;
}

// Dumb-Components -> Komponenten die selbst Daten nur erhalten aber nicht von einer API beziehen
export const IdeaForm = (props: IdeaFormProps) => {
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [volume, setVolume] = React.useState("");

    const onTitleChange = (newTitle: string) => {
        setTitle(newTitle.trim().toLowerCase());
    };

    const onClick = () => {
        // Validierungen?

        if (!props.userGotPermission) {
            return;
        }

        if (!title) {
            return;
        }

        addIdea({
            description: description,
            Title: title,
            volume: Number(volume),
        });
    };

    return (
        <div>
            <TextField label={"Titel"} value={title} onChange={(event, newText) => onTitleChange(newText ?? "")} />
            <TextField
                label={"Beschreibung"}
                value={description}
                onChange={(event, newText) => setDescription(newText ?? "")}
            />
            <TextField label={"Volumen"} value={volume} onChange={(event, newText) => setVolume(newText ?? "")} />
            <PrimaryButton onClick={onClick}>Lege eine Idee an</PrimaryButton>
        </div>
    );
};
