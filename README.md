# TypeScript  

This repository contains practice code, solutions, and assessment questions for **The Gym** TypeScript Gate. The projects are designed to test and reinforce understanding of core and advanced TypeScript concepts.

##  Project Structure

The repository focuses on specific TypeScript features, with each file targeting a distinct concept:

| File Name | Concept Covered |
| :--- | :--- |
| `gate.ts` | **String Literal Types** & Function Signatures (Current Assessment) |
| `newAbstractClass.ts` | Abstract Classes and Inheritance |
| `newDiscriminatedUnion.ts` | Discriminated Unions for state management |
| `newMappedTyped.ts` | Mapped Types |
| `newSeparateTypes.ts` | Type Separation and Interfaces |
| `newUnknownAPIData.ts` | Handling `unknown` types safely |
| `genericFunction.js` | Generic Functions |
| `typeGuards.js` | Type Guards and Narrowing |

##  Assessment Example

As seen in `gate.ts`, the exercises involve fixing function signatures to ensure strict typing.

**Example Task:**
Update a function signature to accept specific string literals (e.g., `'up'`, `'down'`) instead of a generic `string`, and ensure correct parameter types.

```typescript
// Goal: Update signature so tests pass
function move(direction: 'up' | 'left', distance: number) {
  // Implementation
}

move('up', 10);   //  Allowed
move('left', 5);  //  Allowed
// move('down', 5); //  Error (Expected behavior)
