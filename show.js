async function show() {
    try {
        let url = `https://5ef168c81faf160016b4d5b2.mockapi.io/movie`;
        let options = {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
        };

        let response = await fetch(url, options);
        let results = await response.json();
        console.log = results;
        results.forEach((getData, data) => {
            let tampil = document.getElementById("content1");
            let cards = document.createElement("div");
            cards.setAttribute("class", "display-card");
            cards.innerHTML = `
            <img src="${getData.imageLink}" class="header" alt="${getData.title}" />
            <div class="card-body">
            <h4 class="card-title">${getData.title}</h4>
              <div class="card-text">
                <span>
                Genre : ${getData.genre}
              </span><br/>
              <span>
                Realese Date : ${getData.release}
              </span>
              </div>`;
            tampil.appendChild(cards);
        });
    } catch (error) {
        console.error(error);
    }
}

show();