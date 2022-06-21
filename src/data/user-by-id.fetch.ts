import { sp } from "@pnp/sp";
import "@pnp/sp/site-users/web";
import "@pnp/sp/webs";

export const fetchUserById = async (id: number): Promise<IUser> => {
    return await sp.web.getUserById(id).get();
};
