var url = 'https://newsapi.org/v2/top-headlines?' +
          'sources=bbc-news&' +
          'apiKey=1c20af33e7a44450a08180ca23287e35';

var req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    })
