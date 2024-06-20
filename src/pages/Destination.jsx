import classes from '../styles/Destination.module.css';

import TabButton from '../components/TabButton';

import { moon, mars, europa, titan } from '../components/DestinationImages';

import data from '../data.json';

import { useState } from 'react';

const DestinationPage = () => {
    const [destination, setDestination] = useState(0);

    const [image, setImage] = useState(moon);

    const destinations = data.destinations;

    const selectDestinationHandler = (destinationId) => {
        setDestination(destinationId);

        if (destinationId === 1) {
            setImage(mars);
        } else if (destinationId === 2) {
            setImage(europa);
        } else if (destinationId === 3) {
            setImage(titan);
        } else {
            setImage(moon);
        }
    };

    return (
        <div id={classes.destination}>
            <h2>
                <span>01</span>pick your destination
            </h2>
            <div className={classes.destinationContent}>
                <div className={classes.image}>
                    <div>
                        <img src={image} alt="" />
                    </div>
                </div>
                <div className={classes.information}>
                    <menu>
                        <TabButton onSelect={() => selectDestinationHandler(0)} isSelected={destination === 0}>
                            moon
                        </TabButton>
                        <TabButton onSelect={() => selectDestinationHandler(1)} isSelected={destination === 1}>
                            mars
                        </TabButton>
                        <TabButton onSelect={() => selectDestinationHandler(2)} isSelected={destination === 2}>
                            europa
                        </TabButton>
                        <TabButton onSelect={() => selectDestinationHandler(3)} isSelected={destination === 3}>
                            titan
                        </TabButton>
                    </menu>
                    <section className={classes.about}>
                        <h1>{destinations[destination].name}</h1>
                        <p className={classes.description}>{destinations[destination].description}</p>
                        <hr />
                        <div className={classes.calculations}>
                            <div>
                                <span>avg.distance</span>
                                <p>{destinations[destination].distance}</p>
                            </div>
                            <div>
                                <span>est. travel time</span>
                                <p>{destinations[destination].travel}</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};
export default DestinationPage;
