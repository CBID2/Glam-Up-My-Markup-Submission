const submit = document.getElementsByTagName("button")[0];
const activity = document.getElementById("activity-select");

const newActivity = document.createElement("div");
newActivity.classList.add("newPlayerMessage");

submit.addEventListener("click", (event) => {
  event.preventDefault();
  if (!activity.value) {
    activity.style.backgroundColor = "#d83f16";
    activity.style.color = "white";
    setTimeout(() => {
      activity.style.backgroundColor = "";
      activity.style.color = "";
    }, 5000);
  } else {
    newActivity.classList.add("newPlayerEnteredIn");
    newActivity.textContent = `A new player who loves ${activity.value} entered into the party!`;
    submit.insertAdjacentElement("afterend", newActivity);
    submit.disabled = true;
    setTimeout(() => {
      newActivity.classList.remove("newPlayerEnteredIn");
        setTimeout(() => {
            newActivity.remove();
            submit.disabled = false;
        }, 1000);
    }, 5000);
  }
});
