// click chat toggle
let boxsChat = document.querySelectorAll(".box-chat");
let chatsFriends = document.querySelector(".chats-friends");
let typeChat = document.querySelector(".type-chat");
let win = window;
let back = document.querySelector(".back svg");

// if (win.innerWidth < 991) {
//   chatsFriends.classList.remove("close-chat");
//   typeChat.classList.remove("open-chat");
// }

boxsChat.forEach((box) => {
  box.addEventListener("click", () => {
    chatsFriends.classList.add("close-chat");
    typeChat.classList.add("open-chat");
  });
});

back.addEventListener("click", () => {
  chatsFriends.classList.remove("close-chat");
  typeChat.classList.remove("open-chat");
});
// end click chat toggle
