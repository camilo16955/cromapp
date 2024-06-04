import { Component, OnInit } from '@angular/core';

interface Producto {
  titulo?: string;
  descripcion?: string;
  imagen?: string;
  seleccionado?: boolean;
}

interface GrupoProducto {
  tipo: string;
  productos: Producto[];
}

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.page.html',
  styleUrls: ['./equipos.page.scss'],
})
export class EquiposPage implements OnInit {

  gruposDeProductos: GrupoProducto[] = [
    {
      tipo: 'Equipos para Bajo',
      productos: [
        {
          titulo: 'Cabezal EBS Reidmar 250',
          descripcion: '',
          imagen: 'assets/img/reidmar250.jpg',
          seleccionado: false
        },
        {
          titulo: 'Cabezal Mark Bass Little Mark 250',
          descripcion: '',
          imagen: 'assets/img/littlemark250.jpg',
          seleccionado: false
        },
        {
          titulo: 'Gabinete 4x10 Hartke VX Series',
          descripcion: '',
          imagen: 'assets/img/vx410.jpg',
          seleccionado: false
        },
        {
          titulo: 'Gabinete EBS Classic 2x10',
          descripcion: '',
          imagen: 'assets/img/classic210.jpg',
          seleccionado: false
        }
      ]
    },
    {
      tipo: 'Equipos para Guitarra - Tubos',
      productos: [
        {
          titulo: 'Cabezal Laney Ironheart IRT60H con Footswitch',
          descripcion: '',
          imagen: 'assets/img/ironheartirt60h.jpg',
          seleccionado: false
        },
        {
          titulo: 'Cabezal Blackstar Series One 50 con Footswitch',
          descripcion: '',
          imagen: 'assets/img/seriesone50.jpg',
          seleccionado: false
        }
      ]
    },
    {
      tipo: 'Equipos para Guitarra - Transistores',
      productos: [
        {
          titulo: 'Cabezal Orange Crush 120',
          descripcion: '',
          imagen: 'assets/img/crush120.jpg',
          seleccionado: false
        },
        {
          titulo: 'Cabezal Hiwatt Maxwatt G200R HD',
          descripcion: '',
          imagen: 'assets/img/g200rhd.jpg',
          seleccionado: false
        },
        {
          titulo: 'Gabinete Marshall 4x12',
          descripcion: '',
          imagen: 'assets/img/marshall412.jpg',
          seleccionado: false
        },
        {
          titulo: 'Gabinete Hiwatt 4x12',
          descripcion: '',
          imagen: 'assets/img/hiwatt412.jpg',
          seleccionado: false
        },
        {
          titulo: 'Gabinete Franky Amps 1x12',
          descripcion: '',
          imagen: 'assets/img/frankyamps112.jpg',
          seleccionado: false
        },
        {
          titulo: 'Gabinete Laney LV 2x12',
          descripcion: '',
          imagen: 'assets/img/lv212.jpg',
          seleccionado: false
        }
      ]
    },
    {
      tipo: 'Batería',
      productos: [
        {
          titulo: 'Shellpack Tama Swingstar 12-13-16-22',
          descripcion: 'Incluye 2 atriles de platillos, atril de caja, atril de hihat',
          imagen: 'assets/img/swingstar.jpg',
          seleccionado: false
        },
        {
          titulo: 'Shellpack Dixon Soar 10-12-16-22',
          descripcion: 'Incluye 2 atriles de platillos, atril de caja, atril de hihat',
          imagen: 'assets/img/soar.jpg',
          seleccionado: false
        },
        {
          titulo: 'Set de Platillos',
          descripcion: '2 crash 16" y 18" B20 Silken, ride 20" PST8, hihat 14" Pearl Wild 500, china 16" Zildjian S, splash B20 Arborea Edge 10"',
          imagen: 'assets/img/platillos.jpg',
          seleccionado: false
        }
      ]
    },
    {
      tipo: 'Consolas',
      productos: [
        {
          titulo:'Midas M32',
          descripcion: '',
          imagen: 'assets/img/m32.jpg',
          seleccionado: false
        },
        {
          titulo: 'soundcraft EFX8',
          descripcion: '',
          imagen: 'assets/img/fx8.jpg',
          seleccionado: false
        },
        {
          titulo: 'Mackie 1202 vlz3',
          descripcion: '',
          imagen: 'assets/img/1202vlz3.jpg',
          seleccionado: false
        }
      ]
    },
    {
        
         tipo: 'Microfonos',
         productos: [
    {
      titulo: 'Shure Beta91',
      descripcion: '',
      imagen: 'assets/img/beta91.jpg',
      seleccionado: false
    },
    {
      titulo: 'Shure Beta 52',
      descripcion: '',
      imagen: 'assets/img/beta52.jpg',
      seleccionado: false
    },
    {
      titulo: 'Shure SM57',
      descripcion: '',
      imagen: 'assets/img/sm57.jpg',
      seleccionado: false
    },
    {
      titulo: 'Shure SM58',
      descripcion: '3 unidades',
      imagen: 'assets/img/sm58.jpg',
      seleccionado: false
    },
    {
      titulo: 'Shure pg81',
      descripcion: '2 unidades',
      imagen: 'assets/img/pg81.jpg',
      seleccionado: false
    },
    {
      titulo: 'Sennheiser e604',
      descripcion: '',
      imagen: 'assets/img/e604.jpg',
      seleccionado: false
    },
    {
      titulo: 'Sennheiser e609',
      descripcion: '',
      imagen: 'assets/img/e609.jpg',
      seleccionado: false
    },
    {
      titulo: 'Sennheiser MD421',
      descripcion: '3 unidades',
      imagen: 'assets/img/md421.jpg',
      seleccionado: false
    },
    {
      titulo: 'Behringer C1',
      descripcion: '',
      imagen: 'assets/img/c1.jpg',
      seleccionado: false
    },
    {
      titulo: 'Sontronics Corona',
      descripcion: '',
      imagen: 'assets/img/corona.jpg',
      seleccionado: false
    },
    {
      titulo: 'Sontronics STC3x',
      descripcion: '',
      imagen: 'assets/img/stc3x.jpg',
      seleccionado: false
    },
    {
      titulo: 'Electro Voice Re20',
      descripcion: '',
      imagen: 'assets/img/re20.jpg',
      seleccionado: false
    },
    {
      titulo: 'kit bateria AKG session 1',
      descripcion: '',
      imagen: 'assets/img/session1.jpg',
      seleccionado: false
    }
  ]
},
{
  tipo: 'Grabación',
  productos: [
    {
      titulo: 'MacBook Pro mid 2012 (Logic Pro)',
      descripcion: '',
      imagen: 'assets/img/macbook.jpg',
      seleccionado: false
    },
    {
      titulo: 'Digi 003',
      descripcion: '',
      imagen: 'assets/img/digi003.jpg',
      seleccionado: false
    },
    {
      titulo: 'Behringer ADA8200',
      descripcion: '',
      imagen: 'assets/img/ada8200.jpg',
      seleccionado: false
    }
  ]
},
{
  tipo: 'Estudio Cromañon',
  productos: [
    {
      titulo: 'Jornada completa de grabacion',
      descripcion: '',
      imagen: 'assets/img/estudio.jpg',
      seleccionado: false
    },
    {
      titulo: 'Grabacion por hora',
      descripcion: '',
      imagen: 'assets/img/estudio.jpg',
      seleccionado: false
    },
    {
      titulo: 'Edicion',
      descripcion: '',
      imagen: 'assets/img/estudio.jpg',
      seleccionado: false
    },
    {
      titulo: 'Mezcla',
      descripcion: '',
      imagen: 'assets/img/estudio.jpg',
      seleccionado: false
    },
    {
      titulo: 'Master',
      descripcion: '',
      imagen: 'assets/img/estudio.jpg',
      seleccionado: false
    }
  ]
},
{
  tipo:'Otros servicios',
  productos:[
    {
      titulo: 'Mantenimiento y calibracion de instrumentos',
      descripcion: '',
      imagen: 'assets/img/calib.jpg',
      seleccionado: false
    },
    {
      titulo: 'Produccion de eventos',
      descripcion: '',
      imagen: 'assets/img/prod.jpg',
      seleccionado: false
    }

  ]
}

    
  ];

  constructor() { }

  ngOnInit() { }

  obtenerProductosSeleccionados() {
    return this.gruposDeProductos
      .map(grupo => grupo.productos)
      .reduce((acc, productos) => acc.concat(productos), [])
      .filter(producto => producto.seleccionado);
  }
  confirmarSeleccion() {
    const productosSeleccionados = this.obtenerProductosSeleccionados();
    if (productosSeleccionados.length === 0) {
      alert('Por favor, selecciona al menos un producto.');
      return;
    }
    const listaProductos = productosSeleccionados.map(producto => producto.titulo).join(', ');
    const mensaje = `¡Hola! Estoy interesado en los siguientes productos: ${listaProductos}. ¿Podrías proporcionarme más información sobre ellos? Gracias.`;
    const whatsappUrl = `https://wa.me/56999914428?text=${encodeURIComponent(mensaje)}`;    window.open(whatsappUrl, '_blank');
  }
  
}
