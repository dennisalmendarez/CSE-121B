/* LESSON 3 - Programming Tasks */

/* Profile Object  */

const myProfile = { 
    name: "Dennis Almendarez",
    photo: "images/me.jpg",
    favoriteFoods: ["Pizza", "Soup", "Tacos", "Pasta"],
    hobbies: ["Read", "soccer", "videogames", "movies"],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
    place: 'Cortes, Honduras',
    length: "17 years"
}, {
    place: "Orlando, Florida",
    length: "10 years"
});


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name


/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});


/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    document.querySelector('#places-lived').appendChild(dt);

    let dd = document.createElement('dd');
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dd);
});// if object have more than one, code together: note to me