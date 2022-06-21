import * as _ from "lodash";
import * as React from "react";

interface IRandomNumberGeneratorProps {
    min: number;
    max: number;
}

const RandomNumberGenerator = (props: IRandomNumberGeneratorProps) => {
    const { min, max } = props;

    const [randomNumber, setRandomNumber] = React.useState(min);

    const randomize = React.useCallback(() => {
        const newRandomNumber = _.random(min, max);

        setRandomNumber(newRandomNumber);
    }, [min, max]);

    React.useEffect(() => {
        randomize();
    }, [randomize]);

    if (max < min) {
        return <p>Maximum muss größer als Minimum sein.</p>;
    }

    return (
        <div>
            <button onClick={randomize}>Mache Zufall</button>
            <p>
                Es wird eine zufällige Zahl zwischen {min} und {max} generiert.
            </p>
            <p>Zufällige Zahl: {randomNumber}</p>
        </div>
    );
};

export default RandomNumberGenerator;
