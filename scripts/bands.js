import { getBands, getBookings, getVenues } from "./database.js";

const bands = getBands()
const bookings = getBookings()
const venues = getVenues()

export const listBands = () => {
    let htmlRender = `<ul>`

    for (const band of bands) {
        htmlRender += `<li id="band-${band.id}">${band.name}</li>`
    }

    htmlRender += `</ul>`;
    return htmlRender;
}

const spitoutBand = (bandId) => {
    for (const band of bands) {
        if (band.id === parseInt(bandId)) {
            return band;
        }
    }
}

const getVenueIds = (targetBand) => {
    let venueIdsArr = []
    for (const booking of bookings) {
        if (targetBand.id === booking.bandId) {
            venueIdsArr.push(booking.venueId);
        }                    
    }
    return venueIdsArr;
}

const alertListofVenues = (ArrofVenueIds) => {
    let venueslist = `Checkout The Venues:`

    for (const venueId of ArrofVenueIds) {
        for (const venue of venues) {
            if (venueId === venue.id) {
                venueslist += `\n ${venue.name}`
            }
        }
    }
    window.alert(venueslist);
}


document.addEventListener("click", 
    event => {
        if (event.target.id.startsWith('band')) {
            const [,bandId] = event.target.id.split('-');

            console.log('band clicked');

            const targetBand = spitoutBand(bandId);
            const ArrofVenueIds = getVenueIds(targetBand);
            alertListofVenues(ArrofVenueIds);
        }
    }
)