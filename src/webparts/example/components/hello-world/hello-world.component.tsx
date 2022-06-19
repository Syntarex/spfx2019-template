import * as React from "react";
import styles from "./hello-world.module.scss";

interface IHelloWorldProps {
    text: string;
}

const HelloWorld = (props: IHelloWorldProps) => {
    return <h1 className={styles.hello}>Hello {props.text}</h1>;
};

export default HelloWorld;
