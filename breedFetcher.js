const request = require('request');

// const userinput = process.argv[2];  // node breedFetcher.js Chartreux. When we run in terminal, 0utput is description of Chartreux
// request(`https://api.thecatapi.com/v1/breeds/search?q=${userinput}`, function(error, response, body) {

//   if (error) {
//     console.error(error);
//     return;
//   }

//   const data = JSON.parse(body);
//   console.log(data);
//   console.log(typeof data);

//   const description = data[0].description;
//   console.log(description);

//   // const {description} = data[0];   // object destructuring
//   // console.log(description);
  
//   //file written successfully
// });

// The description is fetched via an API request, which is network I/O. We use request which uses good Node practice by fetching our results asynchronously. Therefore, our fetch function also needs to be asynchronous. It should therefore accept a callback. We talked about how asynchronous functions can't simply return data in the previous cat exercise

// **************************************************
const fetchBreedDescription = function (breedName, callback) {
  
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  // const userinput = process.argv[2];  
  request(url, function(error, response, body) {
  
    // if (error) {
    //   console.error(error);
    //   return;
    // }
  
    // const data = JSON.parse(body);
    // console.log(data);
    // console.log(typeof data);
  
    // const description = data[0].description;
    // return description; 
    const data = JSON.parse(body);
    let desc;
    if (data[0] === undefined) {
      error = "no such breed";
      desc = null;
    } else {
      desc = data[0].description;
    }
    callback(error, desc); 
  });

}

module.exports = {
  fetchBreedDescription
}