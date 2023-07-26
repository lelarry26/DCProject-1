const form = document.getElementById("gameSearch");
const gameData = document.getElementById("gameData");

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const gameSearch = event.target.gameSearch.value;
  const giantBombAPI = "4ccf8f3bad38d69d7a94f106fe749bdff1d91ef5";
  const gameSpotAPI = "42ca3a8ff2dc770f2e69d2367678840e5faef0ce"
  const date = new Date();
  let tmrwYear = date.getYear().toString().substr(-2);
  let tmrwMonth = String(date.getMonth() + 1).padStart(2, "0");
  let tmrwDay = date.getDate() + 1;
  let tmrwDate = `${tmrwYear}${tmrwMonth}${tmrwDay}`;

 
    // Initial Giantbomb Search
    const giantBombResponse = await fetch(`https://cors-proxy.fringe.zone/https://www.giantbomb.com/api/games/?format=json&filter=name:${gameSearch},original_release_date:${tmrwDate}|20331231&api_key=${giantBombAPI}`);
    const giantBombData = await giantBombResponse.json();
    console.log(giantBombData);
    const image = document.getElementById("gameImage");
    const gameName = document.getElementById("gameName");
    const gameDescription = document.getElementById("gameDescription");
    const releaseDate = document.getElementById("releaseDate");
    const knowMore = document.getElementById("knowMore");
  
    if (giantBombData.number_of_total_results < Number(1)){
      image.setAttribute ("src", "https://media.gettyimages.com/id/584562884/photo/marmot-at-hole-home.webp?s=2048x2048&w=gi&k=20&c=EuEu0WDG-fSYPfWUh2MlKKve1Eg9MdUmHSOniAGJfIk=")
      gameName.innerHTML = "Sorry, it looks like that game has already been released or may not have a release date yet";
      gameDescription.innerHTML = "";
      releaseDate.innerHTML = "";
      knowMore.innerHTML = "";
    }

    else if (giantBombData.number_of_total_results >= Number (1)){
      giantBombData.results.map((datum) => {    
      image.setAttribute ("src", `${datum.image.small_url}`)
      gameName.innerHTML = `${datum.name}`;
      gameDescription.innerHTML = `${datum.deck}`;
      releaseDate.innerHTML = `Expected release date - ${datum.expected_release_month}-${datum.expected_release_day}-${datum.expected_release_year}`;
      knowMore.innerHTML = "";
        
        
      // `
      // <div class="container-fluid">
      //     <div class="row">
      //     <img src="${datum.image.small_url}" id = "pic"  alt="gamepicture">
      //       <div id="gameinfo" class="col">
      //         <h1>${datum.name}</h1>
      //         <p id="gametxt" class="text-wrap">${datum.deck}</p>
      //         <br>
      //         <h2> Expected release date - ${datum.expected_release_month}-${datum.expected_release_day}-${datum.expected_release_year}</h2>
      //         <h3>Would you like to know more?</h3>
      //         <p>Check out - <a href="${datum.site_detail_url}">here</a></p>
      //     </div>
      // </div>


      // </br>
      //   <div id="videoContainers" class="container-fixed">
      //     <div class="row align-items-start">
      //       <div class="col">
      //         <video class="video" id="gameVid1" height="400" width="400">vid1</video>
      //       </div>
      //       <div class="col">
      //         <video class="video" id="gameVid2" height="400" width="400">vid2</video>
      //       </div>
      //       <div class="col">
      //         <video class="video" id="gameVid3" height="400" width="400">vid3</video> 
      //       </div>
      //       <div class="col">
      //         <video class="video" id="gameVid4" height="400" width="400">vid3</video> 
      //       </div>
      //     </div>
      //   </div>`
        });
      }
    const gameSpotResponse = await fetch(`https://cors-proxy.fringe.zone/https://www.gamespot.com/api/videos/?format=json&filter=title:${gameSearch},publish_date:220101|${tmrwDate}&api_key=${gameSpotAPI}`);
    const gameSpotData = await gameSpotResponse.json();

    console.log(gameSpotData);
    let videoContainer1 = document.getElementById("gameVid1");
    let videoContainer2 = document.getElementById("gameVid2");
    let videoContainer3 = document.getElementById("gameVid3");
    let videoContainer4 = document.getElementById("gameVid4");
    videoContainer1.setAttribute("src", `${gameSpotData.results[0].low_url}`);
    videoContainer2.setAttribute("src", `${gameSpotData.results[1].low_url}`);
    videoContainer3.setAttribute("src", `${gameSpotData.results[2].low_url}`);
    videoContainer4.setAttribute("src", `${gameSpotData.results[3].low_url}`);
    videoContainer1.setAttribute("controls","true");
    videoContainer2.setAttribute("controls","true");
    videoContainer3.setAttribute("controls","true");
    videoContainer4.setAttribute("controls","true");
})