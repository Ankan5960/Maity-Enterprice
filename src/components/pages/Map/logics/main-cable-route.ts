import { LatLngTuple } from "leaflet";
import { SplitterLocations } from "./splitter-location";

export const MainCableRoutes: LatLngTuple[][] = [[[22.881411340788357, 87.30668445959105], [22.88147696899644, 87.30617091450776]]];

let last_point: LatLngTuple = MainCableRoutes[MainCableRoutes.length - 1][1];

function push(lat: number, lng: number): void {
    const newPoint: LatLngTuple = [lat, lng];
  
    // Push a new pair into the cableRoutes, pairing the last point with the new one
    MainCableRoutes.push([last_point, newPoint]);
  
    // Update the lastPoint to the newPoint for future pairings
    last_point = newPoint;
}

export default MainCableRoutes;

//Main road line
push(22.88143825940608, 87.30596176497357);
push(22.88125593847669, 87.30499463114914);
push(22.88123587732262, 87.30481635971273);
push(22.881285241042132, 87.30447070706327);
push(22.881337658439502, 87.3039677573935);
push(22.881419178229677, 87.30321700678523);
push(22.881493353487976, 87.30176946611144);
push(22.88146401102088, 87.30147524309562);

//Main road to Sarbani Dutta & Shankha bhattacharya
MainCableRoutes.push([[22.88123587732262, 87.30481635971273], [22.879024511243347, 87.30432024256956]]);
SplitterLocations.push([22.879024511243347, 87.30432024256956]);
MainCableRoutes.push([[22.879024511243347, 87.30432024256956], [22.878796447985575, 87.30512262100699]]);
SplitterLocations.push([22.878796447985575, 87.30512262100699]);
MainCableRoutes.push([[22.878796447985575, 87.30512262100699], [22.878565150612104, 87.3056704249428]]);
SplitterLocations.push([22.878565150612104, 87.3056704249428]);
