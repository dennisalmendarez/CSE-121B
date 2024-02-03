/* LESSON 3 - Programming Tasks */

/* Profile Object  */

const myProfile = { 
    name: "Dennis Almendarez",
    photo: "images/me.jpg",
    favoriteFoods: ["Pizza", "Soup", "Tacos", "Pasta"],
    hobbies: ["Read", "soccer", "videogames", "movies"],
    placesLived: []
};

myProfile.placesLived.push({
    place: 'Cortes, Honduras',
    length: "17 years"
}, {
    place: "Orlando, Florida",
    length: "10 years"
});

document.querySelector('#name').textContent = myProfile.name
document.querySelector('#photo').src = myProfile.photo

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

// if object have more than one, code together: note to me

myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    document.querySelector('#places-lived').appendChild(dt);

    let dd = document.createElement('dd');
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dd);
});

// const nameElement = document.getElementById('name');

// nameElement.innerHTML = `<strong>${myProfile.name}<strong>`;

/* Populate Profile Object with placesLive objects */




/* DOM Manipulation - Output */

/* Name */

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */



