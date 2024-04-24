export default {
  global: {
    componenteFormativo: 'Evaluación y tratamiento del riesgo',
    descripcionCurso:
      'La evaluación y el tratamiento del riesgo es responsabilidad de todo funcionario comprometido con el mejoramiento continuo de la organización y la prevención de sucesos que pueden afectar su normal funcionamiento. El análisis del riesgo tiene como objetivo evitar grandes inversiones de recursos en la gestión interna para superar eventos correctivos que afecten la productividad, enfocando esfuerzos en la eficiencia de las operaciones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Evaluación del riesgo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Riesgo empresarial',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Determinación de ocurrencia',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Modelos de estimación',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Mapa de riesgos',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Tratamiento de riesgos',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Normativa técnica',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Gestión de la información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Protocolos de elaboración',
            hash: 't_1_1',
          },
          {
            numero: '1.1',
            titulo: 'Normativa de protección de datos',
            hash: 't_1_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Evaluación del riesgo ',
      referencia:
        'Ecuador. Secretaría de Gestión de Riesgos. (2012). Ecuador: referencias básicas para la gestión de riesgos 2013-2014. Secretaría de  Gestión de Riesgos. ',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=sena_elibroELB30908&vid=SENA&search_scope=sena_completo&tab=sena_completo&lang=es_ES&context=L      ',
    },
    {
      tema: 'Normativa técnica ',
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación (Icontec). (2016). Gestión del riesgo: orientación para la implementación de la NTC-ISO 31000. Icontec.',
      tipo: 'Libro',
      descarga:
        'https://sena-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=sena_aleph000012244&vid=SENA&search_scope=sena_completo&tab=sena_completo&lang=es_ES&context=L',
    },
    {
      tema: 'Normativa de protección de datos',
      referencia:
        'Chaparro, M. (2014). Legislación informática y protección de datos en Colombia, comparada con otros países. Inventum, 9(17), p. 32-37.',
      tipo: 'Artículo',
      descarga:
        'https://sena-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=TN_cdi_doaj_primary_oai_doaj_org_article_d369f2b22f8f479ca3bbdf0c2f4ad238&vid=SENA&search_scope=sena_completo&tab=sena_completo&lang=es_ES&context=PC      ',
    },
  ],
  glosario: [
    {
      termino: 'Datos',
      significado:
        'cualquier objeto que pueda entregar información o significado para el lector. El dato puede ser manipulable en forma manuscrita o por medio de un computador. Puede ser un carácter capturado desde un teclado, extraído de algún espacio de memoria en el disco, almacenado en la memoria central, etc.',
    },
    {
      termino: 'Gestión de riesgo',
      significado:
        'proceso que afecta a todos los órganos directivos y laborales de la organización (junta directiva, administrativos y empleados).',
    },
    {
      termino: 'Mapa de riesgos',
      significado:
        'identifica de forma gráfica los riesgos a los que se expone una empresa, teniendo en cuenta la probabilidad y el impacto que pueden causar.',
    },
    {
      termino: 'Riesgo',
      significado:
        'probabilidad de que un evento desafortunado ocurra y genere consecuencias a una persona, entidad o cosa.',
    },
    {
      termino: 'Seguridad de la información',
      significado:
        'se encarga de proteger los datos contra robo de información, acceso no autorizado, obstaculización al sistema informático, manipulación y/o eliminación de los datos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Comunidad de Madrid. (s.f.) Tratamiento del riesgo. Comunidad de Madrid.',
      link:
        'http://www.madrid.org/cs/StaticFiles/Emprendedores/Analisis_Riesgos/pages/pdf/metodologia/5TratamientodelRiesgo%28AR%29_es.pdf',
    },
    {
      referencia:
        'Consejo Nacional de Política Económica y Social. (2011). Documento CONPES 3701. Lineamientos de política para ciberseguridad y ciberdefensa. Consejo Nacional de Política Económica y Social.',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/3701.pdf',
    },
    {
      referencia:
        'Cristo, N. (2019). 6 reglas para gestionar riesgos en las empresas. Grupo Bancolombia. ',
      link:
        'https://www.bancolombia.com/empresas/capital-inteligente/actualidad-economica-sectorial/6-reglas-gestionar-riesgos-empresariales ',
    },
    {
      referencia:
        'Hopkin, P. (2010). Fundamentals of risk management: understanding, evaluating, and implementing effective risk management. Kogan Page Limited.',
      link: '',
    },
    {
      referencia:
        'Londoño, I. (2020). Mapa de calor: una herramienta para optimizar la gestión de riesgos. Pirani.',
      link:
        'https://www.piranirisk.com/es/blog/mapa-de-calor-una-herramienta-para-optimizar-la-gestion-de-riesgos',
    },
    {
      referencia: 'Martínez, J. (2011). Riesgo e incertidumbre. ScalabBle. ',
      link:
        'http://www.scalabble.com/2011/03/riesgo-e-incertidumbre/index.html ',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones-MinTIC. (2019). Manual de Gobierno Digital. Implementación de la Política de Gobierno Digital. MinTIC.',
      link:
        'https://gobiernodigital.mintic.gov.co/692/channels-594_manual_gd.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Abel Fernando Becerra Carrill',
          cargo: 'Experto temático',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Maribel Avellaneda Nieves',
          cargo: 'Diseño instruccional',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo desarrollo curricular',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Asesoría metodológica y evaluación instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Producción audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodrígue',
          cargo: 'Producción audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
