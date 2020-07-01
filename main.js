// Starter code for Create Your Own Array Methods Activity:

// sample arrays for testing your functions:
let testNumsArray = [3, 1, -5, 2, 105, -24, 495, 8, 246]
let testWordsArray = ['potato', 'rainbow', 'cloud', 'duck', 'orange', 'three']

// This is one example of implementing the functionality of forEach:
console.groupCollapsed('forEach')
function newForEach(array, callback){
    for (let index = 0; index < array.length; index = index + 1){
        let currentItem = array[index]
        callback(currentItem)
    }
}
console.groupEnd()
 
console.groupCollapsed('map')
function newMap(array, callback){
   
        let map1 = []
        for (let index = 0; index < array.length; index = index + 1){
            let currentItem = array[index]
            map1.push(callback(currentItem))
        
    }
    return map1
}
 console.groupEnd()

 console.groupCollapsed('some')
function newSome(array, callback){
    for (let index = 0; index < array.length; index = index + 1){
        let currentItem = array[index]
       
        callback(currentItem,index,array)
        
    }
    return  array.some(callback)
}
console.groupEnd()

console.groupCollapsed('find')
function newFind(array, callback){
    for (let index = 0; index < array.length; index = index + 1){
        let currentItem = array[index]
        callback(currentItem,index,array)
    }
    return array.find(callback)
}
console.groupEnd()
function newFindIndex(array, callback){
    for (let index = 0; index < array.length; index = index + 1){
        let currentItem = array[index]
        callback(currentItem,index,array)
    }
    return array.findIndex(callback)
}
console.groupCollapsed('every')
function newEvery(array, callback){
    for (let index = 0; index < array.length; index = index + 1){
        let currentItem = array[index]
        callback(currentItem,index,array)
    }
    return array.every(callback)
}
function newFilter(array, callback){
    for (let index = 0; index < array.length; index = index + 1){
        let currentItem = array[index]
        callback(currentItem,index,array)
    }
    return array.every(callback)
}
console.groupEnd()

console.groupCollapsed('filter')
function newFilter(array, callback){
    for (let index = 0; index < array.length; index = index + 1){
        let currentItem = array[index]
        callback(currentItem,index,array)
    }
    return array.filter(callback)
}
console.groupEnd()