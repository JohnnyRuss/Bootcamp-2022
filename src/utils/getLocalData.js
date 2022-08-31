/**
 *
 * @returns existing form-data information and boolean values about which type of form-data exists and which not
 */
export function getFormDataFromLocal() {
  const reservedData = JSON.parse(localStorage.getItem('reservedInfo'));

  const existingCollaboratorData =
    reservedData?.collaboratorData &&
    Object.values(reservedData.collaboratorData).some((val) => val !== '');

  const existingPcData =
    reservedData?.pcData && Object.values(reservedData.pcData).some((val) => val !== '');

  return { reservedData, existingCollaboratorData, existingPcData };
}

export function getLocaleStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function setDataToLocale(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function removeFromLocale(key) {
  localStorage.removeItem(key);
}
