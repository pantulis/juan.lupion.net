---
title: "Crónica de una muerte no anunciada"
meta_title: "" 
description: "" 
date: 2004-05-18T00:00:00Z
image: "/images/image-placeholder.png"
categories: []
author: "Epaminondas Pantulis" 
tags: []
draft: false
---

Hace ya algún tiempo hablé sobre la falta de fiabilidad de los discos duros que se comercializan a día de hoy.  Pues bien, ayer, delante de mis narices desfilaron ante mí los contenidos de bastantes gigas de información sin respaldar en su fatigoso camino hacia el limbo de la máxima entropía.



Lo cual no es más que una forma muy pedante de decir que se me jodió el disco duro.  Dos Maxtor de 80 Gigas fallecidos en algo más de un año, buen promedio.  El primero más o menos vino avisando con fallos intermitentes, pero ayer su sustituto exhaló su último suspiro de forma inesperada.  Estaba funcionado bajo Linux y cuando reinicié con Windows para inspeccionar cierta información tributaria con el Padre el maldito XP ni tan siquiera llegó a terminar de arrancar.  Hube de apagarlo con el botonazo y en el siguiente arranque Grub se quedó en la _stage_ 2.



Sospeché inicialmente que sólo se trataba de una problema del sector de arranque pero la cosa era aún peor: si intentaba montar las particiones ext2fs desde un CD de rescate de Fedora aparecían errores en los comandos ATA  que se iban enviando al disco.  Comencé a sospechar lo peor, y mis sospechas se confirmaron al intentar reinstalar Linux: la tabla de particiones estaba estropeada y cualquer intento de sobreescribirla daba error.  Ni tan siquiera Windows XP podría haber provocado semejante hecatombe.



Así pues, a día de hoy me toca comprar un disco duro.  Será de cualquier marca menos Maxtor, claro.



Como no hay mal que por bien no venga, he encontrado este interesante CD autoarrancable que contiene todo tipo de herramientas gratuitas para diagnosticar los discos duros de bastantes fabricantes en casos de emergencia, con el cual espero certificar definitivamente la defunción del disco de ayer.



