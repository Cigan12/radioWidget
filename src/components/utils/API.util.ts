import { IRadioStation } from '../../reducers/RadioWidgetReducer/RadioWidget.types';
import Avatar from '../../static/images/RadioWidget/radioAvatar.png';

export const mockApiData: Array<IRadioStation> = [
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

export const FetchStations = async (): Promise<Array<IRadioStation>> => {
    const r: Array<IRadioStation> = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockApiData);
        }, 300);
    });
    return r;
};
