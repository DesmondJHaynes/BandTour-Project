import { listBands } from "./bands.js";
import { listBookings } from "./bookings.js";
import { listVenues } from "./venues.js"

const toContainer = document.querySelector("#container")


const websiteHtml = `
<section class="header-title">
    <h1>TOURgasm</h1>
</section>
<div class="site-info">
    <section class="site-info bookings">
        <h2>The Band's All Booked!</h2>
        ${listBookings()}
    </section>
    <section class="site-info venues-bands">
        <div class="site-info venues">
            <h2>The Venues</h2>
            ${listVenues()}
        </div>
        <div class="site-info bands">
            <h2>Our Bodacious Bands</h2>
            ${listBands()}
        </div>
    </section>
</div>`
// place index html structure here^

toContainer.innerHTML = websiteHtml;