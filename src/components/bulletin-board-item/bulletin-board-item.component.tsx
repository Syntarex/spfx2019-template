import * as React from "react";
import { IAdvert } from "../../model/advert.model";

interface IBulletinBoardItemProps {
    value: IAdvert;
}

const BulletinBoardItem = (props: IBulletinBoardItemProps) => {
    const { value } = props;

    return (
        <div>
            <h4>{value.Title}</h4>
        </div>
    );
};

export default BulletinBoardItem;
