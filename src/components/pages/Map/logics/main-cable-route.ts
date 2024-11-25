import { LatLngTuple } from "leaflet";
import { Splitters } from "./splitter-location";

const MainCableRoutes: LatLngTuple[][]=[];

//Cable route: splitters 0 to 9 
for(let i=0;i<=8;i++){
    MainCableRoutes.push([Splitters[i].coordinates, Splitters[i+1].coordinates]);
}

//Cable route: Splitter 4 to 10-11-12
MainCableRoutes.push([Splitters[4].coordinates, Splitters[10].coordinates]);
MainCableRoutes.push([Splitters[10].coordinates, Splitters[11].coordinates]);
MainCableRoutes.push([Splitters[11].coordinates, Splitters[12].coordinates]);

//Cable route: splitter 6 to 13-14
MainCableRoutes.push([Splitters[6].coordinates, Splitters[13].coordinates]);
MainCableRoutes.push([Splitters[13].coordinates, Splitters[14].coordinates]);

export default MainCableRoutes;