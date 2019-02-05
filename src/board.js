function generateBoard (xSize, ySize) {
  if (xSize === undefined && ySize === undefined) {
    xSize = ySize = 10;
  } else if (Number.isInteger(xSize) && ySize === undefined) {
    ySize = xSize;
  }
 
  return Array(xSize).fill(Array(ySize).fill(null));
}

module.exports = {
  generateBoard,
};
