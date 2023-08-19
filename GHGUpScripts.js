window.addEventListener("load", (event) => {
  event.preventDefault();
  const giantBombAPI = "4ccf8f3bad38d69d7a94f106fe749bdff1d91ef5";
  const date = new Date();
  let tmrwYear = date.getYear().toString().substr(-2);
  let tmrwMonth = String(date.getMonth() + 1).padStart(2, "0");
  let tmrwDay = date.getDate() + 1;
  let tmrwDate = `${tmrwYear}${tmrwMonth}${tmrwDay}`;

  // Initial Giantbomb Search
  fetch(
    `https://cors-proxy.fringe.zone/https://www.giantbomb.com/api/releases/?format=json&?&filter=release_date:${tmrwDate}|330701&sort=release_date:asc&api_key=${giantBombAPI}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      // Image
      const gameImages = document.querySelectorAll(".gameImage");
      gameImages.forEach((element, i) => {
        element.innerHTML = `<img id="pic" src="${data.results[i].image.small_url}">`;
      });

      //Names
      const gameNames = document.querySelectorAll(".gameName");
      gameNames.forEach((element, i) => {
        element.innerHTML = `${data.results[i].name}`;
      });

      //Blurb
      const gameBlurbs = document.querySelectorAll(".gameBlurb");
      gameBlurbs.forEach((element, i) => {
        element.innerHTML = `${data.results[i].platform.name}`;
      });

      //Release Date
      const gameReleases = document.querySelectorAll(".gameRelease");
      gameReleases.forEach((element, i) => {
        document.querySelectorAll(".gameRelease");
        if (
          `${data.results[i].expected_release_month}` === "null" ||
          `${data.results[i].expected_release_day}` === "null"
        ) {
          element.innerHTML = `No release date listed, only ${data.results[i].expected_release_year}`;
        } else if (
          `${data.results.expected_release_month}` !== "null" ||
          `${data.results.expected_release_day}` !== "null"
        ) {
          element.innerHTML = `Releases on ${data.results[i].expected_release_month}-${data.results[i].expected_release_day}-${data.results[i].expected_release_year}`;
        }
      });

      //Game URL
      const gameURL = document.querySelectorAll(".gameURL");
      gameURL.forEach((element, i) => {
        element.innerHTML = `Check out - <a href="${data.results[i].site_detail_url}">here</a>`;
      });
    });
});
