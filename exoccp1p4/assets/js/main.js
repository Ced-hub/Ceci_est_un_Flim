/* 

        Send all data requests to:
        http://www.omdbapi.com/?apikey=5cef6346&

        Poster API requests:
        http://img.omdbapi.com/?apikey=5cef6346&

        */



apiKey = '5cef6346';

        function flimWeb() {
            $.ajax({
                url: 'https://www.omdbapi.com/?apikey=' + apiKey + '&s=' + $('#search')[0].value,
                type: 'GET',

                success: function (data) {
                    console.log(data)
                    for (const iterator of data['Search']) {
                        if (iterator.Type == 'movie')
                            $.ajax({
                                url: 'https://www.omdbapi.com/?apikey=5cef6346&i=' + iterator.imdbID,
                                type: 'GET',

                                success: function (dataBis) {
                                    console.log(dataBis);
                                    $('#displayFilm').append(`
                                        <div class="card col-auto mt-5 me-5 ms-5 mb-5 shadow" style="width: 35%; background-color: #212529;">
                                                <img src="${dataBis.Poster}" class="card-img-top" alt="${dataBis.Title}">
                                            <div class="card-body" style="background-color: #212529;">
                                                <h5 class="card-title" style="color: red;"><u>${dataBis.Title}</u></h5>
                                                <p class="card-text" style="color: white;">
                                                    <strong>Date de sortie :</strong> ${dataBis.Released}<br>
                                                    <strong>Acteurs :</strong> ${dataBis.Actors}<br>
                                                    <strong>Durée : </strong>${dataBis.Runtime}<br>
                                                    <strong>Genre :</strong> ${dataBis.Genre}<br>
                                                    <strong>Synopsis :</strong> ${dataBis.Plot}
                                                </p>
                                            </div>
                                        </div>`
                                    );

                                }
                            })
                    }
                },          
            })
        }