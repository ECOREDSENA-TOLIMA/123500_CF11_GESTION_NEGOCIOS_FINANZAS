<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Gestión de la información
    
    .row.justify-content-center
      .col-lg-10.col-12
        .bloque-texto-d.color-secundario.p-4(data-aos="fade-left").mb-5
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p.mb-0 La Política de Gobierno Digital es una política de Estado liderada por el Ministerio de Tecnologías de la Información y las Comunicaciones de Colombia - MinTIC que tiene como objetivo promover el uso y aprovechamiento de las TIC para fortalecer y garantizar un Estado y ciudadanos innovadores, competitivos y dinámicos, que otorguen valor público en un entorno de confianza digital.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 (MinTIC, 2019, p. 11). 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Esta política consiste en dos componentes que se desarrollan mediante tres habilitadores, todos en pro de lograr los cinco propósitos planteados para la implementación de esta política en las entidades públicas: 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema2/img1.png', alt='Imagen decorativa')
      .col-lg-7
        ol.lista-ol--cuadro
          li
          .lista-ol--cuadro__vineta(style="color: #232222")
            span 1
          | Servicios digitales de confianza y calidad.
          li
          .lista-ol--cuadro__vineta(style="color: #232222")
            span 2
          | Decisiones basadas en datos.
          li
          .lista-ol--cuadro__vineta(style="color: #232222")
            span 3
          | Procesos internos, seguros y eficientes.
          li
          .lista-ol--cuadro__vineta(style="color: #232222")
            span 4
          | Empoderamiento de los ciudadanos a través del Estado abierto.
          li
          .lista-ol--cuadro__vineta(style="color: #232222")
            span 5
          | Territorios y ciudades inteligentes a través de las TIC.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p En el siguiente esquema se presentan los elementos de la Política de Gobierno Digital:
    
    .row.justify-content-center.align-items-center
      .col-lg-10.col-12
        ImagenInfografica.color-acento-botones.mb-5.desktop
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img2.svg', alt='')
              figcaption Nota. Adaptada de Elementos de la política, MinTIC (2019).  
          .tarjeta.bg2.p-3(x="50.2%" y="15.5%" numero="+")
            p Elementos constitutivos de la Política de Gobierno Digital que establece dos líneas de acción.
          .tarjeta.bg2.p-3(x="29.7%" y="37.2%" numero="+")
            p Busca mejorar el funcionamiento de las entidades públicas y su relación con otras entidades, por ejemplo, mejorar el funcionamiento del SENA y su interacción con entidades como el Ministerio de Educación o la Registraduría Nacional.
          .tarjeta.bg2.p-3(x="70.5%" y="36.7%" numero="+")
            p Busca fortalecer la relación de los ciudadanos con el Estado promoviendo el uso de los datos públicos y participación del diseño de conjunto de servicios, políticas y soluciones a problemáticas de interés común, por ejemplo, que la ciudadanía participe activamente proponiendo necesidades de formación para servidores públicos y que en conjunto con el SENA se ofrezcan programas o acciones de capacitación para suplirlas.
          .tarjeta.bg2.p-3(x="29.6%" y="52.1%" numero="+")
            p El SENA implementa lineamientos de seguridad de la información en procesos, trámites y servicios, sistemas de información, infraestructura y en general en todos los activos de información, con el fin de preservar la confidencialidad, la integridad, la disponibilidad y la privacidad de los datos.
          .tarjeta.bg2.p-3(x="50.2%" y="51.1%" numero="+")
            p El SENA aplica el enfoque de arquitectura empresarial para la gestión de TI, lo que permite trazar el mapa de ruta respecto a los lineamientos y mejores prácticas para sus inversiones en tecnología.
          .tarjeta.bg2.p-3(x="70.5%" y="52%" numero="+")
            p El SENA debe prestar servicios digitales a los ciudadanos como, por ejemplo, autenticación biométrica, autenticación con cédula digital, carpeta ciudadana, solicitud de certificaciones mediante medios electrónicos, entre otros.
          .tarjeta.bg2.p-3(x="50.1%" y="78.3%" numero="+")
            p Aspectos que articulados permiten el desarrollo de los componentes de la política.

    .row.justify-content-center
      figure.movil
        img(src='@/assets/curso/temas/tema2/img2-1.svg', alt='')
    
    //-ImagenInfografica.color-acento-botones.mb-5.movil
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema2/img2-1.svg', alt='')
          figcaption Nota. Adaptada de Elementos de la política, MinTIC (2019).  
      .tarjeta.bg2.p-3(x="50.2%" y="14%" numero="+")
        p Elementos constitutivos de la Política de Gobierno Digital que establece dos líneas de acción.
      .tarjeta.bg2.p-3(x="32.5%" y="21%" numero="+")
        p Busca mejorar el funcionamiento de las entidades públicas y su relación con otras entidades, por ejemplo, mejorar el funcionamiento del SENA y su interacción con entidades como el Ministerio de Educación o la Registraduría Nacional.
      .tarjeta.bg2.p-3(x="67.5%" y="21%" numero="+")
        p Busca fortalecer la relación de los ciudadanos con el Estado promoviendo el uso de los datos públicos y participación del diseño de conjunto de servicios, políticas y soluciones a problemáticas de interés común, por ejemplo, que la ciudadanía participe activamente proponiendo necesidades de formación para servidores públicos y que en conjunto con el SENA se ofrezcan programas o acciones de capacitación para suplirlas.
      .tarjeta.bg2.p-3(x="32.5%" y="42%" numero="+")
        p El SENA implementa lineamientos de seguridad de la información en procesos, trámites y servicios, sistemas de información, infraestructura y en general en todos los activos de información, con el fin de preservar la confidencialidad, la integridad, la disponibilidad y la privacidad de los datos.
      .tarjeta.bg2.p-3(x="50.2%" y="53%" numero="+")
        p El SENA aplica el enfoque de arquitectura empresarial para la gestión de TI, lo que permite trazar el mapa de ruta respecto a los lineamientos y mejores prácticas para sus inversiones en tecnología.
      .tarjeta.bg2.p-3(x="67.5%" y="42%" numero="+")
        p El SENA debe prestar servicios digitales a los ciudadanos como, por ejemplo, autenticación biométrica, autenticación con cédula digital, carpeta ciudadana, solicitud de certificaciones mediante medios electrónicos, entre otros.
      .tarjeta.bg2.p-3(x="50.2%" y="65%" numero="+")
        p Aspectos que articulados permiten el desarrollo de los componentes de la política.

    .h4.mb-4.mt-4(data-aos="zoom-down-right")
      span.titulo-herramientas(style="color: #0C5E46") Propósitos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p La Política de Gobierno Digital se orienta en la satisfacción de las necesidades y la solución de problemas del Estado y de los ciudadanos a través de la sincronía entre componentes y habilitadores, favoreciendo el logro de los siguientes cinco propósitos:

    .row.justify-content-center.align-items-center.mb-5.bg1.p-5
      .col-lg-8
        ol.lista-ol--cuadro
          li
          .lista-ol--cuadro__vineta(style="color: #232222")
            span 1
          | Que las entidades habiliten y mejoren la provisión de servicios digitales de confianza y calidad.
          li
          .lista-ol--cuadro__vineta(style="color: #232222")
            span 2
          | Que los procesos internos de las entidades públicas sean seguros y eficientes a través del fortalecimiento de las capacidades de gestión de las tecnologías de la información.
          li
          .lista-ol--cuadro__vineta(style="color: #232222")
            span 3
          | Que las entidades públicas tomen decisiones basadas en datos.
          li
          .lista-ol--cuadro__vineta(style="color: #232222")
            span 4
          | Que los ciudadanos se empoderen y participen de la consolidación de un Estado abierto.
          li
          .lista-ol--cuadro__vineta(style="color: #232222")
            span 5
          | Que se solucionen retos sociales mediante el desarrollo de territorios y ciudades inteligentes.
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img3.svg', alt='')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Así, el MinTIC dispone que, dentro de la sección de políticas TI, las entidades deben actuar junto a lineamientos, guías y estándares que les faciliten la gestión de sus recursos y proyectos, que conlleven a resultados más eficientes.

    Separador
    .row
      .col-xl-12
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.1 Protocolos de elaboración
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema2/img4.png', alt='')
      .col-lg-7
        p La información es indispensable para abordar diferentes procesos administrativos, académicos, operativos, tecnológicos, etc. El tratamiento de la información en cualquier formato (digital, físico, magnético) es una de las actividades que realizan los sistemas de información que soportan los procesos. Del mismo modo, estos métodos incorporan los datos y los recursos físicos como el papel, o tecnológicos, así como los encargados de realizar estas actividades. 
        p Al hablar de los activos que componen los sistemas de información se pueden reconocer los activos físicos (como los computadores) y los de almacenamiento (como USB, discos, cintas, etc.). No obstante, no es recomendable discriminar los demás activos, que aunque no son tangibles, sí son esenciales para las organizaciones como, por ejemplo, el conocimiento (#[i know-how]) de los funcionarios, la reputación, el #[i software] o la propiedad intelectual.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.tarjeta--verde.p-4
          p Cuando se habla de los Sistemas de Gestión de Seguridad de la Información – SGSI se habla de reconocer la importancia del uso reflexivo de la tecnología y las comunicaciones, entendiendo que su uso irresponsable expone a diario a múltiples amenazas que ponen en riesgo la información y con ello, la operación de las entidades. Dichos riesgos provienen tanto del exterior como del interior. Para poder trabajar en un ambiente seguro es necesario identificar la información, determinar su valor e implementar mecanismos o controles en los procesos, las personas y la tecnología. Con el apoyo e implementación del Sistema de gestión de seguridad y privacidad de la información se puede identificar y gestionar los posibles riesgos que atenten contra la seguridad de la información de la empresa.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Para hablar del SGSI es importante entender los diferentes conceptos asociados y la diferencia entre seguridad de la información, seguridad informática y ciberseguridad, como se expone a continuación:
    
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/img5.svg', alt='')
        h2.text-center Seguridad informática
        p Área relacionada con la informática y la telemática que se enfoca en la protección de la infraestructura computacional y todo lo relacionado con esta, especialmente, la información contenida en una computadora o circulante a través de las redes de las computadoras.
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/img6.svg', alt='')
        h2.text-center Ciberseguridad
        p Reservación de la confidencialidad, integridad y disponibilidad de la información en el ciberespacio.
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/img7.svg', alt='')
        h2.text-center Seguridad de la información
        p Reservación de la confidencialidad, la integridad y la disponibilidad de la información. También involucra otras propiedades como la autenticidad,  la responsabilidad, el no repudio y la confiabilidad. 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p La #[b seguridad informática] permite resguardar la información, por lo que su alcance es mucho más amplio que la ciberseguridad; la SI protege la información de los posibles riesgos que puedan afectarla, de forma física o digital. Por otro lado, la #[b ciberseguridad] está orientada a proteger la información digital que se procesa a través de redes, computadores, servidores, etc., por lo que se aproxima mucho a la #[b seguridad informática], la cual se preocupa de la protección de la información en cualquier infraestructura computacional o medio informático interconectado o no.
      .col-lg-12
        p La siguiente figura representa las relaciones entre ciberseguridad y otros dominios de seguridad:

    .titulo-sexto.color-acento-contenido.offset-1
      h5 Figura 2.
      span  #[i  Relaciones de ciberseguridad y otros dominios.]
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        figure.desktop
          img(src='@/assets/curso/temas/tema2/img8.svg', alt='Figura que relaciona los aspectos de ciberseguridad y de otros dominios, destacando aspectos en seguridad como: información, aplicación, cibermética, red e internet.')

    .row.justify-content-center.align-items-center.mb-5.movil
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema2/img8_1.svg', alt='Figura que relaciona los aspectos de ciberseguridad y de otros dominios, destacando aspectos en seguridad como: información, aplicación, cibermética, red e internet.')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.tarjeta--verde.p-4
          p En conclusión, las bases de datos, los sistemas de información, los reportes, las facturas, los datos personales de contratistas, docentes, proveedores, etc., se deben gestionar de forma diferente, porque no todos tienen la misma relevancia. Por ello, lo más importante en el momento de proteger la información es clasificarla correctamente antes de tomar alguna acción.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        figure
          img(src='@/assets/curso/temas/tema2/img9.png', alt='')

      .col-lg-6
        p Por eso, la Ley de Protección de Datos Personales declara la protección como derecho de toda persona a conocer, actualizar y rectificar la información recogida en bases de datos propensas a la manipulación y gestión por entidades públicas o privadas. De acuerdo con esto, la información personal se encuentra clasificada así:
        ul.lista-ul
          li
            i.fas.fa-check
            | Pública: dato público.
          li
            i.fas.fa-check
            | Clasificada: dato semiprivado y privado.
          li
            i.fas.fa-check
            | Reservada: dato sensible.


    Separador
    .row
      .col-xl-12
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.2 Normativa de protección de datos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p En Colombia a partir de los Lineamientos de política para ciberseguridad y ciberdefensa establecidos en el CONPES 3701 del 14 de Julio de 2011 se crearon los equipos especializados en incidentes de seguridad que brindan servicios de respuesta a entidades del Estado, además de contribuir con el fortalecimiento de la seguridad y la generación de confianza ante la ciudadanía.
        p El siguiente esquema muestra el modelo de coordinación de la comisión intersectorial:
    
    .titulo-sexto.color-acento-contenido.offset-1
      h5 Figura 3.
      span  #[i  Modelo de coordinación comisión sectorial.]
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-10.desktop
        figure
          img(src='@/assets/curso/temas/tema2/img10.svg', alt='Esquema que representa el procedimiento de comisión sectorial, el cual está compuesto por: ColCERT. Comando  Conjunto Cibernético. Centro Cibernético Policial.')
          figcaption Adaptado del Modelo de coordinación,  Conpes (2011). 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.movil
        figure
          img(src='@/assets/curso/temas/tema2/img10_.svg', alt='Esquema que representa el procedimiento de comisión sectorial, el cual está compuesto por: ColCERT. Comando  Conjunto Cibernético. Centro Cibernético Policial.')
          figcaption Adaptado del Modelo de coordinación,  Conpes (2011). 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Con el aumento del uso de las tecnologías y los incidentes generados a partir de estas, el Gobierno Nacional inauguró el #[b CSIRT] de gobierno, un equipo de prevención y respuesta a los incidentes de seguridad informática que afectan a las entidades públicas del país. 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        figure
          img(src='@/assets/curso/temas/tema2/img11.png', alt='')
      .col-lg-6
        p La Ley 1712 de 2014 creó la #[b Ley de Transparencia y del Derecho de Acceso a la Información Pública Nacional], que obliga a publicar en las páginas web tres instrumentos de gestión con el fin garantizar la transparencia y el acceso a la información pública por parte de todos los ciudadanos:
        ul.lista-ul
          li
            i.fas.fa-check
            | Registro de activos de la información.
          li
            i.fas.fa-check
            | Índice de información clasificada y reservada.
          li
            i.fas.fa-check
            | Esquema de publicación.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p La #[b NTC-ISO/IEC 27001] es una norma certificable, creada por la ISO con el objetivo de proporcionar una metodología universal para implementar, administrar y mantener la seguridad de la información. De acuerdo con esta norma, el SGSI está conformado por los elementos dispuestos en la siguiente gráfica que representa de modo piramidal las diferentes fases que acompañan los principios del SGSI:
    
    .titulo-sexto.color-acento-contenido.offset-1
      h5 Figura 4.
      span  #[i  Principios]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.desktop
        figure
          img(src='@/assets/curso/temas/tema2/img12.svg', alt='Figura que contiene una pirámide de los principios del SGSI, los cuales son son: Lineamientos.Procesos.Procedimientos.Estándares.Arquitectura/Servicios.')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.movil
        figure
          img(src='@/assets/curso/temas/tema2/img12_.svg', alt='Figura que contiene una pirámide de los principios del SGSI, los cuales son son: Lineamientos.Procesos.Procedimientos.Estándares.Arquitectura/Servicios.')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p La protección de la información se realiza manteniendo los principios (confidencialidad, integridad y disponibilidad) donde esté, incluye los dispositivos que la almacenan, procesan y transmiten y todos los recursos que intervienen en su ciclo de vida, las personas, los procesos y la tecnología que se utilicen; todo esto mediante el uso de políticas, procedimientos, sensibilización y tecnologías.
        p Proteger la información de amenazas que lleguen a afectar la integridad, la confidencialidad y la disponibilidad es lo que se denomina Sistema de información - SI. Conocer los principios de seguridad que se deben proteger permite identificar de manera más fácil las medidas de protección que deben ser aplicadas para evitar su pérdida o alteración, a continuación, se exponen dichos principios.

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/img13.svg', alt='')
        h2.text-center Disponibilidad
        p Propiedad mediante la cual la información es accesible y utilizable por solicitud de una entidad autorizada (ISO IEC-27001 de 2009), por ejemplo, una falla de disponibilidad se presenta cuando no es posible acceder a un sistema, archivo o documento debido a un error de configuración, un virus o simplemente porque se perdió.
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/img14.svg', alt='')
        h2.text-center Confidencialidad
        p Propiedad de protección de la exactitud y completitud de la información, por ejemplo, una falla de integridad ocurre cuando la información ha sido alterada sin autorización o fue borrada, accidentalmente o no.   Otros ejemplos de fallos de integridad son el borrado parcial, accidental o no, de bases de datos, archivos o programas.
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/img15.svg', alt='')
        h2.text-center Seguridad de la información
        p Propiedad mediante la cual la información no se hace disponible o revelada a individuos, entidades o procesos no autorizados, es decir, la información confidencial es aquella que una vez identificada, se protege del acceso de personas no autorizadas.

    p(data-aos="fade-left") A continuación, se presentan los elementos de la Ley de Protección de Datos Personales y la Ley de Transparencia y del Derecho de Acceso a la Información Pública Nacional:

    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Ley de protección de datos personales Ley 1581 de 2012 ")
        .col-md-6.mb-4.mb-md-0
          p Permite saber cómo identificar un dato personal de acuerdo con la tipología que define la ley y así realizar la correcta clasificación de la información. Clasificados así:
          p #[b Dato personal.] Toda la información de una persona que permite su identificación (documento de identificación personal, fecha de nacimiento, edad, sexo, estado civil, trayectoria laboral, entre otros).  
          .cblanco1
            ul.lista-ul
              li
                i.fas.fa-circle
                | #[b Dato público.]  Determinado así por la ley o la Constitución Política de Colombia, también aquellos que no sean semiprivados o privados.
              li
                i.fas.fa-circle
                | #[b Dato semiprivado.]  No tiene naturaleza íntima, reservada, ni pública.  Su conocimiento o divulgación puede interesar no solo a su titular, sino a cierto sector o grupo de personas.
              li
                i.fas.fa-circle
                | #[b Dato privado.]  De naturaleza íntima o reservada, solo es relevante para el titular de la información.
              li
                i.fas.fa-circle
                | #[b Dato sensible.]  Afecta la intimidad del titular.  Su uso indebido puede generar discriminación (origen racial o étnico, orientación política, convicciones filosóficas o religiosas, pertenencia a sindicatos u organizaciones sociales o de derechos humanos, datos de salud, vida sexual y biométricos).

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema2/img16.png', alt='Imagen decorativa')
            
      .row(titulo="Ley de transparencia y del derecho de acceso a la información pública nacional Ley 1712 de 2014")
        .col-md-6.mb-4.mb-md-0
          p Clasifica la información en tres categorías:
          .cblanco1
            ul.lista-ul
              li
                i.fas.fa-circle
                | #[b Pública.] Aquella que un sujeto obligado genere, obtenga, adquiera o controle.
              li
                i.fas.fa-circle
                | #[b Pública clasificada.]  Aquella que estando en poder o custodia de un sujeto obligado en su calidad de tal, pertenece al ámbito propio, particular y privado o semiprivado de una persona natural o jurídica, por lo que su acceso podrá ser negado o exceptuado siempre que se trate de las circunstancias legítimas y necesarias y, los derechos particulares o privados consagrados en la ley.
              li
                i.fas.fa-circle
                | #[b Pública reservada.]  Aquella que estando en poder de un sujeto obligado en su calidad de tal, es exceptuada de acceso a la ciudadanía por daño a intereses públicos y bajo cumplimiento de los requisitos consagrados en la ley.

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema2/img17.png', alt='Imagen decorativa')

</template>

<script>
export default {
  name: 'Tema2',
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
