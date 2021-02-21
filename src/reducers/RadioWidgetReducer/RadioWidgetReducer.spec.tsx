import {
    GetRadioStations,
    SetCurrentStation,
    StartFetchRadio,
} from './RadioWidget.actions';
import {
    initialRadioWidgetState,
    RadioWidgetReducer,
} from './RadioWidget.reducer';

describe('Radio widget reducer', () => {
    const testItem = {
        frequency: 'test',
        id: 1,
        image: 'image',
        name: 'test',
    };
    test('Fetch start', () => {
        const state = RadioWidgetReducer(
            initialRadioWidgetState,
            StartFetchRadio()
        );
        expect(state.isLoading).toBe(true);
    });

    test('Get stations', () => {
        const state = RadioWidgetReducer(
            initialRadioWidgetState,
            GetRadioStations([testItem])
        );
        const testItemMatch = state.stations.find(
            (item) => item.id === testItem.id
        );

        expect(state.stations.length).toBe(1);
        expect(testItemMatch).toBeTruthy();
    });

    test('Set current station', () => {
        const state = RadioWidgetReducer(
            initialRadioWidgetState,
            SetCurrentStation(testItem)
        );

        expect(state.currentStation?.id === testItem.id).toBe(true);
    });
});
