import { call, put, takeEvery } from 'redux-saga/effects';
import { FetchStations } from '../../components/utils/API.util';
import { GetRadioStations } from '../../reducers/RadioWidgetReducer/RadioWidget.actions';
import {
    RADIO_STATIONS_FETCH_STARTED,
    TRadioWidgetActions,
} from '../../reducers/RadioWidgetReducer/RadioWidget.types';

export function* getStations() {
    try {
        const stations = yield call(FetchStations);
        yield put<TRadioWidgetActions>(GetRadioStations(stations));
    } catch (error) {
        console.log('​}catch -> error', error);
    }
}

export function* radioWidgetSaga() {
    yield takeEvery(RADIO_STATIONS_FETCH_STARTED, getStations);
}
