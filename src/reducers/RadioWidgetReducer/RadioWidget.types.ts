export interface IRadioStation {
    id: number;
    name: string;
    frequency: string;
    image: string;
}

export interface IRadioWidgetState {
    currentStation: IRadioStation | null;
    stations: Array<IRadioStation>;
    isLoading: boolean;
}

export const RADIO_STATIONS_FETCH_STARTED = 'RADIO-WIDGET/FETCH-STARTED';
export const GET_STATIONS = 'RADIO-WIDGET/GET-STATIONS';
export const SET_CURRENT_STATION = 'RADIO-WIDGET/SET-CURRENT-STATION';

interface IRadioStationsFetchStarted {
    type: typeof RADIO_STATIONS_FETCH_STARTED;
}

interface IGetStations {
    type: typeof GET_STATIONS;
    payload: Array<IRadioStation>;
}

interface ISetCurrentStation {
    type: typeof SET_CURRENT_STATION;
    payload: IRadioStation;
}

export type TRadioWidgetActions =
    | IGetStations
    | ISetCurrentStation
    | IRadioStationsFetchStarted;
