/* let p = fetch("https://api.apis.guru/v2/list.json")
p.then((value1) => {
    console.log("status = ", value1.status)
    return value1.json()            // promise mill jati 
}).then((value2) => {
    console.log(value2);          // or promise resolve hoti h ek aur promise se
}) */
//  Here's a breakdown of the code:
/* 
The fetch method is used to make a GET request to the specified URL.
The first then method is used to handle the resolved Response object. Inside this then method, the json method is called on the Response object to parse the JSON content.
The second then method is used to handle the resolved JSON data. Here, you can perform any necessary operations on the JSON data, such as logging it to the console or processing it further. */

//post request with fetch api

/* 
let option = {
    method: "post",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
}


fetch('https://jsonplaceholder.typicode.com/posts', option)
    .then((response) => response.json())
    .then((json) => console.log(json));
 */


// now we can learn with async and await
let createToDo = async () => {
    let option = {
        method: "post",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            title: "koushal",
            body: "developer",
            userId: 15,
        })
    }

    let f = await  fetch('https://jsonplaceholder.typicode.com/posts', option);
    let res = await f.json();
    return res
}

const getToDo = async (id)=>{
    const g = await  fetch('https://jsonplaceholder.typicode.com/posts/'+id );
    let result = await g.json();
    return result
}
let mainFun = async ()=>{
    let todo = await createToDo();
    // console.log(todo)

    const setV = await getToDo(2);
    console.log(setV);
}

mainFun()


// async await function return always promises.