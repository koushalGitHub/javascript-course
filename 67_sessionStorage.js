// sessionStorage := In JavaScript, sessionStorage is another type of web storage similar to localStorage

// the sessionStorage is exits only within the current browser tab . Another tab with the same page will have a different storage.

// Storing data in sessionStorage
sessionStorage.setItem('name', 'John Doe');

// Retrieving data from sessionStorage
const storedName = sessionStorage.getItem('name');
console.log(storedName); // Output: John Doe

// Removing data from sessionStorage
sessionStorage.removeItem('name');

// Clearing all data from sessionStorage
sessionStorage.clear();
