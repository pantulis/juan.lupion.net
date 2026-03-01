---
title: "Análisis bayesiano de spam"
meta_title: "" 
description: "" 
date: 2003-03-06T00:00:00Z
image: "/images/image-placeholder.png"
categories: []
author: "Epaminondas Pantulis" 
tags: []
draft: false
---

Aún conservo mi vetusta cuenta de correo de la Universidad -el glorioso P133 con 32 megas y una RedHat 4.2 sigue funcionando como el primer día, y eso que era marca "El chino feliz"-.  En mis tiempos de universitario, que uno todavía era algo ingenuo, me dediqué a suscribirme a ciertas listas de correo y sobre todo a escribir en grupos de _news_. Como resultado, algún chino -más feliz todavía- se hizo con mi dirección de correo y la tostó en un CD.  Este CD ha debido de venderse como rosquillas en el mundo asiático y sudamericano, así que esta cuenta de correo a la que tengo bastante cariño recibe normalmente cinco o seis mensajes de spam al día: creo que, menos en klingon, he recibido mensajes en todas las caligrafías posibles.



Por no hablar del resto de direcciones de correo gratuitas que poseo, que también sufren en mayor o menor medida de este simpático fenómeno del correo no deseado. Afortunadamente la del trabajo ha corrido mejor suerte -o yo he sido más prudente-. 



Así, últimamente he estado mirando soluciones gratuitas a este problema bajo Windows.



Una de ellas es SpamPal.  Nada que objetar a este programa, que usa _listas negras_ con diferentes grados de _negritud_.  El programa hay que arrancarlo manualmente -o en el inicio de Windows- y se esconde en la bandeja del sistema.  Uno configura su cliente de correo, para que en lugar de conectarse al servidor POP remoto se conecte al local en el puerto en el que SpamPal se ubica a la escucha y usa como nombre de usuario una combinación del nombre de usuario en el servidor remoto y el servidor remoto (algo así como usuario@servidorpop). SpamPal usa esta información para conectarse al servidor de verdad y obtener los correos.



La técnica de usar _listas negras_ es aceptablemente eficiente, pero tiene el inconveniente de producir bastantes falsos positivos, según la lista usada.  Hay listas tan agresivas que simplemente excluyen todos los mensajes procedentes de Rusia o Corea, lo cual indudablemente dará problemas en listas de correo internacionales.  Este problema se puede mitigar con un cliente de correo como Eudora, que puede asignar prioridades a las reglas de filtrado de mensajes. Simplemente se pone en último lugar un filtro que compruebe si en la cabecera del mensaje aparece el texto *SPAM* que es el que coloca SpamPal cuando detecta un mensaje sospechoso, y en primer lugar las reglas que filtran mensajes en carpetas dependiendo de su procedencia. Así, si un mensaje pertenece a una lista de correo, Eudora lo colocará en su sitio aunque haya sido clasificado como indeseado por SpamPal.



A esto se añaden los problemas de otras _listas negras_ que simplemente marcan como no deseados criterios más sutiles, según el servidor SMTP de procedencia, si la cuenta es de Yahoo, de Terra...  En definitiva, el uso de listas de exclusión no es la panacea. 



La solución más eficaz parece ser, de momento, el análisis bayesiano.  Simplemente se trata de contar las palabras que aparecen en los mails enviados por spammers y apuntarlas en una tabla de frecuencias. Al cabo de un tiempo de aprendizaje en el que uno _enseña_ al programa a distinguir correos legítimos de spams, el clasificador bayesiano igualará o superará en eficacia a las técnicas de listas de exclusión.  Hay por ahí un artículo de Paul Graham donde explica el invento.  No pongo enlaces porque me equivocaré, pero para eso está Google.



En Windows tenemos disponible dos alternativas.  Hay una extensión para SpamPal (disponible a través de la web de SpamPal e igualmente gratuita) que hace un análisis bayesiano.  Pero la solución redonda y especialmente atractiva por ser libre (como la expresión, no sólo gratis) es POPFile, accesible a través de Sourceforge.



POPFile tiene además la particularidad de estar escrito en Perl (ya veo a JJ refocilándose).  El uso de Perl es evidentemente ventajoso a la hora de hacer una tarea como la de POPFile: leer montones de ficheros de texto y buscar emparejamientos con las reglas que han ido siendo creadas.  Pero en mi caso, me ha sorprendido y muy gratamente la facilidad con la que parece que Perl permite hacer procesos residentes bajo Windows -incluso se arranca automáticamente al iniciar el sistema-, y sobre todo implementar una interfaz de usuario local via web.  Una forma elegante de crear una interfaz fácil y familiar.  En este aspecto, POPFile me parece una pequeña obra de arte. No porque desconociese que estas cosas se pueden hacer con Perl (¿y qué no?) sino por verlas corriendo bajo Windows.  La elegancia es tal que la distribución de POPFile incluye su propio ejecutable de Perl empotrado como librería dinámica.  



¿Y cómo funciona POPFile?  Pues el mecanismo es incluso mejor que el de SpamPal, porque POPFile está orientado al análisis bayesiano desde un principio no como SpamPal que lo realiza como plugin.  La particularidad de POPFile es que se pueden definir _buckets_, que no son más que clasificadores distintos.  Uno puede enseñar a POPFile no sólo a distinguir correos indeseados de deseados, sino aún más, por ejemplo a distinguir correos indeseados en inglés de correos indeseados en castellano.  O de correos personales en inglés y correos personales en castellano.  Es de suponer que la eficacia del clasificador en este caso es mejor, a costa de un uso mayor de recursos.  



Tampoco ocupa espacio en la bandeja del sistema, ya que la interfaz de usuario es via web.



Otra ventaja -más- de POPFile es que no "ensucia" las cabeceras de los mensajes -tiene una opción para calzar un bonito "SPAM" en la cabecera si así nos hace falta-.  Simplemente POPFile coloca una cabecera personalizada a los mensajes (X-TextClassification creo que era) y se deja que el cliente de correo haga con ella lo que quiera. 



Hay alguna opción más, como usar "imanes" que clasifican inmediatamente un mensaje sin analizar su contenido -o sea, una forma de crear excepciones a las reglas-.  Y por supuesto una miríada de "estilos" posibles de la interfaz de usuario, la posibilidad de aceptar conexiones remotas de otros clientes de correo -así podríamos tener una instancia de POPFile sirviendo correo a toda una red local, por ejemplo- y las cosillas típicas. 



En resumen, los pervertidos usuarios de Windows tenemos como poco dos alternativas buenas, bonitas y baratas: SpamPal y POPFile. Ambas gratuitas, aunque la única que es libre es POPFile (licencia GPL). 



Y ahora me pregunto: ¿será el análisis bayesiano el final de los correos indeseados?  ¿Surgirá alguna otra herramienta basada, por ejemplo, en redes neuronales o algoritmos genéticos?  ¿Estará también escrita en Perl?    Vivimos, sin duda, una época interesante.

