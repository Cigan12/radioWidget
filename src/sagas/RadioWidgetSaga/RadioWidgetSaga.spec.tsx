import { runSaga } from 'redux-saga';
import { getStations } from './RadioWidget.saga';

interface IAction {
    type: any;
    payload: any;
}

test('Saga call api', async () => {
    const dipatched: Array<IAction> = [];
    await runSaga(
        {
            dispatch: (action: IAction) => dipatched.push(action),
        },
        getStations
    ).toPromise();
    console.log('​dipatched', dipatched);
});
