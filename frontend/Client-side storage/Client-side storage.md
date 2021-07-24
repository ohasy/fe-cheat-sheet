https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage#new_school_web_storage_and_indexeddb

let db = null;
window.onload = function () {

const req = window.indexedDB.open("mydb",1);

req.onsuccess = () => {
db = req.result;
console.log("db loaded sucessfully");
}

req.onerror = (e) => {

    console.log("som error occured", e);

}

req.onupgradeneeded = (e) => {

    let db = e.target.result;

    let objectStore = db.createObjectStore("userdata_os",{keyPath: 'id', autoIncrement: true});

    objectStore.setIndex("fname", "fname", {unique: false});
    objectStore.setIndex("lname", "lname", {unique: false});

}

}

function addDatad (e) {
if (e) e.preventDefault();
let newItem = {fname: "Yash",lname: "ojha"};

let transaction = db.transaction(['userdata_os'], 'readwrite');

let objectStore = transaction.objectStore('userdata_os');

let req = objectStore.add(newItem);

req.onsuccess = () => {
// some logic
}

transaction.oncomplete = function () {
consoole.log("completed");

}
transaction.onerror = function () {
consoole.log("some error");
}

}
