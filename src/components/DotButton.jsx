/* eslint-disable react/prop-types */
import classes from '../styles/DotButton.module.css';

const DotButton = ({ onSelect, isSelected }) => {
    return (
        <li className={classes.dotBtn}>
            <button onClick={onSelect} className={isSelected ? classes.active : ''}></button>
        </li>
    );
};
export default DotButton;
