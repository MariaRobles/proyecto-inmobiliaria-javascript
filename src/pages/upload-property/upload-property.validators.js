import {Validators, createFormValidation } from '@lemoncode/fonk'; 
import { isNumber } from '@lemoncode/fonk-is-number-validator';
import { isUrl } from '@lemoncode/fonk-is-url-validator';
import { arrayRequired } from '@lemoncode/fonk-array-required-validator';


const validationSchema =  {
    field : {
        title: [ 
            {
            validator: Validators.required,
            message: "Campo requerido",
            } 
        ],
        email: [
            {
            validator: Validators.required, 
            message: 'Campo requerido',
            },
            {
            validator: Validators.email, 
            message: 'Email no válido',
            },
        ],
        phone: [ 
            {
            validator: Validators.required, 
            message: 'Campo requerido',
            },
            {
            validator: isNumber.validator, 
            message: 'Campo no válido, debe ser un número',
            },
        ],
        price: [ 
            {
            validator: Validators.required, 
            message: 'Campo requerido',
            },
            {
            validator: isNumber.validator, 
            message: 'Campo no válido, debe ser un número',
            },
        ],
        saleTypes: [
            {
            validator: arrayRequired.validator,
            message: "¿Que tipo de transacción quieres?"
            },
        ], 
        address: [ 
            {
            validator: Validators.required,
            message: "Campo requerido",
            }  
        ],
        city:  [ 
            {
            validator: Validators.required,
            message: "Campo requerido",
            }  
        ],
        province:  [ 
            {
            validator: Validators.required,
            message: "Campo requerido",
            }  
        ],
        squareMeter: [ 
            {
            validator: Validators.required, 
            message: 'Campo requerido',
            },
            {
            validator: isNumber.validator, 
            message: 'Campo no válido, debe ser un número',
            },
        ],
        rooms: [ 
            {
            validator: Validators.required, 
            message: 'Campo requerido',
            },
            {
            validator: isNumber.validator, 
            message: 'Campo no válido, debe ser un número',
            },
        ],
        bathrooms:  [ 
            {
            validator: Validators.required, 
            message: 'Campo requerido',
            },
            {
            validator: isNumber.validator, 
            message: 'Campo no válido, debe ser un número',
            },
        ],
        locationUrl: [
            {
                validator: Validators.required, 
                message: 'Campo requerido',
                },
            {
              validator: isUrl.validator,
              message: 'Url no válida',
            },
          ],
        mainFeatures: [
            {
            validator: arrayRequired.validator,
            message: "Debes incluir una característica mínimo"
            },
        ],    
        
    },
};

export const formValidation = createFormValidation(validationSchema);