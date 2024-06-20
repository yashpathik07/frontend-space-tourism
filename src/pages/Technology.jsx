import classes from '../styles/Technology.module.css';

import CircleButton from '../components/CircleButton';

import { potVehicle, landVehicle, potPort, landPort, potCapsule, landCapsule } from '../components/TechImages';

import data from '../data.json';

import { useState, useEffect } from 'react';

const TechnologyPage = () => {
    const [tech, setTech] = useState(0);

    const [image, setImage] = useState({
        pot: potVehicle,
        land: landVehicle,
    });

    const [resize, setResize] = useState(false);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 950) {
                setResize(true);
            }
            if (window.innerWidth > 951) {
                setResize(false);
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        // return () => {
        //     window.removeEventListener('resize', handleResize);
        // };
    }, []);

    const techs = data.technology;

    const selectTechHandler = (techId) => {
        setTech(techId);

        if (techId === 1) {
            setImage({
                pot: potPort,
                land: landPort,
            });
        } else if (techId === 2) {
            setImage({
                pot: potCapsule,
                land: landCapsule,
            });
        } else {
            setImage({ pot: potVehicle, land: landVehicle });
        }
    };

    return (
        <div id={classes.technology}>
            <h2>
                <span>03</span>space launch 101
            </h2>
            <div className={classes.techContent}>
                <div className={classes.information}>
                    <menu>
                        <CircleButton onSelect={() => selectTechHandler(0)} isSelected={tech === 0}>
                            1
                        </CircleButton>
                        <CircleButton onSelect={() => selectTechHandler(1)} isSelected={tech === 1}>
                            2
                        </CircleButton>
                        <CircleButton onSelect={() => selectTechHandler(2)} isSelected={tech === 2}>
                            3
                        </CircleButton>
                    </menu>
                    <section className={classes.about}>
                        <h3>the terminology...</h3>
                        <h1>{techs[tech].name}</h1>
                        <p className={classes.description}>{techs[tech].description}</p>
                    </section>
                </div>
                <div className={classes.image}>
                    <div>
                        <img src={resize ? image.land : image.pot} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TechnologyPage;
