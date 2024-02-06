import { BaseApplicationCustomizer } from "@microsoft/sp-application-base";
import { insertCss } from "insert-css";

// Muss nicht in onInit leben, da keine SPFx-Funktionalität genutzt wird
insertCss(`
    .ms-compositeHeader { display: none; }
`);

export default class ExampleApplicationCustomizer extends BaseApplicationCustomizer<unknown> {
    public async onInit(): Promise<void> {
        console.log("EXTENSION CODE HERE");
    }
}
