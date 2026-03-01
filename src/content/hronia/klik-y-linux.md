---
title: "Klik y Linux"
meta_title: "" 
description: "" 
date: 2005-09-26T00:00:00Z
image: "/images/image-placeholder.png"
categories: []
author: "Epaminondas Pantulis" 
tags: []
draft: false
---

Leo en [genbeta.com](http://www.genbeta.com/archivos/2005/09/26-pequena-guia-para-utilizar-k.php) que ha aparecido un nuevo sistema de distribución de software para Linux, llamado [klik.atekon.de](http://klik.atekon.de/ubuntu.php).  La idea es que las aplicaciones se distribuyan como un enorme paquete que contenga todas las librerías y dependencias necesarias para su ejecución, evitando así los problemas de dependencias de versiones entre librerías, que siempre van a coincidir con las que requiere el programa en cuestión porque se distribuyen con él.



Este mecanismo viene a ser similar al de Mac OSX.  En OSX las aplicaciones que uno ve en el escritorio son los familiares iconos que puedes pinchar para arrancar la aplicación.  Estos iconos uno puede moverlos por cualquier carpeta (incluso el escritorio) y la aplicación sigue funcionando. El truco es que lo que para el usuario es un icon opara el sistema operativo es todo un application bundle que contiene los directorios necesarios para que funcione el programita en cuestión.  Así, cuando mueves un icono de una carpeta a otra no se está creando un enlace directo o nada parecido: simplemente se está moviendo toda la aplicación de un sitio a otro del disco duro.  Y por eso para desinstalarla basta con mandarlo al cubo de la basura: simple y efectivo.



Creo que esta "tecnología" puede ser una herramienta importantísima para que los usuarios que vienen de otros sitemas operativos se adapten a Linux, pero creo que de momento se está olvidando un detalle importante.   El sistema de "application bundles" funciona en Mac por un motivo sencillo: el desarrollador saca su software para una versión

concreta de Mac OSX: 10.3.xx, o 10.4.xx y ya está.  Sabe perfectamente qué librerías y recursos ofrece cada versión de Mac OS, por tanto puede aprovecharlos.



Pero en Linux no es así.  Por la propia idiosincrasia de Linux, cada distro tiene sus propias librerias -con sus correspondientes versiones distintas- por lo que si queremos hacer paquetes genéricos que funcionen en cualquier versión de cualquier distribución tendremos que incluir en nuestro "application bundle" (si se me permite llamarlos así) todas las librerías que vayamos a usar (salvo, quizá, glibc y unas pocas más).  Imaginad el tamaño de uno de estos paquetes cuando haya que incluir, por ejemplo, las dependencias de una aplicación KDE, Gnome o basada en Mozilla.  Y, peor aún, se me ocurre que dado que cada aplicación montada de esta manera lleva su propia versión de cada librería, aunque sean las mismas el sistema operativo no tiene forma de saber que lo son, con lo cual cada librería por muy dinámica que sea ocupará su espacio en memoria sin compartir nada con el resto de versiones usadas por otros programas en ejecución, lo que entiendo que supondrá un mayor uso de memoria por parte de un sistema organizado usando Klik.



En fin, a ver en qué queda todo esto.

