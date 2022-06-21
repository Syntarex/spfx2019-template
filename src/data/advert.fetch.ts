import { IAdvert } from "../model/advert.model";

export const fetchAdverts = (): IAdvert[] => {
    // TODO: API Call
    return [
        {
            Ablaufdatum: new Date().toISOString(),
            Author: "Björn Guth",
            Beschreibung: "Ich habe ein tolles Fahrrad zu verkaufen. Der Lenker ist kaputt.",
            Preis: 400,
            Title: "Top Fortbewegungsmittel!",
            Verhandlungsbasis: true,
        },
        {
            Ablaufdatum: new Date().toISOString(),
            Author: "Dominic Fuchs",
            Beschreibung: "Kabel wird benötigt, habe ich allerdings verloren.",
            Preis: 100,
            Title: "Das beste kabellose Headset!",
            Verhandlungsbasis: false,
        },
        {
            Ablaufdatum: new Date().toISOString(),
            Author: "Marco Schmittnägel",
            Beschreibung: "Leider haben 3-4 Felder ihre Farbe verloren. You got the challenge?",
            Preis: 3,
            Title: "Rubics Cube zu verkaufen!",
            Verhandlungsbasis: true,
        },
    ];
};
