import { BaseClientSideWebPart, IPropertyPaneConfiguration, PropertyPaneTextField } from "@microsoft/sp-webpart-base";
import * as React from "react";
import * as ReactDOM from "react-dom";

import * as strings from "ExampleWebPartStrings";
import BulletinBoard from "../../components/bulletin-board/bulletin-board.component";

export interface IExampleWebPartProps {
    description: string;
}

export default class ExampleWebPart extends BaseClientSideWebPart<IExampleWebPartProps> {
    public render(): void {
        const element: React.ReactElement = React.createElement(BulletinBoard, {});

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
