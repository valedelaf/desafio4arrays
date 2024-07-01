const propiedades_venta = [
    {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: 'Prestige Suburb, CA 45678',
    habitaciones: 4,
    costo: 5.000,
    smoke: false,
    pets: false
    },
    {
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: 'Summit Peaks, CA 23456',
    habitaciones: 2,
    costo: 1.200,    
    smoke: true,
    pets: true
    },
     {
    nombre: ' Penthouse de lujo con terraza panorámica',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: 'Skyview City, CA 876',
    habitaciones: 4,
    costo: 5000,    
    smoke: true,
    pets: true
    },
    {
      nombre: ' Casa Mediterránea con piscina',
      src: 'https://www.decorfacil.com/wp-content/uploads/2017/03/20170308casa-mediterranea-17.jpg',
      descripcion: 'Esta casa con gran estilo tiene un gran patio que incluye pisicina y áreas verdes',
      ubicacion: 'Skyview Town, CA 56789',
      habitaciones: 3,
      costo: 4.500,    
      smoke: false,
      pets: true
      },
      {
        nombre: ' Casa Minimalista',
        src: 'https://inspirahogar.com/wp-content/uploads/2017/05/004-franklin-mountain-house-hazelbaker-rush-1050x700.jpg',
        descripcion: 'Esta casa con estilo minimalista incluye piscina y segundo piso',
        ubicacion: 'Calle Siempreviva, CA 56789',
        habitaciones: 4,
        costo: 5000,    
        smoke: false,
        pets: false
        },
        {
          nombre: ' Casa Alpina',
          src: 'https://casasdecampo.blog/wp-content/uploads/2022/04/casa-alpina-y-sus-interiores-1-1024x1004.jpeg',
          descripcion: 'Esta casa de tamaño pequeño pero con un estilo alpino en medio del bosque',
          ubicacion: 'Rockmountains, CA 56789',
          habitaciones: 2,
          costo: 2000,    
          smoke: false,
          pets: true
          },
          {
            nombre: ' Mansión Lujosa cerca del lago',
            src: 'http://www.prefabricadas10.com/wp-content/uploads/2017/06/casa-modular-espectacular.jpg',
            descripcion: 'Esta mansión lujosa cuenta con todas las comodidades y lujos',
            ubicacion: 'Skyview Town, CA 56789',
            habitaciones: 6,
            costo: 8000,    
            smoke: true,
            pets: true
            }
    
    ]

    const cardv = document.querySelector('#cards-boxv');
    let cardContentv = "";
    for (const venta of propiedades_venta) {

       cardContentv += `
       <div class="col-md-4 mb-4">
       <div class="card">
              <img
                src= "${venta.src}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${venta.nombre}
                </h5>
                <p class="card-text">
                ${venta.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${venta.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${venta.habitaciones}|
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${venta.costo}</p>
                <p class="text-danger">
                  <i class="fas fa-smoking-ban"></i> ${venta.smoke ? 'Permitido fumar' : 'Prohibido fumar'}
                </p>
                <p class="text-success">
                  <i class="fas fa-paw"></i> ${venta.pets ? 'Se permiten mascotas' : 'No se permiten mascotas'}
                </p>
          </div>
          </div>
        </div>
        `;  
    }

    cardv.innerHTML = cardContentv;
