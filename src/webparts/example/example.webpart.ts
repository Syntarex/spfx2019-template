import { BaseClientSideWebPart, IPropertyPaneConfiguration, PropertyPaneTextField } from "@microsoft/sp-webpart-base";
import * as React from "react";
import * as ReactDOM from "react-dom";

import { setup } from "@pnp/sp/splibconfig";
import * as strings from "ExampleWebPartStrings";
import { Main } from "../../components/main/main.component";

export interface IExampleWebPartProps {
    description: string;
}

export default class ExampleWebPart extends BaseClientSideWebPart<IExampleWebPartProps> {
    public async onInit(): Promise<void> {
        super.onInit();

        setup({
            spfxContext: this.context,
        });
    }

    public render(): void {
        const element: React.ReactElement = React.createElement(Main, {});

        ReactDOM.render(element, this.domElement);
    }

    protected onDispose(): void {
        ReactDOM.unmountComponentAtNode(this.domElement);
    }

    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription,
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField("description", {
                                    label: strings.DescriptionFieldLabel,
                                }),
                            ],
                        },
                    ],
                },
            ],
        };
    }
}
