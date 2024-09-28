import { LatLngTuple } from "leaflet";

export const SplitterLocations: LatLngTuple[] = [];
const Splitters: {id: number, name: string, coordinates: LatLngTuple}[] = [];


Splitters.push({id: 0, name: 'Nohari More', coordinates: [22.881411340788357, 87.30668445959105]});
Splitters.push({id: 1, name: 'Nohari Store', coordinates: [22.88143825940608, 87.30596176497357]});
//Nohari more to Nohari store
SplitterLocations.push([22.881411340788357, 87.30668445959105]);
SplitterLocations.push([22.88143825940608, 87.30596176497357]);
SplitterLocations.push([22.88125593847669, 87.30499463114914]);
SplitterLocations.push([22.88123587732262, 87.30481635971273]);
SplitterLocations.push([22.881285241042132, 87.30447070706327]);
SplitterLocations.push([22.881337658439502, 87.3039677573935]);
SplitterLocations.push([22.881419178229677, 87.30321700678523]);
SplitterLocations.push([22.881493353487976, 87.30176946611144]);
SplitterLocations.push([22.88146401102088, 87.30147524309562]);