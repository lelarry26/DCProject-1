const form = document.getElementById("gameSearch");
const gameData = document.getElementById("gameData");
  const gameSpotAPI = "42ca3a8ff2dc770f2e69d2367678840e5faef0ce"
  form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(event);
  const gameSearch = event.target.gameSearch.value;
  const date = new Date();
  let tmrwYear = date.getYear().toString().substr(-2);
  let tmrwMonth = String(date.getMonth() + 1).padStart(2, "0");
  let tmrwDay = date.getDate() + 1;
  let tmrwDate = `${tmrwYear}${tmrwMonth}${tmrwDay}`
  gameList.innerHTML = "";
  //below fetch will use search box and pull all games matching that search query in data
    fetch(`https://cors-proxy.fringe.zone/https://www.gamespot.com/api/games/?format=json&filter=name:${gameSearch}&api_key=${gameSpotAPI}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      for(i=0; i<data.results.length; i++){
        const gameListItem = document.createElement("li");
        const gameList = document.getElementById("gameList");
        gameList.appendChild(gameListItem);
        gameListItem.innerHTML = `
        ${data.results[i].name}
        `
      }
   });
  });