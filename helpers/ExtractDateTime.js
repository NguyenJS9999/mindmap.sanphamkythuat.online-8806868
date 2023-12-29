function addLeadingZero(value) {
return value < 10 ? `0${value}` : value;
}
export function extractDateTime(dateTimeString) {
const dateTime = new Date(dateTimeString);

const year = dateTime.getFullYear();
const month = dateTime.getMonth() + 1;
const day = dateTime.getDate();
const hours = dateTime.getHours();
const minutes = dateTime.getMinutes();
const seconds = dateTime.getSeconds();

return `${addLeadingZero(day)}/${addLeadingZero(month)}/${year} - ${addLeadingZero(hours)}:${addLeadingZero(minutes)}:${addLeadingZero(seconds)}`
}

export function ISOextractDateTime(dateTimeString) {
    const originalDateObject = new Date(dateTimeString);
    const year = originalDateObject.getFullYear();
    const month = originalDateObject.getMonth() + 1;
    const day = originalDateObject.getDate();
    const hours = originalDateObject.getHours();
    const minutes = originalDateObject.getMinutes();
    const seconds = originalDateObject.getSeconds();
    const milliseconds = originalDateObject.getMilliseconds();

    const isoDateString = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}T${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}.${milliseconds}Z`;
    return isoDateString
}