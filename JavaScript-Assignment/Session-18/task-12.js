/*Find function causing JSON error.*/

function getUser() {

    return fetchUser();

}

function fetchUser() {

    return JSON.parse(undefined);

}

getUser();