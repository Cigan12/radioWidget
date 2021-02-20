import React, { Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowLeft } from '../../../static/images/RadioWidget/ArrowLeft';
import PowerOff from '../../../static/images/RadioWidget/powerOff.png';
import { RadioWidgetItem } from '../../Cards/RadioWidgetItem/RadioWidgetItem.component';
import styles from './RadioWidget.module.scss';
import itemAvatar from '../../../static/images/RadioWidget/radioAvatar.png';
import { TStore } from '../../../store';
import {
    SET_CURRENT_STATION,
    TRadioWidgetActions,
} from '../../../reducers/RadioWidgetReducer/RadioWidget.types';

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
                                active={
                                    !!state.currentStation &&
                                    state.currentStation.id === station.id
                                }
                                frequency={station.frequency}
                                name={station.name}
                                onClick={() =>
                                    dispatch({
                                        type: SET_CURRENT_STATION,
                                        payload: station,
                                    })
                                }
                                image={itemAvatar}
                            />
                        ))}
                </ul>
            </div>
            <div className={styles.Footer}>
                {state.currentStation && (
                    <>
                        <p className={styles.CurrentlyPlaying}>
                            CURRENTLY PLAYING
                        </p>
                        <p className={styles.StationName}>
                            {state.currentStation.name}
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};
