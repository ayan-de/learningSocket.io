import { io } from "https://cdn.socket.io/4.8.1/socket.io.esm.min.js";
const form = document.getElementById("form");
const messageInput = document.getElementById("message-input");
const roomInput = document.getElementById("room-input");
const joinRoomButton = document.getElementById("room-button");

const socket = io("http://localhost:3000");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = messageInput.value;
  const room = roomInput.value;

  if (message === "") return;
  displayMessage(message);

  messageInput.value = "";
});

joinRoomButton.addEventListener("click", () => {
  const room = roomInput.value;
});

function displayMessage(message) {
  const div = document.createElement("div");
  div.textContent = message;
  div.classList.add("display-message");
  document.getElementById("message-container").append(div);
}
