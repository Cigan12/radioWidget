import { AnyAction } from '@reduxjs/toolkit';
import Avatar from '../static/images/RadioWidget/radioAvatar.png';
import {
    GET_STATIONS,
    IRadioWidgetState,
    TOGGLE_STATION,
    TRadioWidgetActions,
} from './RadioWidget.types';

const initialRadioWidgetState: IRadioWidgetState = {
    currentStation: null,
    stations: [
        {
            active: false,
            frequency: '',
            id: 1,
            image: Avatar,
            name: '',
        },
    ],
    isLoading: false,
};

export const RadioWidgetReducer = (
    state = initialRadioWidgetState,
    action: TRadioWidgetActions | AnyAction
): IRadioWidgetState => {
    switch (action.type) {
        case GET_STATIONS:
            return {
                ...state,
                isLoading: false,
                stations: action.payload,
            };
        case TOGGLE_STATION:
            return {
                ...state,
                stations: state.stations.map((station) => {
                    if (station.id !== action.payload.id) {
                        return station;
                    }

                    return {
                        ...station,
                        active: !station.active,
                    };
                }),
            };
        default:
            return state;
    }
};
