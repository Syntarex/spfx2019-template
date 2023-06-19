import { sp } from "@pnp/sp";
import "@pnp/sp/items";
import "@pnp/sp/lists";
import "@pnp/sp/webs";
import { Idea } from "../model/idea.model";

// async-await pattern
export const getAllIdeas = async () => {
    const items: Idea[] = await sp.web.lists.getByTitle("Ideensammlung").items();

    return items;
};
