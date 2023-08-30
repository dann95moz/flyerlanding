export interface City {
    cityName: string;
    minValue: number;
    url:string;
}
export const SampleData: City[] = [{
    cityName: 'Chicago',
    minValue: 600.00,
    url: '../../../../assets/chicago.png'
},
    {
        cityName: 'Porto',
        minValue: 600.00,
        url:'../../../../assets/porto.png'
    },
    {
        cityName: 'Chicago',
        minValue: 600.00,
        url: '../../../../assets/mire.png'
}]