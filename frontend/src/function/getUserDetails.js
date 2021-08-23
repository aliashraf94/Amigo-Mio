
// Authorization": "Bearer"

const getUserDetails= (token, emailUser)  => new Promise(function(resolve) {

    let apiUsers = `/user/allusers/${emailUser}`;
 
    fetch(apiUsers, {
      method: 'GET',
      headers: {
          "Authorization": `Bearer ${token}`
      }
  }) 
    .then(res => {
      if (!res) {
        throw new Error(`HTTP error ! status : ${res.ok}`);
      } else {
        return res.json();
      }
    }) 
    .then(data => {
      if(!data.error){
        resolve(data)
        console.log(data)
      }else{
        console.log(data)
        resolve(data.error)
      }
    })
    .catch(e => console.log(e));   
  })
  
  
  export default getUserDetails;