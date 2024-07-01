

const propiedades_alquiler = [
        {
        nombre: ' Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        costo: 2.000,
        smoke: false,
        pets: true
        },
        {
        nombre: ' Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        costo: 2.500,    
        smoke: true,
        pets: true
        },
         {
        nombre: ' Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        costo: 2.200,    
        smoke: false,
        pets: false
        },
        {
          nombre: ' Casa de Campo',
          src: 'https://www.tuacasa.com.br/wp-content/uploads/2020/05/casa-de-campo-88.jpg',
          descripcion: 'Esta casa está ubicada en plena zona rural cerca de la naturaleza',
          ubicacion: 'Unknown Road, Anytown, CA 91234',
          habitaciones: 3,
          costo: 3000,
          smoke: false,
          pets: true
          },
          {
            nombre: ' Casa Rústica en la Montaña',
            src: 'https://www.decorfacil.com/wp-content/uploads/2016/03/imagem49-10.jpg',
            descripcion: 'Esta casa rústica está ubicada en el medio del bosque',
            ubicacion: 'Unknown Road, Anytown, 8484',
            habitaciones: 5,
            costo: 3500,
            smoke: false,
            pets: false
            },
            {
              nombre: ' Casa del árbol',
              src: 'https://www.visitacasas.com/wp-content/uploads/2018/01/HemLoft3.jpg',
              descripcion: 'Esta casa está ubicada en un árbol, pequeña para estadía de 1 persona',
              ubicacion: 'Unknown Road, Anytown, CA 91234',
              habitaciones: 1,
              costo: 1500,
              smoke: false,
              pets: false
              },
              {
                nombre: ' Casa arte',
                src: 'https://www.pisos.com/aldia/wp-content/uploads/2019/06/nautilus-house.jpg',
                descripcion: 'Siéntete viviendo en medio de una obra de arte',
                ubicacion: 'Caracola Street, Anytown, CA 91234',
                habitaciones: 2,
                costo: 2000,
                smoke: true,
                pets: true
                },
        ]
    
        const card = document.querySelector("#cards-box");
        let cardContent = "";
        for (const alquiler of propiedades_alquiler) {
    
           cardContent += `
           <div class="col-md-4 mb-4">
           <div class="card">
                  <img
                    src= "${alquiler.src}"
                    class="card-img-top"
                    alt="Imagen del departamento"
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      ${alquiler.nombre}
                    </h5>
                    <p class="card-text">
                    ${alquiler.descripcion}
                    </p>
                    <p>
                      <i class="fas fa-map-marker-alt"></i> ${alquiler.ubicacion}
                    </p>
                    <p>
                      <i class="fas fa-bed"></i> ${alquiler.habitaciones}|
                    </p>
                    <p><i class="fas fa-dollar-sign"></i> ${alquiler.costo}</p>
                    <p class="text-danger">
                      <i class="fas fa-smoking-ban"></i> ${alquiler.smoke ? 'Permitido fumar' : 'Prohibido fumar'}
                    </p>
                    <p class="text-success">
                      <i class="fas fa-paw"></i> ${alquiler.pets ? 'Se permiten mascotas' : 'No se permiten mascotas'}
                    </p>
              </div>
            </div>
            </div>
            `;  
        }
    
        card.innerHTML = cardContent;
    