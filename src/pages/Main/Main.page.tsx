import React from 'react';
import { RadioWidget } from '../../components/Widgets/RadioWidget/RadioWidget.component';
import styles from './Main.module.scss';

export const MainPage: React.FC = () => {
    return (
        <div className={styles.MainPage}>
            <RadioWidget />
        </div>
    );
};
