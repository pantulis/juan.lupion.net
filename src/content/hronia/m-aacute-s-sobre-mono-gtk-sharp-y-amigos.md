---
title: "Más sobre Mono, Gtk-sharp y amigos"
meta_title: "" 
description: "" 
date: 2004-04-29T00:00:00Z
image: "/images/image-placeholder.png"
categories: []
author: "Epaminondas Pantulis" 
tags: []
draft: false
---

Recientemente, Miguel de Icaza ha escrito una interesante entrada en su bitácora acerca de las nuevas amenazas de Microsoft en el escritorio.    El _Imperio_, obviamente, no iba a quedarse dormido en los laureles de Windows XP y está moviendo sus cartas con astucia para no dejarse comer terreno por el empuje de los escritorios libres; y cuando Redmond hace bien los deberes se convierte en un enemigo imposible de batir  (de hecho es casi imposible de batir incluso si hace mal los deberes)  Básicamente, Microsoft pone en práctica otra vez lo que ya ha comentado alguna vez Joel Spolsky: todo se reduce a Disparar y Avanzar



Las armas con las que cuenta ahora Microsoft son XAML y Avalon.  Según he entendido, estas tecnologías vendrán a combinar definitivamente (y digo definitivamente porque _se suponía_ que Java iba a hacerlo) la riqueza de la interfaz de usuario de una aplicación de escritorio con la facilidad de despliegue de una aplicación web.   Básicamente, abres el navegador y ves una aplicación tan completa como, por poner un ejemplo, w.bloggar.  



En el mundo GNU, la única tecnología similar podría ser el XUL de Mozilla.  Tiemblo (y parece que Miguel también) de pensar que la única respuesta a la posiblemente formidable ofensiva de Gates sea el prehistórico dinosaurio. 



Aquí es donde entra en juego Mono.  Cuando Microsoft presentó su plataforma .NET (recordemos también Passport) tuvo cuidado de estandarizar y abrir la especificación del núcleo de la plataforma (el compilador y las librerías) permitiendo el desarrollo de alternativas libres ([go-mono.com](http://www.go-mono.com) es una de ellas, Portable .NET otra).     Al menos Mono, que es la alternativa que sigo, está avanzando a buen ritmo y en unos meses (según el [go-mono.com](http://www.go-mono.com/road-to-1.0.html) publicado por Miguel) habrá una brillante versión 1.0.   O lo que es lo mismo, Ximian habrá alcanzado el estado en el que estaba Microsoft hace un par de años. 



Y hablamos sólo del compilador y el entorno de ejecución, que es lo que estandarizó Microsoft.  En el desarrollo de aplicaciones de usuario, la cosa no es ni mucho menos tan brillante.  Hay un soporte de Windows.Forms que depende del uso de Wine (lo cual no resulta, al menos a priori, demasiado atractivo) y, por otro lado, hay una febril actividad alrededor de Gtk.Sharp, la capa de compatibilidad en C# sobre Gtk.



El problema con Gtk.Sharp es que no está suficientemente maduro.  Cualquiera que se plantee desarrollar aplicaciones de escritorio bajo GNU/Linux haría mejor en considerar otras opciones a no ser que esté dispuesto a perseguir un objetivo que se mueve, y deprisa.  La documentación de Gtk.Sharp es prácticamente inexistente (aunque Ximian dispone de una herramienta de documentación colaborativa, de momento hay pocos voluntarios colaborando,y la mayor parte de la documentación ha sido generada cuasi-automáticamente).   No hay un entorno de desarrollo oficial: Glade parece una broma, aunque Monodevelop promete mucho, aún le quedan unos meses (más o menos para cuando Mono alcance status 1.0)  Tampoco abundan los ejemplos de código que mirar, la mayor parte del cual se encuentra en CVS.     En resumen: a día de hoy el estado del arte en cuestiones de desarrollo de interfaces de usuario sobre Mono requiere que seas un _hacker_ con cierta experiencia (es de ayuda si te apellidas De Icaza).   De hecho, para un desarrollador _die-hard_ es una delicia estar sumergido en la vorágine de parches, funcionalidades y tormentas de ideas que surgen en las listas de desarrolladores.



Así está la cosa.  Recordemos que, mientras tanto, Microsoft está desarrollando Avalon, XAML y bla, bla...  Esta batalla, sinceramente, ya está perdida (a no ser que me equivoque rotundamente, lo cual tampoco sería de extrañar).   Pero GNU/Linux debe seguir ofreciendo un entorno de escritorio amistoso, por supuesto.



Aunque haya una convergencia nominal ([freedesktop.org](http://www.freedesktop.org)), los dos escritorios dominantes están basados en _toolkits_ diferentes, así que siempre habrá una diferencia técnica (y una filosofía diferente).  Desarrollar en KDE/Qt (algo que cada vez se parece más a programar en Visual C++, con lo bueno y lo malo que conlleva) es relativamente sencillo comparado con la aspereza de Gtk así que es de prever que KDE siga teniendo -y tal vez aumente- su rica comunidad de desarrollo.  Gnome (que es además mi escritorio favorito) se encuentra más limitado.  Tal vez más orientado a entornos corporativos (por el propio interés de colaboradores como Sun, que lo ven como la plataforma ideal sobre la que desplegar negocio en Java), no puede reaccionar tan deprisa: es un escritorio pensado para el usuario final, no para el desarrollador, de ahí que es sensato pensar que el desarrollador sienta más atracción por KDE, que es un entorno configurable hasta el infinito más absurdo: una delicia para un auténtico geek.  A no ser que programar para Gnome sea la delicia que supone programar en C#.



Así que, en mi opinión, Ximian debería abandonar la idea de ver a Mono como una alternativa a Windows en el escritorio (en el servidor la cosa está más equilibrada) y centrarse más en proporcionar a Gnome una plataforma de desarrollo en C# atractiva y sencilla, y los desarrolladores de Linux irán a Mono -y a Gnome por extensión-.  Es de suponer que como efecto colateral algunos vendrán de Windows a Linux; precisamente lo que Microsoft no quiere que ocurra.

