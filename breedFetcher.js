const request = require('request');

const userinput = process.argv[2];
request(`https://api.thecatapi.com/v1/breeds/search?q=${userinput}`, function(error, response, body) {

  if (error) {
    console.error(error);
    return;
  }

  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);

  const description = data[0].description;
  console.log(description);

  // const {description} = data[0];   // object destructuring
  // console.log(description);
  
  //file written successfully
});