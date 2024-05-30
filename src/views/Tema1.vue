<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Evaluación del riesgo
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Dirigir una compañía implica, en un alto grado de responsabilidad, la gestión y evaluación adecuada de los riesgos a los que se expone a diario la empresa. Dichos riesgos pueden ser internos o externos.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img1.svg' alt='AvatarTop')
          .tarjeta.tarjeta--verde
            .p-4
              h3 Riesgos internos
              p Operaciones, recurso humano, instalaciones.
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img2.svg' alt='AvatarTop')
          .tarjeta.tarjeta--verde2
            .p-4
              h3 Riesgos externos
              p Inflación, interés, políticas, tasa de cambio, desempleo, riesgo del país.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Según la Norma ISO 31000-2018 el proceso de evaluación de los riesgos consta de cuatro pasos básicos: #[b identificación, análisis, valoración y tratamiento] de los riesgos, que dejan a disposición de la empresa una amplia gama de técnicas para identificar la incertidumbre que puede llegar a afectar a uno o a varios de sus objetivos. A continuación se describen los cuatro pasos mencionados.
     
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Identificación de riesgos")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 #[b Propósito:] detectar, inspeccionar y explicar los riesgos que pueden obstaculizar a una empresa en el logro de sus objetivos.
              p #[b Importante:] contar con información actualizada, oportuna y adecuada que permita caracterizar los riesgos y sus niveles de impacto.
              p #[b Factores a considerar:]
              .cblanco 
                .row.justify-content-center                 
                  .col-lg-6.p-4
                    ul.lista-ul
                      li
                        i.fas.fa-circle
                        | Fuentes de riesgo tangibles e intangibles.
                      li
                        i.fas.fa-circle
                        | Causas y eventos.

                      li
                        i.fas.fa-circle
                        | Amenazas y oportunidades.

                      li
                        i.fas.fa-circle
                        | Vulnerabilidades y capacidades.

                      li
                        i.fas.fa-circle
                        | Cambios en los contextos externo e interno.
                      li
                        i.fas.fa-circle
                        | Indicadores de los riesgos emergentes.

                      li
                        i.fas.fa-circle
                        | Naturaleza y valor de activos y recursos.
                  .col-lg-6.p-4
                    ul.lista-ul
                      li
                        i.fas.fa-circle.fa-2sx
                        | Consecuencias y sus impactos en los objetivos.
                      li
                        i.fas.fa-circle.fa-2sx
                        | Limitaciones de conocimiento y la confiabilidad de la información.
                      li
                        i.fas.fa-circle.fa-2sx
                        | Factores relacionados con el tiempo.
                      li
                        i.fas.fa-circle.fa-2sx
                        | Sesgos, supuestos y creencias de las personas involucradas
                figure
                  img(src='@/assets/curso/temas/tema1/img3.jpg', alt='Imagen de prueba')

          .row(numero="2" titulo="Análisis de riesgos")
            .col-md-12.mb-4.mb-md-0
              p Se realiza con diferentes grados de complejidad, todo depende de su propósito, la disponibilidad, la transparencia y la confiabilidad de la información y de los recursos disponibles.
              p Utiliza técnicas que pueden variar entre cualitativas, cuantitativas o mixtas.
              p #[b Factores a considerar:]
              .cblanco 
                .row.justify-content-center                 
                  .col-lg-6.p-4
                    ul.lista-ul
                      li
                        i.fas.fa-circle
                        | Probabilidad de eventos y consecuencias.
                      li
                        i.fas.fa-circle
                        | Naturaleza y magnitud de las consecuencias.

                      li
                        i.fas.fa-circle
                        | Complejidad e interconexión.
                  .col-lg-6.p-4
                    ul.lista-ul
                      li
                        i.fas.fa-circle.fa-2sx
                        | Factores relacionados con el tiempo y la volatilidad.
                      li
                        i.fas.fa-circle.fa-2sx
                        | Eficacia de controles existentes.
                      li
                        i.fas.fa-circle.fa-2sx
                        | Niveles de sensibilidad y de confianza.
                figure
                  img(src='@/assets/curso/temas/tema1/img4.jpg', alt='Imagen de prueba')

          .row(numero="3" titulo="Valoración de riesgos")
            .col-md-12.mb-4.mb-md-0
              p #[b Propósito:] apoyar en la toma de decisiones, lo que implica comparar resultados del análisis del riesgo para determinar en qué momento se requiere una acción adicional.
              p #[b Decisiones que se pueden abordar en la valoración de riesgos:]
              .cblanco 
                .row.justify-content
                  .col-lg-12.p-4
                    ul.lista-ul
                      li
                        i.fas.fa-circle
                        | No hacer nada más.
                      li
                        i.fas.fa-circle
                        | Considerar opciones para el tratamiento del riesgo.
                      li
                        i.fas.fa-circle
                        | Realizar un análisis adicional para comprender mejor el riesgo.
                      li
                        i.fas.fa-circle
                        | Mantener controles existentes.
                      li
                        i.fas.fa-circle
                        | Reconsiderar objetivos.

                figure
                  img(src='@/assets/curso/temas/tema1/img5.jpg', alt='Imagen de prueba')

          .row(numero="4" titulo="Tratamiento de riesgos")
            .col-md-12.mb-4.mb-md-0
              p Supone hacer una evaluación de los beneficios/costos derivados de la consecución de los objetivos.
              p #[b Procesos interactivos a ejecutar en el tratamiento de  los riesgos:]
              .cblanco 
                .row.justify-content
                  .col-lg-12.p-4
                    ul.lista-ul
                      li
                        i.fas.fa-circle
                        | Formular y seleccionar opciones para el tratamiento del riesgo.
                      li
                        i.fas.fa-circle
                        | Planificar e implementar el tratamiento del riesgo.
                      li
                        i.fas.fa-circle
                        | Evaluar la eficacia de ese tratamiento.
                      li
                        i.fas.fa-circle
                        | Decidir si el riesgo residual es aceptable.
                      li
                        i.fas.fa-circle
                        | Si no es aceptable, efectuar tratamiento adicional.
                figure
                  img(src='@/assets/curso/temas/tema1/img6.jpg', alt='Imagen de prueba')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.tarjeta--verde.p-4
          p En las empresas es primordial contar con un plan adecuado de prevención y evaluación de riesgos, que permita realizar un diagnóstico acertado y conocer de manera anticipada los sucesos internos o externos que puedan afectar el normal funcionamiento de la compañía. Con base en ello, se ejecutan acciones para minimizar o trasladar el riesgo, así la empresa sería capaz de afrontar sin mayores contratiempos, las consecuencias o pérdidas al materializarse el riesgo (Cristo, 2019).

    Separador
    .row
      .col-xl-12
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.1 Riesgo empresarial
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/img7.jpg', alt='Imagen de prueba')
      .col-lg-7
        p La gestión del riesgo empresarial-GRE afecta a los órganos directivos y laborales de la organización (junta directiva, administrativos y empleados) y se diseñó para perfilar eventos que puedan impactar a la entidad, de forma que el riesgo esté en el rango de impacto deseable y razonable que no afecte los objetivos de la organización.
        p La GRE debe impactar en todos los niveles e incluirse en los modelos de la estrategia organizacional, con el fin de identificar alternativas de solución preventivas y no correctivas enfocadas siempre al cumplimiento de metas, independientemente del departamento al cual se esté aplicando la estrategia.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p El siguiente esquema presenta el nivel de sofisticación en la gestión el riesgo:
    
    .titulo-sexto.color-acento-contenido.offset-1
      h5 Figura 1.
      span  #[i  Sofisticación del riesgo.]
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.desktop 
        figure
          img(src='@/assets/curso/temas/tema1/img8.svg', alt='')
        figcaption Nota. Tomado de Risk likelihood and magnitude, HoAdaptadopkin (2010).

      .col-lg-12.movil
        figure
          img(src='@/assets/curso/temas/tema1/img9.svg', alt='')
          figcaption Nota. Tomado de Risk likelihood and magnitude, HoAdaptadopkin (2010).
    
    .h4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas(style="color: #0C5E46") Clasificación de riesgos empresariales
        
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p En el siguiente recurso se presentan dos tipos de riesgo, según su impacto o según la posibilidad de prevenirlos o no.
    
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/temas/tema1/img10.svg', alt='Imagen decorativa')
          
        h2.text-center Cisne blanco
        p Riesgos fácilmente cuantificables y sujetos a la "ley de grandes números" y reversión media. 
        p Se prestan fácilmente al modelo probabilístico, usando como base datos históricos o utilizando el conocimiento basado en la experiencia compartida dentro de la organización.
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/temas/tema1/img11.svg', alt='Imagen decorativa')
          
        h2.text-center Cisne negro
        p De naturaleza impredecible, singulares, de alta volatilidad y un impacto potencialmente cambiante.
        p No se puede aplicar el modelado probabilístico.  Ante este tipo de evento el manejo del riesgo se hace indispensable para asegurar la supervivencia empresarial.
    
    .h4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas(style="color: #0C5E46") Tipos de riesgos y naturaleza
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p La forma más eficiente de incrementar o cumplir las metas establecidas es tener siempre presente que existen riesgos que pueden afectar la situación. Antes de definir cualquier estrategia de gestión de riesgos es necesario analizar los posibles riesgos y clasificarlos así:
        .cajon.color-primario.p-3.mb-4(style="background-color: #E1EFE3")
          p #[b Riesgo sistemático:] integra los elementos socio-político-económicos que afectan el normal funcionamiento de un proyecto o empresa, por ejemplo, crisis financieras, guerras, desplazamientos, entre otros.
        .cajon.color-secundario.p-3.mb-4(style="background-color: #DBE5F3")
          p #[b Riesgo no sistemático:] afecta de manera específica un proyecto o empresa, por ejemplo, mala estrategia de gerencia, mal funcionamiento de una maquinaria, empleados inconformes, entre otros.
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/img12.png', alt='Imagen decorativa')

    Separador
    .row
      .col-xl-12
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.2 Determinación de ocurrencia
    
    .bg1.p-5.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-3
          figure
            img(src='@/assets/curso/temas/tema1/img13.svg', alt='Imagen decorativa')
        .col-lg-7
          p El análisis de los riesgos permite recopilar la información del sistema y  de los procesos que se utilizan en las empresas para mejorar el uso, la manipulación, la protección y la administración de los recursos ante las vulnerabilidades que se pudiesen encontrar. Por tal motivo, es indispensable hacer control a la probabilidad de ocurrencia de los eventos y sus posibles consecuencias.
          p Existen diversas formas de gestionar un análisis de riesgos, lo más importante es conocer o entender la forma en que se determinará el valor del riesgo. Una forma sería multiplicar la vulnerabilidad por el % de importancia o peso para la empresa, es decir, mientras más vulnerable sea un activo y más importante sea este para la entidad, mayor será su riesgo. Por lo tanto, la inversión en tiempo, dinero o mano de obra será mayor para lograr minimizarlo.
          p El riesgo concierne a situaciones donde las probabilidades de resultados y sus consecuencias se determinan con técnicas de datos reales, completos y verídicos. Por otro lado, la incertidumbre ocurre cuando los datos utilizados presentan fragmentación, registros incompletos o datos no disponibles.
    
    .h4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas(style="color: #0C5E46") Teoría de probabilidades
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Es una herramienta que establece un conjunto de reglas o principios para calcular la ocurrencia de los eventos, asignando un número a la posibilidad de que un evento ocurra. Aproxímese al concepto de teoría de probabilidades a través del siguiente video:
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)        

    .h4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas(style="color: #0C5E46") Análisis de incertidumbre

    .row.justify-content-center.align-items-center.mb-5      
      .col-sm-5.col-xl-3.mb-4.mb-xl-0.h390.col-8
        .tarjeta.tarjeta-slide.arriba.bg2(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h5 Resultados conocidos
              p.text-small Los posibles resultados que pueden obtenerse son conocidos a #[i priori].
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img14.png')})`}")      
      .col-sm-5.col-xl-3.mb-4.mb-xl-0.h390.col-8
        .tarjeta.tarjeta-slide.arriba.bg2(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h5 Probabilidades
              p.text-small Análisis de probabilidades de cada opción.  Medir el resultado.
              br
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img15.png')})`}")      
      .col-sm-5.col-xl-3.mb-4.mb-xl-0.h390.col-8
        .tarjeta.tarjeta-slide.arriba.bg2(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h5 Evaluación y cálculo
              p.text-small Apuesta de forma analítica por una opción u otra, con base en información.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img16.png')})`}")      
      .row.justify-content-center.align-items-center.mb-5
      .col-sm-5.col-xl-3.mb-4.mb-xl-0.h390.col-8
        .tarjeta.tarjeta-slide.arriba.bg2(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h5 Efectos posibles
              p.text-small Valoración de efectos posibles con conciencia que pueden producir efectos no esperados.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img17.png')})`}")      
      .col-sm-5.col-xl-3.mb-4.mb-xl-0.h390.col-8
        .tarjeta.tarjeta-slide.arriba.bg2(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h5 Posibilidades
              p.text-small La incertidumbre no se puede medir de forma controlada.  Solo se valoran opciones.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img18.png')})`}")      
      .col-sm-6.col-xl-3.mb-4.mb-xl-0.h390.col-8
        .tarjeta.tarjeta-slide.arriba.bg2(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h5 Intuición y experiencia
              p.text-small Se trata de mejorar posibilidades actuando de forma intuitiva.
              br
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img19.png')})`}")

    .bg1
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-3
          figure
            img(src='@/assets/curso/temas/tema1/img20.svg', alt='Imagen decorativa')
        .col-lg-7          
          .cblanco1 
            .row.justify-content
              .col-lg-12.p-4
                h3 Importante
                ul.lista-ul
                  li
                    i.fas.fa-circle
                    | Se debe afrontar la incertidumbre ejerciendo influencia en las situaciones deseadas, en lo que se quiera que ocurra.
                  li
                    i.fas.fa-circle
                    | Se deben enfocar los esfuerzos en obtener una alta probabilidad de conseguir los resultados deseados, a pesar de la incertidumbre.
                  li
                    i.fas.fa-circle
                    | No se pueden afrontar las situaciones intentando conseguir algo en concreto, sino buscando aumentar las probabilidades de que eso en concreto suceda.
                  li
                    i.fas.fa-circle
                    | No se puede eliminar del todo la incertidumbre, pero sí tratar de inclinar la balanza a favor.

    Separador
    .row
      .col-xl-12
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.3 Modelos de estimación
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p En el campo de los riesgos previsibles, la estimación trata de valorar la probabilidad de ocurrencia y el nivel de impacto de los riesgos que se componen y que, teniendo en cuenta su materialidad, requieren una valoración y presentan unos niveles de asignación. La asignación distribuye los riesgos según la capacidad de gestión, para que puedan controlarse, administrarse y mitigarse. La valoración determina la estimación que puede ser cualitativa o cuantitativa, tal y como se detalla a continuación:
    
    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Estimación cualitativa")
        .col-md-6.mb-4.mb-md-0
          p Riesgos estructurados por rangos que permitan clasificarlos y calificarlos en una matriz con diversos niveles de probabilidad e impacto de ocurrencia de un evento que pueda afectar de manera desfavorable y significativa el normal desarrollo del proyecto, donde se debe tener en cuenta lo siguiente:
          .cblanco1
            ul.lista-ul
              li
                i.fas.fa-circle
                | Según la experiencia en proyectos de objetos similares y datos históricos relacionados con el factor de riesgo que se va evaluar, se puede inferir su comportamiento futuro y cuantificar las posibles consecuencias del riesgo.
              li
                i.fas.fa-circle
                | Teniendo en cuenta la evidencia empírica y las prácticas en el sector dentro del cual se desarrolla el proyecto, se puede asignar un valor numérico tanto a la probabilidad como al impacto de los riesgos previamente cualificados.
              li
                i.fas.fa-circle
                | Se puede recurrir a publicaciones y estudios técnicos que proponen modelos y procedimientos para valorar ciertas clases de riesgos.
              li
                i.fas.fa-circle
                | Se puede utilizar la herramienta de valoración de riesgos que proporciona una aproximación general del valor de su riesgo.
              li
                i.fas.fa-circle
                | Se puede recurrir a las opiniones de expertos, con el fin de que emitan conceptos relacionados con la cuantificación de las posibles consecuencias económicas que tendría la ocurrencia de un riesgo determinado.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img21.png', alt='Imagen decorativa')
            
      .row(titulo="Estimación cuantitativa")
        .col-md-6.mb-4.mb-md-0
          p Se realiza después de la estimación cualitativa, con la integración de sus criterios a través de una aproximación numérica que valora el impacto de los riesgos previamente identificados, teniendo en cuenta:
          .cblanco1
            ul.lista-ul
              li
                i.fas.fa-circle
                | El tipo y la modalidad del proyecto son relevantes para la determinación del nivel de transferencia delas  responsabilidades.
              li
                i.fas.fa-circle
                | La transferencia de los riesgos debe ser proporcional a la cantidad de información con la que se cuente para su mitigación.
              li
                i.fas.fa-circle
                | La asignación de los riesgos previsibles, atendiendo a las capacidades de los contratistas para su administración y a la existencia en el mercado de garantías que constituyan el soporte o el respaldo financiero o asegurador del proyecto.
              li
                i.fas.fa-circle
                | El traslado del riesgo no tiene connotaciones infinitas.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img22.png', alt='Imagen decorativa')
    
    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-lg-10
        .tarjeta.tarjeta--verde.p-4
          p Es importante cuantificar y categorizar los riesgos, porque según su nivel o puntaje de evaluación o estimación se logran jerarquizar mediante un plan de acción o intervención, tratando de actuar sobre quienes son más críticos y pueden llegar a ser más perjudiciales para el normal desarrollo de un proyecto o funcionamiento de una empresa. Estos niveles jerarquizados se plasman para una mejor lectura y comprensión en un mapa de riesgos.

    Separador
    .row
      .col-xl-12
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.4 Mapa de riesgos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Identifica de forma gráfica los riesgos a los que se expone una empresa, teniendo en cuenta su probabilidad y el impacto que pueden causar.

    .bg1
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-3
          figure
            img(src='@/assets/curso/temas/tema1/img20.svg', alt='Imagen decorativa')
        .col-lg-7          
          .cblanco1 
            .row.justify-content
              .col-lg-12.p-4
                h3 Importante
                ul.lista-ul
                  li
                    i.fas.fa-circle
                    | Compartir y recopilar información de manera clara posibilita reconocer con rapidez los riesgos y actuar de acuerdo con su nivel de importancia
                  li
                    i.fas.fa-circle
                    | Identificar los riesgos de forma correcta permite establecer niveles en diferentes áreas de la empresa, lo que conlleva a establecer el objetivo del mapa de riesgos.                  
    .h4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas(style="color: #0C5E46") Pasos para elaborar un mapa de riesgos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p La secuencia ofrecida a continuación detalla los pasos recomendados para la elaboración de un mapa de riesgos:
    .tarjeta.tarjeta--gris.bg1.p-4.mb-5
      PasosB.color-primario
        .row(titulo="Paso 1")
          .col-md-6.mb-4.mb-md-0
            h4 ¿Qué es el riesgo?
            p Obtener una definición clara y consistente de lo que es el riesgo.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img23.png', alt='Imagen decorativa')
        .row(titulo="Paso 2")
          .col-md-6.mb-4.mb-md-0
            h4 Metodología
            p Adoptar una metodología común para evaluar la importancia del riesgo.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img24.png', alt='Imagen decorativa')
        .row(titulo="Paso 3")
          .col-md-6.mb-4.mb-md-0
            h4 Alcance
            p Limitar el alcance de la investigación de riesgos.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img25.png', alt='Imagen decorativa')
        .row(titulo="Paso 4")
          .col-md-6.mb-4.mb-md-0
            h4 Actividades
            p Identificar las principales actividades de la organización.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img26.png', alt='Imagen decorativa')
        .row(titulo="Paso 5")
          .col-md-6.mb-4.mb-md-0
            h4 Identificación riesgos
            p Identificar los riesgos que pueden afectar a esas actividades.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img27.png', alt='Imagen decorativa')
        .row(titulo="Paso 6")
          .col-md-6.mb-4.mb-md-0
            h4 Evaluación riesgos
            p Evaluar los riesgos con y sin acciones para minimizar el impacto o la probabilidad.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img28.png', alt='Imagen decorativa')
        .row(titulo="Paso 7")
          .col-md-6.mb-4.mb-md-0
            h4 Tratamientos
            p Identificar los posibles tratamientos a implementar para reducir el impacto o la probabilidad.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img29.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Los mapas de riesgos se deben revisar periódicamente, teniendo en cuenta que la gestión y los riesgos son dinámicos, es decir, lo que hoy se puede identificar como un peligro, a futuro puede no existir o transformarse en una oportunidad y viceversa. Por eso, el mapa de riesgos debe pasar por revisiones según los cambios o entorno de la empresa, aunque algunas no tienen mayor alteración en sus condiciones, otras entidades proclives a cambios constantes.
        p Es importante recordar que dentro de las #[b técnicas de elaboración de un mapa de riesgos] se destacan las siguientes:
    PasosA.color-acento-contenido.mb-5(tipo="n")
      .row(titulo="")
        .col-md-6.mb-4.mb-md-0
          h4 Nombrar un comité de riesgo
          p Identificar las situaciones o riesgos que pongan en peligro el funcionamiento de un proyecto o empresa es responsabilidad de la alta gerencia; por ello, el gerente debe conformar un equipo multidisciplinar que pueda identificar los riesgos.
        .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img30.jpg', alt='Imagen decorativa')
      .row(titulo="")
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img31.jpg', alt='Imagen decorativa')
        .col-md-6.mb-4.mb-md-0
          h4 Definir qué es un riesgo
          p El comité debe recopilar toda la información necesaria y definir para la organización o para el proyecto ¿qué es un riesgo? El riesgo ayuda a controlar las crisis anticipándose a lo que pueda ocurrir.        
      .row(titulo="")
        .col-md-6.mb-4.mb-md-0
          h4 Identificar riesgos
          p El trabajo en equipo se ve reflejado en el momento que cada responsable de área analice los procesos e identifique los riesgos propios de su área (esas situaciones que afectan el desempeño normal de las actividades). Identificados los riesgos se realiza un inventario o lista, con su descripción para conocer las posibles consecuencias.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img32.jpg', alt='Imagen decorativa')
      .row(titulo="")
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img33.jpg', alt='Imagen decorativa')
        .col-md-6.mb-4.mb-md-0
          h4 Valorar los riesgos
          p El equipo debe clasificar los riesgos, teniendo en cuenta la caracterización realizada en el paso anterior. A continuación se debe establecer un nivel de riesgo (alto, medio o bajo) y las acciones que se van a implementar. También se define si el riesgo es sistemático o no sistemático.        
      .row(titulo="")
        .col-md-6.mb-4.mb-md-0.cblanco
          h4 Matriz de priorización
          p De acuerdo con la valoración de riesgos obtenida se elabora una matriz de priorización que permite establecer qué riesgos necesitan atención inmediata. Se analiza el riesgo y se clasifica como:          
          ul.lista-ul
            li              
              i.fas.fa-circle
              | #[b.rojo Alto.] Es muy probable que ocurra.
            li
              i.fas.fa-circle
              | #[b.amarillo Medio.] Puede ocurrir.
            li
              i.fas.fa-circle
              | #[b.verd Bajo.] Muy poco probable que ocurra o improbable.

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img34.svg', alt='Imagen decorativa')
            figcaption Nota. El mapa de calor de riesgo consiste en una matriz con dos ejes, el Y representa la probabilidad de frecuencia del riesgo y el eje X, el impacto que puede tener. Tomado de Mapa de calor, Londoño  (2020).

    Separador
    .row
      .col-xl-12
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.5 Tratamiento de riesgos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        figure
          img(src='@/assets/curso/temas/tema1/img35.png', alt='Imagen decorativa')
      .col-lg-6.cblanco
        p Está basado en el diseño, la evaluación, la selección e implementación de acciones para plantear los riesgos identificados al interior de una empresa. Según la norma internacional ISO 31000 el tratamiento de riesgos es un proceso cambiante y repetitivo que requiere de actividades de formulación, planeación y evaluación, tales como:
        ul.lista-ul
          li              
            i.fas.fa-circle
            | Formular opciones para el tratamiento de riesgos.
          li              
            i.fas.fa-circle
            | Seleccionar la opción más adecuada.
          li              
            i.fas.fa-circle
            | Planificar e implementar el tratamiento de riesgos.
          li              
            i.fas.fa-circle
            | Evaluar la efectividad de las acciones implementadas.
          li              
            i.fas.fa-circle
            | Calificar el riesgo residual (aceptable o no aceptable).
          li              
            i.fas.fa-circle
            | Tratamiento para el riesgo residual no aceptable.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Las opciones del tratamiento de riesgo resultan más efectivas cuando se ponen en una balanza los beneficios y los costos. Los beneficios procedentes de la efectividad de una acción propuesta y los costos del esfuerzo y las desventajas que casualmente surjan como consecuencia de la implementación. Según la Norma ISO 31000 las opciones de tratamiento no son excluyentes entre sí e incluyen algunas de las siguientes acciones:
    .bg1.p-4.mb-5
      .row.justify-content-center.align-items-center     
        .col-lg-7
          .cblanco1
            ul.lista-ul
              li              
                i.fas.fa-circle
                | Eliminar el riesgo prescindiendo del proceso, la actividad o las circunstancias que lo generan.
              li              
                i.fas.fa-circle
                | Asumir el riesgo, aún aumentándolo, con el fin de incrementar una posible oportunidad.
              li              
                i.fas.fa-circle
                | Tomar acciones para disminuir la probabilidad del riesgo.
              li              
                i.fas.fa-circle
                | Implementar acciones que disminuyan el impacto negativo del riesgo.
              li              
                i.fas.fa-circle
                | Compartir el riesgo (cláusulas en contratos o comprar pólizas de seguros).
              li              
                i.fas.fa-circle
                | Retener el riesgo con base en información confiable.
        .col-lg-3
          figure
            img(src='@/assets/curso/temas/tema1/img36.svg', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
      p La implementación de los planes de tratamiento de riesgos consiste en determinar y detallar la manera en que tomarán las opciones seleccionadas, de modo que los involucrados entiendan y monitoreen el progreso del plan. De acuerdo con ISO 31000 el plan de tratamiento de riesgos permite reconocer claramente la disposición de la implementación de acciones, de tal forma que integre los procesos de gestión en la empresa, teniendo en cuenta las necesidades identificadas en atención a:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5        
        figure
            img(src='@/assets/curso/temas/tema1/img37.png', alt='Imagen decorativa')
      .col-lg-7.cblanco.text-small.p-4
        ul.lista-ul
          li              
            i.fas.fa-circle
            | Justificación para la elección de las opciones de tratamiento, incluyendo beneficios esperados.
          li              
            i.fas.fa-circle
            | Quiénes son los responsables de aprobar e implementar el plan.
          li              
            i.fas.fa-circle
            | Las acciones de tratamiento propuestas.
          li              
            i.fas.fa-circle
            | Recursos requeridos, incluyendo los necesarios en caso de contingencia.
          li              
            i.fas.fa-circle
            | Mediciones de rendimiento del plan.
          li              
            i.fas.fa-circle
            | Limitaciones del plan.
          li              
            i.fas.fa-circle
            | Acciones de monitoreo requeridas.
          li              
            i.fas.fa-circle
            | Plazos esperados para que se completen las acciones.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Es importante reconocer la existencia de dos estrategias principales para el tratamiento de riesgos, estas son:
    
    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Estrategias de evitación")
        .col-md-6.mb-4.mb-md-0
          p El objetivo es minimizar o reducir lo más posible la probabilidad de que el riesgo ocurra. El proceso se basa en: 
          .cblanco1
            ul.lista-ul
              li
                i.fas.fa-circle
                | #[b Transferir]. Determina la eliminación del riesgo traspasándolo a un tercero, por ejemplo, el seguro contra terremotos de una casa, este riesgo se transfiere a una aseguradora.
              li
                i.fas.fa-circle
                | #[b Reducir]. El objetivo es minimizar la probabilidad de que ocurra un evento desafortunado, minimizando sus consecuencias o asegurando los objetivos propuestos. Contar con un sistema de gestión de riesgos adecuado a la organización permite reducir los riesgos de manera significativa. 
              li
                i.fas.fa-circle
                | #[b Evitar]. Consiste en tomar la decisión acertada en el momento indicado, es decir, no ejecutar la actividad que trae consigo el riesgo, no poner en marcha el proyecto o contar con acciones alternativas de la actividad que ofrece los mismo resultados.
              li
                i.fas.fa-circle
                | #[b Diversificar]. Fraccionar el riesgo de un área en pequeñas secciones que incluyan otras áreas, con el fin de afectar todo el proyecto o la entidad en general (es mejor sacrificar un pequeño % de un área al 100 % del área).

        .col-md-6.desktop
          figure
            img(src='@/assets/curso/temas/tema1/img38.svg', alt='Imagen decorativa')
            figcaption Nota. Adaptado de Estrategias de tratamiento de riesgos,  Comunidad de Madrid (s.f.). 
        .col-md-12.movil
          figure
            img(src='@/assets/curso/temas/tema1/img38_.svg', alt='Imagen decorativa')
            figcaption Nota. Adaptado de Estrategias de tratamiento de riesgos,  Comunidad de Madrid (s.f.). 
            
            
      .row(titulo="Estimación de minimización")
        .col-md-6.mb-4.mb-md-0
          p Reducen el impacto del riesgo en el proyecto. La minimización se presenta cuando falla la evitación y, por lo tanto, el riesgo se presenta. Se debe plantear un plan de contingencia para mitigar las consecuencias del riesgo, una vez este se haya creado.
          p #[b Plan de contingencia.] Describe los procesos y los procedimientos que se deben implementar en una empresa cuando los riesgos dejan de ser probables y se convierten en un hecho. Por lo tanto, se asume que las acciones de monitoreo y control de los riesgos han fallado, y sus consecuencias son inevitables. Llegado a este punto, la única salida es activar el plan de minimización que incluye las etapas de coordinación en la administración de las crisis, y uso de los procedimientos que den la continuidad a las operaciones, y resolución de los incidentes para garantizar el reinicio de la operación normal de los procesos.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img39.png', alt='Imagen decorativa')          
    Separador
    .row
      .col-xl-12
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.6 Normativa técnica
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p Son documentos donde se establece por consentimiento y con la aprobación de un ente reconocido algunas cláusulas o directrices mínimas que debe cumplir una empresa en la elaboración de un producto o servicio. Las normas son reglas que se aceptan de manera voluntaria por los interesados y a su vez reflejan la experiencia y el conocimiento de las personas, de acuerdo con su especialidad y  las necesidades de las empresas. 
        p Una de las normas más importantes hoy es la Norma ISO 31000, que ayuda a desarrollar y gestionar directrices en empresas de cualquier sector económico, minimizando el impacto de los riesgos en todas sus áreas para mejorar los procesos y gestión de calidad. 
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/img40.png', alt='Imagen decorativa') 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p A continuación, se presentan sus principales características:
    
    .row.justify-content-center
      .tarjeta.tarjeta--azul.p-4.mb-5.bgslyder
        SlyderA(tipo="b").mb-5
          .row
            .col-md-6.mb-4.mb-md-0.p-4
              h4 Definición
              p Norma internacional para la gestión de riesgos, que ofrece orientaciones y fundamentos para minimizar el impacto de los riesgos presentes en las organizaciones.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img41.png', alt='Imagen decorativa')
          .row
            .col-md-6.mb-4.mb-md-0.p-4
              h4 Origen
              p Se publica en 2009 por la Organización Internacional de Normalización (ISO) en colaboración con la Comisión Electrotécnica Internacional (IEC).
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img42.png', alt='Imagen decorativa')
          .row
            .col-md-6.mb-4.mb-md-0.p-4
              h4 Objetivos
              .cblanco2
                ul.lista-ul
                  li
                    i.fas.fa-circle
                    | Gestionar sistemas especializados para la normalización mundial. 
                  li
                    i.fas.fa-circle
                    | Apoyar a las empresas en el manejo de los riesgos de forma efectiva, recomendando el desarrollo, la implementación y la mejora continua de sus marcos de trabajo, con el propósito de integrar la cultura de gestión de riesgos en cada área de la organización.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img43.png', alt='Imagen decorativa')
          .row
            .col-md-6.mb-4.mb-md-0.p-4
              h4 Estructura
              p Dada la diversidad y dificultad de los riesgos, la ISO 31000 no está enfocada en un sistema particular de gestión.  Fue desarrollada como una guía de buenas prácticas para la implementación de acciones asociadas con la gestión de riesgos. Su diseño e implementación dependerá en gran medida de las necesidades de cada entidad, sus metas específicas, políticas, servicios, etc.
              p Está compuesta de tres elementos fundamentales en la gestión de riesgos:
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img44.png', alt='Imagen decorativa')
          .row
            .col-md-6.mb-4.mb-md-0.p-4
              h4 Estructura
              .cblanco2
                ul.lista-ul
                  li
                    i.fas.fa-circle
                    | Los principios para la gestión de riesgos.
                  li
                    i.fas.fa-circle
                    | La estructura de soporte o marco de trabajo. 
                  li
                    i.fas.fa-circle
                    | El proceso de gestión de riesgos, este proceso consta de tres etapas: el  establecimiento del contexto, la valoración de los riesgos y el tratamiento de los mismos.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img44.png', alt='Imagen decorativa')
          .row
            .col-md-12.mb-4.mb-md-0.p-4
              h4 Principios
              .row
                .col-md-12.mb-4.mb-md-0.p-4
                  .cblanco2
                    ul.lista-ul
                      li
                        i.fas.fa-circle
                        | #[b Crear y proteger el valor.] Contribuye a la consecución de objetivos así como la mejora de aspectos.
                      li
                        i.fas.fa-circle
                        | #[b Estar integrada en los procesos de una organización.] No debe ser entendida como una actividad aislada, sino como parte de las actividades y procesos principales de una organización.
                      li
                        i.fas.fa-circle
                        | #[b Formar parte de la toma de decisiones.] Ayuda a la toma de decisiones ,evaluando la información sobre las distintas alternativas.
                      li
                        i.fas.fa-circle
                        | #[b Tratar explícitamente la incertidumbre.] Aborda aspectos de la toma de decisiones que son inciertos, la naturaleza de esa incertidumbre y cómo puede tratarse.
                      li
                        i.fas.fa-circle
                        | #[b Ser sistemática, estructurada y adecuada.] Contribuye a la eficiencia y, consecuentemente, a la obtención de resultados fiables.
                      li
                        i.fas.fa-circle
                        | #[b Basarse en la mejor información disponible.] Los #[i inputs] del proceso de gestión del riesgo están basados en fuentes de información como la propia experiencia, la observación y la opinión de expertos.
          .row
            .col-md-12.mb-4.mb-md-0.p-4
              h4 Principios
              .row
                .col-md-12.mb-4.mb-md-0.p-4
                  .cblanco2
                    ul.lista-ul
                      li
                        i.fas.fa-circle
                        | #[b Estar hecha a medida.] Alineada al contexto externo e interno de la organización y su perfil de riesgo.
                      li
                        i.fas.fa-circle
                        | #[b Tener en cuenta factores humanos y culturales.] Reconoce la capacidad y la percepción de los empleados y personas interesadas.  
                      li
                        i.fas.fa-circle
                        | #[b Ser transparente e inclusiva.] La apropiada y oportuna participación de los grupos de interés (#[i stakeholders]) y, en particular, de los responsables a todos los niveles, asegura que la gestión del riesgo permanezca relevante y actualizada.
                      li
                        i.fas.fa-circle
                        | #[b Ser dinámica, iterativa y sensible al cambio.] La organización debe velar para que la gestión del riesgo detecte y responda a los cambios de la empresa y de su entorno.
                      li
                        i.fas.fa-circle
                        | #[b Facilitar la mejora continua de la organización.] Las organizaciones deberán desarrollar e implementar estrategias para mejorar continuamente, tanto en la gestión del riesgo como en cualquier otro aspecto de la organización.
                  
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p También están los sistemas de gestión de seguridad de la cadena de suministro ISO 28000 que permiten a las empresas tener la competencia de controlar las vulnerabilidades y las amenazas que lleguen afectar la seguridad. De la Norma ISO 2800 se destaca lo siguiente:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/img45.svg', alt='Imagen decorativa')
      .col-lg-8
        .cblanco2
          ul.lista-ul
            li
              i.fas.fa-circle
              | Aporta un entorno de buenas prácticas para minimizar los riesgos de los responsables y los productos en la cadena de suministro. 
            li
              i.fas.fa-circle
              | Gestiona y mitiga la seguridad en la logística, enfocándose a amenazas como el terrorismo, el fraude y la piratería. 
            li
              i.fas.fa-circle
              | Permite a una empresa amortiguar las consecuencias de los incidentes de seguridad, centrándose en situaciones críticas para gestionar y garantizar los riesgos de seguridad de la cadena de suministro, incluyendo financiación, producción, gestión de la información, transporte, almacenamiento y/o depósito.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Como beneficios de la aplicación de esta norma en una compañía se puede destacar los siguientes:
    .bg1.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-7
          .cblanco2
            ul.lista-ul
              li
                i.fas.fa-check
                | Permite identificar los riesgos y las amenazas que atentan contra la seguridad de la cadena de suministro e implementar controles para contrarrestar las amenazas.            
              li
                i.fas.fa-check
                | Reduce los niveles de inspección.           
              li
                i.fas.fa-check
                | Mejora la gestión del riesgo.            
              li
                i.fas.fa-check
                | Contribuye con la seguridad de los empleados.            
              li
                i.fas.fa-check
                | Mejora las relaciones y brinda mayor confianza con los organismos reguladores.            
              li
                i.fas.fa-check
                | Fortalece la continuidad del negocio.            
              li
                i.fas.fa-check
                | Contribuye a gestionar requisitos de otros sistemas de gestión.            
              li.mb-0
                i.fas.fa-check
                | Permite mejorar continuamente la seguridad en la cadena de suministro.            
              li
                i.fas.fa-check
                | Generación de ventaja comercial y competitiva.
        .col-lg-4
          figure
            img(src='@/assets/curso/temas/tema1/img46.svg', alt='Imagen decorativa')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Las normas técnicas actúan como guías de normalización, unificando procesos y procedimientos que protegen los activos de las empresas, apoyándose en razones éticas, que promueven la calidad, la eficiencia y la seguridad. Su objetivo es la estandarización para un correcto seguimiento, supervisión y desarrollo de los procesos, sin omitir que diferentes normas puedan integrarse y complementarse, razón por la que las normas de gestión de riesgos trabajan junto con las de gestión de calidad de la información.
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
