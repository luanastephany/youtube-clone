const galeria = document.getElementById('videos')

/* APENAS UMA "MULETA"

const objetoVideo = {
    snippet: { //objeto que a API vai retornar
        title: 'Sing to you',
        thumbnail: {
            standard: {
                url: 'https://i.ytimg.com/vi/VwNbP9WTcg4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDKemTsFfcOAXBwWeUe4KuE7l490w'
            },
        },
        channelTitle: 'IcyDaRabbit'
    }
}
*/


function getVideoHtml(video) {
    return `
    <div class="video">
        <div class="thumbnail">
        <img
            src="${video.snippet.thumbnails.default.url}">
        <span class="duration">15:00</span>
        </div>
        <div class="details">
        <img
            src="https://yt3.ggpht.com/ytc/AAUvwngHVAy247aqHsuYvR8uO5KX1OLn9A6Czz9Vm7-OJg=s88-c-k-c0x00ffffff-no-rj"
            alt="" class="channel">
        <div class="info">
            <span class="title">${video.snippet.title}</span>
            <span class="channel-name">${video.snippet.channelTitle}</span>
            <span class="views-date">1,1 mi de visualizações &#8226; há 2 anos </span>
        </div>
        </div>
    </div>
    `
}

function renderizarVideos(videos) {
    let html = ''

    videos.forEach((video) => {
        html += getVideoHtml(video)
    })

    galeria.innerHTML = html
}

renderizarVideos()