// localStorage => localstorage is a web storage object which are not sent to server with each request .
// in js localStorage is a type of web storage that allows you to store key-value pair in web browser . it prvide a simple way to store data locally within the user's browser. The data stored in localStorage is presists even after the browser is closed and reopened , making it a usefull tool for applications that require presistent client-side storage.

// Storing data in localStorage
localStorage.setItem('name', 'John Doe');

// Retrieving data from localStorage
const storedName = localStorage.getItem('name');
console.log(storedName); // Output: John Doe

// Removing data from localStorage
localStorage.removeItem('name');

// Clearing all data from localStorage
localStorage.clear();
