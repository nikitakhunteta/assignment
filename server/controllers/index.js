const path = require('path');
const fs = require('fs');
const PAGE_SIZE=20;

const fetchHotels=(req,res)=>{
  let data;
  fs.readFile(path.join(__dirname, '../static/data.json'), 'utf-8', function (err, data) {
    if (err){ throw err};
      data=JSON.parse(data).data;
      const pageNo=Number(req.query.pageNumber);
      let listings=(data.results.listings);
      let totalPages= Math.ceil(listings.length/PAGE_SIZE);

      delete data.results.listings;
      listings=listings.slice((pageNo-1)*PAGE_SIZE,(pageNo-1)*PAGE_SIZE+PAGE_SIZE);
      data={info:{...data.results},listings:{
        data: listings,
        totalPages
      }};
      res.json(data);
  });
}
module.exports=fetchHotels ;
