
document.getElementById("fetchUsersBtn").addEventListener('click' , fetchUsers);

function fetchUsers(){

    fetch('https://reqres.in/api/users')
    .then(response => response.json())

    .then(data =>{
        console.log(data.data);

        let output = "";
        data.data.forEach(user =>{
            console.log(user)
            output += `
            <div class = "user-card">
                 <img src = "${user.avatar}"  alt = "user.avatar">
                 <div class = "user-details">
                 <span class = "id">${user.id}</span>
                     <span class = "name">${user.first_name} ${user.last_name}</span>
                    
                     <span  class = "email">${user.email}</span>
            </div>
          </div>`
        })
        document.getElementById('usersList').innerHTML = output;
    })
}