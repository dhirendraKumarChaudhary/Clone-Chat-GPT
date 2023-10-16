const input = document.getElementById('uInput');
const submitBtn = document.getElementById('submit');
const output = document.getElementById('output');

submitBtn.addEventListener('click', () => {
  const userQuestion = input.value;
  const dummyAnswer = 'This is the dummy answer for every question.';
  output.innerHTML += `<p>You: ${userQuestion}</p>`;
  output.innerHTML += `<p>Chat GPT: ${dummyAnswer}</p>`;
  input.value = '';
});

// getElementById("n-btn").addEventListener("click", newChat);

function newChat() {
  // Clear all existing chat messages
  document.getElementById("output").innerHTML = " ";
}