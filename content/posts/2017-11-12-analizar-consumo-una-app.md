---
author: aitor
date: 2017-11-12 12:41:43+00:00
draft: false
title: "\n\t\t\t\tAnalizar el consumo de una App\t\t"
type: post
url: /2017/11/analizar-consumo-una-app/
categories:
- Android
- AngularJS
- Cordova
- desarrollo
- Ionic
- IOS
- javascript
tags:
- Android
- Android Studio
- AngularJS
- cordova
- Ionic
- IOS
- Jmeter
- Profiling
---


				Por temas del trabajo me ha tocado analizar el consumo de datos móviles de una aplicación en un uso intensivo para un gran número de usuarios. Voy a compartir cómo lo he hecho yo.


### La aplicación


Es una app Android/IOS hecha con Cordova/Ionic/AngularJS en la que se puedes descargar PDFs e imágenes y también subir tus propios archivos de imagen y PDFs.


### A tener en cuenta


No estamos probando el rendimiento del servidor (API) si es que tenemos uno, en este caso se trata de evaluar el consumo y la fluidez del sistema buscando puntos débiles del sistema.


### Preparación


Hasta dónde yo se, no se me ha ocurrido la forma de probar 100 dispositivos a la vez, una prueba de esfuerzo de una API se puede hacer con una herramienta como [Apache JMeter](http://jmeter.apache.org/) o similar sin problemas, pero para el consumo de un dispositivo no conozco ninguna. Así que tomé la decisión de hacer un estudio de un dispositivo y extrapolarlo  a 100 usuarios haciendo la cuenta de la vieja.


### Herramientas


Un ordenador con el móvil conectado, el propio móvil y el Android Studio abierto.
Android Studio tiene una herramienta casi fenomenal para medir el consumo de CPU, Memoria RAM, Consumo de red y consumo de GPU. Y digo casi por que no es capaz de sacar un mínimo informe o un sumatorio del uso en el tiempo en el que lo estamos usando.

[caption id="attachment_98" align="aligncenter" width="788"]![Captura de pantalla de Android Studio Monitors](/android-estudio-monitor-1024x394.png)
Android Studio Monitors[/caption]


### El estudio


[caption id="attachment_99" align="alignright" width="169"]![Captura de pantalla del uso de datos del teléfono móvil para la app SinTick](Screenshot_20171112-125915-169x300.png)
Uso de datos del teléfono móvil para la app SinTick[/caption]

Dispositivo: LG nexus 5 con Android 6 conectado a Red Wi-Fi
Tiempo de uso: 90 segundos


Usuarios: 1 simultáneo
Consumo total: 3,99MB
Pasos realizados:
- Crear 1 carpeta
- Crear 1 ticket con una imagen desde cámara
- Crear 1 ticket con una imagen desde galería
- Crear 1 ticket con un PDF de 1,80MB
- Realizar una Sincronización







### Conclusiones


Para 1 usuario se aprecia
- Un nivel de consumo de CPU normal, llegando al 50-55% de ocupación como máximo.- El consumo de memoria RAM es bastante pequeño, unos 41MB máximo.- El consumo total de red es de 3,99MB en este caso

- El tiempo medio de respuesta de API es de 317ms incluyendo las subidas de archivos; y una media de 37ms en el resto de acciones lo que da una media muy buena.Por lo que se aprecia que el consumo no es elevado para una persona y se aprecia un nivel fluido en las interacciones



[caption id="attachment_100" align="aligncenter" width="2032"]![](/sintick-consumo-oem-2.png)
Captura de pantalla del consumo de la app SinTick en Android Studio[/caption]






### Extrapolación a 100 Usuarios


- Se calcula que 100 usuarios simultáneos haciendo un uso extensivo de la App podrían llegar a un consumo de 399MB en un lapso de 90 segundos de los cuales un 60% serían de subida y el resto de bajada por lo que **se detecta un posible cuello de botella en al velocidad de subida del servidor**.
- Para usuarios "pasivos", aquellos que no suban archivos, el uso primordial será la descarga de imágenes, que gracias al cacheo de imágenes en local, solo se realizará una vez. **No se detecta ningún tipo de riesgo.**



- El riesgo de que 100 usuarios **muy activos** generen gran tráfico en un corto período de tiempo es **bajo**, yo recomiendo vigilar la velocidad de subida de la conexión del servidor a través de una herramienta como New Relic en los primeros momentos de la vida de SinTick o tras una gran campaña que atraiga a muchos usuarios a la vez.







### Enseñar y aprender


Está es la manera en la que yo lo he hecho, espero que sirva de ayuda para alguien. Y si alguien puede aportar algo de luz sobre el tema, como probar este tema, qué herramientas usa, etc. estaré agradecido de aprender.


		
