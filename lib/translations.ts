export type Locale = "en" | "es"

export const translations = {
  en: {
    nav: {
      services: "Services",
      about: "About",
      gallery: "Gallery",
      testimonials: "Testimonials",
      contact: "Contact",
      bookNow: "Book Now",
    },
    hero: {
      subtitle: "Master Barber",
      titleLine1: "Precision Craft,",
      titleLine2: "Refined Style",
      description:
        "A personal grooming experience tailored to the modern gentleman. Every cut is a craft, every visit is an experience.",
      viewServices: "View Services",
      bookAppointment: "Book Appointment",
    },
    services: {
      subtitle: "Services",
      title: "Crafted for the Modern Gentleman",
      description:
        "Every service is performed with meticulous attention to detail and the finest grooming products.",
      items: [
        {
          title: "Classic Haircut",
          description:
            "A precision haircut tailored to your face shape and personal style. Includes consultation, wash, cut, and styling.",
          price: "$45",
          duration: "45 min",
        },
        {
          title: "Fade & Taper",
          description:
            "Expert skin fades, low fades, and tapers executed with surgical precision. Clean lines guaranteed.",
          price: "$50",
          duration: "50 min",
        },
        {
          title: "Hot Towel Shave",
          description:
            "A luxurious straight razor shave with hot towels, premium lather, and aftershave balm for the smoothest finish.",
          price: "$40",
          duration: "40 min",
        },
        {
          title: "Beard Sculpting",
          description:
            "Detailed beard shaping and trimming with precision clippers and scissors. Includes beard oil treatment.",
          price: "$35",
          duration: "30 min",
        },
        {
          title: "Haircut & Beard Combo",
          description:
            "The complete package. Full precision haircut combined with a detailed beard sculpt and hot towel finish.",
          price: "$75",
          duration: "75 min",
        },
        {
          title: "The Executive",
          description:
            "Our premium experience: haircut, hot towel shave, beard treatment, scalp massage, and product styling.",
          price: "$110",
          duration: "90 min",
        },
      ],
    },
    about: {
      subtitle: "About",
      title: "Meet Marcus Cole",
      paragraphs: [
        "With over 12 years behind the chair, I have dedicated my craft to the art of men\u2019s grooming. What started as an apprenticeship in a neighborhood shop evolved into a passion for precision and personal style.",
        "I believe every haircut is a collaboration. I take the time to understand your lifestyle, face shape, and preferences before a single blade touches your hair. My clients don\u2019t just leave looking sharp \u2014 they leave feeling confident.",
        "Whether it\u2019s a classic taper, a modern fade, or a luxurious hot towel shave, I bring the same level of care and craftsmanship to every appointment.",
      ],
      stats: [
        { value: "12+", label: "Years Experience" },
        { value: "5K+", label: "Happy Clients" },
        { value: "100%", label: "Dedication" },
      ],
    },
    gallery: {
      subtitle: "Gallery",
      title: "The Craft in Action",
      description:
        "A glimpse into the precision, artistry, and atmosphere that defines every visit.",
    },
    testimonials: {
      subtitle: "Testimonials",
      title: "What Clients Say",
      items: [
        {
          name: "James T.",
          text: "Marcus is the only barber I trust. Every cut is consistent, clean, and exactly what I ask for. The attention to detail is unmatched.",
        },
        {
          name: "David R.",
          text: "The Executive package is worth every penny. Hot towel shave, beard treatment, scalp massage \u2014 I walk out feeling like a new man every time.",
        },
        {
          name: "Michael S.",
          text: "I\u2019ve been going to Marcus for three years now. He takes the time to understand what you want and delivers every single time. Highly recommend.",
        },
      ],
    },
    contact: {
      subtitle: "Contact",
      title: "Book Your Appointment",
      description:
        "Ready for a premium grooming experience? Reach out to schedule your next visit.",
      location: "Location",
      phone: "Phone",
      hours: "Hours",
      social: "Social",
      hoursDetail: [
        "Tuesday \u2013 Friday: 9:00 AM \u2013 7:00 PM",
        "Saturday: 8:00 AM \u2013 5:00 PM",
        "Sunday & Monday: Closed",
      ],
      form: {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        service: "Service",
        message: "Message",
        selectService: "Select a service",
        classicHaircut: "Classic Haircut",
        fadeTaper: "Fade & Taper",
        hotTowelShave: "Hot Towel Shave",
        beardSculpting: "Beard Sculpting",
        haircutBeardCombo: "Haircut & Beard Combo",
        theExecutive: "The Executive",
        messagePlaceholder: "Preferred date/time or any details...",
        submit: "Send Request",
      },
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  es: {
    nav: {
      services: "Servicios",
      about: "Acerca de",
      gallery: "Galeria",
      testimonials: "Testimonios",
      contact: "Contacto",
      bookNow: "Reservar",
    },
    hero: {
      subtitle: "Barbero Maestro",
      titleLine1: "Corte Preciso,",
      titleLine2: "Estilo Refinado",
      description:
        "Una experiencia de cuidado personal pensada para el caballero moderno. Cada corte es un arte, cada visita es una experiencia.",
      viewServices: "Ver Servicios",
      bookAppointment: "Reservar Cita",
    },
    services: {
      subtitle: "Servicios",
      title: "Creados para el Caballero Moderno",
      description:
        "Cada servicio se realiza con una meticulosa atencion al detalle y los mejores productos de cuidado personal.",
      items: [
        {
          title: "Corte Clasico",
          description:
            "Un corte de precision adaptado a la forma de tu rostro y estilo personal. Incluye consulta, lavado, corte y peinado.",
          price: "$45",
          duration: "45 min",
        },
        {
          title: "Degradado",
          description:
            "Degradados al ras, bajos y medios ejecutados con precision quirurgica. Lineas limpias garantizadas.",
          price: "$50",
          duration: "50 min",
        },
        {
          title: "Afeitado con Toalla Caliente",
          description:
            "Un lujoso afeitado con navaja, toallas calientes, espuma premium y balsamo para el acabado mas suave.",
          price: "$40",
          duration: "40 min",
        },
        {
          title: "Esculpido de Barba",
          description:
            "Perfilado y recorte de barba detallado con maquinas y tijeras de precision. Incluye tratamiento con aceite para barba.",
          price: "$35",
          duration: "30 min",
        },
        {
          title: "Corte + Barba",
          description:
            "El paquete completo. Corte de precision combinado con esculpido de barba detallado y acabado con toalla caliente.",
          price: "$75",
          duration: "75 min",
        },
        {
          title: "El Ejecutivo",
          description:
            "Nuestra experiencia premium: corte, afeitado con toalla caliente, tratamiento de barba, masaje capilar y peinado con producto.",
          price: "$110",
          duration: "90 min",
        },
      ],
    },
    about: {
      subtitle: "Acerca de",
      title: "Conoce a Marcus Cole",
      paragraphs: [
        "Con mas de 12 anos detras de la silla, he dedicado mi oficio al arte del cuidado masculino. Lo que comenzo como un aprendizaje en un local del barrio se convirtio en una pasion por la precision y el estilo personal.",
        "Creo que cada corte es una colaboracion. Me tomo el tiempo de entender tu estilo de vida, la forma de tu rostro y tus preferencias antes de que una sola cuchilla toque tu cabello. Mis clientes no solo se van con buen aspecto, sino sintiendose seguros de si mismos.",
        "Ya sea un degradado clasico, un fade moderno o un lujoso afeitado con toalla caliente, aporto el mismo nivel de cuidado y maestria en cada cita.",
      ],
      stats: [
        { value: "12+", label: "Anos de Experiencia" },
        { value: "5K+", label: "Clientes Felices" },
        { value: "100%", label: "Dedicacion" },
      ],
    },
    gallery: {
      subtitle: "Galeria",
      title: "El Arte en Accion",
      description:
        "Una mirada a la precision, el arte y el ambiente que define cada visita.",
    },
    testimonials: {
      subtitle: "Testimonios",
      title: "Lo que Dicen los Clientes",
      items: [
        {
          name: "James T.",
          text: "Marcus es el unico barbero en quien confio. Cada corte es consistente, limpio y exactamente lo que pido. La atencion al detalle no tiene igual.",
        },
        {
          name: "David R.",
          text: "El paquete Ejecutivo vale cada centavo. Afeitado con toalla caliente, tratamiento de barba, masaje capilar, salgo sintiendome como un hombre nuevo cada vez.",
        },
        {
          name: "Michael S.",
          text: "Llevo tres anos yendo con Marcus. Se toma el tiempo de entender lo que quieres y cumple en cada ocasion. Totalmente recomendado.",
        },
      ],
    },
    contact: {
      subtitle: "Contacto",
      title: "Reserva tu Cita",
      description:
        "Listo para una experiencia de cuidado premium? Contactanos para agendar tu proxima visita.",
      location: "Ubicacion",
      phone: "Telefono",
      hours: "Horario",
      social: "Redes Sociales",
      hoursDetail: [
        "Martes \u2013 Viernes: 9:00 AM \u2013 7:00 PM",
        "Sabado: 8:00 AM \u2013 5:00 PM",
        "Domingo y Lunes: Cerrado",
      ],
      form: {
        firstName: "Nombre",
        lastName: "Apellido",
        email: "Correo",
        service: "Servicio",
        message: "Mensaje",
        selectService: "Selecciona un servicio",
        classicHaircut: "Corte Clasico",
        fadeTaper: "Degradado",
        hotTowelShave: "Afeitado con Toalla Caliente",
        beardSculpting: "Esculpido de Barba",
        haircutBeardCombo: "Corte + Barba",
        theExecutive: "El Ejecutivo",
        messagePlaceholder: "Fecha/hora preferida u otros detalles...",
        submit: "Enviar Solicitud",
      },
    },
    footer: {
      rights: "Todos los derechos reservados.",
    },
  },
} as const

export type Translations = (typeof translations)["en"]
