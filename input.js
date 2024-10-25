const { stdin } = require("process");
const { PLAYER_NAME, PLAYER_UP, PLAYER_DOWN, PLAYER_LEFT, PLAYER_RIGHT, PLAYER_SAYS} = require("./constants");

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;  // create variable to hold the stdin object so we don't have to type process.stdin multiple times
  stdin.setRawMode(true); // Raw Mode allows us to listen for individual keypresses instead of waiting for the user to press enter
  stdin.setEncoding("utf8"); // utf8 encoding is set so that we can read the text data that is input
  stdin.resume(); // resume stdin so the program can listen for input
  stdin.on('data', handleUserInput);
  return stdin;   // return the stdin object so we can use it elsewhere in the program
};

const handleUserInput = function(key) {
  if (key === "\u0003") {
    process.exit();
  }
  if (key === "w") {
    connection.write(PLAYER_UP);
  }
  if (key === "a") {
    connection.write(PLAYER_LEFT);
  }
  if (key === "s") {
    connection.write(PLAYER_DOWN);
  }
  if (key === "d") {
    connection.write(PLAYER_RIGHT);
  }
  if (key === 'q') {
    connection.write(PLAYER_SAYS);
  }
};

module.exports = { setupInput };