import React, { useState } from 'react';
import { ArrowLeft } from '../../../static/images/RadioWidget/ArrowLeft';
import PowerOff from '../../../static/images/RadioWidget/powerOff.png';
import { RadioWidgetItem } from '../../Cards/RadioWidgetItem/RadioWidgetItem.component';
import styles from './RadioWidget.module.scss';
import itemAvatar from '../../../static/images/RadioWidget/radioAvatar.png';

interface IRadioWidgetProps {}

export const RadioWidget: React.FC<IRadioWidgetProps> = () => {
    const [active, setActive] = useState(false);
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
            <div className={styles.Content}>
                <ul className={styles.RadioItems}>
                    <RadioWidgetItem
                        frequency="66,6"
                        name="Putin FM"
                        image={itemAvatar}
                    />
                    <RadioWidgetItem
                        active={active}
                        onClick={() => setActive(!active)}
                        frequency="66,6"
                        name="Putin FM"
                        image={itemAvatar}
                    />
                </ul>
            </div>
            <div className={styles.Footer}>
                <p className={styles.CurrentlyPlaying}>CURRENTLY PLAYING</p>
                <p className={styles.StationName}>Dribbble FM</p>
            </div>
        </div>
    );
};
