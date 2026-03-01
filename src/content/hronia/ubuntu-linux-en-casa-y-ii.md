---
title: "Ubuntu Linux, en casa (y II)"
meta_title: "" 
description: "" 
date: 2004-12-07T00:00:00Z
image: "/images/image-placeholder.png"
categories: []
author: "Epaminondas Pantulis" 
tags: []
draft: false
---

La primera impresión no pudo ser más negativa.  El monitor (un viejísimo Goldstar Studioworks 56m) no pasaba de 800x600, al configurar el Locale en inglés la distribución de teclado también era la inglesa (aunque en la instalación puedes decirle misa), y por último, la conexión a Internet vía modem no había forma de echarla a andar con la herramienta de configuración de conexiones de red.



En fin, una serie de "obstáculos" tradicionales en GNU/Linux desde tiempos inmemoriales, pero que distros recientes tienen superados de sobra.  No sé si es que mi configuración es a estas alturas exótica por lo obsoleta que es, pero a mí la impresión que me dio era que Ubuntu Linux no estaba muy pulida.  Como digo, Fedora Core y Knoppix no tuvieron ningún problema ni con le monitor, ni con la configuración de teclado, ni con la conexión a Internet. 



Algo decepcionado, la he dejado aparte.  Hasta que hace unos días, charlando con Kurtz, a él no le pareció sorprenderle nada de esto.  



Le he estado dando algunas vueltas al asunto.  ¡Maldita sea, en otros tiempos, no me hubiera temblado el pulso para coger el 'vi' y toquetear el XF86Config!



Y dicho y hecho.  El teclado se arregló tocando la entrada correspondiente (XkbLayout), lo del modem se arregló ejecutando "pppconfig" y usando los tradicionales "pon" y "poff" para conectarse -excelentes a la hora de programar las conexiones de tarifa plana de 56k a partir de las 3 de la tarde- y, por último, lo del monitor simplemente se soluciona poniendo los valores adecuados de frecuencias de barrido vertical y horizontal y escogiendo una resolución (ya no hace falta inventarse un ModeLine, el servidor X automáticamente ajusta los valores adecuados).



Con estas armas estoy escribiendo ahora mismo este mensaje, e incluso he conseguido forzar el monitor más allá de lo recomendable para sus especificaciones (1152x864@75Hz, cuando debería ser 1024x768@75).  Pero bueno, cuando se rompa, ya tengo excusa ;-)



Para dentro de unos momentos, festival con el 'apt-get'.  Oh, sí.

