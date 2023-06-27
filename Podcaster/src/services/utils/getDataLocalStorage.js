import { calculateDateDifference } from "../../utils/Date/dateUtils";

export function getDataLocalStorage(storageKey, timeKey) {

    const storedPodcasts = localStorage.getItem(storageKey);
    const parsedPodcasts = storedPodcasts ? JSON.parse(storedPodcasts) : null
    const lastRequestTime = localStorage.getItem(timeKey);
    const currentTime = new Date().getTime();

    if (parsedPodcasts &&
        lastRequestTime &&
        calculateDateDifference(currentTime, lastRequestTime)) {
        return parsedPodcasts
    } else return null
}