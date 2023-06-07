import { getBands, getBookings, getVenues } from "./database.js";

const bookings = getBookings()
const bands = getBands()
const venues = getVenues()



const linkBandtoId = (bookingBandId) => {
    for (const band of bands) {
        if (bookingBandId === band.id) {
            return band.name
        }
    }
}

const linkVenuetoId = (bookingVenueId) => {
    for (const venue of venues) {
        if (bookingVenueId === venue.id) {
            return venue.name
        }
    }
}


export const listBookings = () => {
    let htmlRender = `<div>`

    for (const booking of bookings) {
        let bandName = linkBandtoId(booking.bandId)
        let venueName = linkVenuetoId(booking.venueId)

        htmlRender += `<p id="booking-${booking.id}"> 
        The band "${bandName}" is playing at ${venueName} on ${booking.bookingDate}
        </p>`
    }

    htmlRender += `</ul>`;
    return htmlRender;
}



const grabBookingBandId = (bookingId) => {
    for (const booking of bookings) {
        if (parseInt(bookingId) === booking.id) {
            return booking.bandId;
        }
    }
}

const bandInfoAlert = (bandId) => {
    for (const band of bands) {
        if (bandId === band.id) {
            window.alert(`
                Band Name: ${band.name} \n
                Band Genre: ${band.genre} \n
                Year Founded: ${band.yearFounded} \n`)
        }
    }
}

document.addEventListener("click", event => {
    if (event.target.id.startsWith("booking")) {
        const [,bookingId] = event.target.id.split("-")

        const bandId = grabBookingBandId(bookingId);
        bandInfoAlert(bandId);

    
    }
})

