document.addEventListener("DOMContentLoaded", function () {
  const topicSelect = document.getElementById("topic");
  const chosenCatField = document.getElementById("chosenCatField");

  topicSelect.addEventListener("change", function () {
    if (this.value === "chosen") {
      chosenCatField.style.display = "block";
    } else {
      chosenCatField.style.display = "none";
    }
  });
});
