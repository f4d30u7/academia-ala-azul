'use strict';
    const STORAGE_KEY = 'alaAzulStateV1';
    const DAY = 86400000;
    const units = [
      {id:0,icon:'🧭',title:'Preparación y ruta',subtitle:'Licencias, aptitud médica, trámites y elección de escuela'},
      {id:1,icon:'🪽',title:'Principios de vuelo',subtitle:'Aerodinámica, estabilidad y pérdida'},
      {id:2,icon:'⚙️',title:'Aeronave y motores',subtitle:'Grupo motor, hélice, sistemas e inspección'},
      {id:3,icon:'🎛️',title:'Instrumentos',subtitle:'Pitot-estático, giroscópicos y brújula'},
      {id:4,icon:'📘',title:'Derecho y operaciones',subtitle:'Responsabilidades, reglas y aeródromos'},
      {id:5,icon:'🌦️',title:'Meteorología',subtitle:'Atmósfera, viento, nubes y amenazas'},
      {id:6,icon:'📊',title:'Performance y planificación',subtitle:'Densidad, masa, centrado y combustible'},
      {id:7,icon:'🗺️',title:'Navegación',subtitle:'Rumbos, deriva, cartas y navegación a estima'},
      {id:8,icon:'🎙️',title:'Radiotelefonía',subtitle:'Fraseología, escucha y fallas de comunicación'},
      {id:9,icon:'🧠',title:'Actuación humana y gestión del riesgo',subtitle:'Factores humanos, amenazas, errores y decisiones'}
    ];

    const lessons = [
      {
        id:0,unit:0,area:'Primeros pasos',title:'El mapa de licencias',subtitle:'Qué permite la licencia privada y cómo puede continuar la ruta',icon:'🪪',minutes:10,xp:60,
        concepts:[
          {icon:'🛩️',title:'Tu primera licencia de avión',text:'La Licencia de Piloto Privado de Avión (PPA) permite volar como piloto al mando en operaciones privadas, dentro de los límites de la licencia. No autoriza, por sí sola, a cobrar por pilotear.',points:['Es una licencia oficial: acredita que cumpliste requisitos médicos, teóricos y prácticos.','“Atribuciones” significa, en lenguaje normal, qué actividades te permite realizar la licencia.','Puede ser la meta de un hobby o el primer paso hacia licencias profesionales.'],tip:'Separá dos preguntas: “¿quiero aprender a volar?” y “¿quiero trabajar volando?”. La primera se responde mucho antes.'},
          {icon:'🪜',title:'La ruta puede continuar',text:'Para trabajar como piloto hace falta avanzar hacia una licencia comercial. Ese paso no ocurre automáticamente: exige más teoría, más experiencia de vuelo, nuevos exámenes y, según el objetivo, habilitaciones adicionales.',points:['Una habilitación es un permiso adicional para realizar una clase específica de operación.','El vuelo por instrumentos, por ejemplo, requiere preparación y evaluación propias.','No necesitás decidir hoy toda la carrera: la licencia privada es un primer hito común.'],tip:'No planifiques toda una carrera antes de tu primer vuelo. Planificá el próximo hito que puedas comprobar.'},
          {icon:'✅',title:'Cuatro cosas deben coincidir',text:'Para obtener la licencia se combinan cuatro elementos: aptitud médica, conocimientos teóricos, experiencia práctica y un examen final.',points:['La Certificación Médica Aeronáutica (CMA) acredita que cumplís los requisitos de salud aplicables.','La teoría te ayuda a comprender y tomar decisiones.','Las horas de vuelo convierten lo estudiado en habilidades.','La prueba de pericia es el examen práctico en el que demostrás competencia.'],tip:'La motivación abre la puerta. La competencia es lo que permite despegar.'}
        ],
        questions:[
          {q:'¿Qué permite, en términos generales, la Licencia de Piloto Privado de Avión (PPA)?',o:['Trabajar como piloto remunerado sin requisitos adicionales','Volar en operaciones privadas dentro de sus atribuciones y limitaciones','Reemplazar el examen práctico por experiencia como pasajero'],a:1,e:'La licencia privada habilita operaciones no remuneradas dentro de sus atribuciones. La actividad profesional requiere otra licencia y requisitos adicionales.'},
          {q:'En este contexto, ¿qué es una habilitación?',o:['Un permiso adicional para una capacidad u operación específica','Una factura emitida por la escuela','El nombre técnico de cualquier hora de vuelo'],a:0,e:'Una habilitación agrega atribuciones específicas y suele exigir instrucción, experiencia y evaluación propias.'},
          {q:'¿Cuándo conviene decidir definitivamente entre hobby y carrera profesional?',o:['Antes de cualquier contacto con una escuela','Puede evaluarse por etapas, usando la licencia privada como primer hito común','Solamente después de obtener una licencia comercial'],a:1,e:'La primera etapa permite validar interés, aptitud y capacidad de sostener el entrenamiento antes de comprometer una ruta profesional.'}
        ]
      },
      {
        id:1,unit:0,area:'Primeros pasos',title:'Aptitud médica, registro y escuela',subtitle:'Cómo verificar que el camino sea viable antes de invertir fuerte',icon:'🩺',minutes:12,xp:60,
        concepts:[
          {icon:'🩺',title:'Primero, confirmá la aptitud médica',text:'La Certificación Médica Aeronáutica (CMA) evalúa si cumplís los requisitos de salud física y mental necesarios para la actividad que querés realizar.',points:['Se inicia desde el Casillero Aeronáutico Digital (CAD), el portal personal de trámites ante la autoridad aeronáutica.','Puede hacer la evaluación un Médico Examinador Aeronáutico (AME) o un Centro Médico Aeronáutico Examinador (CMAE) habilitado.','Un antecedente médico no equivale automáticamente a “no apto”; conviene consultarlo con un profesional aeronáutico.'],tip:'Consultar temprano puede evitar gastar primero y descubrir una limitación después. La secuencia importa.'},
          {icon:'🗃️',title:'El portal personal de trámites',text:'El Casillero Aeronáutico Digital (CAD) es tu cuenta para gestionar la certificación médica y otros trámites relacionados con licencias ante la Administración Nacional de Aviación Civil (ANAC).',points:['Guardá las credenciales y los comprobantes.','Completá las declaraciones con exactitud.','Mantené actualizados tus datos de contacto.'],tip:'En aviación, “más o menos completo” no es una categoría administrativa especialmente popular.'},
          {icon:'🏫',title:'Elegí una escuela habilitada',text:'Un Centro de Instrucción de Aeronáutica Civil (CIAC) es una organización autorizada para impartir los cursos que figuran dentro de su aprobación.',points:['Verificá el centro y el curso en fuentes oficiales.','Pedí por escrito qué incluye la tarifa.','Compará disponibilidad real de aviones e instructores, no sólo el precio por hora.'],tip:'La escuela más barata deja de serlo cuando las cancelaciones, traslados y repeticiones devoran tu continuidad.'}
        ],
        questions:[
          {q:'¿Cuál es el mejor uso de tu historial clínico antes de solicitar la Certificación Médica Aeronáutica (CMA)?',o:['Autocalificarte como no apto','Preparar la información y consultar a un examinador aeronáutico ante dudas','Omitir antecedentes para evitar estudios adicionales'],a:1,e:'Los criterios médicos aeronáuticos son específicos. La evaluación y cualquier decisión sobre aptitud corresponden a profesionales y autoridades competentes.'},
          {q:'¿Quién puede realizar la evaluación médica aeronáutica?',o:['Cualquier instructor de vuelo','Un Médico Examinador Aeronáutico (AME) o un Centro Médico Aeronáutico Examinador (CMAE) habilitado','La administración de cualquier clínica'],a:1,e:'La evaluación debe realizarse dentro del sistema aeronáutico habilitado para que tenga validez en el trámite.'},
          {q:'¿Qué conviene verificar antes de pagar un paquete importante de instrucción?',o:['Sólo que la escuela tenga redes sociales activas','Que el centro, el curso, las aeronaves y los instructores estén habilitados y disponibles','Que el avión tenga una pintura atractiva'],a:1,e:'La habilitación formal y la capacidad operativa real son datos críticos. La decoración del fuselaje, contra todo pronóstico, no enseña.'}
        ]
      },
      {
        id:2,unit:1,area:'Principios de vuelo',title:'Las cuatro fuerzas',subtitle:'Sustentación, peso, tracción y resistencia',icon:'🪽',minutes:11,xp:70,
        concepts:[
          {icon:'⚖️',title:'Un equilibrio dinámico',text:'En vuelo actúan cuatro fuerzas: sustentación, peso, tracción y resistencia. Su relación determina si el avión acelera, asciende, desciende o mantiene una condición.',points:['La sustentación actúa aproximadamente perpendicular al viento relativo.','El peso apunta hacia el centro de la Tierra.','La tracción impulsa y la resistencia se opone al movimiento relativo.'],tip:'“Equilibrio” no significa que no haya fuerzas. Significa que su resultante produce la condición observada.'},
          {icon:'📐',title:'Ángulo de ataque',text:'El ángulo de ataque es el ángulo entre la cuerda del perfil alar y la dirección del viento relativo.',points:['No es lo mismo que la actitud de cabeceo respecto del horizonte.','Cambiar trayectoria o velocidad puede cambiarlo.','La pérdida aparece al superar un ángulo de ataque crítico.'],tip:'Un avión puede entrar en pérdida con el morro alto, bajo o casi nivelado. El ala no consulta el horizonte.'},
          {icon:'🌬️',title:'Energía y flujo',text:'La sustentación surge de la interacción del ala con el aire. Distribución de presiones y cambio de cantidad de movimiento son descripciones complementarias del fenómeno.',points:['La velocidad afecta fuertemente la sustentación.','La densidad del aire también influye.','Configuración, superficie y ángulo de ataque completan la relación.'],tip:'Evitar explicaciones mágicas ayuda. El aire no “decide” reunirse detrás del ala por cortesía.'}
        ],
        questions:[
          {q:'¿Entre qué referencias se mide el ángulo de ataque?',o:['Eje longitudinal y horizonte','Cuerda del ala y viento relativo','Ala y eje vertical'],a:1,e:'Esa es la definición operacional del ángulo de ataque.'},
          {q:'En vuelo recto y nivelado sin aceleración, ¿qué relación general existe?',o:['La sustentación equilibra al peso y la tracción a la resistencia','La resistencia desaparece','El peso se transforma en tracción'],a:0,e:'En esa condición idealizada, las fuerzas se equilibran por pares.'},
          {q:'¿Qué causa directa una pérdida aerodinámica?',o:['Superar el ángulo de ataque crítico','Volar siempre por debajo de una velocidad fija universal','Tener el morro por encima del horizonte'],a:0,e:'La pérdida depende del ángulo de ataque crítico. La velocidad a la que ocurre cambia con masa, maniobra, configuración y otros factores.'}
        ]
      },
      {
        id:3,unit:1,area:'Principios de vuelo',title:'Estabilidad, virajes y pérdida',subtitle:'Cómo responde el avión y por qué aumenta la carga',icon:'↗️',minutes:13,xp:70,
        concepts:[
          {icon:'↔️',title:'Tres ejes, tres mandos',text:'El avión rota alrededor de los ejes longitudinal, lateral y vertical. Alerones, elevador y timón controlan principalmente alabeo, cabeceo y guiñada.',points:['Alerones: alabeo alrededor del eje longitudinal.','Elevador: cabeceo alrededor del eje lateral.','Timón: guiñada alrededor del eje vertical.'],tip:'“Principalmente” importa porque las acciones están acopladas. Un mando rara vez vive una vida completamente independiente.'},
          {icon:'🌀',title:'Viraje coordinado',text:'En un viraje nivelado, la sustentación se inclina. Su componente horizontal produce el giro y la vertical debe seguir sosteniendo el peso.',points:['A mayor inclinación, mayor sustentación total requerida para mantener altura.','Aumenta el factor de carga.','También aumenta la velocidad de pérdida para esa condición.'],tip:'Inclinar más sin gestionar energía y sustentación no es una demostración de confianza. Es una invitación a la física.'},
          {icon:'⚠️',title:'Reconocer y recuperar',text:'La recuperación de una pérdida exige reducir el ángulo de ataque y aplicar el procedimiento indicado para la aeronave y la situación.',points:['Reconocer señales tempranas es mejor que esperar la pérdida completa.','La prioridad conceptual es deshacer la causa aerodinámica.','La técnica exacta se aprende con instructor y manual aplicable.'],tip:'Esta aplicación explica conceptos. La recuperación práctica pertenece a una cabina, un instructor y suficiente altura.'}
        ],
        questions:[
          {q:'¿Qué mando controla principalmente el alabeo?',o:['Alerones','Timón de dirección','Elevador'],a:0,e:'Los alerones generan momentos de alabeo alrededor del eje longitudinal.'},
          {q:'En un viraje nivelado, al aumentar la inclinación normalmente...',o:['Disminuye el factor de carga','Aumenta el factor de carga y la velocidad de pérdida de la condición','Desaparece la componente vertical de sustentación sin consecuencia'],a:1,e:'Mantener altura exige más sustentación total, lo que eleva el factor de carga y la velocidad de pérdida asociada.'},
          {q:'¿Cuál es la acción conceptual esencial para salir de una pérdida?',o:['Reducir el ángulo de ataque por debajo del crítico','Aumentar siempre el ángulo de ataque','Mirar exclusivamente el velocímetro'],a:0,e:'La pérdida termina cuando el ala vuelve a trabajar por debajo del ángulo crítico. El procedimiento completo depende de la aeronave.'}
        ]
      },
      {
        id:4,unit:2,area:'Conocimiento de aeronaves',title:'Motor, hélice y mezcla',subtitle:'Cómo la potencia llega al aire',icon:'⚙️',minutes:13,xp:70,
        concepts:[
          {icon:'🔥',title:'El ciclo de cuatro tiempos',text:'En un motor alternativo típico, admisión, compresión, combustión-expansión y escape convierten energía química en movimiento mecánico.',points:['El combustible y el aire forman una mezcla combustible.','La ignición suele contar con redundancia mediante magnetos.','Temperatura, presión y lubricación requieren vigilancia.'],tip:'El motor no funciona por “ruido convincente”. Los instrumentos existen porque las piezas internas prefieren fallar con discreción.'},
          {icon:'🌀',title:'La hélice es un ala rotativa',text:'Cada pala genera una fuerza aerodinámica al moverse por el aire. La resultante útil se manifiesta como tracción y también aparece resistencia de la hélice.',points:['El ángulo de pala influye en su desempeño.','Paso fijo y paso variable administran compromisos diferentes.','RPM, potencia y velocidad de avance cambian el ángulo efectivo.'],tip:'Pensarla como un tornillo que “se enrosca” en el aire sirve poco. Pensarla como perfiles alares giratorios sirve bastante más.'},
          {icon:'⛰️',title:'Mezcla y densidad',text:'Al disminuir la densidad del aire, la misma posición de mezcla puede resultar excesivamente rica. El ajuste correcto depende del motor y del procedimiento aprobado.',points:['Altitud y temperatura afectan la masa de aire aspirada.','Una mezcla incorrecta afecta potencia, consumo y temperaturas.','La técnica concreta se toma del manual y del instructor.'],tip:'Nunca trasladar una regla genérica a un motor específico sin revisar su documentación.'}
        ],
        questions:[
          {q:'¿Cuál es la secuencia correcta del ciclo de cuatro tiempos?',o:['Admisión, compresión, expansión y escape','Escape, expansión, admisión y planeo','Compresión, resistencia, sustentación y escape'],a:0,e:'Es la secuencia básica de un motor alternativo de cuatro tiempos.'},
          {q:'¿Por qué puede describirse la hélice como un ala rotativa?',o:['Porque sus palas son perfiles que producen fuerzas aerodinámicas','Porque no produce resistencia','Porque sólo empuja aire cuando el avión está detenido'],a:0,e:'Las palas trabajan como perfiles en movimiento rotativo y producen una resultante de tracción.'},
          {q:'Cuando disminuye la densidad del aire, ¿qué puede ocurrir con una mezcla no ajustada?',o:['Puede quedar demasiado rica','Siempre queda demasiado pobre','La densidad no tiene relación con la mezcla'],a:0,e:'En muchos motores alternativos, menos masa de aire con igual combustible vuelve la mezcla más rica. La operación exacta depende del manual.'}
        ]
      },
      {
        id:5,unit:2,area:'Conocimiento de aeronaves',title:'Sistemas e inspección previa',subtitle:'Combustible, electricidad, controles y disciplina',icon:'🔍',minutes:13,xp:70,
        concepts:[
          {icon:'⛽',title:'Combustible utilizable',text:'La cantidad cargada no siempre coincide con la cantidad utilizable en todas las actitudes y configuraciones. El sistema tiene drenajes, ventilación, selectores y limitaciones.',points:['Confirmá tipo y cantidad.','Buscá agua, sedimentos o contaminación según procedimiento.','Entendé la posición y función del selector.'],tip:'“El indicador dice bastante” no es una unidad reconocida de planificación.'},
          {icon:'🔋',title:'Sistema eléctrico',text:'Batería, alternador o generador, barras, interruptores y protecciones distribuyen energía a equipos y sistemas.',points:['Una falla de generación puede dejar una batería limitada.','Fusibles y disyuntores protegen circuitos.','No se rearman repetidamente sin comprender la causa y el procedimiento.'],tip:'Un disyuntor que vuelve a saltar no está pidiendo perseverancia. Está informando un problema.'},
          {icon:'🔎',title:'Inspeccionar con intención',text:'La inspección previa busca evidencia de que la aeronave es apta para el vuelo previsto. No es una coreografía para tranquilizar testigos.',points:['Seguí una secuencia y lista aplicable.','Verificá controles, superficies, neumáticos, fluidos y documentación.','Investigá cualquier anomalía antes de aceptar la aeronave.'],tip:'La familiaridad puede volver invisibles los defectos. Una lista bien usada protege contra la memoria selectiva.'}
        ],
        questions:[
          {q:'¿Qué significa “combustible utilizable”?',o:['Todo combustible físicamente dentro de los tanques','La porción disponible para alimentar al motor bajo condiciones especificadas','Sólo el combustible de reserva legal'],a:1,e:'La documentación de la aeronave distingue capacidad total y utilizable.'},
          {q:'¿Qué conducta es prudente si un disyuntor vuelve a abrirse?',o:['Rearmarlo repetidamente hasta que se canse','Tratarlo como indicio de falla y seguir el procedimiento aplicable','Sujetarlo manualmente'],a:1,e:'Las protecciones eléctricas existen para interrumpir una condición anormal. El procedimiento depende de la aeronave.'},
          {q:'¿Cuál es el objetivo real de una inspección previa?',o:['Completar rápidamente una formalidad','Detectar condiciones que afecten la aeronavegabilidad y el vuelo previsto','Demostrar memoria sin usar lista'],a:1,e:'La inspección es una barrera de seguridad. Su calidad importa más que su apariencia.'}
        ]
      },
      {
        id:6,unit:3,area:'Instrumentos',title:'Sistema pitot-estático',subtitle:'Velocidad, altitud y razón de ascenso',icon:'🎚️',minutes:12,xp:70,
        concepts:[
          {icon:'➡️',title:'Presión total y estática',text:'El tubo pitot capta presión total y las tomas estáticas perciben presión estática. Su diferencia alimenta la indicación de velocidad.',points:['El anemómetro compara presión total y estática.','Bloqueos distintos producen síntomas distintos.','Calefacción pitot reduce ciertos riesgos de hielo cuando está instalada.'],tip:'Diagnosticar bloqueos exige entender qué presión llega a cada instrumento, no recitar una superstición de hangar.'},
          {icon:'↕️',title:'Altímetro',text:'El altímetro interpreta cambios de presión estática como cambios de altitud. Requiere un reglaje apropiado y arrastra errores y limitaciones.',points:['La presión atmosférica cambia aun sin mover el avión.','El reglaje conecta la indicación con una referencia.','Temperatura y presión no estándar afectan la relación real.'],tip:'El altímetro mide presión y la presenta como altitud. El instrumento también hace traducciones, como cualquier burócrata.'},
          {icon:'📈',title:'Variómetro',text:'El indicador de velocidad vertical responde a la razón de cambio de presión estática mediante una restricción calibrada.',points:['Tiene retraso de indicación.','Muestra tendencia de ascenso o descenso.','Debe interpretarse junto con actitud, potencia y otros instrumentos.'],tip:'Perseguir cada oscilación del variómetro suele fabricar más oscilaciones. El avión aprecia la ironía.'}
        ],
        questions:[
          {q:'¿Qué utiliza el anemómetro para indicar velocidad?',o:['La diferencia entre presión total y presión estática','Sólo presión de aceite','La diferencia entre rumbo magnético y verdadero'],a:0,e:'La presión dinámica se obtiene a partir de la diferencia entre total y estática.'},
          {q:'¿Qué variable física mide realmente un altímetro barométrico?',o:['Presión estática','Ángulo de ataque','Temperatura de aceite'],a:0,e:'Convierte presión estática en una indicación de altitud según su calibración y reglaje.'},
          {q:'¿Por qué no conviene interpretar el variómetro de forma aislada?',o:['Porque tiene retraso y debe integrarse con actitud, potencia y tendencia','Porque sólo funciona en tierra','Porque mide combustible'],a:0,e:'El variómetro es un instrumento de tendencia y su indicación tiene demora.'}
        ]
      },
      {
        id:7,unit:3,area:'Instrumentos',title:'Giroscopios, brújula y scan',subtitle:'Referencias de actitud, rumbo y coordinación',icon:'🧭',minutes:13,xp:70,
        concepts:[
          {icon:'🌐',title:'Rigidez y precesión',text:'Los instrumentos giroscópicos tradicionales aprovechan propiedades de un rotor en movimiento. Sus fuentes de energía y limitaciones dependen del diseño.',points:['Pueden ser neumáticos o eléctricos.','La precesión y la fricción generan errores.','Los equipos electrónicos modernos presentan información similar con otra arquitectura.'],tip:'No todos los paneles comparten la misma tecnología. Mirar el instrumento sin conocer su fuente de energía es coleccionar sorpresas.'},
          {icon:'🧲',title:'La brújula magnética',text:'La brújula se alinea con el campo magnético terrestre, pero sufre errores asociados a inclinación, aceleración, virajes y perturbaciones locales.',points:['Rumbo magnético no es lo mismo que rumbo verdadero.','La desviación pertenece a la instalación.','La variación relaciona norte verdadero y magnético.'],tip:'La brújula es simple, no ingenua. Obedece a la Tierra, aunque el piloto preferiría que obedeciera al panel.'},
          {icon:'👀',title:'El scan es una disciplina',text:'El barrido instrumental distribuye atención, cruza indicaciones y detecta tendencias. En vuelo visual también debe preservar una vigilancia exterior prioritaria.',points:['Fijación en un solo instrumento degrada conciencia situacional.','Control, performance y navegación se corroboran entre sí.','La técnica se practica gradualmente con instructor.'],tip:'Mirar todo no significa ver todo. El scan es selectivo, rítmico y orientado a la situación.'}
        ],
        questions:[
          {q:'¿Qué diferencia representa la variación magnética?',o:['La relación angular entre norte verdadero y norte magnético','El error por instalación eléctrica propio de la aeronave','La diferencia entre velocidad indicada y verdadera'],a:0,e:'La desviación es propia de la instalación; la variación surge de la relación geográfica entre nortes.'},
          {q:'¿Qué problema produce fijarse en un solo instrumento?',o:['Puede ocultar tendencias y contradicciones de otros datos','Mejora siempre la conciencia situacional','Elimina los errores de interpretación'],a:0,e:'Un barrido integrado evita depender de una única indicación.'},
          {q:'¿Todos los indicadores de actitud usan necesariamente vacío?',o:['No; la fuente y arquitectura dependen del equipo instalado','Sí, sin excepción','Sólo cuando el motor está detenido'],a:0,e:'Existen sistemas neumáticos, eléctricos y electrónicos. Hay que conocer la aeronave específica.'}
        ]
      },
      {
        id:8,unit:4,area:'Derecho aéreo',title:'Responsabilidad y vuelo visual',subtitle:'Quién decide y con qué información',icon:'⚖️',minutes:14,xp:80,
        concepts:[
          {icon:'🧑‍✈️',title:'Piloto al mando',text:'El piloto al mando carga con la responsabilidad final por la operación y debe ejercer criterio dentro de la normativa, las limitaciones y las condiciones reales.',points:['Autoridad no significa inmunidad a las reglas.','La aceptación de una aeronave y un vuelo es una decisión activa.','La presión externa no transfiere responsabilidad.'],tip:'“Me dijeron que se podía” no es una estrategia de gestión de riesgos especialmente robusta.'},
          {icon:'👁️',title:'Reglas de vuelo visual',text:'Las Reglas de Vuelo Visual (VFR, por su nombre internacional Visual Flight Rules) requieren referencias, condiciones meteorológicas y cumplimiento de procedimientos y espacios aéreos aplicables.',points:['Visibilidad y distancia de nubes dependen del contexto normativo.','El espacio aéreo determina servicios y requisitos.','El piloto debe prever alternativas antes de que desaparezcan.'],tip:'Volar visualmente no convierte al cielo en una plaza sin señalización.'},
          {icon:'📄',title:'Información antes del vuelo',text:'Planificación, meteorología, información operacional publicada mediante NOTAM, performance, combustible, aeródromos y documentación forman parte de una preparación razonable.',points:['Las fuentes deben ser vigentes y pertinentes.','Un NOTAM puede modificar una condición publicada.','La planificación continúa durante el vuelo.'],tip:'Una captura de pantalla de ayer no adquiere vigencia por estar guardada con mucha convicción.'}
        ],
        questions:[
          {q:'¿Qué describe mejor la responsabilidad del piloto al mando?',o:['Puede delegar por completo la decisión final a un pasajero','Tiene responsabilidad final por la operación dentro del marco aplicable','Sólo es responsable cuando el motor está encendido'],a:1,e:'La función de piloto al mando implica autoridad y responsabilidad por la operación.'},
          {q:'¿Qué es un NOTAM, en términos generales?',o:['Información temporal o relevante para operaciones que puede modificar lo publicado','Un pronóstico personal del instructor','Una licencia de radio'],a:0,e:'Los NOTAM comunican información operacional que debe evaluarse junto con otras fuentes.'},
          {q:'¿Qué exige una planificación VFR competente?',o:['Sólo mirar por la ventana','Integrar meteorología, ruta, espacio aéreo, performance, combustible y alternativas','Confiar en que otro avión hará la misma ruta'],a:1,e:'La planificación combina múltiples fuentes y debe actualizarse según cambien las condiciones.'}
        ]
      },
      {
        id:9,unit:4,area:'Procedimientos operacionales',title:'Aeródromo, circuito y estela',subtitle:'Orden compartido alrededor de una pista',icon:'🛬',minutes:14,xp:80,
        concepts:[
          {icon:'🔄',title:'El circuito de tránsito',text:'El circuito organiza la secuencia de aeronaves alrededor de la pista mediante tramos y procedimientos previsibles.',points:['Los tramos típicos incluyen viento en cara, cruzado, inicial, básica y final.','La configuración local puede variar.','Comunicar posición no reemplaza mirar y evitar tráfico.'],tip:'La radio ayuda a construir la imagen. No crea un campo de fuerza alrededor del avión.'},
          {icon:'🚦',title:'Pistas, calles y señales',text:'Marcas, luces, cartelería y autorizaciones reducen ambigüedad durante movimientos en superficie y operación de pista.',points:['Una incursión en pista puede ocurrir con el avión a velocidad de caminata.','Las autorizaciones críticas se leen y comprenden con precisión.','Ante duda, se detiene y se solicita aclaración.'],tip:'Perder treinta segundos preguntando es más barato que descubrir creativamente qué significaba una línea amarilla.'},
          {icon:'🌪️',title:'Turbulencia de estela',text:'Las puntas de ala generan vórtices cuya intensidad aumenta con aeronaves pesadas, lentas y configuradas para producir gran sustentación.',points:['Los vórtices descienden y se desplazan con el viento.','Separación y trayectoria deben considerar dónde estarán, no sólo dónde nacieron.','La categoría del otro tránsito orienta, pero el entorno también importa.'],tip:'Ver aterrizar al avión precedente no significa que su aire haya terminado de aterrizar.'}
        ],
        questions:[
          {q:'¿Qué tramo suele preceder inmediatamente a la final en un circuito convencional?',o:['Básica','Inicial','Viento cruzado de salida'],a:0,e:'La secuencia típica conduce desde inicial a básica y luego a final, con variaciones locales posibles.'},
          {q:'Si una autorización o instrucción en superficie resulta ambigua, ¿qué conviene hacer?',o:['Avanzar y deducir sobre la marcha','Detenerse en una posición segura y pedir aclaración','Seguir al vehículo más cercano sin comunicar'],a:1,e:'Eliminar ambigüedad antes de ingresar a un área crítica es una defensa básica.'},
          {q:'¿Cuándo suelen ser más intensos los vórtices de punta de ala?',o:['Con una aeronave pesada, lenta y generando mucha sustentación','Cuando el avión está estacionado sin motor','Sólo con viento fuerte de frente'],a:0,e:'Peso elevado, baja velocidad y configuración limpia o gran demanda de sustentación favorecen vórtices intensos.'}
        ]
      },
      {
        id:10,unit:5,area:'Meteorología',title:'Atmósfera, presión y viento',subtitle:'El aire cambia y el avión lo nota',icon:'🌬️',minutes:14,xp:80,
        concepts:[
          {icon:'🌡️',title:'Una atmósfera variable',text:'Presión, temperatura y humedad determinan densidad y comportamiento de la masa de aire. La atmósfera estándar es una referencia, no una promesa meteorológica.',points:['La presión suele disminuir con la altura.','El aire cálido es menos denso que el frío, a igualdad de otras variables.','La humedad modifica densidad y favorece procesos de condensación.'],tip:'La tabla estándar es un modelo. El cielo real no firmó ningún compromiso de seguirla.'},
          {icon:'↔️',title:'Gradiente y viento',text:'Las diferencias de presión ponen el aire en movimiento. Fricción, rotación terrestre y geometría local modifican dirección y velocidad.',points:['Cerca del suelo, la fricción cambia el viento.','Obstáculos y relieve generan turbulencia y canalización.','Ráfagas y cizalladura importan especialmente cerca de la pista.'],tip:'El viento informado en un punto no describe cada metro de la aproximación.'},
          {icon:'🧭',title:'Leer, comparar, observar',text:'La información meteorológica combina observaciones, pronósticos y señales visibles. Ninguna fuente aislada merece obediencia ciega.',points:['Una observación describe un lugar y momento.','Un pronóstico expresa una evolución esperada.','La tendencia real debe compararse con lo previsto.'],tip:'La mejor decisión puede ser no salir, demorar o regresar. El avión no entrega medallas por insistencia.'}
        ],
        questions:[
          {q:'A igualdad de otras condiciones, ¿qué ocurre con la densidad cuando aumenta la temperatura?',o:['Disminuye','Aumenta siempre','No cambia'],a:0,e:'El aire más cálido se expande y resulta menos denso si las demás variables se mantienen.'},
          {q:'¿Qué efecto tiene la fricción cerca de la superficie?',o:['Modifica velocidad y dirección del viento','Elimina todo viento','Sólo afecta a aeronaves a reacción'],a:0,e:'La capa cercana al suelo está fuertemente influida por fricción, terreno y obstáculos.'},
          {q:'¿Qué distingue principalmente una observación de un pronóstico?',o:['La observación describe condiciones registradas; el pronóstico estima evolución','La observación siempre cubre una semana','El pronóstico no tiene incertidumbre'],a:0,e:'Ambos son útiles, pero representan tipos de información diferentes y deben contextualizarse.'}
        ]
      },
      {
        id:11,unit:5,area:'Meteorología',title:'Nubes, frentes y amenazas',subtitle:'Condensación, estabilidad y señales de peligro',icon:'⛈️',minutes:15,xp:80,
        concepts:[
          {icon:'☁️',title:'Cómo aparece una nube',text:'Cuando el aire húmedo se enfría hasta alcanzar saturación, el vapor condensa sobre núcleos y forma gotitas o cristales.',points:['Ascenso orográfico, convección y frentes pueden enfriar aire por expansión.','La estabilidad influye en la forma y el desarrollo vertical.','La base de nube ofrece pistas sobre humedad y temperatura.'],tip:'Una nube no es decoración. Es una evidencia visible de procesos que también afectan al vuelo.'},
          {icon:'🌩️',title:'Convección peligrosa',text:'Una tormenta puede reunir corrientes verticales intensas, turbulencia severa, granizo, rayos, hielo, lluvia extrema y cambios violentos de viento.',points:['No existe una “parte amigable” garantizada de una célula.','El desarrollo puede ser rápido.','La estrategia segura se basa en evitar con margen, no penetrar para investigar.'],tip:'La curiosidad es encantadora en un museo. Frente a un cumulonimbo, bastante menos.'},
          {icon:'🧊',title:'Hielo y visibilidad',text:'El hielo puede alterar perfil, masa, resistencia, instrumentos y motor. Niebla, precipitación, humo y bruma degradan referencias visuales.',points:['Hielo visible puede indicar que el margen ya se está perdiendo.','Condiciones de engelamiento dependen de humedad y temperatura, entre otros factores.','Para volar bajo Reglas de Vuelo Visual (VFR) hay que conservar referencias y condiciones aplicables.'],tip:'La ausencia de una alarma no prueba la ausencia de una amenaza.'}
        ],
        questions:[
          {q:'¿Qué proceso básico favorece la formación de nubes?',o:['Enfriamiento de aire húmedo hasta saturación','Calentamiento ilimitado sin humedad','Aumento de presión de aceite'],a:0,e:'La condensación ocurre cuando el aire alcanza saturación, habitualmente por enfriamiento.'},
          {q:'¿Qué estrategia conceptual corresponde frente a una tormenta convectiva?',o:['Evitarla con margen adecuado','Atravesar la zona más oscura para reducir tiempo','Confiar en que el granizo sólo cae verticalmente'],a:0,e:'Las tormentas contienen múltiples amenazas y su evitación es la defensa central.'},
          {q:'¿Por qué el hielo sobre un ala es peligroso?',o:['Puede deformar el perfil, aumentar resistencia y reducir sustentación','Sólo cambia el color','Mejora siempre la eficiencia a baja velocidad'],a:0,e:'Incluso acumulaciones aparentemente pequeñas pueden degradar seriamente la aerodinámica.'}
        ]
      },
      {
        id:12,unit:6,area:'Performance y planificación',title:'Altitud de densidad y performance',subtitle:'Cuando la pista parece más corta de lo que es',icon:'📈',minutes:15,xp:80,
        concepts:[
          {icon:'🌡️',title:'Densidad y capacidad',text:'La altitud de densidad expresa cómo “se siente” la densidad del aire respecto de la atmósfera estándar. Calor, baja presión y humedad pueden elevarla.',points:['Menor densidad reduce potencia disponible en muchos motores.','La hélice y las alas encuentran menos masa de aire.','Despegue, ascenso y aterrizaje pueden degradarse.'],tip:'Pista larga en el mapa no significa margen amplio en un día caliente y pesado.'},
          {icon:'📚',title:'Usar datos aprobados',text:'Las tablas y gráficos de performance traducen condiciones concretas en distancias, razones de ascenso y otros resultados esperados.',points:['Interpolar exige atención a unidades y supuestos.','El dato publicado no incluye automáticamente todos los márgenes prudentes.','Estado de pista, viento, técnica y aeronave real importan.'],tip:'Un número calculado con precisión puede seguir siendo inútil si la entrada era fantasiosa.'},
          {icon:'🧱',title:'Margen, obstáculo y decisión',text:'La planificación no termina al obtener una distancia. Hay que compararla con pista disponible, obstáculos, gradiente y alternativas.',points:['Considerá rechazar antes de que desaparezca la opción.','Definí señales de performance insuficiente.','No transformes una expectativa en compromiso de continuar.'],tip:'La pista detrás del avión y la altitud sobre él comparten un talento: ya no ayudan.'}
        ],
        questions:[
          {q:'¿Qué combinación suele elevar la altitud de densidad?',o:['Temperatura alta y presión baja','Temperatura baja y presión alta','Sólo viento cruzado'],a:0,e:'El aire cálido y la baja presión reducen densidad, elevando la altitud de densidad.'},
          {q:'¿Qué efecto general tiene una altitud de densidad alta?',o:['Degrada despegue y ascenso','Acorta siempre la carrera de despegue','No afecta a la hélice ni al ala'],a:0,e:'La menor densidad reduce el desempeño aerodinámico y, en muchos sistemas, la potencia disponible.'},
          {q:'Después de calcular una distancia de despegue, ¿qué falta?',o:['Compararla con pista, obstáculos, condiciones y margen','Nada, el gráfico garantiza el resultado','Redondearla siempre hacia abajo'],a:0,e:'La cifra es una entrada para la decisión, no una garantía operacional.'}
        ]
      },
      {
        id:13,unit:6,area:'Performance y planificación',title:'Masa, centrado y combustible',subtitle:'Cargar bien es parte de volar bien',icon:'⚖️',minutes:16,xp:80,
        concepts:[
          {icon:'📦',title:'Masa máxima no es el único límite',text:'Una aeronave puede estar por debajo de su masa máxima y aun así tener el centro de gravedad fuera del rango permitido.',points:['Cada ocupante, equipaje y combustible aporta momento.','Brazo por masa produce momento.','La suma determina posición de centro de gravedad.'],tip:'“Entra todo” describe un baúl. No describe una condición de carga aprobada.'},
          {icon:'↔️',title:'Centro de gravedad',text:'Un centro de gravedad demasiado adelantado o atrasado afecta estabilidad, control y performance de manera distinta.',points:['Adelantado puede exigir mayor fuerza de cola y recorrido de control.','Atrasado puede reducir estabilidad longitudinal y dificultar recuperación.','Los límites provienen de datos aprobados de la aeronave.'],tip:'El centro de gravedad no se negocia con optimismo ni con distribución estética del equipaje.'},
          {icon:'⛽',title:'Planificar combustible',text:'El combustible debe cubrir rodaje, vuelo previsto, contingencias y reservas aplicables, considerando consumo realista y alternativas.',points:['Tiempo, potencia, mezcla y viento afectan consumo o duración.','La indicación de cantidad se verifica con otras evidencias.','Replanificar temprano conserva opciones.'],tip:'El combustible más inútil es el que quedó en el camión porque el cálculo “daba justo”.'}
        ],
        questions:[
          {q:'¿Puede una aeronave estar dentro de masa máxima y fuera de límites?',o:['Sí, si el centro de gravedad queda fuera del rango','No, la masa máxima resuelve todo','Sólo si no lleva combustible'],a:0,e:'Masa total y posición del centro de gravedad son restricciones relacionadas pero independientes.'},
          {q:'¿Qué tendencia se asocia a un centro de gravedad excesivamente atrasado?',o:['Menor estabilidad longitudinal y recuperación potencialmente más difícil','Mayor estabilidad sin desventajas','Eliminación de la pérdida'],a:0,e:'Un CG atrasado puede reducir el momento restaurador y comprometer características de control.'},
          {q:'¿Qué enfoque de combustible es más prudente?',o:['Planificar consumo, reservas y contingencias con datos realistas','Usar sólo el tiempo directo sin margen','Confiar exclusivamente en un indicador no verificado'],a:0,e:'La planificación integra consumo esperado, reservas y posibilidades de desvío o demora.'}
        ]
      },
      {
        id:14,unit:7,area:'Navegación',title:'Norte, curso, rumbo y derrota',subtitle:'Cuatro palabras que no son intercambiables',icon:'🧭',minutes:15,xp:80,
        concepts:[
          {icon:'⬆️',title:'Tres nortes útiles',text:'El norte verdadero pertenece a la geografía, el magnético al campo terrestre y el de brújula incorpora además errores de instalación.',points:['La variación relaciona verdadero y magnético.','La desviación corrige efectos propios de la aeronave.','Las cartas y datos indican qué referencia utilizan.'],tip:'Aplicar una corrección con el signo equivocado produce un resultado matemáticamente impecable y geográficamente creativo.'},
          {icon:'➡️',title:'Curso, rumbo y derrota',text:'El curso es la dirección deseada sobre la superficie; el rumbo es hacia dónde apunta el eje longitudinal; la derrota es el camino realmente recorrido.',points:['El viento puede separar rumbo y curso.','Una corrección de deriva orienta el avión contra el viento.','La derrota observada permite detectar y corregir error.'],tip:'Apuntar al destino no garantiza ir al destino. El viento también participa de la reunión.'},
          {icon:'⏱️',title:'Distancia, velocidad y tiempo',text:'La navegación a estima proyecta posición usando dirección, velocidad, tiempo y correcciones por viento.',points:['Velocidad terrestre, no indicada, gobierna el tiempo sobre la superficie.','Puntos de verificación permiten comparar plan y realidad.','Actualizar estimados reduce sorpresas acumuladas.'],tip:'Un error pequeño repetido durante una hora deja de ser pequeño con notable disciplina.'}
        ],
        questions:[
          {q:'¿Qué relaciona la variación magnética?',o:['Norte verdadero y norte magnético','Rumbo y velocidad indicada','Altitud y presión de aceite'],a:0,e:'La variación es el ángulo entre referencias verdadera y magnética en una zona.'},
          {q:'¿Qué es la derrota?',o:['La trayectoria realmente recorrida sobre la superficie','La dirección en la que apunta el morro exclusivamente','El rumbo publicado de una pista'],a:0,e:'La derrota refleja el camino efectivo, afectado por viento y correcciones.'},
          {q:'Para estimar tiempo entre dos puntos sobre el terreno, ¿qué velocidad es directamente relevante?',o:['Velocidad terrestre','Sólo velocidad indicada','RPM del motor'],a:0,e:'El tiempo sobre la superficie depende de distancia y velocidad respecto del suelo.'}
        ]
      },
      {
        id:15,unit:7,area:'Navegación',title:'Cartas, viento y navegación a estima',subtitle:'Construir y vigilar un plan de vuelo visual',icon:'🗺️',minutes:16,xp:90,
        concepts:[
          {icon:'🗺️',title:'La carta es un sistema',text:'Una carta aeronáutica representa relieve, obstáculos, aeródromos, espacio aéreo, radioayudas y otros datos mediante símbolos y referencias específicas.',points:['Revisá edición, escala y leyenda.','No todos los elementos tienen la misma vigencia.','La carta se complementa con información actualizada y con cada Aviso operacional aeronáutico (NOTAM) aplicable.'],tip:'Una carta vieja sigue siendo muy precisa acerca de un mundo que ya no existe.'},
          {icon:'🌬️',title:'Triángulo de viento',text:'La velocidad del avión respecto del aire se combina vectorialmente con el viento para producir dirección y velocidad sobre el suelo.',points:['Viento cruzado genera deriva.','Componente de frente reduce velocidad terrestre.','Componente de cola la aumenta, pero puede complicar otros tramos.'],tip:'El viento no “empuja de costado” como una mano constante. Se suma como vector durante todo el movimiento.'},
          {icon:'🔍',title:'Navegar es verificar',text:'La navegación a estima necesita puntos identificables, tiempos previstos y acciones si la realidad no coincide.',points:['Compará forma, relación y escala del terreno.','No forcés la identificación de un punto porque “debería ser”.','Ante incertidumbre, aplicá un procedimiento conservador y pedí asistencia cuando corresponda.'],tip:'La certeza fabricada es más peligrosa que admitir que una referencia no coincide.'}
        ],
        questions:[
          {q:'¿Qué información debe comprobarse antes de usar una carta?',o:['Edición, escala, leyenda y vigencia complementaria','Sólo el color del papel','Que tenga muchas rutas dibujadas'],a:0,e:'La interpretación correcta depende de la carta específica y de información vigente adicional.'},
          {q:'¿Qué produce una componente de viento de frente, en general?',o:['Reduce la velocidad terrestre para igual velocidad respecto del aire','Aumenta siempre la velocidad terrestre','No afecta el tiempo de vuelo'],a:0,e:'El vector de viento de frente se opone al avance sobre el suelo.'},
          {q:'Si un punto de verificación no coincide con el plan, ¿qué conducta es mejor?',o:['Revisar posición, tiempo y referencias sin forzar una identificación','Ignorar la discrepancia','Cambiar la carta hasta que coincida'],a:0,e:'Detectar una desviación temprano permite corregir o pedir asistencia antes de perder más conciencia situacional.'}
        ]
      },
      {
        id:16,unit:8,area:'Radiotelefonía',title:'La estructura de una llamada',subtitle:'Escuchar, pensar y hablar con economía',icon:'🎙️',minutes:14,xp:90,
        concepts:[
          {icon:'👂',title:'Primero escuchar',text:'Antes de transmitir, escuchar ayuda a comprender frecuencia, tránsito, ritmo y momento apropiado para hablar.',points:['Evitá pisar comunicaciones activas.','Formá una imagen mental del tránsito.','Prepará el mensaje antes de apretar el pulsador.'],tip:'El botón de transmisión no mejora una idea incompleta. Sólo la vuelve pública.'},
          {icon:'📣',title:'A quién, quién y dónde',text:'Una llamada inicial suele identificar a la estación llamada, la aeronave, la posición o situación y la intención pertinente.',points:['La estructura exacta depende del servicio y fase.','Brevedad no significa omitir información crítica.','Usá identificadores y fraseología aplicables.'],tip:'La radio premia mensajes previsibles. La creatividad puede reservarse para nombres de bandas de rock.'},
          {icon:'🔁',title:'Colación y comprensión',text:'Leer de vuelta elementos críticos permite detectar errores antes de que se transformen en movimiento.',points:['Pista, nivel, rumbo y autorizaciones críticas merecen precisión según el contexto.','Una colación incorrecta debe corregirse.','Entender vale más que repetir sonidos.'],tip:'Una colación perfecta de una instrucción mal comprendida sigue siendo un problema con buena dicción.'}
        ],
        questions:[
          {q:'¿Qué conviene hacer antes de una transmisión inicial?',o:['Escuchar la frecuencia y preparar el mensaje','Transmitir de inmediato para reservar espacio','Hablar mientras se decide la intención'],a:0,e:'Escuchar reduce interferencias y aporta contexto operacional.'},
          {q:'¿Qué propósito tiene la colación de elementos críticos?',o:['Detectar y corregir malentendidos','Alargar todas las comunicaciones','Demostrar velocidad al hablar'],a:0,e:'La repetición selectiva crea una defensa contra errores de recepción o interpretación.'},
          {q:'¿Qué combinación describe una llamada inicial ordenada?',o:['Estación llamada, identificación propia, posición o situación e intención','Intención sin identificar aeronave','Una conversación extensa sobre el clima personal'],a:0,e:'La forma exacta varía, pero esa estructura permite reconocer y procesar la llamada.'}
        ]
      },
      {
        id:17,unit:8,area:'Radiotelefonía',title:'Claridad, prioridad y falla de radio',subtitle:'Cuando comunicar bien importa todavía más',icon:'📻',minutes:15,xp:90,
        concepts:[
          {icon:'🔤',title:'Alfabeto y números',text:'El alfabeto fonético y la pronunciación normalizada reducen ambigüedad en matrículas, puntos, frecuencias y datos.',points:['Se usa cuando una letra aislada podría confundirse.','La cadencia debe favorecer comprensión.','Corregir un error es preferible a ocultarlo acelerando.'],tip:'Hablar más rápido no convierte una transmisión confusa en fraseología profesional.'},
          {icon:'🚨',title:'Prioridad de mensajes',text:'Las comunicaciones de socorro y urgencia tienen prioridad. La situación determina el mensaje, la frecuencia y la información esencial.',points:['Mayday indica peligro grave e inminente que requiere ayuda inmediata.','Pan Pan comunica una condición urgente sin ese grado de peligro inmediato.','Otros usuarios deben proteger la frecuencia.'],tip:'Las palabras de prioridad no son intensificadores dramáticos. Tienen significado operacional específico.'},
          {icon:'🔇',title:'Falla de comunicaciones',text:'Una pérdida aparente de radio exige comprobar configuración, conexiones, volumen, frecuencia, equipo alternativo y procedimientos aplicables.',points:['Aviate, navigate, communicate mantiene prioridades.','El transpondedor y señales luminosas pueden formar parte del contexto.','La acción exacta depende del espacio aéreo y la situación.'],tip:'Golpear el panel puede satisfacer una emoción. Rara vez figura en la lista aprobada.'}
        ],
        questions:[
          {q:'¿Qué palabra de prioridad corresponde a peligro grave e inminente que requiere ayuda inmediata?',o:['Mayday','Pan Pan','Roger'],a:0,e:'Mayday identifica una situación de socorro. Pan Pan corresponde a urgencia.'},
          {q:'Ante una aparente falla de radio, ¿cuál es un primer enfoque razonable?',o:['Mantener control y revisar configuración, frecuencia, conexiones y alternativas','Abandonar navegación para concentrarse sólo en el micrófono','Apagar todos los equipos sin diagnóstico'],a:0,e:'La prioridad es conservar el vuelo y ejecutar comprobaciones sistemáticas según el procedimiento.'},
          {q:'¿Para qué sirve el alfabeto fonético?',o:['Reducir confusión entre letras y datos','Reemplazar toda fraseología','Evitar identificarse'],a:0,e:'La normalización mejora inteligibilidad, especialmente con ruido o señales débiles.'}
        ]
      },
      {
        id:18,unit:9,area:'Actuación humana',title:'Chequeo personal y límites humanos',subtitle:'El piloto también es un sistema',icon:'🧠',minutes:15,xp:90,
        concepts:[
          {icon:'🩺',title:'Un filtro personal antes del vuelo',text:'IMSAFE es una regla mnemotécnica internacional para recordar que conviene revisar enfermedad, medicación, estrés, alcohol, fatiga y alimentación o estado emocional antes del vuelo.',points:['Una licencia vigente no garantiza aptitud para ese día.','Medicamentos comunes pueden afectar alerta o coordinación.','Fatiga y estrés alteran percepción y decisiones.'],tip:'La pregunta no es “¿puedo soportarlo?”. Es “¿conservo margen para operar bien?”.'},
          {icon:'👁️',title:'Percepción imperfecta',text:'Visión, oído interno y propiocepción pueden producir ilusiones o información conflictiva, especialmente con referencias degradadas.',points:['El cuerpo no es un instrumento de actitud confiable sin referencias.','La fijación atencional excluye datos relevantes.','La carga de trabajo reduce capacidad para detectar cambios.'],tip:'Sentirse nivelado no demuestra estar nivelado. El oído interno carece de homologación aeronáutica.'},
          {icon:'⚡',title:'Actitudes peligrosas',text:'Impulsividad, invulnerabilidad, resignación, anti-autoridad y exhibicionismo o machismo describen patrones que sesgan decisiones.',points:['Reconocer el patrón permite interrumpirlo.','Los antídotos cognitivos promueven pausa y disciplina.','La experiencia no inmuniza contra sesgos.'],tip:'La confianza útil acepta verificación. La otra clase se ofende cuando aparece una lista.'}
        ],
        questions:[
          {q:'¿Qué evalúa el mnemónico IMSAFE?',o:['Condiciones personales que pueden degradar aptitud para el vuelo','Sólo el estado del motor','La longitud de pista'],a:0,e:'IMSAFE es una autoevaluación de factores personales relevantes para seguridad.'},
          {q:'En ausencia de referencias visuales confiables, ¿por qué no debe confiarse sólo en sensaciones corporales?',o:['El sistema vestibular puede producir ilusiones','El oído interno mide rumbo magnético','Las sensaciones siempre exageran la altitud exactamente igual'],a:0,e:'Aceleraciones y movimientos pueden engañar a los sentidos y generar desorientación espacial.'},
          {q:'¿Cuál es una respuesta útil frente a impulsividad?',o:['Detenerse y pensar antes de actuar','Hacerlo rápido para terminar','Ignorar el procedimiento'],a:0,e:'Introducir una pausa deliberada ayuda a evaluar consecuencias y opciones.'}
        ]
      },
      {
        id:19,unit:9,area:'Actuación humana',title:'Riesgo, amenazas y decisión final',subtitle:'Gestionar amenazas antes de que gestionen el vuelo',icon:'🛡️',minutes:17,xp:100,
        concepts:[
          {icon:'🧩',title:'Una lista para ordenar el riesgo',text:'PAVE es una regla mnemotécnica que agrupa factores del piloto, la aeronave, el entorno y las presiones externas para evitar que una sola preocupación o deseo domine la evaluación.',points:['Pilot: aptitud, experiencia y recencia.','Aircraft: capacidad, estado y limitaciones.','enVironment y External pressures: clima, terreno, tiempo y expectativas.'],tip:'Una decisión puede ser legal y aun así tener margen insuficiente para ese piloto, avión y día.'},
          {icon:'🛡️',title:'Amenaza, error y estado no deseado',text:'La Gestión de Amenazas y Errores (TEM, por su nombre internacional Threat and Error Management) busca anticipar amenazas, capturar errores y recuperar estados no deseados antes de que desemboquen en consecuencias.',points:['Una amenaza no administrada aumenta carga.','Un error detectado todavía puede corregirse.','Las barreras incluyen planificación, briefing, listas y comunicación.'],tip:'La seguridad no exige ausencia total de errores. Exige que el sistema los detecte y contenga.'},
          {icon:'↩️',title:'Conservar salidas',text:'Una buena decisión mantiene alternativas: demorar, desviar, regresar, frustrar una aproximación o aterrizar antes de agotar margen.',points:['Definí criterios de continuación antes del vuelo.','Reevaluá cuando cambian las condiciones.','Una ida al aire es una maniobra normal, no una confesión de fracaso.'],tip:'El destino no se mueve. El orgullo tampoco, pero éste último no debería pilotear.'}
        ],
        questions:[
          {q:'¿Qué componentes reúne PAVE?',o:['Piloto, aeronave, entorno y presiones externas','Potencia, altitud, velocidad y electricidad','Pista, avión, viento y equipaje solamente'],a:0,e:'PAVE ayuda a revisar el sistema completo de riesgo antes y durante el vuelo.'},
          {q:'En TEM, ¿qué ventaja tiene detectar un error temprano?',o:['Permite corregirlo antes de que genere un estado no deseado','Lo convierte automáticamente en amenaza meteorológica','Elimina la necesidad de decidir'],a:0,e:'La detección y recuperación son barreras esenciales del manejo de amenazas y errores.'},
          {q:'¿Qué describe mejor una ida al aire?',o:['Una maniobra normal para recuperar margen cuando continuar no es adecuado','Un fracaso que debe evitarse a toda costa','Una acción reservada exclusivamente a emergencias de motor'],a:0,e:'Frustrar la aproximación protege opciones y forma parte de una operación disciplinada.'}
        ]
      }
    ];
    const glossary = [
      {t:'AIP',c:'Derecho aéreo',d:'Publicación de información aeronáutica de carácter duradero y esencial para la navegación aérea.'},
      {t:'Alerón',c:'Principios de vuelo',d:'Superficie de control que modifica principalmente el alabeo alrededor del eje longitudinal.'},
      {t:'Altitud de densidad',c:'Performance',d:'Altitud de presión corregida por condiciones no estándar, usada para representar la densidad que experimenta la aeronave.'},
      {t:'Altitud de presión',c:'Instrumentos',d:'Altitud indicada al ajustar el altímetro a la referencia estándar de presión.'},
      {t:'AME',c:'Primeros pasos',d:'Médico Examinador Aeronáutico autorizado para realizar evaluaciones dentro del sistema de CMA.'},
      {t:'Ángulo de ataque',c:'Principios de vuelo',d:'Ángulo entre la cuerda del perfil alar y la dirección del viento relativo.'},
      {t:'ANAC',c:'Primeros pasos',d:'Administración Nacional de Aviación Civil de la República Argentina.'},
      {t:'Brazo',c:'Performance',d:'Distancia de referencia utilizada para calcular el momento de una carga respecto de un datum.'},
      {t:'CAD',c:'Primeros pasos',d:'Casillero Aeronáutico Digital utilizado para diversas gestiones personales ante ANAC.'},
      {t:'CAE',c:'Primeros pasos',d:'Sigla ambigua que no se usa en esta aplicación como nombre del centro médico examinador. Para el trámite de la CMA vas a encontrar AME o CMAE; verificá siempre el contexto si aparece CAE en otra fuente.'},
      {t:'Cizalladura',c:'Meteorología',d:'Cambio significativo de velocidad o dirección del viento en una distancia relativamente corta.'},
      {t:'CG',c:'Performance',d:'Centro de gravedad de la aeronave; su posición debe permanecer dentro de los límites aprobados.'},
      {t:'CIAC',c:'Primeros pasos',d:'Centro de Instrucción de Aeronáutica Civil certificado para impartir los alcances que tenga aprobados.'},
      {t:'CMA',c:'Primeros pasos',d:'Certificación Médica Aeronáutica que acredita el cumplimiento de condiciones psicofisiológicas aplicables.'},
      {t:'CMAE',c:'Primeros pasos',d:'Centro Médico Aeronáutico Examinador autorizado para realizar evaluaciones dentro del sistema de certificación médica.'},
      {t:'Colación',c:'Radiotelefonía',d:'Repetición de información recibida, especialmente elementos críticos, para confirmar comprensión correcta.'},
      {t:'Componente de viento cruzado',c:'Meteorología',d:'Parte del vector viento perpendicular a la dirección de la pista o trayectoria considerada.'},
      {t:'Curso',c:'Navegación',d:'Dirección prevista de una trayectoria sobre la superficie terrestre.'},
      {t:'Datum',c:'Performance',d:'Plano o referencia elegida por el fabricante para medir brazos en cálculos de masa y centrado.'},
      {t:'Deriva',c:'Navegación',d:'Desplazamiento angular de la trayectoria respecto del rumbo, producido principalmente por el viento.'},
      {t:'Derrota',c:'Navegación',d:'Trayectoria efectivamente seguida por la aeronave sobre la superficie.'},
      {t:'Desviación de brújula',c:'Instrumentos',d:'Error magnético originado por campos propios de la aeronave y su instalación.'},
      {t:'Elevador',c:'Principios de vuelo',d:'Superficie de control que modifica principalmente el cabeceo alrededor del eje lateral.'},
      {t:'Factor de carga',c:'Principios de vuelo',d:'Relación entre la carga aerodinámica soportada y el peso de la aeronave, expresada habitualmente en g.'},
      {t:'Frente',c:'Meteorología',d:'Zona de transición entre masas de aire con propiedades diferentes.'},
      {t:'HVI',c:'Primeros pasos',d:'Habilitación de Vuelo por Instrumentos, sujeta a formación, experiencia y evaluación específicas.'},
      {t:'IFR',c:'Derecho aéreo',d:'Reglas de vuelo por instrumentos, utilizadas cuando la operación se realiza conforme a procedimientos e información instrumental aplicables.'},
      {t:'IMSAFE',c:'Actuación humana',d:'Mnemónico para revisar enfermedad, medicación, estrés, alcohol, fatiga y alimentación o estado personal.'},
      {t:'Magneto',c:'Conocimiento de aeronaves',d:'Sistema de encendido autónomo usado en muchos motores alternativos aeronáuticos.'},
      {t:'Masa y centrado',c:'Performance',d:'Proceso para verificar masa total y ubicación del centro de gravedad dentro de límites aprobados.'},
      {t:'METAR',c:'Meteorología',d:'Informe meteorológico rutinario de un aeródromo, codificado con un formato internacional.'},
      {t:'Mayday',c:'Radiotelefonía',d:'Señal radiotelefónica de socorro asociada a peligro grave e inminente que requiere ayuda inmediata.'},
      {t:'Mezcla',c:'Conocimiento de aeronaves',d:'Proporción de combustible y aire suministrada al motor para la combustión.'},
      {t:'Momento',c:'Performance',d:'Producto de una masa por su brazo, usado para determinar la posición del centro de gravedad.'},
      {t:'NOTAM',c:'Derecho aéreo',d:'Aviso que contiene información relevante para operaciones y que puede complementar o modificar publicaciones permanentes.'},
      {t:'OACI',c:'Derecho aéreo',d:'Organización de Aviación Civil Internacional, organismo especializado de las Naciones Unidas que establece normas y métodos recomendados para la aviación civil.'},
      {t:'PAVE',c:'Actuación humana',d:'Mnemónico de evaluación de riesgo: piloto, aeronave, entorno y presiones externas.'},
      {t:'Pan Pan',c:'Radiotelefonía',d:'Señal radiotelefónica de urgencia para una condición que requiere atención prioritaria sin constituir socorro inmediato.'},
      {t:'Pérdida',c:'Principios de vuelo',d:'Condición aerodinámica causada por superar el ángulo de ataque crítico, con degradación marcada de sustentación.'},
      {t:'PPA',c:'Primeros pasos',d:'Licencia de Piloto Privado de Avión.'},
      {t:'Presión dinámica',c:'Instrumentos',d:'Componente de presión asociada al movimiento relativo del aire, obtenida a partir de total menos estática.'},
      {t:'Presión estática',c:'Instrumentos',d:'Presión atmosférica local captada por tomas diseñadas para reducir influencia del movimiento.'},
      {t:'RAAC',c:'Derecho aéreo',d:'Regulaciones Argentinas de Aviación Civil.'},
      {t:'RPM',c:'Conocimiento de aeronaves',d:'Revoluciones por minuto; unidad usada para expresar la velocidad de giro del motor o de la hélice, según el sistema.'},
      {t:'Rumbo',c:'Navegación',d:'Dirección hacia la que apunta el eje longitudinal de la aeronave respecto de una referencia de norte.'},
      {t:'Sustentación',c:'Principios de vuelo',d:'Componente de la fuerza aerodinámica aproximadamente perpendicular al viento relativo.'},
      {t:'TAF',c:'Meteorología',d:'Pronóstico meteorológico de aeródromo emitido para un período determinado y presentado en un formato internacional.'},
      {t:'TCEXAM',c:'Primeros pasos',d:'Sistema utilizado por ANAC para evaluaciones teóricas de conocimientos.'},
      {t:'TEM',c:'Actuación humana',d:'Gestión de amenazas y errores para anticipar riesgos, capturar errores y recuperar estados no deseados.'},
      {t:'Timón de dirección',c:'Principios de vuelo',d:'Superficie de control que modifica principalmente la guiñada alrededor del eje vertical.'},
      {t:'Toma estática',c:'Instrumentos',d:'Abertura que suministra presión estática a instrumentos del sistema pitot-estático.'},
      {t:'Tracción',c:'Principios de vuelo',d:'Fuerza propulsiva que impulsa la aeronave, producida por hélice, reactor u otro sistema.'},
      {t:'Triángulo de viento',c:'Navegación',d:'Relación vectorial entre movimiento de la aeronave respecto del aire, viento y movimiento sobre el suelo.'},
      {t:'Turbulencia de estela',c:'Procedimientos operacionales',d:'Perturbación producida principalmente por vórtices de punta de ala de otra aeronave.'},
      {t:'Variación magnética',c:'Navegación',d:'Ángulo entre el norte verdadero y el norte magnético en una ubicación.'},
      {t:'Velocidad indicada',c:'Instrumentos',d:'Lectura del anemómetro antes de aplicar correcciones por errores y condiciones atmosféricas.'},
      {t:'Velocidad terrestre',c:'Navegación',d:'Velocidad de la aeronave respecto de la superficie terrestre.'},
      {t:'Viento relativo',c:'Principios de vuelo',d:'Flujo de aire percibido en dirección opuesta al movimiento de la aeronave o perfil a través del aire.'},
      {t:'VFR',c:'Derecho aéreo',d:'Reglas de vuelo visual.'},
      {t:'XP',c:'Uso de la aplicación',d:'Puntos de experiencia que la aplicación otorga por estudiar, responder y completar lecciones.'}
    ];

    const terminology = {
      AIP:{full:'Publicación de Información Aeronáutica',plain:'Documento oficial con información aeronáutica de carácter duradero y esencial para la navegación.'},
      AME:{full:'Médico Examinador Aeronáutico',plain:'Profesional autorizado para realizar evaluaciones médicas aeronáuticas.'},
      ANAC:{full:'Administración Nacional de Aviación Civil',plain:'Autoridad de aviación civil de la República Argentina.'},
      CAD:{full:'Casillero Aeronáutico Digital',plain:'Cuenta personal utilizada para gestionar trámites aeronáuticos en línea.'},
      CG:{full:'Centro de gravedad',plain:'Punto teórico donde se considera concentrado el peso de la aeronave.'},
      CIAC:{full:'Centro de Instrucción de Aeronáutica Civil',plain:'Organización certificada para impartir los cursos y alcances que tenga aprobados.'},
      CMA:{full:'Certificación Médica Aeronáutica',plain:'Certificación que acredita el cumplimiento de los requisitos de aptitud psicofisiológica aplicables.'},
      CMAE:{full:'Centro Médico Aeronáutico Examinador',plain:'Centro autorizado para realizar evaluaciones médicas aeronáuticas.'},
      HVI:{full:'Habilitación de Vuelo por Instrumentos',plain:'Habilitación adicional para operar conforme a procedimientos de vuelo por instrumentos.'},
      IFR:{full:'Reglas de Vuelo por Instrumentos',plain:'Reglas y procedimientos aplicables al vuelo conducido principalmente mediante instrumentos.'},
      IMSAFE:{full:'Chequeo de enfermedad, medicación, estrés, alcohol, fatiga y estado personal',plain:'Regla mnemotécnica internacional para revisar enfermedad, medicación, estrés, alcohol, fatiga y alimentación o estado personal.'},
      METAR:{full:'Informe meteorológico rutinario de aeródromo',plain:'Reporte codificado de las condiciones meteorológicas observadas en un aeródromo.'},
      NOTAM:{full:'Aviso operacional aeronáutico',plain:'Aviso con información relevante que puede afectar una operación y complementar lo publicado.'},
      OACI:{full:'Organización de Aviación Civil Internacional',plain:'Organismo especializado de las Naciones Unidas para la aviación civil internacional.'},
      PAVE:{full:'Piloto, aeronave, entorno y presiones externas',plain:'Regla mnemotécnica para revisar piloto, aeronave, entorno y presiones externas.'},
      PPA:{full:'Licencia de Piloto Privado de Avión',plain:'Licencia que permite actuar como piloto en operaciones privadas dentro de sus atribuciones y limitaciones.'},
      RAAC:{full:'Regulaciones Argentinas de Aviación Civil',plain:'Conjunto de regulaciones aeronáuticas civiles aplicables en Argentina.'},
      RPM:{full:'Revoluciones por minuto',plain:'Unidad de velocidad de rotación usada, por ejemplo, para el motor o la hélice.'},
      TAF:{full:'Pronóstico meteorológico de aeródromo',plain:'Pronóstico codificado para un aeródromo y un período determinado.'},
      TCEXAM:{full:'Sistema de exámenes teóricos de ANAC',plain:'Plataforma utilizada por ANAC para evaluaciones teóricas de conocimientos.'},
      TEM:{full:'Gestión de Amenazas y Errores',plain:'Enfoque para anticipar amenazas, detectar errores y recuperar estados no deseados.'},
      VFR:{full:'Reglas de Vuelo Visual',plain:'Reglas que permiten operar manteniendo las referencias visuales y condiciones aplicables.'},
      XP:{full:'Puntos de experiencia',plain:'Puntos internos de Ala Azul que reflejan actividad de estudio; no son una calificación oficial.'}
    };

    const achievementDefs = [
      {id:'first',icon:'🛫',name:'Primer despegue',desc:'Completaste tu primera lección.',test:s=>Object.keys(s.completed).length>=1},
      {id:'five',icon:'🧭',name:'Navegante',desc:'Completaste cinco lecciones.',test:s=>Object.keys(s.completed).length>=5},
      {id:'half',icon:'🪽',name:'Media ruta',desc:'Completaste diez lecciones.',test:s=>Object.keys(s.completed).length>=10},
      {id:'all',icon:'🏁',name:'Ruta completa',desc:'Completaste las veinte lecciones.',test:s=>Object.keys(s.completed).length>=20},
      {id:'streak3',icon:'🔥',name:'Motor caliente',desc:'Alcanzaste una racha de 3 días.',test:s=>s.bestStreak>=3},
      {id:'streak7',icon:'☀️',name:'Semana visual',desc:'Alcanzaste una racha de 7 días.',test:s=>s.bestStreak>=7},
      {id:'xp500',icon:'⚡',name:'500 XP',desc:'Acumulaste 500 puntos de experiencia.',test:s=>s.xp>=500},
      {id:'accurate',icon:'🎯',name:'Precisión',desc:'Superaste 85% con al menos 30 respuestas.',test:s=>s.answers>=30 && s.correct/s.answers>=.85},
      {id:'review20',icon:'↻',name:'Memoria activa',desc:'Completaste 20 respuestas de repaso.',test:s=>s.reviewAnswers>=20},
      {id:'glossary',icon:'📚',name:'Coleccionista',desc:'Marcaste 10 términos favoritos.',test:s=>s.favorites.length>=10},
      {id:'saver',icon:'💰',name:'Fondo iniciado',desc:'Registraste tu primer aporte.',test:s=>s.fund.entries.length>=1},
      {id:'planner',icon:'🛡️',name:'Buen criterio',desc:'Completaste la lección final de gestión del riesgo.',test:s=>Boolean(s.completed[19])}
    ];

    const isoDay = d => new Date(d).toISOString().slice(0,10);
    const todayISO = () => isoDay(Date.now());
    const defaultState = () => ({
      version:1,onboarded:false,name:'Piloto',goal:'dual',weeklyGoal:100,createdAt:new Date().toISOString(),theme:'light',
      xp:0,completed:{},lessonScores:{},lessonNotes:{},questionHistory:{},reviewQueue:{},answers:0,correct:0,reviewAnswers:0,
      streak:0,bestStreak:0,lastStudyDay:null,activity:[],favorites:[],studyDays:{},
      fund:{currency:'USD',target:7500,monthly:250,initial:0,entries:[]}
    });

    let state = loadState();
    let activeLesson = null;
    let lessonStep = 0;
    let lessonCorrect = 0;
    let lessonAnswered = 0;
    let currentPractice = null;
    let showFavoritesOnly = false;
    let showAcronymsOnly = false;

    function loadState(){
      try{
        const raw=localStorage.getItem(STORAGE_KEY);
        if(!raw) return defaultState();
        const parsed=JSON.parse(raw);
        const base=defaultState();
        return {...base,...parsed,fund:{...base.fund,...(parsed.fund||{})},completed:parsed.completed||{},lessonScores:parsed.lessonScores||{},lessonNotes:parsed.lessonNotes||{},questionHistory:parsed.questionHistory||{},reviewQueue:parsed.reviewQueue||{},studyDays:parsed.studyDays||{},favorites:Array.isArray(parsed.favorites)?parsed.favorites:[],activity:Array.isArray(parsed.activity)?parsed.activity:[]};
      }catch(err){console.warn('No se pudo leer el progreso',err);return defaultState()}
    }
    function saveState(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}
    function esc(v){return String(v??'').replace(/[&<>'"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]))}
    function escapeRegExp(v){return String(v).replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}
    const terminologyKeys=Object.keys(terminology).sort((a,b)=>b.length-a.length);
    const terminologyPattern=new RegExp(`\\b(${terminologyKeys.map(escapeRegExp).join('|')})\\b`,'g');
    function richText(value,{expandFirst=false,seen}={}){
      const text=String(value??''),used=seen||new Set();let out='',cursor=0;
      text.replace(terminologyPattern,(match,term,offset)=>{
        out+=esc(text.slice(cursor,offset));const info=terminology[term];
        const before=text.slice(0,offset).replace(/[\s(]+$/,'').toLocaleLowerCase('es');
        const alreadyExpanded=before.endsWith(info.full.toLocaleLowerCase('es'));
        const title=esc(`${info.full}. ${info.plain}`);
        const abbr=`<abbr class="term-help" data-term-help="${esc(term)}" title="${title}">${esc(term)}</abbr>`;
        out+=(expandFirst&&!used.has(term)&&!alreadyExpanded)?`<span class="term-expanded">${esc(info.full)} (${abbr})</span>`:abbr;
        used.add(term);cursor=offset+match.length;return match;
      });
      out+=esc(text.slice(cursor));return out;
    }
    function extractTermKeys(value){
      const found=new Set();for(const m of String(value??'').matchAll(new RegExp(terminologyPattern.source,'g')))found.add(m[1]);return [...found]
    }
    function lessonSegments(l){
      return [
        ...l.concepts.map(c=>[c.title,c.text,...c.points,c.tip].join(' ')),
        ...l.questions.map(q=>[q.q,...q.o,q.e].join(' '))
      ]
    }
    function termsSeenBefore(l,step){
      const seen=new Set();lessonSegments(l).slice(0,step).forEach(segment=>extractTermKeys(segment).forEach(term=>seen.add(term)));return seen
    }
    function lessonTermKeys(l){
      const all=[l.title,l.subtitle,l.area,...lessonSegments(l)].join(' ');return extractTermKeys(all)
    }
    function lessonVocabularyHTML(l,open=false){
      const keys=lessonTermKeys(l);if(!keys.length)return'';
      return `<details class="lesson-vocab" ${open?'open':''}><summary><span class="vocab-icon">ABC</span><span><b>Siglas de esta lección</b><small>Se desarrollan la primera vez. Tocá una para ver una explicación breve.</small></span><span class="vocab-count">${keys.length}</span></summary><div class="vocab-grid">${keys.map(term=>`<button type="button" class="vocab-item" data-term-open="${esc(term)}"><b>${esc(term)}</b><span>${esc(terminology[term].full)}</span></button>`).join('')}</div></details>`
    }
    function openTermHelp(term){
      const info=terminology[term],item=glossary.find(g=>g.t===term);if(!info&&!item)return;
      $('#simpleTitle').textContent=info?`${term} · ${info.full}`:term;
      $('#simpleBody').innerHTML=`<div class="term-modal-card"><span class="term-modal-code">${esc(term)}</span>${info?`<div><h4>${esc(info.full)}</h4><p>${esc(info.plain)}</p></div>`:''}${item?`<div class="term-modal-note"><b>En el glosario:</b> ${esc(item.d)}</div>`:''}<div class="term-modal-note">En las lecciones, la forma completa aparece la primera vez. Después se mantiene la sigla para que la incorpores gradualmente, sin convertir el primer día en una sopa de letras hostil.</div></div>`;
      $('#simpleFoot').innerHTML='<button class="btn btn-primary" data-close="simpleModal">Entendido</button>';bindCloseButtons();openModal('simpleModal')
    }
    function clamp(v,min,max){return Math.min(max,Math.max(min,v))}
    function formatNumber(n){return new Intl.NumberFormat('es-AR',{maximumFractionDigits:0}).format(Number(n)||0)}
    function formatMoney(n,currency=state.fund.currency){return `${currency} ${formatNumber(n)}`}
    function goalText(g=state.goal){return ({hobby:'explorar la aviación como hobby',dual:'mantener abiertas las rutas de hobby y carrera',career:'construir una posible proyección profesional'})[g]||'aprender aviación'}
    function levelInfo(xp=state.xp){const level=Math.floor(xp/150)+1;const within=xp%150;return {level,within,next:150,pct:within/150*100}}
    function completedCount(){return Object.keys(state.completed).filter(k=>state.completed[k]).length}
    function accuracy(){return state.answers?Math.round(state.correct/state.answers*100):0}
    function currentLessonId(){for(const l of lessons){if(!state.completed[l.id]) return l.id}return lessons.length-1}
    function isUnlocked(id){return id===0 || Boolean(state.completed[id-1]) || Boolean(state.completed[id])}
    function questionKey(lessonId,qIndex){return `${lessonId}:${qIndex}`}
    function addActivity(icon,title,detail){state.activity.unshift({icon,title,detail,at:new Date().toISOString()});state.activity=state.activity.slice(0,12)}
    function markStudy(xp=0){
      const today=todayISO();
      if(state.lastStudyDay!==today){
        if(state.lastStudyDay){const gap=Math.round((new Date(today)-new Date(state.lastStudyDay))/DAY);state.streak=gap===1?state.streak+1:1}else state.streak=1;
        state.lastStudyDay=today;state.bestStreak=Math.max(state.bestStreak,state.streak);
      }
      state.studyDays[today]=(state.studyDays[today]||0)+xp;
    }
    function awardXp(amount,reason){if(amount<=0)return;state.xp+=amount;markStudy(amount);if(reason)addActivity('⚡',`+${amount} XP`,reason);saveState();toast(`+${amount} XP · ${reason}`,'good')}
    function scheduleReview(key,correct){
      const old=state.reviewQueue[key]||{box:0};
      const box=correct?Math.min(5,(old.box||0)+1):0;
      const days=correct?[0,1,3,7,14,30][box]:0;
      state.reviewQueue[key]={box,due:Date.now()+days*DAY,last:Date.now(),lastCorrect:correct};
    }
    const $ = (sel,root=document)=>root.querySelector(sel);
    const $$ = (sel,root=document)=>[...root.querySelectorAll(sel)];

    function toast(message,type=''){
      const el=document.createElement('div');el.className=`toast ${type}`;el.textContent=message;$('#toastStack').appendChild(el);
      setTimeout(()=>el.remove(),3400);
    }
    function openModal(id){$('#'+id).classList.add('open');document.body.style.overflow='hidden'}
    function closeModal(id){$('#'+id).classList.remove('open');if(!$('.modal-backdrop.open'))document.body.style.overflow=''}
    function applyTheme(){document.documentElement.dataset.theme=state.theme;$('#themeBtn').textContent=state.theme==='dark'?'☀':'☾'}
    function switchView(view){
      $$('.view').forEach(v=>v.classList.toggle('active',v.id===`view-${view}`));
      $$('.nav-btn').forEach(b=>b.classList.toggle('active',b.dataset.view===view));
      const titles={home:['Inicio','Un concepto por vez. El avión puede esperar en tierra.'],path:['Ruta de aprendizaje','Tu programa personal de estudio.'],review:['Centro de repaso','Recuperar, corregir y consolidar.'],glossary:['Glosario','El dialecto que convierte aire en aviación.'],fund:['Fondo de vuelo','Una pista financiera para despegar con continuidad.'],profile:['Perfil y datos','Progreso, logros y copias de seguridad.']};
      const t=titles[view]||titles.home;$('.top-title h2').textContent=t[0];$('.top-title p').textContent=t[1];
      $('#sidebar').classList.remove('open');$('#mobileShade').classList.remove('open');window.scrollTo({top:0,behavior:'smooth'});
      if(view==='glossary')renderGlossary();if(view==='fund')renderFund();if(view==='profile')renderProfile();if(view==='review')renderReview();if(view==='path')renderPath();
    }
    function renderTop(){
      const li=levelInfo();
      $('#topGreeting').textContent=`Buen vuelo, ${state.name||'piloto'}`;$('#streakTop').textContent=`${state.streak} ${state.streak===1?'día':'días'}`;$('#xpTop').textContent=`${formatNumber(state.xp)} XP`;
      $('#sideLevel').textContent=`Nivel ${li.level}`;$('#sideXp').textContent=`${li.within}/${li.next} XP`;$('#sideBar').style.width=`${li.pct}%`;
      const due=getDueRefs().length;$('#reviewBadge').textContent=due;$('#reviewBadge').style.display=due?'grid':'none';
    }
    function startOfWeek(){const d=new Date();const day=(d.getDay()+6)%7;d.setHours(0,0,0,0);d.setDate(d.getDate()-day);return d}
    function weekData(){const start=startOfWeek();const days=[];let total=0;for(let i=0;i<7;i++){const d=new Date(start);d.setDate(start.getDate()+i);const key=isoDay(d);const xp=state.studyDays[key]||0;total+=xp;days.push({key,xp,label:['L','M','X','J','V','S','D'][i],today:key===todayISO()})}return {days,total,start}}
    function areaStats(){
      const map={};
      lessons.forEach(l=>{if(!map[l.area])map[l.area]={attempts:0,correct:0,lessons:0,scoreSum:0};if(state.lessonScores[l.id]!=null){map[l.area].lessons++;map[l.area].scoreSum+=state.lessonScores[l.id]}});
      Object.entries(state.questionHistory).forEach(([key,h])=>{const lid=Number(key.split(':')[0]);const l=lessons[lid];if(!l)return;map[l.area].attempts+=(h.attempts||0);map[l.area].correct+=(h.correctCount||0)});
      return Object.entries(map).map(([area,v])=>{let score=v.attempts?Math.round(v.correct/v.attempts*100):(v.lessons?Math.round(v.scoreSum/v.lessons):0);return {area,score:clamp(score,0,100),...v}})
    }
    function renderTopicRows(target,limit){
      const stats=areaStats().filter(x=>x.area!=='Primeros pasos').sort((a,b)=>b.score-a.score);const list=limit?stats.slice(0,limit):stats;
      $(target).innerHTML=list.map(x=>`<div class="topic-row"><b>${esc(x.area)}</b><div class="progress ${x.score>=75?'good':x.score>=45?'warn':''}"><span style="width:${x.score}%"></span></div><span>${x.score}%</span></div>`).join('')||'<div class="empty">Todavía no hay datos.</div>';
    }
    function getRecentActivity(){return state.activity.slice(0,5)}
    function renderHome(){
      const count=completedCount(),pct=Math.round(count/lessons.length*100),week=weekData(),cur=lessons[currentLessonId()];
      $('#homeXp').textContent=formatNumber(state.xp);$('#homeLessons').textContent=`${count}/${lessons.length}`;$('#homeProgressText').textContent=`${pct}% de la ruta`;$('#homeAccuracy').textContent=`${accuracy()}%`;$('#answerCount').textContent=state.answers?`${state.answers} respuestas registradas`:'Todavía sin respuestas';$('#homeStreak').textContent=state.streak;$('#bestStreak').textContent=`Mejor racha: ${state.bestStreak}`;
      $('#weeklyStatus').textContent=`${week.total} de ${state.weeklyGoal} XP semanales`;$('#weeklyFraction').textContent=`${week.total}/${state.weeklyGoal} XP`;$('#weeklyBar').style.width=`${clamp(week.total/state.weeklyGoal*100,0,100)}%`;
      $('#weekDots').innerHTML=week.days.map(d=>`<div title="${d.key}: ${d.xp} XP" style="text-align:center"><div style="height:36px;border-radius:11px;background:${d.xp?'var(--primary)':'var(--surface-3)'};color:${d.xp?'#fff':'var(--muted)'};display:grid;place-items:center;font-weight:900;border:${d.today?'2px solid var(--accent)':'0'}">${d.xp?Math.min(99,d.xp):'·'}</div><small style="color:var(--muted);font-weight:800">${d.label}</small></div>`).join('');
      const doneAll=count===lessons.length;
      $('#resumeCard').innerHTML=`<div class="resume-card"><div class="resume-icon">${doneAll?'🏁':cur.icon}</div><div><small style="color:var(--primary);font-weight:900">${doneAll?'RUTA COMPLETA':'SIGUIENTE LECCIÓN'}</small><h3>${doneAll?'Repaso integrado':esc(cur.title)}</h3><p>${doneAll?'Mantené vivos los conceptos con práctica mixta.':esc(cur.subtitle)}</p><div class="resume-meta"><span>◷ ${doneAll?'10':cur.minutes} min</span><span>⚡ ${doneAll?'repaso':cur.xp+' XP'}</span><span>Unidad ${doneAll?10:cur.unit+1}</span></div></div><button class="btn btn-primary" id="resumeAction">${doneAll?'Practicar':'Abrir'}</button></div>`;
      $('#resumeAction').onclick=()=>doneAll?startPractice('mixed'):openLesson(cur.id);$('#heroContinue').onclick=()=>doneAll?startPractice('mixed'):openLesson(cur.id);
      renderTopicRows('#homeTopics',5);
      const recent=getRecentActivity();$('#activityList').innerHTML=recent.length?recent.map(a=>`<div class="activity"><div class="activity-icon">${a.icon}</div><div><b>${esc(a.title)}</b><small>${esc(a.detail)}</small></div><small>${relativeTime(a.at)}</small></div>`).join(''):'<div class="empty"><div class="big">🛩️</div>Tu actividad aparecerá después de la primera lección.</div>';
    }
    function relativeTime(iso){const ms=Date.now()-new Date(iso).getTime(),m=Math.floor(ms/60000);if(m<1)return'ahora';if(m<60)return`hace ${m} min`;const h=Math.floor(m/60);if(h<24)return`hace ${h} h`;const d=Math.floor(h/24);return`hace ${d} d`}
    function renderPath(){
      $('#pathContainer').innerHTML=units.map(u=>{const ls=lessons.filter(l=>l.unit===u.id);return `<section class="unit"><div class="unit-header"><div class="unit-bubble">${u.icon}</div><div><h3>Unidad ${u.id+1}: ${esc(u.title)}</h3><p>${esc(u.subtitle)}</p></div></div><div class="lesson-path">${ls.map(l=>{const done=Boolean(state.completed[l.id]),unlocked=isUnlocked(l.id),current=!done&&l.id===currentLessonId(),score=state.lessonScores[l.id]||0;return `<article class="lesson-node ${done?'done':current?'current':unlocked?'':'locked'}" data-lesson="${l.id}" role="button" tabindex="0" aria-label="${esc(l.title)}"><div><h4>${unlocked?'': '🔒 '}${l.icon} ${esc(l.title)}</h4><p>${esc(l.subtitle)}</p><div class="lesson-tags"><span class="tag">◷ ${l.minutes} min</span><span class="tag xp">⚡ ${l.xp} XP</span>${done?'<span class="tag done">Completada</span>':current?'<span class="tag">En curso</span>':''}</div></div><div class="lesson-score" style="--score:${score}%"><span>${done?score+'%':unlocked?'→':'🔒'}</span></div></article>`}).join('')}</div></section>`}).join('');
      $$('.lesson-node').forEach(el=>{const act=()=>{const id=Number(el.dataset.lesson);if(isUnlocked(id))openLesson(id);else toast('Completá la lección anterior para desbloquear ésta.','bad')};el.onclick=act;el.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();act()}}});
      $('#pathContinue').onclick=()=>openLesson(currentLessonId());
    }
    function getAllRefs(filterUnlocked=true){const arr=[];lessons.forEach(l=>{if(filterUnlocked&&!isUnlocked(l.id))return;l.questions.forEach((q,i)=>arr.push({lessonId:l.id,qIndex:i,key:questionKey(l.id,i)}))});return arr}
    function getDueRefs(){const now=Date.now();return getAllRefs(false).filter(r=>state.reviewQueue[r.key]&&state.reviewQueue[r.key].due<=now)}
    function weakestRefs(){
      return getAllRefs().sort((a,b)=>{const ha=state.questionHistory[a.key]||{},hb=state.questionHistory[b.key]||{};const sa=ha.attempts?ha.correctCount/ha.attempts:2;const sb=hb.attempts?hb.correctCount/hb.attempts:2;return sa-sb}).slice(0,10)
    }
    function renderReview(){
      const due=getDueRefs(),stats=areaStats().filter(x=>x.area!=='Primeros pasos'),mastery=stats.length?Math.round(stats.reduce((s,x)=>s+x.score,0)/stats.length):0;
      $('#dueCount').textContent=due.length;$('#masteryPct').textContent=`${mastery}%`;$('#masteryDial').style.setProperty('--dial',`${mastery}%`);renderTopicRows('#reviewTopics');
      const weak=lessons.filter(l=>state.lessonScores[l.id]!=null).sort((a,b)=>(state.lessonScores[a.id]||0)-(state.lessonScores[b.id]||0)).slice(0,5);
      $('#weakLessons').innerHTML=weak.length?weak.map(l=>`<div class="activity"><div class="activity-icon">${l.icon}</div><div><b>${esc(l.title)}</b><small>${l.area}</small></div><button class="btn btn-sm btn-soft" data-reopen="${l.id}">${state.lessonScores[l.id]}%</button></div>`).join(''):'<div class="empty"><div class="big">🎯</div>Completá una lección para detectar áreas a reforzar.</div>';
      $$('[data-reopen]').forEach(b=>b.onclick=()=>openLesson(Number(b.dataset.reopen)));
      const disabled=!due.length;$('#duePractice').disabled=disabled;$('#duePractice2').disabled=disabled;
    }
    function glossaryCategories(){return [...new Set(glossary.map(g=>g.c))].sort((a,b)=>a.localeCompare(b,'es'))}
    function renderGlossary(){
      const select=$('#glossaryCategory');if(select.options.length===1)glossaryCategories().forEach(c=>select.insertAdjacentHTML('beforeend',`<option value="${esc(c)}">${esc(c)}</option>`));
      const q=$('#glossarySearch').value.trim().toLocaleLowerCase('es'),cat=select.value;
      const items=glossary.filter(g=>{
        const info=terminology[g.t],haystack=`${g.t} ${info?.full||''} ${info?.plain||''} ${g.d} ${g.c}`.toLocaleLowerCase('es');
        return (cat==='all'||g.c===cat)&&(!showFavoritesOnly||state.favorites.includes(g.t))&&(!showAcronymsOnly||Boolean(info))&&(!q||haystack.includes(q))
      });
      $('#showFavs').textContent=showFavoritesOnly?'Mostrar todos':'Solo favoritos';
      $('#showAcronyms').textContent=showAcronymsOnly?'Ver todo el glosario':'Solo siglas';
      $('#glossaryList').innerHTML=items.length?items.map(g=>{const info=terminology[g.t];return `<article class="term ${info?'acronym-term':''}"><div><h4>${esc(g.t)}${info?'<span class="acronym-badge">sigla</span>':''}</h4>${info?`<div class="term-full">${esc(info.full)}</div>`:''}<p>${esc(g.d)}</p><span class="tag" style="display:inline-block;margin-top:9px">${esc(g.c)}</span></div><button class="star ${state.favorites.includes(g.t)?'on':''}" data-star="${esc(g.t)}" aria-label="Marcar favorito">★</button></article>`}).join(''):'<div class="empty" style="grid-column:1/-1"><div class="big">🔎</div>No encontré términos con ese filtro.</div>';
      $$('[data-star]').forEach(b=>b.onclick=()=>{const t=b.dataset.star;state.favorites=state.favorites.includes(t)?state.favorites.filter(x=>x!==t):[...state.favorites,t];saveState();renderGlossary();renderTop()});
    }
    function fundTotal(){return (Number(state.fund.initial)||0)+(state.fund.entries||[]).reduce((s,e)=>s+(Number(e.amount)||0),0)}
    function renderFund(){
      const total=fundTotal(),target=Math.max(1,Number(state.fund.target)||1),pct=clamp(total/target*100,0,100),remaining=Math.max(0,target-total),monthly=Number(state.fund.monthly)||0;
      $('#fundPct').textContent=`${Math.round(pct)}%`;$('#fundRing').style.setProperty('--fund',`${pct}%`);$('#fundSaved').textContent=formatMoney(total);$('#fundTarget').textContent=formatMoney(target);$('#fundBar').style.width=`${pct}%`;
      $('#fundCurrency').value=state.fund.currency;$('#fundTargetInput').value=state.fund.target;$('#fundMonthly').value=state.fund.monthly;$('#fundInitial').value=state.fund.initial;
      $('#fundProjection').textContent=remaining<=0?'Objetivo alcanzado. La billetera ha sobrevivido al primer acto.':monthly>0?`A ese ritmo faltan aproximadamente ${Math.ceil(remaining/monthly)} meses para alcanzar el objetivo.`:'Definí un aporte mensual para estimar el plazo.';
      const entries=[...(state.fund.entries||[])].sort((a,b)=>new Date(b.date)-new Date(a.date));
      $('#fundHistorySummary').textContent=entries.length?`${entries.length} ${entries.length===1?'aporte registrado':'aportes registrados'}`:'Todavía no hay movimientos';
      $('#fundHistory').innerHTML=entries.length?entries.map(e=>`<div class="fund-entry"><div><b>${esc(e.note||'Aporte al fondo')}</b><small>${new Date(e.date+'T12:00:00').toLocaleDateString('es-AR')}</small></div><strong>${formatMoney(e.amount)}</strong><button class="btn btn-sm btn-danger" data-delete-fund="${e.id}" aria-label="Eliminar aporte">×</button></div>`).join(''):'<div class="empty"><div class="big">💰</div>El primer aporte puede ser pequeño. Su tarea es dejar de ser cero.</div>';
      $$('[data-delete-fund]').forEach(b=>b.onclick=()=>{state.fund.entries=state.fund.entries.filter(e=>e.id!==b.dataset.deleteFund);saveState();renderFund();toast('Aporte eliminado.')});
    }
    function openFundEntry(){
      $('#simpleTitle').textContent='Registrar aporte';$('#simpleBody').innerHTML=`<div class="form-grid"><div class="field"><label>Monto (${esc(state.fund.currency)})</label><input id="entryAmount" type="number" min="1" step="1" autofocus></div><div class="field"><label>Fecha</label><input id="entryDate" type="date" value="${todayISO()}"></div><div class="field full"><label>Nota</label><input id="entryNote" maxlength="80" placeholder="Ej.: ahorro de agosto"></div></div>`;$('#simpleFoot').innerHTML='<button class="btn btn-ghost" data-close="simpleModal">Cancelar</button><button class="btn btn-primary" id="confirmFundEntry">Guardar aporte</button>';bindCloseButtons();openModal('simpleModal');
      $('#confirmFundEntry').onclick=()=>{const amount=Number($('#entryAmount').value),date=$('#entryDate').value,note=$('#entryNote').value.trim();if(!amount||amount<=0||!date){toast('Ingresá un monto y una fecha válidos.','bad');return}state.fund.entries.push({id:(window.crypto&&crypto.randomUUID)?crypto.randomUUID():String(Date.now()),amount,date,note});addActivity('💰','Aporte al fondo',formatMoney(amount));saveState();closeModal('simpleModal');renderFund();renderProfile();toast('Aporte registrado.','good')}
    }
    function renderProfile(){
      const li=levelInfo(),mins=lessons.filter(l=>state.completed[l.id]).reduce((s,l)=>s+l.minutes,0);
      $('#profileName').textContent=state.name;$('#profileGoal').textContent=`Objetivo: ${goalText()}`;$('#profileLevel').textContent=`Nivel ${li.level}`;$('#profileSince').textContent=`Desde ${new Date(state.createdAt).toLocaleDateString('es-AR',{month:'long',year:'numeric'})}`;$('#profileXp').textContent=formatNumber(state.xp);$('#profileCompleted').textContent=completedCount();$('#profileMinutes').textContent=mins;$('#profileFavs').textContent=state.favorites.length;
      $('#achievements').innerHTML=achievementDefs.map(a=>{const earned=a.test(state);return `<div class="achievement ${earned?'':'locked'}"><div class="medal">${a.icon}</div><b>${esc(a.name)}</b><small>${esc(a.desc)}</small></div>`}).join('');
    }
    function editProfileModal(){
      $('#simpleTitle').textContent='Editar perfil';$('#simpleBody').innerHTML=`<div class="form-grid"><div class="field full"><label>Nombre</label><input id="editName" maxlength="30" value="${esc(state.name)}"></div><div class="field full"><label>Objetivo</label><select id="editGoal"><option value="hobby">Hobby serio</option><option value="dual">Explorar hobby y carrera</option><option value="career">Proyección profesional</option></select></div><div class="field full"><label>Meta semanal de puntos de experiencia (XP)</label><select id="editWeekly"><option value="50">50 XP</option><option value="100">100 XP</option><option value="200">200 XP</option><option value="350">350 XP</option></select></div></div>`;$('#simpleFoot').innerHTML='<button class="btn btn-ghost" data-close="simpleModal">Cancelar</button><button class="btn btn-primary" id="saveProfile">Guardar</button>';bindCloseButtons();openModal('simpleModal');$('#editGoal').value=state.goal;$('#editWeekly').value=String(state.weeklyGoal);
      $('#saveProfile').onclick=()=>{const n=$('#editName').value.trim();if(!n){toast('El nombre no puede quedar vacío.','bad');return}state.name=n;state.goal=$('#editGoal').value;state.weeklyGoal=Number($('#editWeekly').value);saveState();closeModal('simpleModal');renderAll();toast('Perfil actualizado.','good')}
    }
    function exportState(){
      const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`ala-azul-progreso-${todayISO()}.json`;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('Copia de seguridad exportada.','good')
    }
    function importStateFile(file){
      const reader=new FileReader();reader.onload=()=>{try{const data=JSON.parse(reader.result);if(!data||typeof data!=='object'||data.version!==1)throw new Error('Formato no reconocido');const base=defaultState();state={...base,...data,fund:{...base.fund,...(data.fund||{})},completed:data.completed||{},lessonScores:data.lessonScores||{},lessonNotes:data.lessonNotes||{},questionHistory:data.questionHistory||{},reviewQueue:data.reviewQueue||{},studyDays:data.studyDays||{},favorites:Array.isArray(data.favorites)?data.favorites:[],activity:Array.isArray(data.activity)?data.activity:[]};saveState();applyTheme();renderAll();toast('Progreso importado correctamente.','good')}catch(err){toast('No pude importar ese archivo.','bad')}};reader.readAsText(file)
    }
    let lessonSession=null;
    function openLesson(id){
      const l=lessons[id];if(!l)return;if(!isUnlocked(id)){toast('Esa lección todavía está bloqueada.','bad');return}
      activeLesson=l;lessonStep=0;lessonSession={answers:{},correct:0,finalized:false};$('#lessonUnitLabel').textContent=`UNIDAD ${l.unit+1} · ${units[l.unit].title.toUpperCase()}`;$('#lessonModalTitle').textContent=l.title;renderLesson();openModal('lessonModal')
    }
    function renderLesson(){
      const l=activeLesson,total=l.concepts.length+l.questions.length;
      if(lessonStep>=total){renderLessonResult();return}
      const pct=Math.round(lessonStep/total*100),conceptMode=lessonStep<l.concepts.length,seen=termsSeenBefore(l,lessonStep),vocab=lessonVocabularyHTML(l,lessonStep===0);
      if(conceptMode){
        const c=l.concepts[lessonStep];
        $('#lessonBody').innerHTML=`<div class="lesson-progress-head"><div><h2>${richText(l.title,{seen})}</h2><p class="sub">Concepto ${lessonStep+1} de ${l.concepts.length}</p><div class="progress"><span style="width:${pct}%"></span></div></div><span class="tag xp">⚡ ${l.xp} XP totales</span></div>${vocab}<article class="concept-card"><div class="concept-visual">${c.icon}</div><h3>${richText(c.title,{expandFirst:true,seen})}</h3><p>${richText(c.text,{expandFirst:true,seen})}</p><ul class="concept-points">${c.points.map(p=>`<li>${richText(p,{expandFirst:true,seen})}</li>`).join('')}</ul><div class="concept-tip"><b>Idea para recordar:</b> ${richText(c.tip,{expandFirst:true,seen})}</div></article>`;
        $('#lessonFoot').innerHTML=`<button class="btn btn-soft" id="lessonNotes">Mis notas</button><span style="flex:1"></span>${lessonStep?'<button class="btn btn-ghost" id="lessonPrev">Anterior</button>':''}<button class="btn btn-primary" id="lessonNext">${lessonStep===l.concepts.length-1?'Ir a preguntas':'Siguiente'} →</button>`;
        $('#lessonNotes').onclick=openLessonNotes;const prev=$('#lessonPrev');if(prev)prev.onclick=()=>{lessonStep--;renderLesson()};$('#lessonNext').onclick=()=>{lessonStep++;renderLesson()};
      }else{
        const qi=lessonStep-l.concepts.length,q=l.questions[qi],already=Object.prototype.hasOwnProperty.call(lessonSession.answers,qi),chosen=lessonSession.answers[qi];
        $('#lessonBody').innerHTML=`<div class="lesson-progress-head"><div><h2>Comprobación</h2><p class="sub">Pregunta ${qi+1} de ${l.questions.length}</p><div class="progress"><span style="width:${pct}%"></span></div></div><span class="tag">${esc(l.area)}</span></div>${vocab}<div class="quiz-box"><h3>${richText(q.q,{expandFirst:true,seen})}</h3><div class="options">${q.o.map((o,i)=>`<button class="option ${already?(i===q.a?'correct':chosen===i?'wrong':''):''}" data-answer="${i}" ${already?'disabled':''}>${String.fromCharCode(65+i)}. ${richText(o,{expandFirst:true,seen})}</button>`).join('')}</div><div class="feedback ${already?'show '+(chosen===q.a?'correct':'wrong'):''}" id="lessonFeedback">${already?`<b>${chosen===q.a?'Correcto.':'No exactamente.'}</b> ${richText(q.e)}`:''}</div></div>`;
        $('#lessonFoot').innerHTML=`<button class="btn btn-soft" id="lessonNotes">Mis notas</button><span style="flex:1"></span><button class="btn btn-primary" id="lessonQuizNext" ${already?'':'disabled'}>${qi===l.questions.length-1?'Ver resultado':'Siguiente pregunta'} →</button>`;
        $('#lessonNotes').onclick=openLessonNotes;$$('[data-answer]',$('#lessonBody')).forEach(b=>b.onclick=()=>answerLessonQuestion(qi,Number(b.dataset.answer)));$('#lessonQuizNext').onclick=()=>{lessonStep++;renderLesson()};
      }
    }
    function answerLessonQuestion(qi,choice){
      if(Object.prototype.hasOwnProperty.call(lessonSession.answers,qi))return;
      const q=activeLesson.questions[qi],correct=choice===q.a;lessonSession.answers[qi]=choice;lessonSession.correct+=correct?1:0;
      recordAnswer(activeLesson.id,qi,correct,false);
      $$('[data-answer]',$('#lessonBody')).forEach(b=>{const i=Number(b.dataset.answer);b.disabled=true;if(i===q.a)b.classList.add('correct');else if(i===choice)b.classList.add('wrong')});
      const fb=$('#lessonFeedback');fb.className=`feedback show ${correct?'correct':'wrong'}`;fb.innerHTML=`<b>${correct?'Correcto.':'No exactamente.'}</b> ${richText(q.e)}`;$('#lessonQuizNext').disabled=false;
      toast(correct?'Respuesta correcta. +10 XP si era nueva.':'Queda marcada para repaso.',correct?'good':'bad')
    }
    function recordAnswer(lessonId,qIndex,correct,isReview){
      const key=questionKey(lessonId,qIndex),old=state.questionHistory[key]||{attempts:0,correctCount:0,everCorrect:false};const firstEverCorrect=correct&&!old.everCorrect;
      state.questionHistory[key]={...old,attempts:(old.attempts||0)+1,correctCount:(old.correctCount||0)+(correct?1:0),everCorrect:old.everCorrect||correct,lastCorrect:correct,lastAt:new Date().toISOString()};
      state.answers++;if(correct)state.correct++;if(isReview)state.reviewAnswers++;
      scheduleReview(key,correct);
      let gain=0;if(!isReview&&firstEverCorrect)gain=10;
      if(isReview&&correct){state.reviewRewards=state.reviewRewards||{};if(state.reviewRewards[key]!==todayISO()){state.reviewRewards[key]=todayISO();gain=2}}
      if(gain){state.xp+=gain;markStudy(gain)}else markStudy(0);
      saveState();renderTop();
    }
    function renderLessonResult(){
      const l=activeLesson,score=Math.round(lessonSession.correct/l.questions.length*100);let bonus=0;
      if(!lessonSession.finalized){
        lessonSession.finalized=true;state.lessonScores[l.id]=Math.max(state.lessonScores[l.id]||0,score);
        if(!state.completed[l.id]){state.completed[l.id]=new Date().toISOString();bonus=Math.max(0,l.xp-l.questions.length*10);state.xp+=bonus;markStudy(bonus);addActivity(l.icon,'Lección completada',`${l.title} · ${score}%`)}else addActivity('↻','Lección repetida',`${l.title} · ${score}%`);
        saveState();renderAll();if(bonus)toast(`Lección completada. +${bonus} XP de bonificación.`,'good')
      }
      const tone=score>=80?['🏆','Excelente base','Tus respuestas muestran una comprensión sólida.']:score>=60?['🛩️','Buen avance','La ruta sigue abierta y el repaso hará el resto.']:['🧰','Conviene reforzar','Completaste la lección, pero varios conceptos merecen otra pasada.'];
      const next=lessons[l.id+1];
      $('#lessonBody').innerHTML=`<div class="lesson-result"><div class="result-icon">${tone[0]}</div><h2>${tone[1]}</h2><p style="color:var(--muted)">${tone[2]}</p><div class="score">${score}%</div><div class="result-stats"><div class="result-stat"><strong>${lessonSession.correct}/${l.questions.length}</strong><small>correctas</small></div><div class="result-stat"><strong>${l.xp} XP</strong><small>disponibles</small></div><div class="result-stat"><strong>${getDueRefs().length}</strong><small>repasos pendientes</small></div></div><div class="notice">La puntuación guarda tu mejor resultado. Las preguntas falladas vuelven al centro de repaso para que el olvido no administre el plan de estudios.</div></div>`;
      $('#lessonFoot').innerHTML=`<button class="btn btn-soft" id="resultNotes">Guardar notas</button><span style="flex:1"></span><button class="btn btn-ghost" id="retryLesson">Repetir</button>${next?'<button class="btn btn-primary" id="nextLesson">Siguiente lección →</button>':'<button class="btn btn-primary" id="finishRoute">Práctica integrada →</button>'}`;
      $('#resultNotes').onclick=openLessonNotes;$('#retryLesson').onclick=()=>openLesson(l.id);const n=$('#nextLesson');if(n)n.onclick=()=>openLesson(next.id);const f=$('#finishRoute');if(f)f.onclick=()=>{closeModal('lessonModal');startPractice('mixed')};
    }
    function openLessonNotes(){
      const l=activeLesson;$('#simpleTitle').textContent=`Notas: ${l.title}`;$('#simpleBody').innerHTML=`<div class="field"><label>Ideas, dudas y conexiones personales</label><textarea id="lessonNoteText" placeholder="Ej.: revisar diferencia entre rumbo y derrota...">${esc(state.lessonNotes[l.id]||'')}</textarea></div><p style="color:var(--muted);font-size:12px">Estas notas quedan guardadas solamente en este navegador y se incluyen al exportar tus datos.</p>`;$('#simpleFoot').innerHTML='<button class="btn btn-ghost" data-close="simpleModal">Cancelar</button><button class="btn btn-primary" id="saveLessonNote">Guardar nota</button>';bindCloseButtons();openModal('simpleModal');$('#saveLessonNote').onclick=()=>{state.lessonNotes[l.id]=$('#lessonNoteText').value.trim();saveState();closeModal('simpleModal');toast('Nota guardada.','good')}
    }
    function shuffle(arr){const a=[...arr];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
    function startPractice(mode='mixed'){
      let refs=[];if(mode==='due')refs=getDueRefs();else if(mode==='weak')refs=weakestRefs();else refs=shuffle(getAllRefs(mode!=='all')).slice(0,10);
      if(!refs.length){toast('No hay preguntas pendientes. La memoria, por una vez, está colaborando.');return}
      refs=shuffle(refs).slice(0,10);currentPractice={mode,refs,index:0,correct:0,choices:{},finished:false};
      const labels={due:'Repaso pendiente',weak:'Temas débiles',mixed:'Práctica mixta',all:'Práctica libre'};$('#practiceTitle').textContent=labels[mode]||'Práctica';renderPractice();openModal('practiceModal')
    }
    function renderPractice(){
      const p=currentPractice;if(p.index>=p.refs.length){renderPracticeResult();return}
      const ref=p.refs[p.index],l=lessons[ref.lessonId],q=l.questions[ref.qIndex],answered=Object.prototype.hasOwnProperty.call(p.choices,p.index),choice=p.choices[p.index],pct=Math.round(p.index/p.refs.length*100),seen=new Set();
      $('#practiceBody').innerHTML=`<div class="lesson-progress-head"><div><h2>${esc(l.area)}</h2><p class="sub">Pregunta ${p.index+1} de ${p.refs.length} · ${esc(l.title)}</p><div class="progress"><span style="width:${pct}%"></span></div></div><span class="tag">↻ repaso</span></div><div class="quiz-box"><h3>${richText(q.q,{expandFirst:true,seen})}</h3><div class="options">${q.o.map((o,i)=>`<button class="option ${answered?(i===q.a?'correct':choice===i?'wrong':''):''}" data-practice-answer="${i}" ${answered?'disabled':''}>${String.fromCharCode(65+i)}. ${richText(o,{expandFirst:true,seen})}</button>`).join('')}</div><div class="feedback ${answered?'show '+(choice===q.a?'correct':'wrong'):''}" id="practiceFeedback">${answered?`<b>${choice===q.a?'Correcto.':'No exactamente.'}</b> ${richText(q.e)}`:''}</div></div>`;
      $('#practiceFoot').innerHTML=`<span style="color:var(--muted);font-size:13px;margin-right:auto">${p.correct} correctas hasta ahora</span><button class="btn btn-primary" id="practiceNext" ${answered?'':'disabled'}>${p.index===p.refs.length-1?'Ver resultado':'Siguiente'} →</button>`;
      $$('[data-practice-answer]').forEach(b=>b.onclick=()=>answerPractice(Number(b.dataset.practiceAnswer)));$('#practiceNext').onclick=()=>{p.index++;renderPractice()};
    }
    function answerPractice(choice){
      const p=currentPractice;if(Object.prototype.hasOwnProperty.call(p.choices,p.index))return;const ref=p.refs[p.index],q=lessons[ref.lessonId].questions[ref.qIndex],correct=choice===q.a;p.choices[p.index]=choice;if(correct)p.correct++;
      recordAnswer(ref.lessonId,ref.qIndex,correct,true);$$('[data-practice-answer]').forEach(b=>{const i=Number(b.dataset.practiceAnswer);b.disabled=true;if(i===q.a)b.classList.add('correct');else if(i===choice)b.classList.add('wrong')});const fb=$('#practiceFeedback');fb.className=`feedback show ${correct?'correct':'wrong'}`;fb.innerHTML=`<b>${correct?'Correcto.':'No exactamente.'}</b> ${richText(q.e)}`;$('#practiceNext').disabled=false;
    }
    function renderPracticeResult(){
      const p=currentPractice,score=Math.round(p.correct/p.refs.length*100);if(!p.finished){p.finished=true;addActivity('↻','Sesión de repaso',`${p.correct}/${p.refs.length} correctas · ${score}%`);saveState();renderAll()}
      $('#practiceBody').innerHTML=`<div class="lesson-result"><div class="result-icon">${score>=80?'🎯':score>=60?'🧭':'🧰'}</div><h2>Sesión completada</h2><p style="color:var(--muted)">${score>=80?'Buena retención. El espaciamiento seguirá aumentando.':score>=60?'Hay base y algunos puntos para revisar.':'El sistema ya sabe qué devolverte más pronto.'}</p><div class="score">${score}%</div><div class="result-stats"><div class="result-stat"><strong>${p.correct}</strong><small>correctas</small></div><div class="result-stat"><strong>${p.refs.length-p.correct}</strong><small>a reforzar</small></div><div class="result-stat"><strong>${getDueRefs().length}</strong><small>pendientes ahora</small></div></div></div>`;
      $('#practiceFoot').innerHTML='<button class="btn btn-ghost" id="closePractice">Cerrar</button><button class="btn btn-primary" id="practiceAgain">Otra sesión</button>';$('#closePractice').onclick=()=>closeModal('practiceModal');$('#practiceAgain').onclick=()=>startPractice(p.mode);
    }
    function bindCloseButtons(){$$('[data-close]').forEach(b=>b.onclick=()=>closeModal(b.dataset.close))}
    function renderAll(){renderTop();renderHome();renderPath();renderReview();renderGlossary();renderFund();renderProfile()}
    function init(){
      applyTheme();
      if(!state.onboarded){$('#onboarding').classList.remove('hidden')}else $('#onboarding').classList.add('hidden');
      $$('.nav-btn').forEach(b=>b.onclick=()=>switchView(b.dataset.view));
      $$('[data-go]').forEach(b=>b.onclick=()=>switchView(b.dataset.go));
      $('#themeBtn').onclick=()=>{state.theme=state.theme==='dark'?'light':'dark';saveState();applyTheme()};
      $('#menuBtn').onclick=()=>{$('#sidebar').classList.toggle('open');$('#mobileShade').classList.toggle('open')};
      $('#mobileShade').onclick=()=>{$('#sidebar').classList.remove('open');$('#mobileShade').classList.remove('open')};
      bindCloseButtons();
      $$('.modal-backdrop').forEach(m=>m.addEventListener('click',e=>{if(e.target===m)closeModal(m.id)}));
      document.addEventListener('keydown',e=>{if(e.key==='Escape'){const m=$('.modal-backdrop.open');if(m)closeModal(m.id)}const term=e.target.closest?.('[data-term-help]');if(term&&(e.key==='Enter'||e.key===' ')){e.preventDefault();openTermHelp(term.dataset.termHelp)}});
      document.addEventListener('click',e=>{const term=e.target.closest('[data-term-help],[data-term-open]');if(!term)return;e.preventDefault();e.stopPropagation();openTermHelp(term.dataset.termHelp||term.dataset.termOpen)});
      $$('.goal').forEach(g=>g.onclick=()=>{$$('.goal').forEach(x=>x.classList.remove('selected'));g.classList.add('selected')});
      $('#startApp').onclick=()=>{const name=$('#onboardName').value.trim();if(!name){toast('Ingresá un nombre para continuar.','bad');return}state.name=name;state.goal=$('.goal.selected').dataset.goal;state.weeklyGoal=Number($('#onboardWeekly').value);state.onboarded=true;state.createdAt=new Date().toISOString();saveState();$('#onboarding').classList.add('hidden');renderAll();toast('Ruta creada. Empecemos desde tierra.','good')};
      $('#quickPractice').onclick=()=>startPractice('mixed');$('#weakPractice').onclick=()=>startPractice('weak');$('#duePractice').onclick=()=>startPractice('due');$('#duePractice2').onclick=()=>startPractice('due');$('#allPractice').onclick=()=>startPractice('all');
      $('#glossarySearch').addEventListener('input',renderGlossary);$('#glossaryCategory').addEventListener('change',renderGlossary);$('#showFavs').onclick=()=>{showFavoritesOnly=!showFavoritesOnly;renderGlossary()};$('#showAcronyms').onclick=()=>{showAcronymsOnly=!showAcronymsOnly;renderGlossary()};
      $('#addFundBtn').onclick=openFundEntry;
      $('#saveFundSettings').onclick=()=>{const target=Number($('#fundTargetInput').value),monthly=Number($('#fundMonthly').value),initial=Number($('#fundInitial').value);if(!target||target<=0||monthly<0||initial<0){toast('Revisá los importes del objetivo.','bad');return}state.fund.currency=$('#fundCurrency').value;state.fund.target=target;state.fund.monthly=monthly;state.fund.initial=initial;saveState();renderFund();toast('Objetivo financiero guardado.','good')};
      $('#editProfile').onclick=editProfileModal;$('#exportData').onclick=exportState;$('#importData').onchange=e=>{const f=e.target.files[0];if(f)importStateFile(f);e.target.value=''};
      $('#resetData').onclick=()=>{if(confirm('¿Borrar todo el progreso, notas, fondo y configuración? Esta acción no se puede deshacer.')){localStorage.removeItem(STORAGE_KEY);state=defaultState();applyTheme();renderAll();$('#onboarding').classList.remove('hidden');toast('Progreso reiniciado. La pista vuelve a estar vacía.')}};
      renderAll();
    }
    init();
