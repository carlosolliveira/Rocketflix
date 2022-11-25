var api_info
var dataMovie
(async () => {
    var data = await fetch("/js/info_api.json");
    api_info = await data.json()
    console.log(api_info)
    getMovie(807)
})()

async function parseJson(x){
    dataMovie = await x.json()
    setM()
}

function notFuond(){
    // getMovie()
}

async function getMovie(x){
    var data = await fetch(`${api_info.URL_BASE}${x}?api_key=${api_info
    .KEY_API}&language=pt-BR`).then((response) => {
        if(response.status == '200'){
            parseJson(response)
        }
        else{
            console.log(response.status)
            getMovie(339403)
        }
    }).catch(() => getMovie([136797, 20945][Math.round(Math.random() * 2)]))
}

function setM(){
    document.querySelector("body > main > section > article.content-random > div.cover > img").src = `${api_info.URL_COVER}${dataMovie.poster_path}`
    document.querySelector("body > main > section > article.content-random > div.describe > h2").innerText = dataMovie.title
    document.querySelector("body > main > section > article.content-random > div.describe > p").innerText = dataMovie.overview
    document.querySelector("body > main > section > article.content-random").style.display = "flex"
}

function randommovie(){
    var num = Math.ceil(Math.random() * 1000 + Math.ceil(Math.random() * new Date().getSeconds() * new Date().getMinutes()))
    getMovie(num)
    console.log(num)
}
