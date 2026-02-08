// Write a generic function identity that returns the value it receives without changing the type.

function returning<T>(value: T): T{
    return value;
}