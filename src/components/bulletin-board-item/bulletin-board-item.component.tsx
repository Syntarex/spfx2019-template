import * as React from "react";
import { IAdvert } from "../../model/advert.model";

interface IBulletinBoardItemProps {
    value: IAdvert;
}

const BulletinBoardItem = (props: IBulletinBoardItemProps) => {
    const { value } = props;

    return <p>{value.Title}</p>;
};

export default BulletinBoardItem;
