function autoComplete(input, latInput, lngInput) {
//console.log(input,latInput,lngInput);
if(!input) return;
//const dropdown = new google.maps.places.Autocomplete(input);
const dropdown = input
// dropdown.addListener('place_changed', () => {
//     //const place = dropdown.getPlace();
//     latInput.value = place.getmetry.location.lat();
//     lngInput.value = place.getmetry.location.lng();
//     latInput.value = 123
//     lngInput.value = -37
//     console.log(place);
// })


dropdown.on('input', () => {
    //const place = dropdown.getPlace();
    // latInput.value = place.getmetry.location.lat();
    // lngInput.value = place.getmetry.location.lng();
    latInput.value = 43.2618072
    lngInput.value = -79.8669744
    // console.log(place);
})
}

export default autoComplete;