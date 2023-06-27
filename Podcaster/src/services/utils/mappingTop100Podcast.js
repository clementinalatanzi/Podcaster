export function mappingTop100Podcast(Top100Podcast) {
 
        const podcastInfo = Top100Podcast.map(podcast => ({
            author: podcast['im:artist'].label,
            title: podcast.title.label.split("-")[0],
            urlImage: podcast['im:image'][2].label,
            description: podcast.summary.label.split(".")[0]+".",
            id: podcast.id.attributes['im:id']
        }))
        
        return podcastInfo
    }