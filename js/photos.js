function loadPhotos(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => displayPhotos(data.slice(0, 100)))
}

function displayPhotos(data){
    const urlDiv = document.getElementById('photos')
    for (const photo of data){
        const div = document.createElement('div');
        div.classList.add('photo');
        div.innerHTML =`
            <img src="${photo.url}" alt="">
        `
        urlDiv.appendChild(div)
    }
}