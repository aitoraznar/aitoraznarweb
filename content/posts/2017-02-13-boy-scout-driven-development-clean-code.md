---
author: aitor
date: 2017-02-13 10:32:56+00:00
draft: false
title: "\n\t\t\t\tBoy Scout Driven Development y el Clean Code\t\t"
type: post
url: /2017/02/boy-scout-driven-development-clean-code/
categories:
- clean code
---


				Boy Scout Driven Development (BSDD). Esta entrada va de lidiar con "proyectos legacy" o proyecto heredados bien dentro de tu mismo empresa o de una externa.

<!-- more -->


## El proyecto legacy


Voy a contar mi experiencia personal haciendo BSDD. Os pongo en antecedentes. Llega un proyecto legacy, una app híbrida, con 1 año de desarrollo. La empresa que nos contrata decidió dejar de trabajar con la empresa anterior y ahora cuenta con nosotros para resolver el entuerto. La app no funciona bien, tiene falta de fluidez y bugs e inestabilidad por todos lados, todo ello junto con problemas de diseño y responsive. Todo ello con las estimaciones pertinentes de nuestro equipo, tenemos 4 semanas para arreglar el amasijo de código que nos llega y añadir unos "pequeñas" funcionalidades más para  antes de la entrega.


## El proceso


Recibes el famoso código que ha dado más vueltas que un tiovivo entre varios developers y tienes que empezar. Las primeras reacciones son siempre, ¡vaya marrón me ha caido! ¡por qué me he metido yo en este lio? ¡me cago en ...! Y dicho todo esto te toca coger el toro por los cuernos por que tus jefes confian en ti y en que seas capaz de resolver el problema en los plazos estimados.


## Aplicando la ley del Boy Scout


El código "bloque" que tengo entre manos no tiene ninguna separación de lógica ni estructura. A cada paso que das refactorizando tienes que aplicar la ley del [Boy Scout](https://es.wikipedia.org/wiki/Ley_scout#Ley_Original), en este caso creo que aplicando la 10º y la 9º. Hay que intentar limpiar y ordenar todo lo que puedas en un tiempo razonable. Después de 4 jornadas que te pasas jurando y rompiendo la app cada 5 minutos ya tienes bastantes prácticas de código limpio aplicadas y todo para seguir teniendo la misma funcionalidad que antes.


## Conclusiones


Lo que intento poner sobre la mesa es, ¿estamos aplicamos la ley del Boy Scout? ¿dejamos todo siempre más limpio de cómo nos lo hemos encontrado? Si tu respuesta es afirmativa, enhorabuena, estás aplicando BSDD y estás haciendo del mundo un lugar mejor. Todo ello dentro de unos límites de tiempo, el tiempo siempre juega en nuestra contra y refactorizar puede llevarnos a meternos en lios, bien por agotarnos el tiempo destinado para la tarea  o bien provocar que algo deje de funcionar (si trabajamos sin tests o test mal hechos).

Mi opinión, como he transmitido en todo el artículo, es que es muy satisfactorio dejar las cosas bien hechas, o al menos lo mejor posible. El código que dejas es tu legado para otros o para tu yo del futuro y querrás que el código que te llegue se hiciera con tanto mimo como el que tu le pones.

**Otros enlaces de referencia que me voy encontrando**

[http://www.modestosanjuan.com/la-regla-del-boy-scout/](http://www.modestosanjuan.com/la-regla-del-boy-scout/)

		
