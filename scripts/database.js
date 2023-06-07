const database = {
  bands: [
    {
      id: 1,
      name: "Pixies",
      genre: "pop",
      yearFounded: 2009
    },
    {
      id: 2,
      name: "Trash Compactors",
      genre: "punk",
      yearFounded: 2000
    },
    {
      id: 3,
      name: "Crawler",
      genre: "metal",
      yearFounded: 1989
    },
    {
      id: 4,
      name: "Excavator",
      genre: "metal",
      yearFounded: 1996
    },
    {
      id: 5,
      name: "Dump Truck",
      genre: "pop",
      yearFounded: 2008
    },
    {
      id: 6,
      name: "Not Your Sister",
      genre: "rap",
      yearFounded: 1992
    },
    {
      id: 7,
      name: "Dragline",
      genre: "rap",
      yearFounded: 2007
    },
    {
      id: 8,
      name: "Simply Sarah",
      genre: "punk",
      yearFounded: 1995
    },
    {
      id: 9,
      name: "Grader",
      genre: "metal",
      yearFounded: 2005
    },
    {
      id: 10,
      name: "Bulldozer",
      genre: "metal",
      yearFounded: 2006
    }
  ],

  venues: [
    {
      id: 1,
      name: "Columbia",
      address: "0 6th Center",
      squareFeet: 3019,
      maxOccupancy: 83
    },
    {
      id: 2,
      name: "Campos do Jordão",
      address: "1 Hintze Parkway",
      squareFeet:
        4320, maxOccupancy: 58
    },
    {
      id: 3,
      name: "Nowa Sarzyna",
      address: "0 Mendota Parkway",
      squareFeet:
        4004, maxOccupancy: 78
    },
    {
      id: 4,
      name: "Jiangqiao",
      address: "060 Nevada Park",
      squareFeet: 3128,
      maxOccupancy: 179
    },
    {
      id: 5,
      name: "Stockholm",
      address: "082 Buell Hill",
      squareFeet: 3948,
      maxOccupancy: 135
    },
    {
      id: 6,
      name: "Dobra",
      address: "57 Emmet Alley",
      squareFeet: 2776,
      maxOccupancy: 96
    }
  ],

  bookings:[
  {
    id: 1,
    bandId: 9,
    venueId: 6,
    bookingDate: "01/30/2023"
  }, {
    id: 2,
    bandId: 5,
    venueId: 5,
    bookingDate: "05/31/2023"
  }, {
    id: 3,
    bandId: 5,
    venueId: 2,
    bookingDate: "10/28/2022"
  }, {
    id: 4,
    bandId: 6,
    venueId: 5,
    bookingDate: "06/20/2023"
  }, {
    id: 5,
    bandId: 2,
    venueId: 5,
    bookingDate: "11/21/2023"
  }, {
    id: 6,
    bandId: 8,
    venueId: 6,
    bookingDate: "10/06/2022"
  }, {
    id: 7,
    bandId: 8,
    venueId: 6,
    bookingDate: "07/23/2022"
  }, {
    id: 8,
    bandId: 2,
    venueId: 6,
    bookingDate: "09/15/2022"
  }, {
    id: 9,
    bandId: 10,
    venueId: 2,
    bookingDate: "11/05/2023"
  }, {
    id: 10,
    bandId: 8,
    venueId: 1,
    bookingDate: "11/12/2023"
  }, {
    id: 11,
    bandId: 8,
    venueId: 4,
    bookingDate: "06/15/2023"
  }, {
    id: 12,
    bandId: 7,
    venueId: 2,
    bookingDate: "02/12/2023"
  }, {
    id: 13,
    bandId: 4,
    venueId: 5,
    bookingDate: "03/23/2023"
  }, {
    id: 14,
    bandId: 3,
    venueId: 1,
    bookingDate: "11/09/2022"
  }, {
    id: 15,
    bandId: 4,
    venueId: 1,
    bookingDate: "05/13/2023"
  }, {
    id: 16,
    bandId: 4,
    venueId: 4,
    bookingDate: "08/23/2022"
  }, {
    id: 17,
    bandId: 5,
    venueId: 3,
    bookingDate: "03/15/2023"
  }, {
    id: 18,
    bandId: 3,
    venueId: 3,
    bookingDate: "07/17/2023"
  }]
}

export const getBands = () => {
	return database.bands.map(bandParam => ({...bandParam}))
}

export const getVenues = () => {
	return database.venues.map(venueParam => ({...venueParam}))
}

export const getBookings = () => {
	return database.bookings.map(bookingParam => ({...bookingParam}))
}