---
title: "Los peligros de la tecnología"
meta_title: "" 
description: "" 
date: 2004-04-01T00:00:00Z
image: "/images/image-placeholder.png"
categories: []
author: "Epaminondas Pantulis" 
tags: []
draft: false
---

Hoy, el cabrón de _Zirenito_ (que es el nombre con el que he bautizado a mi Palm Zire) nos ha despertado a las cinco y media de la mañana, en lugar de a las seis y media como debería ser.   Por suerte, Bea se ha percatado mirando su propio reloj y no ha ocurrido mucho más.  Pero podía haber sido peor: si hubiera estado yo solo hubiera podido, en estado semicomatoso, desayunar y plantarme en la calle a las seis de la mañana.



¿Cómo ha podido ocurrir este desaguisado?  _Zirenito_ ha demostrado ser el despertador definitivo (gracias a BigClock) y hasta ahora jamás había dado problemas.



Ayer anduve sincronizando a _Zirenito_ para instalar el magnífico GNUKeyring que recomendaba ayer Juanjo Navarro, así que parece claro que el problema tenía que ver con la sincronización.



Nada más levantarme he comprobado que, en efecto, el ordenador tiene una hora más de la debida (de hecho se había desconectado la tarifa plana conforme a los dictados del crontab).  Así pues, al sincronizar anoche a _Zirenito_ usando KPilot el cambio de hora se transmitió a la pobre PDA.



¿Y cómo narices ha podido ser que se cambiara la hora en el ordenador?  ¿Qué hice ayer que fuera de especial?  Todo apunta al reciente cambio de hora, que en principio pasó sin mayores inconvenientes, pero... _¿por qué ayer?_



En el Metro, camino al trabajo, he deducido lo que pasó.  Ayer arranqué con la partición de Windows XP, para trastear en un disco duro usado que pinché en el ordenador.  No es difícil imaginarse lo que ha pasado.  Windows, al tomar el control del ordenador, ha descubierto que ha pasado la hora del cambio de fecha en el tiempo en que no ha arrancado y, siguiendo escrupulosamente su programación, le ha aumentado la hora correspondiente al cambio de horario de invierno a verano.  Y héteme aquí que el ordenador ha acabado con una hora de más.



Creía recordar que Windows avisaba con un mensaje que había cambiado la hora, pero se ve que las versiones más recientes no lo hacen (ni falta que hace, la verdad: el cambio puede hacerse silenciosamente sin problema). 



En fin, queridos lectores,he aquí la moraleja de la historia: si vas a depender de la tecnología, no dependas de más de un sistema operativo.









