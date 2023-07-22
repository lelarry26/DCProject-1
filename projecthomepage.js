const form = document.getElementById("gameSearch");
const gameData = document.getElementById("gameData");

const gameSpotAPI = "42ca3a8ff2dc770f2e69d2367678840e5faef0ce"
// const rawgAPi = "ff0ae1ba7da843b6af414828bfa56f91"
form.addEventListener('submit', (event) => {
event.preventDefault();
console.log(event);
const gameSearch = event.target.gameSearch.value;
// const date = new Date();
// let tmrwYear = date.getYear().toString().substr(-2);
// let tmrwMonth = String(date.getMonth() + 1).padStart(2, "0");
// let tmrwDay = date.getDate() + 1;
// let tmrwDate = `${tmrwYear}${tmrwMonth}${tmrwDay}`;
// gameList.innerHTML = "";



//below fetch will use search box and pull all games matching that search query in data
  fetch(`https://cors-proxy.fringe.zone/https://www.gamespot.com/api/games/?format=json&filter=name:${gameSearch}&api_key=${gameSpotAPI}`)
  .then(res => res.json())
  .then(data => {
    console.log(data)
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
    data.results.map((datum) => {
      const gameListItem = document.createElement("data");
      const gameList = document.getElementById("gameList");
      gameList.appendChild(gameListItem);
      gameListItem.innerHTML = `
       <div class="container">
            <p class="containerP">${datum.name}</p>
        </div>

        <div id="someid" class="container2">
            <p>Test</p>
            <p>Test</p>
            <p>Test</p>
        </div>
  
      `
    })
    // if (`${datum.image.original}` === null) {
    //     document.getElementsByTagName("img").innerHTML = "<img src='https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-1.jpg'>"
    //   }
  })

});

let showVideoEmbed = (embed, msg, element) => { 
  let video = document.createElement("video");

  let newHeight = embed.video.height < 300 ? embed.video.height : 400;

  video.style.height = newHeight + 'px';
  video.style.width = 'auto';

  let url = embed.video.proxyURL ? embed.video.url : embed.video.url;
  video.src = url;
  video.classList.add("previewImage");
  
  video.onmouseenter = e => {
    video.setAttribute('controls', 'true');
  }

  video.onmouseleave = e => {
    video.removeAttribute('controls');
  }
  
  video.onclick = e => {
    video.paused ? video.play() : video.pause();
  }

  video.onended = e => {
    video.currentTime = 0;
  }

  element.appendChild(video);
}
      // ${datum.name}
      //   <img src="${datum.image.original}" width = "200" height = "150">
      //   <h1>${datum.name}</h1>
      //     TEST
      //     <div id="dataresult">${datum.release_date}</div>