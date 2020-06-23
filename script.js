let addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', add);

async function add() {
    try {
        let title = document.getElementById('title').value;
        let genre = document.getElementById('genre').value;
        let release = document.getElementById('release').value;
        let imageLink = document.getElementById('imageLink').value;
        let description = document.getElementById('description').value;
        let userData = {
            title,
            genre,
            release,
            imageLink,
            description,
        };

        // Cek movie sudah terdaftar atau belum
        let url = `https://5ef168c81faf160016b4d5b2.mockapi.io/movie`;

        let response = await fetch(url);
        let allMovie = await response.json();

        let movieUser = allMovie.filter((user) => user.title === title);

        // Kalau sudah terdaftar
        if (movieUser.length > 0) {
            alert(`Movie sudah ada`);
        } else {
            // Kalau belum terdaftar, masukkan movie
            let options = {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(userData),
            };
            let response = await fetch(url, options);
            let result = await response.json();

            alert(`Terima kasih sudah memasukkan movie`);
        }
    } catch (error) {
        console.error(error);
    }
}