import { loadTheme } from "@uifabric/styling";
import { themeRulesStandardCreator } from "office-ui-fabric-react";

console.log("TEST TEST");
// TODO: Funktioniert das an dieser Stelle?
// this forces a default theme that loads in the new base
// theme object so values are available to new fabric components
loadTheme(themeRulesStandardCreator());
