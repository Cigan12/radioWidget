import {
    GET_STATIONS,
    IRadioWidgetState,
    RADIO_STATIONS_FETCH_STARTED,
    SET_CURRENT_STATION,
    TRadioWidgetActions,
} from './RadioWidget.types';

export const initialRadioWidgetState: IRadioWidgetState = {
    currentStation: null,
    stations: [],
    isLoading: false,
};

export const RadioWidgetReducer = (
    state = initialRadioWidgetState,
    action: TRadioWidgetActions
): IRadioWidgetState => {
    switch (action.type) {
        case RADIO_STATIONS_FETCH_STARTED:
            return {
                ...state,
                isLoading: true,
            };
        case GET_STATIONS:
            return {
                ...state,
                isLoading: false,
                stations: action.payload,
            };
        case SET_CURRENT_STATION:
            if (
                state.currentStation &&
                state.currentStation.id === action.payload.id
            ) {
                return { ...state, currentStation: null };
            }
            return {
                ...state,
                currentStation: action.payload,
            };
        default:
            return state;
    }
};
