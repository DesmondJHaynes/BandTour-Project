const toContainer = document.querySelector("#container")


const websiteHtml = `
<section class="header-title">
    <h1>TOURgasm<h1>
</section>
<div class="site-info">
    <section class="site-info bookings">
        <h2>The Band's All Booked!<h2>
        {bookings list}
    </section>
    <section class="site-info venues-bands">
        <div class="site-info venues">
            <h2>The Venues<h2>
            {venues list}
        </div>
        <div class="site-info bands">
            <h2>Our Bodacious Bands<h2>
            {bands list}
        </div>
    </section>
</div>`
// place index html structure here^