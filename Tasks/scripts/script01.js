let tbody = document.querySelector(".tbody")

let users=[]


fetch("https://jsonplaceholder.typicode.com/users")
.then((response) =>{
   return response.json()
}).then((data) =>{
    users = data
    addToPage(users)
})


function addToPage(user) {
    for (let i = 0; i < user.length; i++) {
        let element = `
            <tr>
                <td>${user[i].id}</td>
                <td>${user[i].name}</td>
                <td>${user[i].email}</td>
                <td><button class="del">Delete User</button></td>
            </tr>
        `
        tbody.innerHTML = tbody.innerHTML + element
    }
}

tbody.addEventListener("click" , (e)=>{
    if (e.target.classList.contains("del")) {
        let parent = e.target.parentElement
        parent.parentElement.remove()
    }
})