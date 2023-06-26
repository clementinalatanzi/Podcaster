export function mappingTop100Podcast(Top100Podcast) {

    //TODO console.info hacerlo solo para modo dev
        console.info("mappingData data: ", Top100Podcast)
     
        const podcastInfo = Top100Podcast.map(podcast => ({
            author: podcast['im:name'].label,
            title: podcast.title.label,
            urlImage: podcast['im:image'][2].label,
            description: podcast.summary.label,
            id: podcast.id.attributes['im:id']
        }))
        console.info("mappingData podcast: ", podcastInfo)
        return podcastInfo
    }