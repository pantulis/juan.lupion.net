---
title: "Perl, Linux, Windows e Internet Explorer"
meta_title: "" 
description: "" 
date: 2003-12-19T00:00:00Z
image: "/images/image-placeholder.png"
categories: []
author: "Epaminondas Pantulis" 
tags: []
draft: false
---

Ayer por la noche, finalicé la instalación de [popfile.sourceforge.net](http://popfile.sourceforge.net), que es un detector de spam que utiliza la técnica del [hronia.blogalia.com](http://hronia.blogalia.com/historias/5907).  El único _obstáculo_ que se me planteó por el camino era la no presencia del módulo BerkeleyDB.pm en Fedora Core 1, pero la cosa fue tan sencilla como una visita al mirror CPAN más cercano, descargar, make e instalar.  



La ventaja -clave para mí- de  [popfile.sourceforge.net](http://popfile.sourceforge.net) es que funciona de entrada como un _proxy_ transparente, al contrario que otras alternativas más pesadas (y probablemente más potentes) como [spamassassin.org](http://www.spamassassin.org), que deben ser integradas en el sistema de entrega de correo que tengamos instalados (y no tengo ganas de pelearme con sendmail ni con ningún otro MTA, sea cual sea su pelaje).  El control mediante una interfaz web es un plus añadido, claro está.   (Añado aquí que además he estado unos días usando el magnífico [mozilla.org](http://www.mozilla.org/projects/thunderbird/ ), pero no sé por qué narices no funciona la detección de correo basura, que en Windows sí que va) 





En definitiva, ayer empecé a hacer las primeras pruebas con  [popfile.sourceforge.net](http://popfile.sourceforge.net) y descubrí un hecho curioso.  Como he comentado en [hronia.blogalia.com](http://hronia.blogalia.com/historias/5907), POPFile funciona bajo Windows y trae su propio programa de instalación que te despliega en un directorio su propia distribución de Perl.  Pues bien, bajo Windows es claramente perceptible el acceso a disco cada vez que uno intenta descargar correo.  No es un rascar de disco insoportable y es relativamente breve, pero está ahí.  Lo que me sorprendió fue descubrir que bajo Linux y en la misma máquina (un Athlon XP1800+ con 768 MB de RAM) no había ningún acceso a disco aparente y me asaltó la duda.



¿Por qué? 



Tengo varias teorías.



La primera, que Linux gestione la caché de disco de manera muy distinta a Windows XP.  Por eso en XP el análisis de spam (y la actualización de diccionarios y estadísticas) implicaría acceder físicamente al disco mientras que en Linux la buffer caché amortiguaría de forma transparente ese acceso.



La segunda, que la distribución de Perl que instala [popfile.sourceforge.net](http://popfile.sourceforge.net) ha sido compilada con alguna de las distribuciones GNU para Windows ([cygwin.com](http://www.cygwin.com), [mingw.org](http://www.mingw.org)), cuyos compiladores no son capaces de hacer un código tan eficiente como el usado por las distros de Perl de Linux, optimizadas incluso para cada procesador según el caso.



La tercera es que la mayor parte de los accesos a disco que uno comprueba en Windows no son debidos al acceso a las bases de datos de estadísticas y análisis del mensaje, sino al propio acceso al fichero de paginación para cargar el propio intérprete de Perl, que tras cierto rato sin usarse pasa a swap.   Pero en Linux es harina de otro costal; hay montones de scripts en Perl que uno usa inadvertidamente, por eso el código ejecutable de Perl está permanentemente en memoria y no hay que acceder a la memoria secundaria para "resucitarlo" cada vez que leemos el correo.  En este sentido, Perl sería como Internet Explorer en Windows: es más rápido _porque está siempre ahí_.



La respuesta correcta probablemente sea una combinación de las tres teorías.  ¿O hay alguna cuarta?



