// You have an array that contains mixed data types: (string | number)[]. Write a function called separateTypes that takes this mixed array and returns an object with two properties:
// strings: an array containing only the string values
// numbers: an array containing only the number values

// Use proper type guards to check the types. 

// For example, if given [1, "hello", 2, "world", 3], it should return { strings: ["hello", "world"], numbers: [1, 2, 3] }.

type separatedData = {
    strings: string[],
    numbers: number[]
}

function separateTypes(arr: (string | number)[]): separatedData{
    const resultObject: separatedData = {
        strings: [],
        numbers: []
    }

    for(let elem of arr){
        if(typeof elem === 'string'){
            resultObject.strings.push(elem)
        }else if(typeof elem === 'number'){
            resultObject.numbers.push(elem)
        }
    }

    return resultObject

}