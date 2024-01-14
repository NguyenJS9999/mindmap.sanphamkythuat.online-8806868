
export function setLocalStorage (name = "name", data = []) {
	const dataString = JSON.stringify(data);
	localStorage.setItem(name, dataString);
}

export function getLocalStorage (name = "name") {
	const dataParse = JSON.parse(localStorage.getItem(name));
	return dataParse;
}