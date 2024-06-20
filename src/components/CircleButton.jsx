/* eslint-disable react/prop-types */
import classes from '../styles/CircleButton.module.css';

const CircleButton = ({ children, onSelect, isSelected }) => {
    return (
        <li className={classes.circleBtn}>
            <button onClick={onSelect} className={isSelected ? classes.active : ''}>
                {children}
            </button>
        </li>
    );
};
export default CircleButton;
