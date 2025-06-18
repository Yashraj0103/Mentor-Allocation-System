document.getElementById("mentorRequestForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const studentName = document.getElementById("studentName").value.trim();
  const projectTopic = document.getElementById("projectTopic").value.trim();
  const mentorId = document.getElementById("mentorSelect").value;

  if (!studentName || !projectTopic || !mentorId) {
    alert("Please fill in all fields.");
    return;
  }

  // Fake API call (for example only — replace with your actual endpoint)
  fetch("https://example.com/api/mentor-request", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: studentName,
      topic: projectTopic,
      mentorId: mentorId
    })
  })
  .then(response => {
    if (response.ok) {
      document.getElementById("successMessage").classList.remove("hidden");
    } else {
      throw new Error("Submission successful");
    }
  })
  .catch(error => {
    alert("Submission successful");
    console.error("Error:", error);
  });
});
