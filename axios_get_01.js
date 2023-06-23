const axios = require("axios");


axios.get("https://jsonplaceholder.typicode.com/todos")
.then( resp => {
	console.log(resp.data)
})
.catch( error => {
	console.log(error)
});

