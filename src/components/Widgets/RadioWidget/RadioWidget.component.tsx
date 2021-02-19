import React, { Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowLeft } from '../../../static/images/RadioWidget/ArrowLeft';
import PowerOff from '../../../static/images/RadioWidget/powerOff.png';
import { RadioWidgetItem } from '../../Cards/RadioWidgetItem/RadioWidgetItem.component';
import styles from './RadioWidget.module.scss';
import itemAvatar from '../../../static/images/RadioWidget/radioAvatar.png';
import { TStore } from '../../../store';
import {
    TOGGLE_STATION,
    TRadioWidgetActions,
} from '../../../reducers/RadioWidget.types';

interface IRadioWidgetProps {}

export const RadioWidget: React.FC<IRadioWidgetProps> = () => {
    const state = useSelector((store: TStore) => store.RadioWidgetReducer);
    const dispatch = useDispatch<Dispatch<TRadioWidgetActions>>();
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
                    {state.stations &&
                        state.stations.map((station) => (
                            <RadioWidgetItem
                                key={station.id}
                                active={station.active}
                                frequency="66,6"
                                name="Putin FM"
                                onClick={() =>
                                    dispatch({
                                        type: TOGGLE_STATION,
                                        payload: {
                                            id: station.id,
                                        },
                                    })
                                }
                                image={itemAvatar}
                            />
                        ))}
                </ul>
            </div>
            <div className={styles.Footer}>
                <p className={styles.CurrentlyPlaying}>CURRENTLY PLAYING</p>
                <p className={styles.StationName}>Dribbble FM</p>
            </div>
        </div>
    );
};
