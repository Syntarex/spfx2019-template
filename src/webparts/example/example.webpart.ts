import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { sp } from "@pnp/sp";
import * as React from "react";
import * as ReactDOM from "react-dom";

import BulletinBoard from "../../components/bulletin-board/bulletin-board.component";

export interface IExampleWebPartProps {
    description: string;
}

export default class ExampleWebPart extends BaseClientSideWebPart<IExampleWebPartProps> {
    protected onInit(): Promise<void> {
        return super.onInit().then((_) => {
            sp.setup({
                spfxContext: this.context,
            });
        });
    }

    public render(): void {
        const element: React.ReactElement = React.createElement(BulletinBoard, {});

        ReactDOM.render(element, this.domElement);
    }

    protected onDispose(): void {
        ReactDOM.unmountComponentAtNode(this.domElement);
    }
}
