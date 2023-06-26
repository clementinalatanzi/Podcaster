import { calculateDateDifference } from "../../utils/utils/dateUtils";

export function getDataLocalStorage(storageKey, timeKey) {

    const storedPodcasts = localStorage.getItem(storageKey);
    console.log("store", storedPodcasts)
    const parsedPodcasts = storedPodcasts ? JSON.parse(storedPodcasts) : null
    const lastRequestTime = localStorage.getItem(timeKey);
    const currentTime = new Date().getTime();

    if (parsedPodcasts &&
        lastRequestTime &&
        calculateDateDifference(currentTime, lastRequestTime)) {
        return parsedPodcasts
    } else return null
}