import { LatLngTuple } from "leaflet";

interface ISplitters{
    id: number,
    coordinates: LatLngTuple,
    descrption?: string
}
 
export const Splitters: ISplitters[] = [];

//Cable route: splitters 0 to 9 
Splitters.push({id: 0, coordinates: [22.88067695510979, 87.30729713626818] , descrption: 'Nohari bsnl office'});
Splitters.push({id: 1, coordinates: [22.881411340788357, 87.30668445959105], descrption: 'Nohari More'});
Splitters.push({id: 2, coordinates: [22.88143825940608, 87.30596176497357], descrption: 'Near hogh school'});
Splitters.push({id: 3, coordinates: [22.88125593847669, 87.30499463114914]});
Splitters.push({id: 4, coordinates: [22.88123587732262, 87.30481635971273]});
Splitters.push({id: 5, coordinates: [22.881285241042132, 87.30447070706327]});
Splitters.push({id: 6, coordinates: [22.881337658439502, 87.3039677573935]});
Splitters.push({id: 7, coordinates: [22.881419178229677, 87.30321700678523]});
Splitters.push({id: 8, coordinates: [22.881493353487976, 87.30176946611144]});
Splitters.push({id: 9, coordinates: [22.88146401102088, 87.30147524309562]});

//Cable route: Splitter 4 to 10-11-12
Splitters.push({id: 10, coordinates: [22.879024511243347, 87.30432024256956]});
Splitters.push({id: 11, coordinates: [22.878796447985575, 87.30512262100699]});
Splitters.push({id: 12, coordinates: [22.878565150612104, 87.3056704249428]});

//Cable route: splitter 6 to 13-14
Splitters.push({id: 13, coordinates: [22.88125124520484, 87.30413985505935]});
Splitters.push({id: 14, coordinates: [22.88076355273375, 87.30409056455376]});
