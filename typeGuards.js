// Write a TypeScript function processValue that takes string | number | boolean | null | undefined, uses type guards to log uppercase strings, numbers fixed to two decimals, and boolean as "True"/"False,” and throws an error for null or undefined, including a type assertion to narrow the type.


function ProcessValue(value: string | number | boolean | null | undefined){
    if(value === null || value === undefined)
        throw new Error("Wrong entry!")

    if(typeof value === 'string') {
        console.log(value.toUpperCase())
    } else if(typeof value === 'number'){
        console.log(value.toFixed(2))
    } else(typeof value === 'boolean'){
        console.log(value);
    }
    
    // EXAM REQUIREMENT: Type Assertion example
    // Sometimes exams want you to force a type check like this:
    // let strLen = (value as string).length;
}