const btns = document.querySelectorAll(".btn-toggle");
const questions = document.querySelectorAll(".question");
questions.forEach((question) => {
  const btn = question.querySelector(".btn-toggle");
  btn.addEventListener("click", () => {
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show-question");
      }
    });
    question.classList.toggle("show-question");
  });
});
