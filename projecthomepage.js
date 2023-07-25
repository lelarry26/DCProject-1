const form = document.getElementById("gameSearch");
const gameData = document.getElementById("gameData");


const gameSpotAPI = "42ca3a8ff2dc770f2e69d2367678840e5faef0ce"
const giantBombAPI = "17243f34422c1b6b140df1f00cfa3ad42fc7af79"

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      console.log(event);
      const gameSearch = event.target.gameSearch.value;
      fetch(`https://cors-proxy.fringe.zone/https://www.gamespot.com/api/games/?format=json&filter=name:${gameSearch}&limit=10&sort=release_date:asc&api_key=${gameSpotAPI}`)
      .then(res => res.json())
      .then(data => {
    console.log(data)
    data.results.forEach((datum) => {
          const gameListItem = document.createElement("data");
          const gameList = document.getElementById("gameList");
          gameList.appendChild(gameListItem);
          gameListItem.innerHTML = `
        <div class="card-group">
          <div class="card" id = "gameImage">
          <img class="card-img-top" src="${datum.image.original}" width = "200" height = "150"></div>
          <div class="card-body" id="card-body">
            <h5 id="gameName">${datum.name}</h5>
            <p id="gameDescription">${datum.description}</p>
          </div>
          </div>
          <ul id="list-group list-group-flush">
            <li id="gameSite">${datum.site_detail_url}</li>
          </ul>
          <div class="card" id="card-body">
            <a href="#" id="card-link1"></a>
            <a href="#" id="card-link2"></a>
          </div>
        </div>
        `
    })
  })
})