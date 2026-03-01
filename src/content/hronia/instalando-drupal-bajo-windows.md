---
title: "Instalando Drupal bajo Windows"
meta_title: "" 
description: "" 
date: 2003-05-14T00:00:00Z
image: "/images/image-placeholder.png"
categories: []
author: "Epaminondas Pantulis" 
tags: []
draft: false
---

Mi paisano Joni Karanka [jkaranka.blogalia.com](http://jkaranka.blogalia.com/comentarios/7965) echar a andar un servidor con [drupal.org](http://www.drupal.org) bajo Windows, sin mucha fortuna.   Una de las cosas que más me fascina del mundo del software libre es la portabilidad de las aplicaciones, y de hecho estoy bastante acostumbrado a trastear con todo tipo de programas libres bajo Windows XP (allá por el año 98 ya andaba yo jugando con MinGW y Apache para Windows 9x).  Estoy, pues, en condiciones de ayudar a Joni en su empresa.  ¡Vamos allá!



El primer problema al que se enfrenta el usuario de software libre bajo Windows es que las versiones no suelen pensarse para este sistema operativo, sino para alguna variante de Unix, sobre todo Linux.  Lo que existen son compilaciones independientes realizadas por algún forofo, cada una de su padre y de su madre.  En el caso de aplicaciones tipo weblogs, la cosa se agrava, si bien cualquier Linux trae _de regalo_ un Apache, un MySQL y un PHP perfectamente integrados en Windows o bien te los compilas por tu cuenta, los instalas por separado, o... te haces con un paquete especial.  Hay bastantes donde elegir, según he descubierto en los comentarios al post de Joni.  Mi distribución favorita Apache+PHP+MySQL para Windows es el [firepages.com.au](http://www.firepages.com.au/devindex.htm) de Firepages, sin embargo Joni ha instalado [miniserver.sourceforge.net](http://miniserver.sourceforge.net/) y con ése decidiré juguetear, no sólo por no complicar la cosa sino porque así conozco otro paquete. Afortunadamente, la filosofía Linux manda aquí: estos paquetes ni se instalan, ni tienen DLLs ni hacen las guarrerías habituales con el registro, de forma que es perfectamente posible tener dos directorios distintos con distribuciones distintas sin problema -siempre, claro, que no tratemos de tener las dos funcionando a la vez-. 



mini-server tiene la particularidad -que a mí me gusta, aunque atonta de mala manera al Kerio Personal Firewall, que es mi firewall favorito- de crear una unidad W:\ donde veremos una estructura de directorios que será familiar a cualquier linuxero: un directorio cgi-bin, un home, un tmp, un usr -con su /usr/local- donde viven los reglamentarios Apache, MySQL y PHP...



Así pues, la cosa se reduce a descomprimir todo en un directorio de nuestra elección y ejecutar el script Start.pif.  A partir de ahora tenemos a Apache funcionando, con un módulo de PHP4 activo, aunque la base de datos, como Joni ha podido comprobar, está parada.



No hay problema.  ¡mini-server puede controlarse usando simplemente un navegador web!  Abrimos el navegador favorito y escribimos: http://localhost/a

. Nos encontramos con una serie de opciones, más o menos intuitivas.  Me ha gustado mucha la de "Update", que comprueba si estamos ejecutando la última versión del mini-server -que, por cierto, dice llamarse "Uniform Server"-.  Una opción aconsejable es pinchar en "Apache log file analyzer" y abrir una ventana nueva. Si hay problemas, pulsar "Refrescar" en ésa ventana y veremos las últimas trazas de Apache, siempre útiles.  



Es el momento, pues, de arrancar el servidor MySQL, pulsando en el enlace correspondiente. 



Pasemos a instalar drupal.   Descargamos el paquete de la web.  Lo descomprimimos en algún directorio que cuelgue de la ruta W:\www\. Para simplificar la cosa, yo he escogido precisamente el directorio W:\www\drupal.   



La parte buena viene ahora: no hace falta usar la línea de comandos para introducir los comandos SQL necesarios para crear la base de datos de Drupal, porque el servidor que hemos instalado trae ya una herramienta para gestionar la base de datos via web: phpMyAdmin.  Simplemente de la página anterior pinchamos el link que apunta a phpMyAdmin y, en la página de bienvenida, creamos la nueva base de datos ("Create new database").   Yo le he puesto el nombre drupal. Después de hacerlo, podemos pinchar en show runtime information y ver que, efectivamente, el servidor MySQL está funcionando.



Para crear la base de datos propiamente dicha de Drupal, no hace falta nada más que seleccionar la base de datos del desplegable de la izquierda -si no aparece la base de datos que acabamos de poner, puede que haga falta pulsar el botón de recargar del navegador-.   Ahora pulsamos en la pestaña "SQL" y en el campo de abajo, donde pone "Location of the textfile", picamos en "Choose" y navegamos hasta "w:\www\drupal\database\database.mysql", y luego en "Go".  Ya tenemos la base de datos de nuestro Drupal lista para empezar.



Pero antes tenemos que hacer trampas.  Veremos que en w:\www\drupal\ hay un fichero llamado .htaccess que tiene ciertas directivas que comparten Apache y PHP4. Pues bien, he comprobado que la instalación de mini-server no se lleva demasiado bien con el contenido de ese .htaccess, y hay que hacer ciertos ajustes: hay que comentar las líneas IfModule mod_php4.c y su correspondiente /IfModule.  Más doloroso aún, hay que comentar todas las líneas desde donde dice Various Rewrite Rules hasta el final.  Sospecho que esto afectará de alguna manera la funcionalidad de Drupal -precisamente las bitácoras- aunque no tengo muy claro el qué.  



Da igual porque lo que queremos es precisamente arrancar.  



¡Con lo que tenemos, ya deberíamos poder ir a http://localhost/drupal y ver la pantalla de bienvenida!  Creamos un primer usuario (yo lo he llamado "prueba") y nos asignan una clave con la que ya podemos entrar y hacer nuestro primer post...



A partir de aquí, habrá que leerse la documentación de Drupal, cosa que no he hecho.







