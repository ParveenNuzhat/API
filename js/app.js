function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json.title))
}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data))
}

function displayUsers(data){
    const ul = document.getElementById('users');
    for(const user of data){
        const li = document.createElement('li');
        li.innerText = `${user.name} email:${user.email}`;
        ul.appendChild(li);
        // console.log(user);
        // console.log(user.name);
    }
}

function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data.slice(0, 20)))
}


