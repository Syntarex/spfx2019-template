import * as _ from "lodash";
import * as React from "react";
import { fetchAdverts } from "../../data/advert.fetch";
import { IAdvert } from "../../model/advert.model";
import BulletinBoardItem from "../bulletin-board-item/bulletin-board-item.component";
import styles from "./bulletin-board.module.scss";

interface IBulletinBoardProps {}

const BulletinBoard = (props: IBulletinBoardProps) => {
    const [adverts, setAdverts] = React.useState<IAdvert[] | null>(null);

    // Führe einmalig aus wenn Komponente das erste mal gerendert wird
    React.useEffect(() => {
        fetchAdverts().then((response) => setAdverts(response));
    }, []);

    if (_.isNull(adverts)) {
        return null;
    }

    return (
        <ul className={styles.list}>
            {adverts.map((each, index) => (
                <li key={index} className={styles.item}>
                    <BulletinBoardItem value={each} />
                </li>
            ))}
        </ul>
    );
};

export default BulletinBoard;
