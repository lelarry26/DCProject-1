const form = document.getElementById("gameSearch");
const gameData = document.getElementById("gameData");


const gameSpotAPI = "42ca3a8ff2dc770f2e69d2367678840e5faef0ce"
const giantBombAPI = "17243f34422c1b6b140df1f00cfa3ad42fc7af79"
// const rawgAPi = "ff0ae1ba7da843b6af414828bfa56f91"

// const date = new Date();
// let tmrwYear = date.getYear().toString().substr(-2);
// let tmrwMonth = String(date.getMonth() + 1).padStart(2, "0");
// let tmrwDay = date.getDate() + 1;
// let tmrwDate = `${tmrwYear}${tmrwMonth}${tmrwDay}`;
// gameList.innerHTML = "";



//below fetch will use search box and pull all games matching that search query in data
  // fetch(`https://cors-proxy.fringe.zone/https://www.gamespot.com/api/games/?format=json&filter=name:${gameSearch}&api_key=${gameSpotAPI}`)
  // fetch(`https://cors-proxy.fringe.zone/https://www.gamespot.com/api/games/?format=json&filter=name:${gameSearch}&api_key=${gameSpotAPI}`)
  // .then(res => res.json())
  // .then(data => {
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

// Card Layout
// `<div class="card-group">
// <div class="card">
//   <img class="card-img-top" src="${datum.image.original}" style=object-fit:contain alt="Card image cap">
//   <div class="card-body">
//     <h5 class="card-title" id="gameName">${datum.name}/h5>
//     <h6>
//     <p class="card-text" id="gameDescription">${datum.description}</p>
//   </div>
// </div>

// <div class="card">
//   <img class="card-img-top" src="..." alt="Card image cap">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
//     <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//   </div>
// </div>
// </div>`
//reached max
  //   data.results.map((datum) => {
  //     const gameListItem = document.createElement("data");
  //     const gameList = document.getElementById("gameList");
  //     gameList.appendChild(gameListItem);
  //     gameListItem.innerHTML = `
  //     <div class="card">
  //     <div id = "gameImage">
  //     <img src="${datum.image}" width = "200" height = "150"></div>
  //     <div id="card-body">
  //       <h5 id="gameName">${datum.name}</h5>
  //       <p id="gameDescription">${datum.description}</p>
  //     </div>
  //     <ul id="list-group list-group-flush">
  //       <li id="gameSite">${datum.site_detail_url}</li>
  //       <li id="gameGenre">${datum.number_of_user_reviews}</li>
  //     </ul>
  //     <div id="card-body">
  //       <a href="#" id="card-link1"></a>
  //       <a href="#" id="card-link2"></a>
  //     </div>
  //   </div>
  //     `
  //   });
    // fetch(`https://cors-proxy.fringe.zone/https://www.gamespot.com/api/videos/?filter=association:5000-${data.results.id}?format=json&api_key=${gameSpotAPI}`)
    //  .then(res => res.json())
    // .then(data => {
    // console.log(data)
    // data.results.map((datum) => {
    //   console.log(datum);
    // })
    //   })
    //   fetch(`https://cors-proxy.fringe.zone/https://www.gamespot.com/api/videos/?filter=association:5000-${data.results.id}&api_key=${gameSpotAPI}`)
    //   .then(res => res.json())
    //    .then(data => {
    //  console.log(data)
    //  data.results.map((datum) => {
    //    console.log(datum);
    //  })
    //    });

  
        // for(i=0; i<data.results.length; i++){
    //   const gameListItem = document.createElement("button");
    //   const gameList = document.getElementById("gameList");
    //   gameList.appendChild(gameListItem);
    //   gameListItem.innerHTML = `
    //     ${data.results[i].name}
    //     <img src="${data.results[i].image.original}" 
    //       onclick="location.href='./GameSearch.html?gameSearch=${data.results[i].name}';" width = "200" height = "150">
    //       TEST
    //       <div id="dataresult">${data.results[i].release_date}</div>
    //   `
    // if (`${datum.image.original}` === null) {
    //     document.getElementsByTagName("img").innerHTML = "<img src='https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-1.jpg'>"
    //   }

      // ${datum.name}
      //   <img src="${datum.image.original}" width = "200" height = "150">
      //   <h1>${datum.name}</h1>
      //     TEST
      //     <div id="dataresult">${datum.release_date}</div>