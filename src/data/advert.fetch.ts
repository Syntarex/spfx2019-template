import { sp } from "@pnp/sp";
import "@pnp/sp/items";
import "@pnp/sp/lists";
import "@pnp/sp/webs";
import { IAdvert } from "../model/advert.model";

export const fetchAdverts = async (): Promise<IAdvert[]> => {
    const response = await sp.web.lists.getByTitle("Inserate").items();
    console.log(response);

    return sp.web.lists.getByTitle("Inserate").items();
};
