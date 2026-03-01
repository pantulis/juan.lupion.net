---
title: "Miguel de Icaza, Mono, .NET y otras cosas"
meta_title: "" 
description: "" 
date: 2004-02-16T00:00:00Z
image: "/images/image-placeholder.png"
categories: []
author: "Epaminondas Pantulis" 
tags: []
draft: false
---

Hoy he asistido a la charla que ha dado Miguel de Icaza en Telefónica I+D.  Ha habido cosas que me gustaron mucho y cosas que menos. 



Lo que es más importante en Miguel es que, bajo su apariencia de pausado nerd, se esconde un comunicador como la copa de un pino.  Es capaz de ir improvisando sobre la marcha para ganarse a la audiencia a base de chistecitos y comentarios -algunos más afortunados que otros, la verdad- y sobre todo no deja de tener muchísimo mérito que alguien que se ha bajado un par de horas antes sea capaz de soltar sobre la marcha una charla sobre Gnome y Mono.



Lo que menos me gustó es su hiriente prepotencia a la hora de desdeñar el trabajo realizado por la gente de KDE, por más que tras cada chanza dijera un "no, qué va".  Obvió, a la hora de presentar la historia del escritorio bajo Linux, que KDE estuvo disponible primero y Gnome no fue sino la respuesta de un grupo de usuarios que estaba disconforme con la política de licencias de Trolltech.  Uno podría pensar que esto es asi porque Miguel está de acuerdo hasta el último punto con las posiciones de Stallman, pero el mexicano no duda ni un instante en tachar a RMS de "extremista".  Así que uno sólo puede quedarse con la sensación de que cuando Miguel de Icaza reparte estopa a diesto y siniestro no lo hace sino mirando por la cuenta de resultados de Ximian.  (Lo cual, dicho sea de paso, no es malo en sí).



La primera parte de la charla -de hecho la mayor parte de ella- estuvo dedicada a presentar la historia de Linux en el escritorio, y a presentar Gnome y las alternativas a los productos Microsoft (esto último sólo de pasada: menciones a StarOffice y a Mozilla como productos que verdaderamente representan opciones válidas). Durante esta parte de la conferencia-charla me aburrí bastante y me distraí algo, porque esta parte se la sabe cualquier barrapuntero de pe a pa.  Claro que la audiencia de Miguel esta tarde no era la de un congreso de Hispalinux, así que entiendo que no era mala idea lo de dar una introducción al personal, aunque se llevase la mayor parte del tiempo.



La segunda parte, en la que entró más en detalles sobre Mono y .NET, tuvo para mí dos puntos importantísimos.



El primero, la  "presentación" de un  proyecto ultrasecreto que no debe ser revelado al mundo por nada.  De Icaza preguntó si había algún periodista en la sala, pero como no preguntó nada sobre bloggers, me siento en cierto modo liberado de responsabilidad alguna.  Además, una mera búsqueda en Google me lleva al asunto en cuestión y, por si fuera poco, dejó una URL para que la visitásemos así que la cosa muy secreta no debe de ser.  



Lo segundo fue una demostración en vivo de los poderes de Mono, basado en dos ejercicios, el primero de los cuales fue el arranque de Monodevelop en vivo y en directo, y allí pude ver en el proyector que lo que comenta MIguel en su bitácora funciona como un cañón.   Tal y como ya he comentado alguna vez, tarda lo suyo en arrancar, pero una vez que el compilador JIT ha hecho su tarea, Monodevelop pareció ir más o menos suelto.



No me pude resistir, como viejo conocedor de SharpDevelop, a preguntarle a Miguel sobre el esfuerzo necesario para portar el proyecto a Mono desde Windows. La respuesta de Miguel vino a incidir en el hecho de que SharpDevelop está desarrollado bajo Windows Forms y MonoDevelop corre sobre Gtk# y que por tanto el tiempo empleado en este último había sido dedicado en su mayor parte a reescribir el código de la interfaz gráfica.   Pero sí respondió a mi pregunta al decir que la funcionalidad de SharpDevelop la consiguieron adaptar en menos de un mes, y que la adaptación de la funcionalidad Intellisense (que es la que pretendían llevar a Anjuta, al parecer) les llevó sólo un par de días.   Ni que decir tiene que es para quedarse con la boca abierta.



El último ejercicio, consistió, ante la pregunta de alguien sobre la interoperabilidad con Jsva, el arranque de nada más y nada menos que Eclipse funcionando bajo .NET (la tecnología subyacente a esto más o menos se me escapa, pero creo que entre en juego una máquina virtual de Java que corre sobre .NET y por supuesto sobre Mono).  En este caso Eclipse tardó tal vez alrededor de un minuto en arrancar en un portátil que no parecía precisamente antiguo.

  

Conclusiones: Mono funciona mejor de lo que parece a partir de una simple visita a la web oficial.  Con él, y con Gtk#, Miguel puede apuntalar el punto flaco de Gnome: el toolkit gráfico (Gtk) y su dificultad de programación (incomparablemente superior a la cuidada API de Qt).  



Quedan, como siempre, lagunas.  ¿Cómo lograrán integrarse las aplicaciones Mono con un escritorio basado en componentes Bonobo?  (.NET no parece demasiado orientado a Corba).  ¿Logrará Ximian reproducir el 100% de la funcionalidad de .NET antes de que Microsoft comience a lanzar versiones una tras otra?  ¿Debilitará esto a la comunidad Java?  Dudo que Mono reemplace a Java como servidor de aplicaciones en el mundo *nix -hay demasiada inercia corporativa puesta en Java- pero en el escritorio puede ser la puntilla de Java, confinándolo definitivamente al servidor y a los dispositivos móviles.



Vivimos una etapa interesante.

