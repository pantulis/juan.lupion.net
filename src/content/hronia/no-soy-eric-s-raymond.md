---
title: "No soy Eric S. Raymond"
meta_title: "" 
description: "" 
date: 2004-04-12T00:00:00Z
image: "/images/image-placeholder.png"
categories: []
author: "Epaminondas Pantulis" 
tags: []
draft: false
---

Sin venir a cuento y sin previo aviso, la instalación de Linux en casa empezó a mostrar achaques.  



Primer achaque

El mezclador ALSA de Gnome no mostraba la habitual miríada de knobs y faders asociados a la vulgar SBLive! que vive dentro de la caja del ordenador.  Bastaba con escoger "Propiedades" dentro del menú de la aplicación para que esta dejase un bonito coredump.  Indagando algo más, descubrí que la configuración de ALSA se había perdido: el kernel detectaba correctamente el chip Emu10k pero no se arrancaban los módulos ALSA correspondientes.  La molestia más notable es que no funcionaban los altavoces digitales conectados a la tarjeta (sí funcionaba la salida de auriculares que tengo conectada a los altavoces del monitor)



Segundo achaque

La impresora dejó de funcionar.  No era cosa de la impresora, que funcionaba bajo Windows.  No era cosa del USB (¡menos mal!) porque al conectar y desconectar el cable se veían las correspondientes trazas en el /var/log/messages.



El segundo achaque fue el más sencillo de resolver: bastó con irme a la herramienta de administración de colas de impresión de Fedora, quitar la impresora y añadirla de nuevo.  Voil&agrave;.  Ya tenía la impresora otra vez funcionando bien.



La solución al primer achaque es el que trae a cuento el título de este post, rememorando la queja de Eric Raymond, quien se queja de lo complicado que resulta para un usuario doméstico de a pie configurar ciertas cosas bajo Linux.    El problema concreto de ESR 

consistía en configurar una impresora remota en red local (tarea bastante ajena a los quehaceres de un usuario doméstico de a pie, como alguna réplica ha hecho notar).   El mío, en este caso, era que automágicamente había desaparecido la configuración de la tarjeta de sonido.    



Tal vez en otra época me hubiera enfrentado al infierno de scripts de inicios y ficheros de configuración, pero esta vez fuí más práctico.  Me conecté al IRC.  Y allí, en el canal #alsa estaba el mismísimo Florian Schmidt, AKA Mista Tapas, alma mater del proyecto.  Se inició entonces una sesión de soporte técnico con todas las de la ley: Florian me iba guiando paso a paso, pidiéndome que lanzara este o aquel comando y le enviase la salida, hasta que llegó a la conclusión de lo que ocurría: por algún motivo algún script estaba cargando los drivers OSS antes que los drivers ALSA.   Dicho y hecho; tras algún ajuste y un par de reinicios ya tenía los drivers ALSA funcionando sin problemas. (Me gustó lo práctico de esta solución: cualquier Linux zealot se hubiera rasgado las vestiduras por tener que hacer un reset  pero Florian consideraba más práctico simplemente rebotar la máquina)



Tal vez ESR se tendría que haber conectado al IRC cuando no pudo configurar su impresora...

