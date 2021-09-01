function loadAlbums(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(data => displayAlbums(data))
}

loadAlbums();

function displayAlbums(data){
    const albumDiv = document.getElementById('albums')
    for (const album of data){
        const p = document.createElement('p');
        p.style.textAlign = 'center';
        p.innerText = `${album.title}`
        albumDiv.appendChild(p);
    }
}