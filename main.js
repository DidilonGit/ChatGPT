// Configura tu proyecto de Supabase
const supabaseUrl = 'https://YOUR-PROJECT.supabase.co'; // Reemplaza con tu URL
const supabaseKey = 'YOUR-ANON-KEY'; // Reemplaza con tu anon key
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Registro de usuario
const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const { error } = await supabase.auth.signUp({ email, password });
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
  const { error } = await supabase.auth.signInWithPassword({ email, password });
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
  await supabase.auth.signOut();
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
