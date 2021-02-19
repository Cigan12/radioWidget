import React from 'react';
import Decrease from '../../../static/images/RadioWidget/Decrease.svg';
import Increase from '../../../static/images/RadioWidget/Increase.svg';
import styles from './RadioWidgetItem.module.scss';

interface IRadioWidgetItemProps {
    frequency: string;
    name: string;
    active?: boolean;
    image: HTMLImageElement['src'];
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const RadioWidgetItem: React.FC<IRadioWidgetItemProps> = ({
    active,
    frequency,
    name,
    image,
    onClick,
}) => {
    return (
        <li className={[styles.Common, active && styles.active].join(' ')}>
            <div className={styles.Dropdown}>
                <img
                    src={Decrease}
                    className={styles.ControlButton}
                    alt="decrease"
                />

                <img
                    className={styles.Image}
                    src={image}
                    alt="station avatar"
                ></img>
                <img
                    src={Increase}
                    className={styles.ControlButton}
                    alt="increase"
                />
            </div>

            <div className={styles.Item} onClick={onClick}>
                <p className={styles.Name}>{name}</p>
                <p className={styles.Frequency}>{frequency}</p>
            </div>
        </li>
    );
};
