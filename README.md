# ChatGPT Demo

Este repositorio contiene una página estática publicada con **GitHub Pages**. Incluye un pequeño ejemplo de autenticación con [Supabase](https://supabase.com/).

## Configuración

1. Crea un proyecto en Supabase y habilita el registro por correo electrónico.
2. Copia la URL del proyecto y la "anon key" desde la sección de API.
3. Edita el archivo `main.js` y reemplaza `YOUR-PROJECT.supabase.co` y `YOUR-ANON-KEY` por tus valores reales.
4. Haz *push* de los cambios a la rama que utilices para GitHub Pages (`main` o `work`).
5. El cliente se guarda en `supabaseClient = supabase.createClient(...)`. No lo nombres `supabase` porque esa variable ya la define la librería y producirá un error de inicialización.

Al acceder a `https://<usuario>.github.io/<repositorio>/` podrás registrarte, iniciar sesión y cerrar sesión usando Supabase Auth. El contador del ejemplo funciona de manera local y no requiere backend.
