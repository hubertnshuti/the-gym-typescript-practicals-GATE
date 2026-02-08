// This is The Gym assessment for testing the use of string literal types in TypeScript.

// THE QUESTION
// // Update the function signature so that all tests pass

// function move(direction: string, distance: boolean) {}

// // TESTS

// move('up', 10);
// move('left', 5);

// move(
//   // @ts-expect-error - "up-right" is not a valid direction
//   'up-right',
//   10
// );

// move(
//   // @ts-expect-error - "down-left" is not a valid direction
//   'down-left',
//   20
// );

// move(
//   'up',
//   // @ts-expect-error - "20" is not a valid distance
//   '20'
// );



//MY APPROACH
type direct = 'up' | 'left' | 'down' | 'right'
function move(direction: direct, distance: number) {}

// TESTS

move('up', 10);
move('left', 5);

move(
  // @ts-expect-error - "up-right" is not a valid direction
  'up-right',
  10
);

move(
  // @ts-expect-error - "down-left" is not a valid direction
  'down-left',
  20
);

move(
  'up',
  // @ts-expect-error - "20" is not a valid distance
  '20'
);



















