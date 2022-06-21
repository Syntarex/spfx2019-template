import * as _ from "lodash";
import * as React from "react";
import { fetchUserById } from "../../data/user-by-id.fetch";
import { IAdvert } from "../../model/advert.model";

interface IBulletinBoardItemProps {
    value: IAdvert;
}

const BulletinBoardItem = (props: IBulletinBoardItemProps) => {
    const { value } = props;

    const [author, setAuthor] = React.useState<IUser | null>(null);

    React.useEffect(() => {
        fetchUserById(value.AuthorId).then((response) => {
            setAuthor(response);
        });
    }, [value.AuthorId]);

    if (_.isNull(author)) {
        return null;
    }

    return (
        <div>
            <h4>{value.Title}</h4>
            <p>Erstellt von: {author.Title}</p>
        </div>
    );
};

export default BulletinBoardItem;
