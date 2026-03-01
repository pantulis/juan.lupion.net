---
title: "La gran engañifa de los discos duros."
meta_title: "" 
description: "" 
date: 2003-07-29T00:00:00Z
image: "/images/image-placeholder.png"
categories: []
author: "Epaminondas Pantulis" 
tags: []
draft: false
---

Hace un par de semanas, precisamente cuando más necesitaba el ordenador para hacer simulaciones de cuotas hipotecarias y otras cuentas, mi disco duro (un Maxtor 6Y80L0, 80Gb, 7200RPM, ATA133) empezó a tener problemas.   De un día para otro, Windows XP empezó a quejarse de que no podía escribir en el dispositivo "C:$MFT", y a decir que tenía "errores en escritura diferida".  Dado que el sistema estaba completamente inutilizado, reinstalé Windows XP.  Al cabo de un par de días, el problema se manifestaba ahora como "paradiñas" del sistema operativo cuando se encontraba accediendo mucho al disco.  Al echar un vistazo en el "Visor de Eventos" aparecían, delatores, montones de errores de acceso a disco ("El dispositivo /Devices/HardDisk0/D tiene bloques defectuosos") 



Pero Windows es Windows, y no me fío mucho de sus cosas.  Además, el GNU/Linux que tengo instalado en otra partición no había cantado ningún problema -cosa que puede ser debida a que estuviera ubicado físicamente en algún plato que no tuviera problemas, o yo qué sé-, así que me bajé la herramienta de diagnóstico de la web de Maxtor, llamada PowerMax, que finalmente cantó los problemas: el disco duro tenía que ser devuelto.



Lo cual no me preocupaba por el coste, porque el disco duro estaba en garantía, pero sí me fastidiaba bastante, porque había que guardar todo lo salvable.  El disco duro se moría en mis brazos y yo tenía que sacar lo que pudiera de él.   Como tenía un disco duro de 8 Gigas por ahí muerto de risa, lo formateé en FAT32 -mejor pasar de NTFS por si tenía que leerlo desde Linux o desde un diskette de MSDOS, quién sabe- y grabé en CD una copia de la partición de Linux con Norton Ghost.



Y entonces llevé el disco a la tienda [vartexnet.com](http://www.vartexnet.com).  Armado con el diskette de arranque de PowerMax, no tuve ningún problema en demostrar que el disco estaba mal y me lo cambiaron sin ningún problema -cosa que, según me cuenta, en [abyss-computer.com](http://www.abyss-computer.com) no hubiera sido tan fácil-.  



Y la cosa se acaba aquí. Ahora tengo un Maxtor nuevo -fabricado en Malasia sólo un par de días antes de que el anterior ya empezase a sufrir los síntomas de su fatal fin- y poco a poco lo reinstalo todo (en los pocos ratos libres que me deja la frenética actividad de la compra del piso).



Pero hay algo más; y es que mis datos, correos,  y los programas que tan laboriosamente he estado recopilando por la red han estado en un tris de desaparecer.  Si los sectores defectuosos aparecen en zonas "delicadas" del sistema operativo, entonces no tienes salvación.  Por ejemplo, Windows XP mostró ser robusto la segunda vez que lo instalé, pero la primera se quedó el pobre muy tocado.    



Y esto es lo que me fastidia: que ninguna garantía puede cubrir la seguridad de mis datos, que sólo están protegidos por la calidad del hardware.   Y la calidad del hardware, debido probablemente a la encarnizada lucha de precios, se está yendo al garete.  Los fabricantes se pelean por lanzar los modelos más atractivos (más velocidad! más capacidad!) al menor precio y mi impresión es que ya se ha pasado el umbral de lo mínimamente seguro: estoy seguro que las devoluciones en garantía (RMA's) de discos duros se están disparando en los últimos tiempos.  ¿Acaso un disco duro que en verano alcanza fácilmente los 50 grados de temperatura no está condenado a cocerse a fuego lento?  Y estoy seguro que en mi caso no fue así, porque tenía un ventilador frontal... claro que igual fue la vibración del ventilador lo que terminó fastidiando el ecanismo; quién sabe.



_(Consejo del abuelo Pantulis: Tened siempre a mano ese fiel y leal disco duro viejo de menos de 10 Gigas.  Lo agradecereis, y vuestra disquetera también)_

