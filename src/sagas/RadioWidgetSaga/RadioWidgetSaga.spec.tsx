import { runSaga } from 'redux-saga';
import * as API from '../../components/utils/API.util';
import { getStations } from './RadioWidget.saga';

interface IAction {
    type: any;
    payload: any;
}

test('Saga call api correctly', async () => {
    const dipatched: Array<IAction> = [];
    jest.spyOn(API, 'FetchStations').mockImplementation(() =>
        Promise.resolve(API.mockApiData)
    );
    await runSaga(
        {
            dispatch: (action: IAction) => dipatched.push(action),
        },
        getStations
    ).toPromise();

    expect(dipatched[0].payload.length).toEqual(5);
});
