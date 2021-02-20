import { RADIO_STATIONS_FETCH_STARTED } from './RadioWidget.types';

export const StartFetchRadio = () => {
    return {
        type: RADIO_STATIONS_FETCH_STARTED,
    };
};
