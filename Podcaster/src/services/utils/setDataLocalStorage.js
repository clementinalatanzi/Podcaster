
export function setDataLocalStorage(storageKey, mappingData, timeKey) {
    const currentTime = new Date().getTime();
    localStorage.setItem(storageKey, JSON.stringify(mappingData));
    localStorage.setItem(timeKey, currentTime);

}