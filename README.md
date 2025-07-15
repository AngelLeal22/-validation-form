# Formulario de Validación

Este proyecto implementa un formulario de registro con validaciones en tiempo real para cada campo, proporcionando retroalimentación visual al usuario.

## Características

* **Validación de Usuario**: Requiere al menos una letra minúscula, un número, y una longitud entre 6 y 16 caracteres.
* **Validación de Email**: Verifica un formato de correo electrónico estándar (ej: `usuario@dominio.com`).
* **Selección de País**: Permite al usuario seleccionar su país de una lista, actualizando el código telefónico automáticamente.
* **Validación de Número Telefónico**: Acepta solo números, con una longitud entre 6 y 9 caracteres.
* **Validación de Contraseña**: Requiere al menos una letra (mayúscula o minúscula), un número, y una longitud entre 6 y 16 caracteres.
* **Confirmación de Contraseña**: Asegura que ambas contraseñas coincidan.
* **Retroalimentación Visual**: Los campos cambian de color (verde para válido, rojo para inválido) y muestran mensajes informativos según la validación.
* **Diseño Responsivo**: Adaptado para una visualización adecuada en diferentes tamaños de pantalla.

## Tecnologías Utilizadas

* **HTML5**: Para la estructura del formulario.
* **CSS3**: Para el estilo y diseño, incluyendo el diseño responsivo.
* **JavaScript (ES6+)**: Para la lógica de validación y la manipulación del DOM.

## Estructura del Proyecto
├── index.html
├── style.css
└── script.js

* `index.html`: Contiene la estructura principal del formulario HTML.
* `style.css`: Define los estilos visuales de la aplicación.
* `script.js`: Contiene la lógica de JavaScript para las validaciones de los campos del formulario.

## Previsualización


<img width="1918" height="862" alt="image" src="https://github.com/user-attachments/assets/ae0e3c01-32ed-4eff-b9cf-40d473bd44a4" />




## Cómo Usar

1.  Clona el repositorio o descarga los archivos `index.html`, `style.css`, y `script.js`.
2.  Abre el archivo `index.html` en tu navegador web.
3.  Comienza a llenar el formulario y observa las validaciones en tiempo real.

## Instalación

No se requiere instalación de dependencias. Simplemente abre el archivo `index.html` en tu navegador.

## Contribuciones

Las contribuciones son bienvenidas. Si encuentras algún error o tienes sugerencias para mejorar, por favor abre un *issue* o envía un *pull request*.
