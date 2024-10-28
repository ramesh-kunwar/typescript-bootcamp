// types for objects
type Coordinate = {
  x: number;
  y: number;
};

const originPoint: Coordinate = {
  x: 0,
  y: 0,
};

console.log("x coordinate is ", originPoint.x);

let coord: Coordinate = {
  x: 1,
  y: 2,
};

coord.x = 3;
coord.y = 4;

function printCoordinate(coord: Coordinate) {
  console.log(`x: ${coord.x}, y: ${coord.y}`);
}

printCoordinate(coord);
printCoordinate({ x: 10, y: 20 });

// type alliases within type alliases

type Location = {
  coord: Coordinate;
  name: PersonName;
};

let home = {
  coord: {
    x: 1,
    y: 2,
  },
  name: "Home",
};

home.coord.x = 1;

const yPos = home.coord.y;
const homeName = home.name;
