let currentRole = 'student';

function setRole(role) {
  currentRole = role;
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.querySelector(`.tab[onclick="setRole('${role}')"]`).classList.add('active');

  const loginBtn = document.getElementById('login-btn');
  loginBtn.textContent = `Login as ${role}`;
}

document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Dummy validation (replace this with your authentication logic)
  if (email && password) {
    if (currentRole === 'student') {
      window.location.href = 'student.html';
    } else if (currentRole === 'mentor') {
      window.location.href = 'mentors.html';
    } else if (currentRole === 'admin') {
      window.location.href = 'admin.html';
    }
  } else {
    alert('Please fill in both fields');
  }
});
