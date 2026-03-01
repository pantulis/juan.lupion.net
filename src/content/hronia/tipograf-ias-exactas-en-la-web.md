---
title: "Tipografías exactas en la web"
meta_title: "" 
description: "" 
date: 2005-12-17T00:00:00Z
image: "/images/image-placeholder.png"
categories: []
author: "Epaminondas Pantulis" 
tags: []
draft: false
---

Como cualquier diseñador gráfico sabe, una página web no es el lugar más adecuado para montar unos fuegos artificiales con la tipografía.   Cierto es que la cosa ha avanzado mucho desde los tiempos en que veíamos las páginas con fondo gris en Mosaic y las especificaciones CSS permiten manejar los tipos que aparecen en la página con bastante flexibilidad: si un usuario no tiene instalado un tipo de letra, podemos especificar cuál se usará en su lugar.  Pero esto a veces no es suficiente y además supone una restricción a la que no se enfrenta el diseñador gráfico cuando plasma su trabajo en papel o en otros formatos electrónicos como PDF.



Existe una solución basada en Flash que se llama [mikeindustries.com](http://www.mikeindustries.com/blog/archive/2004/08/sifr) Es una solución buena porque está distribuida bajo la licencia CC-GNU LGPL (podeis descargar el paquete [mikeindustries.com](http://www.mikeindustries.com/blog/files/sifr/2.0/sIFR2.0.1.zip))



La técnica, descrita con detalle [mikeindustries.com](http://www.mikeindustries.com/blog/archive/2004/08/sifr) consiste simplemente en marcar el texto que deseamos mostrar con cierta tipografía y adjuntar código Javascript con nuestra página.  Si Flash no está instalado (o se encuentra inhabilitado con [flashblock.mozdev.org](http://flashblock.mozdev.org/)) el texto se mostrará tal cual en la página web, pero si el entorno de navegación del usuario es el adecuado se crean películas Flash que muestran el texto con el tipo de letra y tamaño deseados por el diseñador (aunque el usuario no lo tenga instalado)



Lo interesante es que además el documento sigue siendo accesible, porque sIFR actúa sólo en el nivel de presentación del documento, **no** sobre el documento en sí.



(Gracias, [canteli.com](http://www.canteli.com))



