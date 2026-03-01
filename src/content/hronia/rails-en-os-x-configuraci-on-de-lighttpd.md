---
title: "Rails en OS X: configuración de lighttpd "
meta_title: "" 
description: "" 
date: 2005-08-25T00:00:00Z
image: "/images/image-placeholder.png"
categories: []
author: "Epaminondas Pantulis" 
tags: []
draft: false
---

Esta tarde toca desarrollo con [rubyonrails.com](http://www.rubyonrails.com) sobre Mac OS X.    Supongamos que tenemos una aplicación más o menos operativa y la queremos poner en producción.  Hasta ahora hemos seguido el ciclo de desarrollo habitual usando el magnífico servidor web  [webrick.org](http://www.webrick.org) que se suministra con Rails.  Este servidor tiene diversas ventajas, pero su mayor inconveniente es que es lento.  Y cuando digo lento es lento, lentísimo.



Toca, pues, usar otro servidor web.  Las primeras miradas se depositan en nuestro viejo amigo [apache.org](http://www.apache.org), que probablemente ya tengamos instalado (OS X no es excepción).  Como es habitual, existe la posibilidad de instalar un módulo para Apache con la máquina virtual (mod_ruby, análogo al mod_php para PHP) pero en este caso tampoco queremos usarlo; al parecer el desarrollo en este módulo está estancado y su rendimiento deja que desear.   La siguiente opción es usar ruby como un CGI tradicional, opción que he probado bajo Windows XP y os aseguro que es similar a WEBRick en rendimiento.  El motivo es que para cada petición (para cada URL que visitemos), el servidor web tiene que ejecutar el intérprete, cargarlo en memoria, pasarle los parámetros, etc.  



Y aquí aparece [fastcgi.com](http://www.fastcgi.com), una extensión de CGI que permite acortar espectacularmente los tiempos de respuesta del servidor, de una manera sencilla: teniendo un fajo de intérpretes (pueden ser de Ruby en nuestro caso, o PHP si se tercia, etc.) que, estando arrancados de antemano, nos eviten la sobrecarga que supone arrancar  un proceso cada vez.    Esta técnica supone una comunicación distinta entre el servidor web y nuestro intérprete, de forma que será necesario hacer un par de cosas:



En primer lugar, instalar la librería FastCGI.  En mi caso, he descargado [fastcgi.com](http://www.fastcgi.com/dist/fcgi-2.4.0.tar.gz) y tras el habitual baile ./configure && make && sudo make install las librerías han acabado sin mayor inconveniente en /usr/local.



En segundo lugar, obtener la extensión FastCGI para Ruby.  Afortunadamente Ruby tiene su propia herramienta de gestión de paquetes (al estilo del CPAN de Perl), llamada [rubygarden.org](http://rubygarden.org/ruby/ruby?RubyGems), así que solamente es cuestión de:



sudo gem install fcgi



Este paso fallará, como es de esperar, si no hemos instalado la librería FastCGI del paso anterior.



Así que hemos llegado al punto en que tenemos nuestro Ruby con soporte de FastCGI y sus librerías a punto, ¿qué nos queda?  Instalar mod_fcgi en Apache y...  



Demasiado fácil.  Rizando el rizo, ¿por que quedarnos con Apache?  La última moda en Ruby on Rails no es usar Apache, sino el nuevo y flamante [lighttpd.net](http://www.lighttpd.net) (ojo con las letras, yo siempre escribo lighthttpd)  La ventaja de lighttpd es que trae soporte de FastCGI en forma de módulo y, además, es -según se afirma, yo no lo he probado- rapidísimo.   Puede que sea cuestión de moda pero, como ya sabemos, todo el rollo este de Ruby on Rails es una moda (o eso dicen)  :-)



Para instalar lighttpd el camino que he seguido ha sido tirar por la vía vaga e instalar Darwinports.  Se trata un proyecto libre (auspiciado por Apple) que añade a nuestro OS x algo parecido al sistema de ports de BSD en Darwin, muy al estilo de [fink.sourceforge.net](http://fink.sourceforge.net).  En mi caso, instalé en primer lugar Fink, que usa el sistema "apt" de [debian.org](http://www.debian.org) pero, no sé muy bien cómo, terminé destrozando la instalación.  Lo más interesante es que estos sistemas de paquetes adicionales no interfieren para nada con el resto de OS X, sino que se instalan en su propia jerarquía de directorios (/sw/bin en el caso de Fink, /opt/local en el caso de Darwinports) y deisnstalarlos es tan sencillo como hacer un rm- fr (con cuidado, eso sí).  



Podríamos compilarnos nosotros mismos nuestro propio port, pero este paso no es necesario porque ya está hecho para nosotros, basta con descargar la imagen [darwinports.opendarwin.org](http://darwinports.opendarwin.org/downloads/DarwinPorts-1.0.dmg) y ejecutar el paquete de instalación.   Luego, siguiendo las instrucciones de la instalación añadimos las correspondientes variables  a nuestro entorno y ya está.  Como prueba, instalé Lynx y Midnight Commander y funcionaron, así que el siguiente paso era instalar lightttpd.  Me encontré con que no aparecía en el repositorio, pero por lo que he leído por ahí lighttpd ya forma parte de Darwinports.  Al final sospeché que se trataba de que la imagen de disco que descargué no tiene la lista de paquetes más actualizada, así que se hizo necesario hacer lo siguiente:



sudo port -d selfupdate
sudo port install lighttpd



Tras un rato, en el que port descargarán, compilarán e instalarán algunas dependencias tendremos instalado lighttpd en /opt/local/sbin.  A continuación, y ya que vamos a jugar a tener nuestro propio servidor, podemos despedirnos (hasta el próximo reinicio) de nuestro querido Apache:



sudo apachectl stop



La estrategia que he seguido es la de ejecutar el servidor web desde mi cuenta personal, no como administrador (aunque esto me fuerza a usar un puerto como el 8080, no es inconveniente), así que en mi propio directorio personal, he creado un directorio para las cosas de lighttpd



mkdir $HOME/lighttpd 



y en él me preparo el siguiente script:



#!/bin/bash
PID=`ps -aux | grep lighttpd | grep -v grep | awk '{ print  }'`
echo Instancia a matar: $PID
kill -9 $PID
/opt/local/sbin/lighttpd  -f lighttpd.conf
PID=`ps -aux | grep lighttpd | grep -v grep | awk '{ print  }'`
echo Instancia en ejecucion: $PID



Ejecutaremos este script cada vez que cambiemos el fichero de configuración y queramos reiniciar lighttpd (aunque supongo que el servidor atenderá alguna señal para volver a leer el archivo de configuración, no lo he terminado de investigar).



En el mismo directorio, tendremos el fichero lighttpd.conf, que es el meollo del asunto:



En primer lugar, cargamos los módulos necesarios para nuestra funcionalidad.  Por supuesto, entre ellos aparece mod_fastcgi.  Y usaremos mod_rewrite para cambiar las URLs para invocar transparente y adecuadamente al controlador de Rails.



server.modules = (
         "mod_rewrite",
         "mod_access",
         "mod_fastcgi",
         "mod_accesslog"
)



Definimos el directorio raíz del servidor, en nuestro caso, el directorio public de nuestra

aplicación Rails que es un directorio cualquiera de nuestra cuenta de usuario Mac.



server.document-root = "/Users/juan/Sites/rrecetario/public"



Este es el meollo del asunto, para configurar FastCGI.  En esta directiva le podemos decir cuántas instancias del intérprete deseamos tener arrancadas, el tiempo de vida y cosas similares.  De momento nos quedamos con los valores por defecto



fastcgi.server = ( ".fcgi" =>
       ( "localhost" =>
              ( "socket" => "/tmp/rrecetario.socket",
               "bin-path" => "/Users/juan/Sites/rrecetario/public/dispatch.fcgi"
               )
        )
)



El galimatías que viene a continuación lo he fusilado del [wiki.rubyonrails.com](http://wiki.rubyonrails.com).  Cada URL en una aplicación Rails tiene el formato "controlador/acción?parametros", cuando usamos FastCGI tenemos que decirle a lightttpd cómo debe pasarle los parametros a nuestro script dispatch.fcgi (que es el que, creo, se encarga de distribuir las peticiones a los intérpretes previamente arrancados).    Obsérverse la última regla: si la URL solicitad es del tipo http://nombre_de_host/ entonces cargamos dispatch.fcgi sin parámetros (esto no aparece en los wikis de Rails)



url.rewrite = (
  "^/([\-_a-zA-Z0-9]+)/([\-_a-zA-Z0-9]+)/([\-_a-zA-Z0-9%]+)\??([\-_a-zA-Z0-9=&%]*)$" 
     => 
  "/dispatch.fcgi?controller=&action=&id=&",


  "^/([\-_a-zA-Z0-9]+)/([\-_a-zA-Z0-9]+)/?\??([\-_a-zA-Z0-9=&%]*)$" 
     => 
   "/dispatch.fcgi?controller=&action=&",
  
    "^/([\-_a-zA-Z0-9]+)/?\??([\-_a-zA-Z0-9=&%]*)$" 
      => 
     "/dispatch.fcgi?controller=&action=index&",
  
     "^/$" => "/dispatch.fcgi" 
)



Le indicamos dónde tiene que mostrar los mensajes de error y acceso 



server.errorlog = "/Users/juan/lighttpd/logs/lighttpd.error.log"
accesslog.filename = "/Users/juan/lighttpd/logs/access.log"



Y por último los ficheros a cargar por defecto cuando se especifique un path acabado en / (he añadido dispatch.fcgi aunque entiendo que con la regla anteriormente añadida no haría falta)



server.indexfiles = (
 "index.php", "index.html",
  "index.htm", "default.htm",
  "dispatch.fcgi"
)



Los obligatorios tipos MIME (en el wiki de Rails pueden verse listados más completos)



mimetype.assign = (
     ".gz"           =>      "application/x-gzip",
     ".swf"          =>      "application/x-shockwave-flash",
     ".tar.gz"       =>      "application/x-tgz",
     ".tgz"          =>      "application/x-tgz",
     ".tar"          =>      "application/x-tar",
     ".zip"          =>      "application/zip",
     ".gif"          =>      "image/gif",
     ".jpg"          =>      "image/jpeg",
     ".jpeg"         =>      "image/jpeg",
     ".png"          =>      "image/png",
     ".css"          =>      "text/css",
     ".html"         =>      "text/html",
     ".htm"          =>      "text/html",
     ".js"           =>      "text/javascript",
     ".text"         =>      "text/plain",
     ".txt"          =>      "text/plain"
)



Y, por último, el puerto:

server.port = 8080



Tras esto, ya podemos arrancar lighttpd con el script de antes y veremos que nuestra aplicación se ejecuta (o eso esperamos) cuando accedemos a nuestra máquina por el puerto 8080.  



El próximo paso sería usar _hosts_ virtuales para diferentes aplicaciones en el mismo servidor. O, tal vez, pasar directamente a [atdot.net](http://www.atdot.net/yarv/)... 

