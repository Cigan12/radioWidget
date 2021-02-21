import { call, put, takeEvery } from 'redux-saga/effects';
import { GetRadioStations } from '../../reducers/RadioWidgetReducer/RadioWidget.actions';
import Avatar from '../../static/images/RadioWidget/radioAvatar.png';
import {
    IRadioStation,
    RADIO_STATIONS_FETCH_STARTED,
    TRadioWidgetActions,
} from '../../reducers/RadioWidgetReducer/RadioWidget.types';

const mockApiData: Array<IRadioStation> = [
    {
        frequency: '66,6',
        id: 1,
        image: Avatar,
        name: 'Putin FM',
    },
    {
        frequency: '101,2',
        id: 2,
        image: Avatar,
        name: 'Dribbble FM',
    },
    {
        frequency: '99,4',
        id: 3,
        image: Avatar,
        name: 'Doge FM',
    },
    {
        frequency: '87,1',
        id: 4,
        image: Avatar,
        name: 'Ballads FM',
    },
    {
        frequency: '142,2',
        id: 5,
        image: Avatar,
        name: 'Maximum FM',
    },
];

const fetchStations = async () => {
    const r = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockApiData);
        }, 300);
    });
    return r;
};

export function* getStations() {
    try {
        const stations = yield call(fetchStations);
        yield put<TRadioWidgetActions>(GetRadioStations(stations));
    } catch (error) {
        console.log('​}catch -> error', error);
    }
}

export function* radioWidgetSaga() {
    yield takeEvery(RADIO_STATIONS_FETCH_STARTED, getStations);
}
