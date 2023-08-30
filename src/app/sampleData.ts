export interface City {
    cityName: string;
    minValue: number;
    url:string;
}
export const SampleData: City[] = [{
    cityName: 'Chicago',
    minValue: 600.00,
    url: '../../../../assets/chicago-min.png'
},
    {
        cityName: 'Porto',
        minValue: 600.00,
        url:'../../../../assets/porto-min.png'
    },
    {
        cityName: 'Chicago',
        minValue: 600.00,
        url: '../../../../assets/mire-min.png'
}]