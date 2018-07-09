// https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=YOUR_API_KEY

const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyBE_FbB4tjnqch2N9utkROhE4bVobXElhM'
});

query = {
    input: "Mongolian Grill",
    inputtype: "textquery",
    locationbias: 'circle:2000@47.6918452,-122.2226413',
    fields: ['photos', 'formatted_address', 'name', 'rating', 'opening_hours', 'geometry']
}

googleMapsClient.findPlace(query, (req, res) => {
    console.dir(res.json.candidates)
})