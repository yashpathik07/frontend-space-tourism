/* eslint-disable react/prop-types */
import classes from '../styles/TabButton.module.css';

const TabButton = ({ children, onSelect, isSelected }) => {
    return (
        <li className={classes.tabBtn}>
            <button onClick={onSelect} className={isSelected ? classes.active : ''}>
                {children}
            </button>
        </li>
    );
};
export default TabButton;
