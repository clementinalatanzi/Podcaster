export function mappingTop100Podcast(Top100Podcast) {

    //TODO console.info hacerlo solo para modo dev
        console.info("mappingData data: ", Top100Podcast)
     
        const podcastInfo = Top100Podcast.map(podcast => ({
            author: podcast['im:artist'].label,
            title: podcast.title.label.split("-")[0],
            urlImage: podcast['im:image'][2].label,
            description: podcast.summary.label.split(".")[0]+".",
            id: podcast.id.attributes['im:id']
        }))
        console.info("mappingData podcast: ", podcastInfo)
        return podcastInfo
    }