// Configura tu proyecto de Supabase
const supabaseUrl = 'https://cglbtmtfbyrocnjxgsnl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNnbGJ0bXRmYnlyb2Nuanhnc25sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkxMzk1ODEsImV4cCI6MjA2NDcxNTU4MX0.OJer4k012_lV8B8jg1SnHNBzKtEKgUgFDryidAF5GDc';
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

// Registro de usuario
const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const { error } = await supabaseClient.auth.signUp({ email, password });
  if (error) {
    alert('Error al registrarse: ' + error.message);
  } else {
    alert('Registro exitoso. Revisa tu correo para confirmar.');
  }
});

// Inicio de sesión
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
  if (error) {
    alert('Error al iniciar sesión: ' + error.message);
  } else {
    alert('Sesión iniciada');
    document.getElementById('logout-button').style.display = 'block';
  }
});

// Cerrar sesión
const logoutButton = document.getElementById('logout-button');
logoutButton.addEventListener('click', async () => {
  await supabaseClient.auth.signOut();
  alert('Sesión cerrada');
  document.getElementById('logout-button').style.display = 'none';
});

// Contador de ejemplo
const button = document.getElementById('counterButton');
const countDisplay = document.getElementById('clickCount');
let count = 0;
button.addEventListener('click', () => {
  count += 1;
  countDisplay.textContent = count;
});
