type Service = {
  id: string | number
  code: string
  name: string,
  type: "Luces" | "Sonido" | "Video" | "Estructura" | "Pantallas" | "Cableado" | "Cámaras" | "Micrófonos" | "Consolas" | "Proyectores" | "Computadoras" | "Impresoras" | "Software" | "Otros",
  cost: number | string,
  stock: number,
  description: string,
  image: string,
}

export const services: Service[] = [
  {
    id: "1",
    code: "LUC001",
    name: "Luces LED",
    type: "Luces",
    cost: 100,
    stock: 50,
    description: "Luces LED de alta intensidad, ideales para cualquier evento.",
    image: "https://ui.shadcn.com/placeholder.svg",
  },
  {
    id: "2",
    code: "SON002",
    name: "Sistema de Sonido Profesional",
    type: "Sonido",
    cost: 500,
    stock: 20,
    description: "Sistema de sonido de alta calidad para eventos grandes.",
    image: "https://ui.shadcn.com/placeholder.svg",
  },
  {
    id: "3",
    code: "VID003",
    name: "Proyector 4K",
    type: "Video",
    cost: 200,
    stock: 15,
    description: "Proyector 4K para presentaciones y proyecciones de video.",
    image: "https://ui.shadcn.com/placeholder.svg",
  },
  {
    id: "4",
    code: "EST004",
    name: "Estructura de Escenario",
    type: "Estructura",
    cost: 100,
    stock: 5,
    description: "Estructura de escenario resistente y fácil de montar.",
    image: "https://ui.shadcn.com/placeholder.svg",
  },
  {
    id: "5",
    code: "PAN005",
    name: "Pantalla LED 50 pulgadas",
    type: "Pantallas",
    cost: 300,
    stock: 25,
    description: "Pantalla LED de 50 pulgadas para visualización de contenido.",
    image: "https://ui.shadcn.com/placeholder.svg",
  },
  {
    id: "6",
    code: "CAB006",
    name: "Cable HDMI 2 metros",
    type: "Cableado",
    cost: 10,
    stock: 10,
    description: "Cable HDMI de 2 metros para conexión de dispositivos de video.",
    image: "https://ui.shadcn.com/placeholder.svg",
  },
  {
    id: "7",
    code: "CAM007",
    name: "Cámara Profesional 4K",
    type: "Cámaras",
    cost: 70,
    stock: 10,
    description: "Cámara profesional 4K para grabación y transmisión de eventos.",
    image: "https://ui.shadcn.com/placeholder.svg",
  },
  {
    id: "8",
    code: "MIC008",
    name: "Micrófono Inalámbrico",
    type: "Micrófonos",
    cost: 15,
    stock: 30,
    description: "Micrófono inalámbrico de alta calidad para presentaciones y discursos.",
    image: "https://ui.shadcn.com/placeholder.svg",
  },
  {
    id: "9",
    code: "CON009",
    name: "Consola de Audio Profesional",
    type: "Consolas",
    cost: 10,
    stock: 5,
    description: "Consola de audio profesional para mezcla y edición de sonido.",
    image: "https://ui.shadcn.com/placeholder.svg",
  },
  {
    id: "10",
    code: "PRO010",
    name: "Proyector de Video Mapping",
    type: "Proyectores",
    cost: 24,
    stock: 5,
    description: "Proyector de video mapping para proyecciones en superficies irregulares.",
    image: "https://ui.shadcn.com/placeholder.svg",
  },
  {
    id: "11",
    code: "COM011",
    name: "Computadora Portátil",
    type: "Computadoras",
    cost: 800,
    stock: 10,
    description: "Computadora portátil de alta gama para presentaciones y diseño gráfico.",
    image: "https://ui.shadcn.com/placeholder.svg",
  },
  {
    id: "12",
    code: "IMP012",
    name: "Impresora Multifuncional",
    type: "Impresoras",
    cost: 300,
    stock: 15,
    description: "Impresora multifuncional para impresión y escaneo de documentos.",
    image: "https://ui.shadcn.com/placeholder.svg",
  },
  {
    id: "13",
    code: "SOF013",
    name: "Software de Edición de Video",
    type: "Software",
    cost: 200,
    stock: 50,
    description: "Software de edición de video profesional para postproducción.",
    image: "https://ui.shadcn.com/placeholder.svg",
  },
  {
    id: "14",
    code: "OTR014",
    name: "Otros Accesorios",
    type: "Otros",
    cost: 50,
    stock: 100,
    description: "Otros accesorios y dispositivos para eventos y presentaciones.",
    image: "https://ui.shadcn.com/placeholder.svg",
  },
]
