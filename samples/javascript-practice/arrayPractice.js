const array = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
        "userId": 1,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
        "userId": 2,
        "id": 5,
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    }]

// Find the object which id is 4
// Find the object which id is 4 using for loop
let foundObject = undefined

for (let i = 0; i < array.length; i++) {
    object = array[i];
    if (object.id == 1) {
        foundObject = object
    }
}

// Find the object which id is 4 using forEach loop
let foundObject2 = undefined

array.forEach((object) => {
    if (object.id == 1) {
        foundObject2 = object
    }
})

// Find the object which id is 4 using arrow functions

foundObject3 = array.find(object => object.id == 4)

// Find the object which userId = 1
// find() always returns the first object
foundObject4 = array.find(object => object.userId == 1)

// Find all objects that have userId = 1
// filter() returns an array
foundArray = array.filter(object => object.userId == 1)

// Does the array contain an object with userId = 1
// some() returns an boolean
foundSome = array.some(object => object.userId == 5)

if (foundSome != undefined) {
    console.log(foundSome)
}




