---
title: "HTML5: No es eso, no es eso"
meta_title: "" 
description: "" 
date: 2010-06-06T00:00:00Z
image: "/images/image-placeholder.png"
categories: []
author: "Epaminondas Pantulis" 
tags: []
draft: false
---

Desde que el W3C declaró oficialmente cerrada la gran guerra entre XHTML y la propuesta del WHATWG (los detalles los explica Mark Pilgrim [diveintohtml5.org](http://diveintohtml5.org/past.html)),   HTML5 ha venido siendo la futura bala de plata que hará libres a los desarrolladores web.



¿Compatibilidad entre navegadores?  Lo tienes.  ¿Defenestración definitiva de Flash?  Lo tienes.   ¿Visualizaciones en 3D con aceleración gráfica? Lo tienes. ¿Almacenamiento local? Lo tienes.  ¿Geoposicionamiento?  Lo tienes.  Así, una tras otra, una retahíla de funcionalidades lo suficientemente kilométrica como para hacer salivar a desarrolladores curtidos o zoquetes.  Tanto es así, que ante cualquier requerimiento extraño uno podría decir sin temor a equivocarse demasido aquello de: «Eso podría hacerse con HTML5».  



Pero, al estilo de Ortega cuando contemplaba el panorama y veía adónde se encaminaba la II República hace 80 años, me parece que la promesa que representa HTML5 no sólo tiene que madurar bastante (por supuesto, se trata de un estándar muy reciente, y los navegadores web no se programan de un día para otro) sino que aún puede descarrilar y dar lugar a un escenario más sombrío del que pintan los defensores.  



¿Cómo es esto posible?  Véase la reciente demo de HTML5 publicada por Apple, en [apple.com](http://www.apple.com/html5/).  El enunciado de la página lo dice a las claras: «HTML5 y estándares web».  Pero la realidad es bien distinta: intentemos cargar esta página con otro navegador, por ejemplo Firefox, y veremos algo así como esto:









Que, a  mi entender, se parece demasiado a esto otro que seguro que nos trae infaustos recuerdos:









Con lo que Apple viene a decirnos algo parecido a «Lo sentimos por los estándares, pero cuando se trata de hacer virguerías, preferimos usar las nuestras».   Adecuada la [my.opera.com](http://my.opera.com/haavard/blog/2010/06/04/apple-html5) que vienen a ser el Pepito Grillo de estas cosas (lógicamente, por la cuenta que les trae)



¿Resucita el _browser sniffing_?



A día de hoy no queda más remedio, esa es mi conclusión.  Algo tan sencillo como reproducir sonidos en MP3 en un navegador recientísimo (versiones de desarrollo de Chrome, Firefox y Safari) devuelve resultados desesperanzadores.  Firefox, por supuesto, no reproducirá otra cosa que no sean OGG, y Chrome y Safari, a pesar de poder hacerlo -al menos en mi Mac- devuelven a través de la API "estándar" de Javascript resultados como "maybe" y "probably" (la diferencia de significado entre un valor y otro escapa a mi entendimiento)  De forma que la manera más sofisticada de detectar el soporte de cada navegador consiste en hacks [gist.github.com](http://gist.github.com/253174) donde se intenta reproducir el mp3 más pequeño posible (que es el chorizo que aparece codificado en base64) y se analizan los eventos disparados por el motor JS del navegador.  Y todo esto, para saber si podemos reproducir mp3s.  



Y ni hablemos del tema del vídeo, que será como esto pero mucho peor. Nos quedamos con la [twitter.com](http://twitter.com/jmorrill/status/15433447435):





"HTML5 quiere decir que no tengo que instalar plugins para ver los contenidos, sólo tengo que instalar un nuevo navegador para cada sitio"









