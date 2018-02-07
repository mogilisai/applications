
export const SAVE_TO_STORE = 'saveToStore';
export const SAVE_LONG_LAT = 'saveLongLat';

//fetching api data
 export function fetchData(){
   return dispatch => {
     return fetch('https://api.credr.com/v1/product/search/?q=eyJwYWdlIjoxLCJjdXJyZW50X2NpdHlfaWQiOjJ9')
      .then(response => response.json())
      .then(json => dispatch(saveToStore(json.payload.results)))
   }
 }
 //data assigned to reducer
 export function saveToStore(v) {
   return {
    type: SAVE_TO_STORE,
    payload:{
      value: v
    }
  }
 }
 //getting latitude and longitude values using google maps api
export function getLatLng(place){
  return dispatch => {
    return fetch("http://maps.googleapis.com/maps/api/geocode/json?address="+place+"&sensor=false")
     .then(response => response.json())
     .then(res => dispatch(saveLatLong(place, res.results[0].geometry.location.lat, res.results[0].geometry.location.lng)))
  }
}
export function saveLatLong(place, v1, v2){
  return {
   type: SAVE_LONG_LAT,
   payload:{
     current_place: place,
     latitude: v1,
     longitude: v2
   }
 }
}
