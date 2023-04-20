function myEach( collection, callback) {
    if (typeof collection === "object") {
        const collectionArray = Object.values(collection);
        collectionArray.forEach(element => callback(element));
        return collection
    }

    else {
        collection.forEach(element => callback(element));
        return collection
    }
    
}

function myMap (collection, callback) {
    if (typeof collection === "object") {
        const collectionArray = Object.values(collection);
        const finalArray = []
        collectionArray.forEach(element => finalArray.push(callback(element)));
        return finalArray
    }

    else {
        const collection2 = []
        collection.forEach(element => collection2.push(callback(element)));
        return collection2

    }
}

function myReduce(collection, callback, acc) {
    if (!acc) {
        acc = 0
    if (typeof collection === "object") {
        const collectionArray = Object.values(collection);
        acc = collectionArray[0]
        for (let i = 1; i < collectionArray.length; i++) {
            acc = callback(acc, collectionArray[i], collectionArray)
        }

        //collectionArray.forEach(element => acc = callback(acc, element, collectionArray));
        return acc
    }

    else {
        acc = collection[0];
        for (let i = 1; i < collection.length; i++){
            acc = callback(acc, collection[i], collection)
        }

        //collection.forEach(element => acc = callback(acc, element, collection));
        return acc

    }
    }
  else {
    if (typeof collection === "object") {
        const collectionArray = Object.values(collection);
        collectionArray.forEach(element => acc = callback(acc, element, collectionArray));
        return acc
    }

    else {
        collection.forEach(element => acc = callback(acc, element, collection));
        return acc

    }
        

  }  
}

function myFind(collection, predicate){
    if (typeof collection === "object") {
        const collectionArray = Object.values(collection);

        for(let i = 0; i < collectionArray.length; i++){
            if(predicate(collectionArray[i])){
                let answer = collectionArray[i]
                return answer;
            }

        }
    }
    else {
        for(let i = 0; i < collection.length; i++){
            if(predicate(collection[i])){
                let answer = collection[i]
                return answer;
            }

    }

}
}

function myFilter(collection, predicate){
    let answerArray = []
    if (typeof collection === "object") {
        const collectionArray = Object.values(collection);

        for(let i = 0; i < collectionArray.length; i++){
            if(predicate(collectionArray[i])){
                answerArray.push(collectionArray[i]);
                
            }
        }
    }
    else {
        for(let i = 0; i < collection.length; i++){
            if(predicate(collection[i])){
                answerArray.push(collection[i])
            }
    }
}
return answerArray;
}

function mySize(collection){
    if (typeof collection === "object") {
        const collectionArray = Object.values(collection);
        return collectionArray.length
        
    }
    else {
        return collection.length
}
}

function myFirst(array, n){
let answerArray = []
    if(!n){
        return array[0]
    }
    else{
        for(let i = 0; i < n; i++){
            answerArray.push(array[i])
        }
    }
    return answerArray
}

function myLast(array, n){
    let answerArray = []
    if(!n){
        return array[array.length-1]
    }
    else{
        for(let i = array.length - n; i < array.length; i++){
            answerArray.push(array[i])
        }
    }
    return answerArray

}

function myKeys(object){
    const collectionArray = Object.keys(object)
    return collectionArray;
}

function myValues(object){
    const collectionArray = Object.values(object)
    return collectionArray;
}