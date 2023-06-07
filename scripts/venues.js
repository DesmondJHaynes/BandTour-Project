import { getBands, getBookings, getVenues } from "./database.js";

const venues = getVenues()
const bookings = getBookings()
const bands = getBands()

export const listVenues = () => {
    let htmlRender = `<ul>`

    for (const venue of venues) {
        htmlRender += `<li id="venue-${venue.id}">${venue.name}</li>`
    }

    htmlRender += `</ul>`;
    return htmlRender;
}

const spitoutVenue = (venueId) => {
    for (const venue of venues) {
        if (venue.id === parseInt(venueId)) {
            return venue;
        }
    }
}

const getbandIds = (targetVenue) => {
    let bandIdsArr = []
    for (const booking of bookings) {
        if (targetVenue.id === booking.venueId) {
            bandIdsArr.push(booking.bandId);
        }                    
    }
    return bandIdsArr;
}

const alertListofBands = (ArrofBandIds) => {
    let bandslist = `Checkout The Bands:`

    for (const band of bands) {
        for (const bandId of ArrofBandIds) {
            if (bandId === band.id) {
                bandslist += `\n ${band.name}`
            }
        }
    }

    window.alert(bandslist);
}

document.addEventListener("click", 
    (event) => {

        if (event.target.id.startsWith("venue")) {
            const [, venueId] = event.target.id.split("-")

            console.log(`venue click event!`)

            const targetVenue = spitoutVenue(venueId);
            const ArrofBandIds = getbandIds(targetVenue);
            alertListofBands(ArrofBandIds);
        }
    }
)


/*
fucnction 1 "lister"
so we want to get the venue objects and list each venue.name
in an unordered list "String"
    DONE    

click event function
    if item clicked is venue return venue;
    DONE    

    take venue's current bands that are booked at that venue and display it as a list of the band names in the window alert

        so take the venueid and check all bookings that have the specific venue id
        if venue.Id mathces bookings.venueId, push bookings.id into an array of bandids
        DONE

        iterate through the bands and band id's simultaneously, 
        
        if the bandid int matches band.id;
        add band.name to band list string 


*/