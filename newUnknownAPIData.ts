// You receive data from an API as unknown type. Create a function called validateUser that:
// Takes an unknown parameter
// Checks if it's an object with name (string) and age (number) properties
// Returns the validated object typed as { name: string; age: number } or throws an error if validation fails

// Then create a type called `PartialUser` using TypeScript's utility types that makes all properties of your user type optional.


type User = {
    name: string,
    age: number
}

function validateUser(x: unknown): User{
    if(typeof x == 'User'){

    }
}

type PartialUser<T> = {
    <K in keyof T>?: T[K]
}

