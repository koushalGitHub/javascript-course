//  cookies =  in javascript cookies are small piece of data those are stored in user's browser.
// in js document.cookie is provide the access to cookie.

//  cookies are set by a web server using the set cookie HTTP-header. next time when the request is sent to the some domain 

//question - how to server knows the who sent  the cookie?

//answer - When a client sends a request to a server, it includes the cookies associated with the domain in the HTTP request headers. The server can access these cookies from the cookie or headers.cookie property, depending on the framework or library you are using.

console.log(document.cookie);
document.cookie = "name=koushal";
console.log(document.cookie); // The first console.log might not show the updated cookie

document.cookie = "name2=koushal2";
console.log(document.cookie); // The second console.log will show both cookies



