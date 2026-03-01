---
title: "Recuperación de privilegios de administración en Leopard"
meta_title: "" 
description: "" 
date: 2007-11-30T00:00:00Z
image: "/images/image-placeholder.png"
categories: []
author: "Epaminondas Pantulis" 
tags: []
draft: false
---

Recientemente he actualizado mis dos Macs (el Macbook Core Duo y el Mini G4) a [apple.com](http://www.apple.com/macosx/) con

el desafortunado efecto de que en el Mini la única cuenta existente ha perdido sus privilegios de administración y se ha convertido en un usuario normal.   Como consecuencia, no hay forma de conseguir instalar actualizaciones ni instalar software en /Aplicaciones con esa cuenta -la única-.  Cada vez que arrancaba el ordenador, aparecía el instalador de la última actualización de EyeTV intentado instalarse y el cuadro de diálogo de autenticación, donde a pesar de introducir una y otra vez mis credenciales no había forma de conseguir acceso.



Sin embargo, el Mac Mini funciona perfectamente y, salvo el hecho de que tenía que instalar alguna que otra aplicación en la carpeta de  Aplicaciones de mi cuenta de usuario, no tenía más inconvenientes.. salvo, claro, que me molesta sobremanera no poder instalar actualizaciones ni, por supuesto, poder administrar mi propio ordenador.  



Así pues, este es el segundo zarpazo que me ha dado el Leopardo, tras la [silvermac.com](http://www.silvermac.com/2007/leopard-installation-problems-blue-screen).  Hoy me he topado con [macfixit.com](http://www.macfixit.com/article.php?story=20071129090233135) que ha sido la gota que ha colmado el vaso, así que me he propuesto desfacer el entuerto sin, por supuesto, reinstalarlo todo.



Aprovechando que tengo el disco de arranque del Mac Mini es un [iomega.com](http://www.iomega.com/direct/products/family.jsp;IomegaProdComSession=HQThlh7l2C9ivBuxOSZqd5bqCHZ425clq2DssbfN2tEYxcN4RJEH!2003439127!-1817048988!7005!7002!738114588!-1817048987!7005!7002?FOLDER%3C%3Efolder_id=56096411&bmUID=1196446561940) como disco externo, puede arrancar desde el disco interno (dejando pulsada  la tecla "d" durante el proceso de arranque) que tenía instalado Tiger.  Allí puede entrar con mi cuenta de usuario normal y acceder a privilegios de administración sin problemas.  Es una sensación curiosa encontrarte con el escritorio que tenías más de un año atrás... (incluyendo pelis y series a medio descargar)



Por supuesto, en Tiger el disco externo estaba montado en  /Volumes/Iomega\ HD así que no era complicado resolver el problema quitándole el asterisco a la entrada de root en etc/passwd, añadir mi usuario normal en el grupo admin de /etc/groups y también en etc/sudoers Con esto debería tener el sistema de seguridad lo suficientemente descuajaringado como para tener permiso para hacer cualquier cosa (que es, en definitiva, lo que quiero hacer con el ordenador del salón)



Pero algo no iba bien.  Aunque al arrancar otra vez en Leopard me encontraba con que podía hacer sudo y hacer todo lo que quisiera desde la línea de comandos, en **Preferencias > Cuentas** la cuenta de usuario normal continuaba figurando como cuenta normal.  Por tanto, seguía sin poder autenticarme desde los diálogos emergentes del entorno gráfico.  Eso sí, ahora la situación era mejor porque podía hacer ssh al Mini y convertirme en superusuario, lo que me ahorraba andar rearrancando el Mini cada vez que quisiera hacer un cambio en algún fichero que requiriese permisos de root



Sospeché que se tratase de alguna particularidad de OS X (o de su legítimo hermano  [opensource.apple.com](http://www.opensource.apple.com/darwinsource/) ) y resulta que, en efecto, así es.



Cuando uno edita uno de los ficheros anteriormente citados, en la cabecera aparece la pista clave: a no ser que haya sido explicitado en la **Utilidad de Directorios**, estos ficheros no son consultados desde la capa gráfica del sistema operativo, que por defecto utiliza [apple.com](http://www.apple.com/la/server/macosx/features/opendirectory.html) para estos menesteres.  



Entonces he tenido la poco agradable sensación de estar trasteando en un sistema Windows.



Pero ya estaba todo bastante encauzado, y a un par de búsquedas en man y Google de distancia, así que empecé a olfatear la victoria.  Lo primero era localizar el problema: 






EnanoBlanco:~ root# dsmemberutil checkmembership -U juan2 -G admin
user is not a member of the group






Y lo segundo, resolverlo:






EnanoBlanco:~ root# dscl . -append /Groups/admin GroupMembership juan2






Ahora podíamos hacer:






EnanoBlanco:~ root# dsmemberutil checkmembership -U juan2 -G admin
user is a member of the group






Pero así y todo, aún no era capaz de realizar tareas administrativas (como instalar un update de Leopard) desde el interfaz gráfico.   Pero a estas alturas ya sabía la razón: Mac OS X refresca las credenciales almacenadas cada veinte minutos y borra la caché cuando el usuario abandona la sesión, así que era tan sencillo como salir, volver a entrar y ver que, en efecto, en el panel de cuentas de usuario mi cuenta ya aparece con privilegios de administrador.



Me pregunto si tendrán razón los que afirman que [pcmag.com](http://www.pcmag.com/article2/0,2704,2223921,00.asp)

















