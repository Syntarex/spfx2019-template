import { sp } from "@pnp/sp";
import "@pnp/sp/items";
import "@pnp/sp/lists";
import "@pnp/sp/webs";
import { IAdvert } from "../model/advert.model";

export const fetchAdverts = async (): Promise<IAdvert[]> => {
    return sp.web.lists.getByTitle("Inserate").items();
};
