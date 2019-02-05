const { generateBoard } = require('./board');

test('Generates default 10x10 board', () => {
  const board = generateBoard();

  expect(board).toHaveLength(10);

  board.forEach(a => {
    const expected = Array(10).fill(null);
    expect(a).toEqual(expected);
  });
});

test('Generates 5x5 board', () => {
  const board = generateBoard(5);

  expect(board).toHaveLength(5);

  board.forEach(a => {
    const expected = Array(5).fill(null);
    expect(a).toEqual(expected);
  });
});

test('Generates 10x5 board', () => {
  const board = generateBoard(10, 5);

  expect(board).toHaveLength(10);

  board.forEach(a => {
    const expected = Array(5).fill(null);
    expect(a).toEqual(expected);
  });
});

test('Generates 5x10 board', () => {
  const board = generateBoard(5, 10);

  expect(board).toHaveLength(5);

  board.forEach(a => {
    const expected = Array(10).fill(null);
    expect(a).toEqual(expected);
  });
});


