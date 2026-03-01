---
title: "Las cosas de Microsoft."
meta_title: "" 
description: "" 
date: 2003-02-24T00:00:00Z
image: "/images/image-placeholder.png"
categories: []
author: "Epaminondas Pantulis" 
tags: []
draft: false
---

Sigo programando extensiones para Windows PowerPro.  (Véase mi historia anterior del 29 de Enero)  Ahora he perpetrado un plugin que evalua la carga de CPU del sistema, devuelve la cantidad de memoria, archivo de paginación y total de memoria virtual -tanto libre como disponible-, hace sonar el altavoz interno del sistema -ideal para trinos varios, esto lo pidió un compañero en la lista de Powerpro en Yahoo!- .  Para rematarlo todo, y satisfaciendo a otro corresponsal, añadí unas funciones que devuelven el total de bytes enviados y recibidos por la conexión de acceso telefónico a redes.  (Programar un plugin para PowerPro es muy sencillo, basta con generar una DLL con unas funciones especiales, muy fáciles.  Así, resulta muy sencillo "mapear" servicios de Windows sobre funciones de un plugin y hacer que PowerPro haga más cosas: ahí reside la potencia de PowerPro)

 

Ahora he desterrado a una utilidad que andaba por mi disco duro desde hace algun tiempo: Coolmon.  Ya no la necesito, porque todo lo que hacía con ella ya lo hago con unos scripts de PowerPro que utilizan mis extensiones.

 

Pero esta historia no trata de PowerPro. Trata de Windows, Unix y sus filosofías.

 

Habituado como estoy a Unix (trabajo día a día con Solaris) no ha dejado de sorprenderme la forma de desarrollar bajo Windows.  Resulta que para leer las conexiones de redes que hay activas en el sistema en un momento dado, es necesario ejecutar una función de lo que Microsoft llama "IP Helper API".  Creía que bastaba con incluir una cabecera llamada "IFHlpApi.h" en mi DLL y a jugar...  Qué equivocado estaba.

 

Necesito instalar el "Windows Platform SDK".  En idioma Unix, instalar las "development libraries" de Windows.  Me voy a la página de Microsoft para estos menesteres (MSDN) y -usando Internet Explorer; Opera no, gracias- aparece un componente ActiveX que me dice que está "analizando mi sistema sin enviar ninguna información a Microsoft"  (¿por qué será que no termino de creérmelo?) y me envía a una página donde yo tengo que elegir lo que quiero instalar (¿entonces, para qué el componente automágico?)  Afortunadamente, sólo tengo que bajar las "Core SDK": la gracia asciende a unos 120 Megas.  Una vez instalado todo, 500 Megas.

 

¡500 Megas!  Creo que ni compilar XFree86 ocupa todo eso.  El secreto en Unix es que la separación entre librerías es mayor.  Uno se tendría que bajar la librería patatín, que requiere la librería patatán versión xx, que necesita configurar el....  Aún recuerdo cuando compilaba el Gimp y acababan de migrar a Gtk.  Cada semana había que bajar nuevos parches de todo: del propio gimp, de Gtk, de Gdk, de yo qué sé qué más.  Aquello me divertía, pero reconozco que no dejaba de ser una pérdida de tiempo; estar en el bleeding edge tenía su coste.  Pero yo era joven, y el tiempo estaba en mis manos.  Era mío para estrujarlo y hasta quemarlo, si queria. 



La solución que nos propone Microsoft es la del que no se juega nada, o no quiere jugarselo.  Para evitar historias raras, Microsoft emite su "Platform SDK" de Noviembre del 2002.  Hala.  Todo lo demás no existe. A bajarse megas. Con eso supongo que se quitan muchos problemas de incidencias debidas a compilar una cosa con la versión de otra que no es la que ...  pero a los usuarios nos echan el muerto de descargas mazacóticas.

 

O de comprar CDs por un módico precio.

