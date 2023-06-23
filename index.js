const axios = require("axios")



axios.get("https://jsonplaceholder.typicode.com/todos4/31")
.then( resp => {
      console.log(resp.data);
})
.catch( error =>{
      console.log(error)
});


