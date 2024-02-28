// const filmTitle = document.getElementById("title");
// const filmYear = document.getElementById("year");
// const filmDirector = document.getElementById("direction");
// const filmDescription = document.getElementById("description");
// const filmPoster = document.getElementById("poster");

// async function getData (){
//     const res = await ("https://katerinaonix8585.github.io/fakeApi/%7B%20%7D%20data.json");
//     const data = await res.json();
//     const {title, year, direction, description, poster} = data;
//     filmTitle.textContent = title;

// }

// getData();

const filmTitle = document.getElementById("title");
const filmYear = document.getElementById("year");
const filmDirector = document.getElementById("direction");
const filmDescription = document.getElementById("description");
const filmPoster = document.getElementById("poster");

async function getData() {
    
        const res = await fetch("https://katerinaonix8585.github.io/fakeApi/%7B%20%7D%20data.json");
        const data = await res.json();

        const { title, year, direction, description, poster } = data;

        filmTitle.textContent = title;
        filmYear.textContent = year;
        filmDirector.textContent = direction;
        filmDescription.textContent = description;        
        filmPoster.src = poster;    
}

getData();
