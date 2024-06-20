import classes from '../styles/Crew.module.css';

import DotButton from '../components/DotButton';

import { douglas, mark, victor, ansari } from '../components/CrewImages';

import data from '../data.json';

import { useState } from 'react';

const CrewPage = () => {
    const [crew, setCrew] = useState(0);

    const [image, setImage] = useState(douglas);

    const crews = data.crew;

    const selectCrewHandler = (crewId) => {
        setCrew(crewId);

        if (crewId === 1) {
            setImage(mark);
        } else if (crewId === 2) {
            setImage(victor);
        } else if (crewId === 3) {
            setImage(ansari);
        } else {
            setImage(douglas);
        }
    };

    return (
        <div id={classes.crew}>
            <h2>
                <span>02</span>meet your crew
            </h2>
            <div className={classes.crewContent}>
                <div className={classes.information}>
                    <section className={classes.about}>
                        <h3>{crews[crew].role}</h3>
                        <h1>{crews[crew].name}</h1>
                        <p className={classes.description}>{crews[crew].bio}</p>
                    </section>
                    <menu>
                        <DotButton onSelect={() => selectCrewHandler(0)} isSelected={crew === 0}></DotButton>
                        <DotButton onSelect={() => selectCrewHandler(1)} isSelected={crew === 1}></DotButton>
                        <DotButton onSelect={() => selectCrewHandler(2)} isSelected={crew === 2}></DotButton>
                        <DotButton onSelect={() => selectCrewHandler(3)} isSelected={crew === 3}></DotButton>
                    </menu>
                </div>
                <div className={classes.image}>
                    <div>
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CrewPage;
