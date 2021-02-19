export interface IRadioStation {
    id: number;
    name: string;
    frequency: string;
    image: string;
    active: boolean;
}

export interface IRadioWidgetState {
    currentStation: IRadioStation | null;
    stations: Array<IRadioStation>;
    isLoading: boolean;
}

export const GET_STATIONS = 'RADIO-WIDGET/GET-STATIONS';
export const TOGGLE_STATION = 'RADIO-WIDGET/TOGGLE-STATION';

interface IGetStations {
    type: typeof GET_STATIONS;
    payload: Array<IRadioStation>;
}

interface IToggleStation {
    type: typeof TOGGLE_STATION;
    payload: {
        id: number;
    };
}

export type TRadioWidgetActions = IGetStations | IToggleStation;
