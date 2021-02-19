import React from 'react';
import { ArrowLeft } from '../../../static/images/RadioWidget/ArrowLeft';
import PowerOff from '../../../static/images/RadioWidget/powerOff.png';
import styles from './RadioWidget.module.scss';

interface IRadioWidgetProps {}

export const RadioWidget: React.FC<IRadioWidgetProps> = () => {
    return (
        <div className={styles.Main}>
            <div className={styles.Header}>
                <ArrowLeft className={styles.ArrowLeft} />
                <h3 className={styles.Title}>stations</h3>
                <img
                    className={styles.PowerOff}
                    src={PowerOff}
                    alt="power off"
                />
            </div>
        </div>
    );
};
