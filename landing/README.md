
---

## Descripción  
La landing page incluye:  
- **Header** con el título o logotipo del sitio.  
- **Hero section** con imagen principal y mensaje de bienvenida.  
- **Sección de características** (`.features`) con **3 tarjetas** (`<article>`).  
- **Footer** con información de contacto o derechos reservados.  

La maquetación usa **CSS Grid** en escritorio (3 columnas) y cambia a **1 columna** en móviles (≤768 px).

---

##  Tecnologías utilizadas  
- **HTML5** (estructura semántica)  
- **CSS3** (responsive con Grid y media queries)  

---

##  Accesibilidad  
- Orden de foco lógico y visible.  
- Texto alternativo (`alt`) en todas las imágenes.  
- Contraste de color **≥ 4.5:1**.  
- Encabezados jerárquicos (`<h1>`, `<h2>`, `<h3>`) usados correctamente.  

---

##  Performance  
- Declarados `width` y `height` en las imágenes.  
- Imágenes optimizadas (peso total **≤ 1 MB**).  
- Estructura CSS simple sin dependencias externas.  

---

##  Responsividad  
 Dispositivo  
 Diseño **Desktop (>768px)** | 3 columnas con `display: grid` |
| **Móvil (≤768px)** | 1 columna con `grid-template-columns: 1fr` |

---

---

##  Criterios de aceptación  
-  Estructura semántica correcta (`header`, `main`, `section`, `article`, `footer`).  
-  Diseño responsive funcional.  
-  Accesibilidad AA verificada.  
-  Performance óptima con imágenes livianas.  


