// Practical question
// Solve all the typing issues in the code without changing the implementation

type Person = {
    name: string,
    age: number
}

type RangeTuple = [boolean, Person]

type RangeOutput = {
    x: boolean,
    y: boolean 
}

const setRange = (range: RangeTuple): RangeOutput => {
  const x = range[0];
  const y = range[1];

  return { x, y: y.age > 10 };
};

console.log(setRange([true, { name: 'Patrick', age: 3}]))



//2 
// Solve all the typing issues in the code without changing the implementation

type msgInfo = { 
    to: string; 
    text?: string 
}

const sendMessage = (message: msgInfo): string => {
    if(message.text !== undefined)
        throw new Error("No text!")
    const txt = (message.text as unknown)
    return (txt as string).toUpperCase();
};

sendMessage({ to: 'Alice' });