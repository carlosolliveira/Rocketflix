var api_info

(async () => {
    var data = await fetch("/js/info_api.json");
    api_info = await data.json()
})()