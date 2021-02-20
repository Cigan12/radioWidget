import {
    GET_STATIONS,
    IGetStations,
    IRadioStation,
    IRadioStationsFetchStarted,
    ISetCurrentStation,
    RADIO_STATIONS_FETCH_STARTED,
    SET_CURRENT_STATION,
} from './RadioWidget.types';

export const StartFetchRadio = (): IRadioStationsFetchStarted => {
    return {
        type: RADIO_STATIONS_FETCH_STARTED,
    };
};

export const GetRadioStations = (
    stations: Array<IRadioStation>
): IGetStations => {
    return {
        type: GET_STATIONS,
        payload: stations,
    };
};

export const SetCurrentStation = (
    station: IRadioStation
): ISetCurrentStation => {
    return {
        type: SET_CURRENT_STATION,
        payload: station,
    };
};
