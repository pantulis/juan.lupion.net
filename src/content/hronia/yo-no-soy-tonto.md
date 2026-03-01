---
title: "Yo no soy tonto"
meta_title: "" 
description: "" 
date: 2004-03-30T00:00:00Z
image: "/images/image-placeholder.png"
categories: []
author: "Epaminondas Pantulis" 
tags: []
draft: false
---

El fin de semana pasado, en el suplemento Mediamarkt que vienen regalando con el país detecté una interesante oferta.   Se trataba de un teclado y ratón óptico inalámbricos marca Trust, concretamente el modelo 305KS wireless optical desk set por unos 27€.  Siendo como soy temeroso de Linux pululé un poco por la red en busca de información y parecía ser que el teclado y el ratón no tienen mayor problema para funcionar bajo cualquier distribución de Linux.    Así pues, esta era una compra redonda, supuse.



Ayer por la tarde, que medio llovía medio que no, nos plantamos en el MediaMarkt de Alcorcón con vistas a hacernos con el susodicho producto.  Y héteme aquí que mirando por las estanterías, curiosamente el único combo de pack y ratón que aparece es el muy similar 302KS Silverline, por el mismo precio.  La diferencia básica entre un producto y otro es que el 302KS incorpora un ratón tradicional (con bola de las que se llenan de diferentes sustancias orgánicas con el paso del tiempo).  Dado que no pienso volver a la edad del año 92, decidí que esta no era mi compra y supuse que mi memoria me estaba engañando: lo que venía en el folleto regalado con El País no era el 305KS sino el 302KS, y yo me había hecho un lío buscando referencias.



Saliendo por el pasillo de los teclados me encontré, sin embargo, con otra interesante oferta.  Todo un teclado y ratón óptico inalámbricos marca Logitech por 44€.  Eso sí, con un ratón perfectamente simétrico, ideal para zurdos.   Y me lo llevé.



Tras pasar por caja, Bea tuvo la malévola idea de hacerse con uno de los panfletos publicitarios de ofertas, para comprobar si en efecto era yo el que me había liado o si, como se barruntaba, era algo peor y más siniestro.



Y, consultando que te consultarás, lo descubrimos.  En efecto, en la oferta, aparecía claramente señalado el modelo 305KS con ratón óptico.  En el lineal, por el mismo precoi, estaba el modelo 302KS, con ratón de bola.  Y yo que no me compré ese y me compré el Logitech por un pico más.



Cuánta razón tiene la publicidad de MediaMarkt.  Yo no soy tonto.  Yo lo que soy es un gilipollas.





Desventuras aparte, el teclado y ratón Logitech funcionan sin más problemas bajo Linux.  En Fedora Core 1 parece que hay algún problema para detectar los dispositivos si uno usa el conector USB (también es cierto que hace unas semanas estuve trasteando con los _scripts_ de hotplug, así que puede que me cargase algo), pero pinchando en el puerto PS/2 de toda la vida, no tuve ni que reiniciar X.  



Una cosa que me sorprendió es la sensibilidad del ratón. El ratón que sustituí ayer (y que heredará mi padre, seguramente, en un caso extraño de herencia hacia arriba) era un ratón óptico Logitech con cable comprado hace unos dos años.  Pues bien, el nuevo ratón (probablemente fabricado con una tecnología más avanzada) resulta ser mucho más sensible y preciso (aunque también más pesado, aunque está por ver si esto es un inconveniente o una ventaja)...  En Gnome esto se resuelve fácilmente yendo a las preferencias de ratón.



Lo que no se resuelve tan fácilmente en Gnome es cómo mapear la miríada de teclitas especiales que trae el teclado.  Con 'xev' he comprobado que en efecto X recibe bien las pulsaciones de las teclas, el problema es hacer que Gnome (o al menos la versión de Gnome que viene con Fedora) haga algo con ellas.  La aplicación de preferencias de teclado deja configurar algunas de ellas, pero básicamente para la navegación entre ventanas y escritorios.  No parece que haya forma de definir atajos con teclas personalizadas.



Si usara KDE, por el contrario, esto no sería ningún problema.

