//Arquivo que autntica com sua conta Google para puxar os vídeos do Youtube

function authenticate() {
    console.log(gapi.load)
    return gapi.auth2.getAuthInstance()
        .signIn({ scope: "https://www.googleapis.com/auth/youtube.readonly" })
        .then(function () { console.log("Sign-in successful"); },
            function (err) { console.error("Error signing in", err); });
}
function loadClient() {
    gapi.client.setApiKey("AIzaSyAHM5iwTVvLppGw2JL9V96A2eYjlnHSEBw");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(() => {
            getVideos()
        });
}
// Make sure the client is loaded and sign-in is complete before calling this method.
function getVideos() {
    return gapi.client.youtube.videos.list({
        "part": [
            "snippet,contentDetails,statistics"
        ],
        "chart": "mostPopular",
        "maxResults": 100,
        "regionCode": "US"
    }).then(response => {
        renderizarVideos(response.result.items)
    })
}

// Client key - 8fWHj5HxaxsHYrUWy4XxtRZS

window.addEventListener('load', () => {
    gapi.load("client:auth2", function () {
        gapi.auth2.init({ client_id: "770678261439-mf58rueejhflrcfh09ij8e0eoia2orpu.apps.googleusercontent.com" });

        authenticate().then(loadClient)
    });

})