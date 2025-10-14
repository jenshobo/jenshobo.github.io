const nameInput = document.getElementById("nameInput");
const radioInputs = document.querySelectorAll("input[name='choice']");
const closeButton = document.getElementById("closeButton");
const letter = document.getElementById("letter");
const grinderSound = document.getElementById("grinderSound");
const slot = document.getElementById("shredder-slot");

let isFolded = false;
let isDragging = false;
let offset = { x: 0, y: 0 };

// Enable button when inputs are filled
function checkInputs() {
  const nameFilled = nameInput.value.trim() !== "";
  const choiceSelected = Array.from(radioInputs).some(input => input.checked);
  closeButton.disabled = !(nameFilled && choiceSelected);
}

nameInput.addEventListener("input", checkInputs);
radioInputs.forEach(input => input.addEventListener("change", checkInputs));

// Close and fold letter
closeButton.addEventListener("click", () => {
  letter.classList.add("folded");
  isFolded = true;
  makeDraggable();
});

// Drag setup
function makeDraggable() {
  letter.addEventListener("mousedown", startDrag);
  document.addEventListener("mousemove", drag);
  document.addEventListener("mouseup", endDrag);

  letter.addEventListener("touchstart", startDrag, { passive: false });
  document.addEventListener("touchmove", drag, { passive: false });
  document.addEventListener("touchend", endDrag);
}

function startDrag(e) {
  if (!isFolded) return;

  isDragging = true;
  letter.classList.add("dragging");

  const rect = letter.getBoundingClientRect();
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;

  offset.x = clientX - rect.left;
  offset.y = clientY - rect.top;
}

function drag(e) {
  if (!isDragging) return;
  e.preventDefault();

  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;

  letter.style.left = `${clientX - offset.x}px`;
  letter.style.top = `${clientY - offset.y}px`;

  checkIfOverSlot();
}

function endDrag() {
  if (!isDragging) return;
  isDragging = false;
  letter.classList.remove("dragging");
}

function checkIfOverSlot() {
  const slotRect = slot.getBoundingClientRect();
  const letterRect = letter.getBoundingClientRect();

  const isOverlapping =
    letterRect.right > slotRect.left &&
    letterRect.left < slotRect.right &&
    letterRect.bottom > slotRect.top &&
    letterRect.top < slotRect.bottom;

  if (isOverlapping) {
    shredLetter();
  }
}

function shredLetter() {
  if (letter.classList.contains("shredding")) return;

  letter.classList.add("shredding");
  grinderSound.play();

  letter.style.transition = "transform 1s ease, opacity 1s ease";
  letter.style.transform += " translateY(100px) scale(0.8)";
  letter.style.opacity = "0";

  setTimeout(() => {
    letter.remove();
  }, 1000);
}
