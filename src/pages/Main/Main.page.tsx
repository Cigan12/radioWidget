import React, { Dispatch, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RadioWidget } from '../../components/Widgets/RadioWidget/RadioWidget.component';
import { StartFetchRadio } from '../../reducers/RadioWidgetReducer/RadioWidget.actions';
import { TRadioWidgetActions } from '../../reducers/RadioWidgetReducer/RadioWidget.types';
import styles from './Main.module.scss';

export const MainPage: React.FC = () => {
    const dispatch = useDispatch<Dispatch<TRadioWidgetActions>>();
    useEffect(() => {
        dispatch(StartFetchRadio());
    }, [dispatch]);
    return (
        <div className={styles.MainPage}>
            <RadioWidget />
        </div>
    );
};
