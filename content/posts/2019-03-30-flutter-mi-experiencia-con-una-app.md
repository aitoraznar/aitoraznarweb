---
author: aitor
date: 2019-03-30 11:40:51+00:00
draft: false
title: "Flutter - mi experiencia y conclusiones"
type: post
featured_image: "/images/flutter_small.png"
featured_image_caption: "Flutter SDK"
url: /blog/2019/03/flutter-mi-experiencia-con-una-app/
categories:
- Android
- Android Studio
- Cordova
- desarrollo
- Flutter
- javascript
- lab
tags:
- Android
- BLoC pattern
- Desarrollo Nativo
- Flutter
- Framework
- Google
- IOS
- java
- javascript
- Nativo
- React Native
---


				


En el contexto de realizar una pequeña prueba de concepto para migrar una App existente hecha en Cordova/Ionic para tener una experiencia más nativa. Se me ocurrió que [React Native ](https://facebook.github.io/react-native/)(Facebook) o [Flutter ](https://flutter.dev/)(Google) podrían servir para mi prueba.







Tras analizar si debía invertir tiempo en React Native o Flutter, me decanté por Flutter por su facilidad para poder empezar y básicamente este video fue el que me convenció del todo.  
  

{{< youtube id="gWs3UQzrhtE" class="youtube-video" >}}








## Empezando con Flutter







La App elegida para migrar no es otra que la de FutbolApps: [https://play.google.com/store/apps/details?id=com.futbolapps.lfp](https://play.google.com/store/apps/details?id=com.futbolapps.lfp) y elegí hacer la pantalla da consumo de noticias, es una página con scroll infinito con imágenes y detalle de noticias. El equipo elegido, el Athletic de Bilbao, ¡para que se note de dónde somos!







Cosas que me han gustado:





  * Me ha parecido una herramienta muy fácil de usar, fácil de instalar y empezar a ver ejemplos funcionando, cosa que agradezco, ya que hace 1 año tuve una experiencia horrible con react Native en ese sentido.  
  * Su set de herramientas está muy bien integrado en **Android Studio**, la herramienta que yo usé, te permite hacer debugger y profiling muy fácilmente.  
  * Tiene un montón de videos y ejemplos para aprender a usarlo, el canal de youtube en el que te enseñan **widgets** está muy bien. Si el widget que necesitas no existe, siempre puedes hacértelo tu escribiendo código nativo. Esto es lo que ellos llaman [platform channels](https://flutter.dev/docs/development/platform-integration/platform-channels).  
  * Al ser un producto de Google, los widgets que se encargan de Google Maps, Firebase, Google Auth, etc los tienes asegurados.  
  * El rendimiento es muy buena cuando instalas la versión de Release en un dispositivo móvil, me atrevería a decir que se acerca a la experiencia nativa.  
  * Visualmente se mantienen los estilos iguales tanto en Android como en iOS, eso reduce mucho el tiempo de ajustes por plataforma. El famoso "code once, run everywhere" se cumple en estas dos plataformas.  
  * El lenguaje que se usa es Dart, es un lenguaje tipado que me recordó a una mezcla entre java y javascript. Una de sus fortalezas es que permite el **hot reloading** casi instantáneo en nuestras aplicaciones. Cosa que es un factor clave cuando desarrollamos, hacemos cambios y queremos ver qué tal ha quedado ese cambio en la App.





Lo que no me ha gustado:





  * El sistema de layout para construir las vistas es un poco tedioso, hay que conocerse bien las distintas opciones que tienes o te equivocarás muy a menudo y te frustrarás no consiguiendo la alineación que quieres. Tanto es así que hasta ellos se han dado cuenta y han añadido funcionalidad extra en el IDE, marcan como un comentario cuando termina o empieza un trozo de widget.



![Trozo de código de Flutter dónde se ven los comentarios para ver cuando termina un widget.](/images/Screenshot-2019-03-30-at-11.58.59.png)
<p class="image-caption">Fijaros en esos comentarios "//Center", "// SnackBar", "// <Widget>[]", etc</p>



  * **BLoC pattern**: me ha sido difícil entender un paradigma nuevo pero una vez cacharreas con él, es todo más fácil.





## Futbol apps con Flutter







Realicé la pantalla de noticias, que tiene un scroll infinito que va pidiendo las noticias a una API de 5 en 5 junto con la vista del detalle de la noticia cuando pinchas. El código está en un repositorio para quien quiera:  
  
[https://github.com/aitoraznar/futbolapps-flutter](https://github.com/aitoraznar/futbolapps-flutter)







Un pequeño video de la App:



{{< youtube id="TgSrs2O3slk" class="youtube-video" >}}







## Conclusiones







Aún es una tecnología que no está muy madura, que aunque tenga el soporte de la todopoderosa Google, esto no quiere decir que un día decidan que ya no es rentable y se deshagan de ella. Tenemos ejemplos como [Google +](https://www.engadget.com/2018/10/08/google-shutting-down-google-plus/) o [Google Inbox](https://www.androidpolice.com/2019/03/27/inbox-is-about-to-die-and-google-still-hasnt-brought-its-best-feature-to-gmail/) u [otros productos](https://www.businessinsider.es/discontinued-google-products-2016-8). Lo que no me da mucha confianza para usar este framework para apps a largo plazo.







Si tuviera que hacer una app, siempre intentaría ver el estado actual de Flutter (otra vez el tema de la comunidad y el apoyo de Google) y ver si es buen momento para hacerla, ya que la productividad me ha parecido excelente. Si fuera una App para mí, elegiría Flutter sin dudarlo ya que la experiencia nativa está asegurada.







Me encantaría saber la experiencia de otras personas con esta herramienta, yo estoy encantado.







## Enlaces de interés





  * Hace muy poco sacaron la versión 1.2: [https://developers.googleblog.com/2019/02/launching-flutter-12-at-mobile-world.html](https://developers.googleblog.com/2019/02/launching-flutter-12-at-mobile-world.html)  
  * Ejemplos de apps con Flutter:     
    * [https://github.com/Solido/awesome-flutter](https://github.com/Solido/awesome-flutter)    
    * [https://github.com/flutter/samples/blob/master/INDEX.md](https://github.com/flutter/samples/blob/master/INDEX.md)    
    * [https://github.com/nisrulz/flutter-examples](https://github.com/nisrulz/flutter-examples)    
    * [https://github.com/mjohnsullivan/flutter-by-example](https://github.com/mjohnsullivan/flutter-by-example)  
  * Variables de entorno en Flutter: [https://iirokrankka.com/2018/03/02/separating-build-environments/](https://iirokrankka.com/2018/03/02/separating-build-environments/)  
  * Documentación de Dart: [https://www.dartlang.org/guides/language/language-tour](https://www.dartlang.org/guides/language/language-tour)  
  * Ejemplo de una app que comparte código entre web y Flutter: [https://github.com/roughike/inKino](https://github.com/roughike/inKino)  
  * BLoC pattern: [https://medium.freecodecamp.org/how-to-handle-state-in-flutter-using-the-bloc-pattern-8ed2f1e49a13](https://medium.freecodecamp.org/how-to-handle-state-in-flutter-using-the-bloc-pattern-8ed2f1e49a13)  
  * Comunidad Flutter en medium: [https://medium.com/comunidad-flutter](https://medium.com/comunidad-flutter)  
  * Para entender el Flutter Layout:    
    * Flutter Layout Cheat Sheet: [https://medium.com/flutter-community/flutter-layout-cheat-sheet-5363348d037e](https://medium.com/flutter-community/flutter-layout-cheat-sheet-5363348d037e)    
    * Slivers: [https://medium.com/flutter-io/slivers-demystified-6ff68ab0296f](https://medium.com/flutter-io/slivers-demystified-6ff68ab0296f)    
  * Video: [https://www.youtube.com/watch?v=-zJ6CnOVndE](https://www.youtube.com/watch?v=-zJ6CnOVndE) y su código [https://github.com/bizz84/layout-demo-flutter](https://github.com/bizz84/layout-demo-flutter)
		
