// Define the config we'll need for our Api request
const url = 'https://graphql.anilist.co';

// Make separate HTTP Api requests for each anime ID
const animes = {
    "Ascendance of a Bookworm": 108268,
    "Sword Art Online": 11757,
    "Twin Start Exorcists": 21499,
    "GOSICK": 8425,
    "Demon Slayer": 101922,
    "Spy X Family": 140960,
    "Solo Leveling": 151807,
    "That Time I Got Reincarnated as a Slime": 101280,
    "Black Clover": 97940,
    "Clannad": 2167,
};

const animeList = [];

async function fetchAnimeData() {
    for (const title in animes) {
        const id = animes[title];
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: `
                    query ($id: Int) {
                    Media (id: $id, type: ANIME) {
                        id
                        title {
                            romaji
                            english
                            native
                        }
                        description
                        startDate {
                            year
                            month
                            day
                        }
                        endDate {
                            year
                            month
                            day
                        }
                        status
                        episodes
                        duration
                        genres
                        averageScore
                        popularity
                        source
                        coverImage {
                            large
                        }
                    }
                    }
                `,
                variables: {
                    id: id
                }
            })
        };

        try {
            const response = await fetch(url, options);
            const data = await handleResponse(response);
            handleData(data);
        } catch (error) {
            handleError(error);
        }
    }
    console.log(animeList);
    renderAnimeList();
    
    // document.querySelector("#anime").addEventListener("change", () => { filterAnimes(animeList)});
}

function handleResponse(response) {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

function handleData(data) {
    animeList.push(data);
    console.log(data);
}

function handleError(error) {
    alert('Error, check console');
    console.error(error);
}

const filterAnimes = (selectedAnimeId) => {
    const animeElements = document.querySelectorAll(".anime-info");

    animeElements.forEach(animeElement => {
        const animeId = animeElement.dataset.animeId;
        if (animeId === selectedAnimeId || selectedAnimeId === 'all') {
            animeElement.style.display = "block";
        } else {
            animeElement.style.display = "none";
        }
    });
}

document.querySelector("#anime").addEventListener("change", () => { 
    const selectedAnimeId = document.querySelector("#anime").value;
    filterAnimes(selectedAnimeId);
});

function renderAnimeList() {
    const animeContainer = document.getElementById("selection");
    animeContainer.innerHTML = ""; // Clear previous anime list

    animeList.forEach(animeData => {
        const anime = animeData.data.Media; // Access the Media object

        // Check if anime object and title are present
        if (anime && anime.title && anime.title.romaji) {
            const animeTitle = anime.title.romaji;
            const animeDescription = anime.description;
            const animeStartDate = anime.startDate.year;
            const animeEndDate = anime.endDate.year;
            const animeStatus = anime.status;
            const animeEpisodes = anime.episodes;
            const animeGenres = anime.genres.join(", ");
            const animeAverageScore = anime.averageScore;
            const animePopularity = anime.popularity;
            const animeSource = anime.source;
            const animeCoverImage = anime.coverImage.large;

            const animeInfoDiv = document.createElement("div");
            animeInfoDiv.classList.add("anime-info");
            animeInfoDiv.dataset.animeId = anime.id; // Set data attribute for anime ID

            const titleElement = document.createElement("h3");
            titleElement.textContent = animeTitle;

            const imageElement = document.createElement("img");
            imageElement.src = animeCoverImage;
            imageElement.alt = `${animeTitle} cover`;

            const detailsElement = document.createElement("p");
            detailsElement.innerHTML = `
                Description: ${animeDescription}<br>
                Start Date: ${animeStartDate}<br>
                End Date: ${animeEndDate}<br>
                Status: ${animeStatus}<br>
                Episodes: ${animeEpisodes}<br>
                Genres: ${animeGenres}<br>
                Average Score: ${animeAverageScore}<br>
                Popularity: ${animePopularity}<br>
                Source: ${animeSource}<br>
            `;

            // Append elements to animeInfoDiv
            animeInfoDiv.appendChild(titleElement);
            animeInfoDiv.appendChild(imageElement);
            animeInfoDiv.appendChild(detailsElement);

            // Append animeInfoDiv to animeContainer
            animeContainer.appendChild(animeInfoDiv);
        } else {
            console.error("Anime data is missing or invalid:", anime);
        }
    });
}

fetchAnimeData();