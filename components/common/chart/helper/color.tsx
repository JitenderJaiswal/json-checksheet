export const generateRandomColors = (numColors: any) => {
  var colors = [];
  for (var i = 0; i < numColors; i++) {
    colors.push(getRandomColor());
  }
  return colors;
};

const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
