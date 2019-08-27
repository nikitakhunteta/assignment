const path = require('path');
const fs = require('fs');

const PAGE_SIZE = 20;

const fetchHotels = (req, res) => {
  let hotelsData;
  fs.readFile(path.join(__dirname, '../static/data.json'), 'utf-8', (err, data) => {
    if (err) {
      throw err;
    }
    hotelsData = JSON.parse(data).data;
    const pageNo = Number(req.query.pageNumber);
    let { results: { listings } } = hotelsData;
    const totalPages = Math.ceil(listings.length / PAGE_SIZE);

    delete hotelsData.results.listings;
    listings = listings.slice((pageNo - 1) * PAGE_SIZE, (pageNo - 1) * PAGE_SIZE + PAGE_SIZE);
    hotelsData = {
      info: {
        ...data.results
      },
      listings: {
        data: listings,
        totalPages
      }
    };
    res.json(hotelsData);
  });
};
module.exports = fetchHotels;
