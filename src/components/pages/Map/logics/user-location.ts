import { LatLngTuple } from "leaflet";
import {findBestRoute} from "./engines"
let lastId=0;

interface IUser {
    id: number;
    name: string;
    coordinates: LatLngTuple;
    RedUser?: boolean
}
export const userLocations: IUser[] = [];

userLocations.push({id: lastId=lastId+1, name: 'Sahil Chowdhury', coordinates: [22.88178894801033, 87.30585855506881]})
userLocations.push({id: lastId=lastId+1, name: 'Sukalyan Kundu', coordinates: [22.881159855852193, 87.30124837537014]})
userLocations.push({id: lastId=lastId+1, name: 'Tarak De', coordinates: [22.881646332775674, 87.30322784872384]})
userLocations.push({id: lastId=lastId+1, name: 'Ankan Maity', coordinates: [22.881073423800906, 87.30612270304695]})
userLocations.push({id: lastId=lastId+1, name: 'Sarbani Dutta', coordinates: [22.879014404984066, 87.30432066086448]})
//userLocations.push({id: lastId=lastId+1, name: 'DR SUKANTA MANNA', coordinates: [22.881084, 87.306142]})
userLocations.push({id: lastId=lastId+1, name: 'Santanu Roy', coordinates: [22.88065212598115, 87.30647193729283]})
userLocations.push({id: lastId=lastId+1, name: 'WEBEL AMARSHI SC', coordinates: [22.881649519741064, 87.30394784112461], RedUser: true})
userLocations.push({id: lastId=lastId+1, name: 'WEBEL Nohari High School', coordinates: [22.881495, 87.305783], RedUser: true})
userLocations.push({id: lastId=lastId+1, name: 'Shankha Bhattachary', coordinates: [22.87816900543782, 87.30567071453888]})
userLocations.push({id: lastId=lastId+1, name: 'Sayan Mahanta', coordinates: [22.88074405499202, 87.30380483471939]})


export const UsertoMainCableRoutes = findBestRoute();
