import { RESET, RETRIEVE_USER } from '../actions/types';

const INITIAL_STATE = {
  id: '',
  last_login: null,
  username: '',
  type: '',
  employee: {
    id: '',
    identification: {
      num_emp: 0,
      apell_pat: '',
      apell_mat: '',
      nombre: '',
      curp: '',
      rfc_completo: '',
      afil_imss: '',
      fecha_nac: '',
      sexo: '',
      estado_civil: '',
      peso: 0,
      estatura: 0,
      nacionalidad: '',
      pais_nac: '',
      localidad_nac: '',
      licencia: '',
      vence_licencia: '',
      pasaporte: '',
      vence_pasaporte: '',
    },
    contact: {
      telefono: 0,
      telefono_mex: 0,
      telefono_cel: 0,
      email_1: '',
      email_2: '',
    },
    address: {
      domicilio: '',
      numero_ext: '',
      numero_int: '',
      colonia: '',
      poblacion: '',
      estado: '',
      cod_pos: 0,
    },
    finance: {
      banco: '',
      cuenta: '',
      cuenta_clave: '',
      lugar_pago: '',
      cuenta_vales: '',
      cta_despensa: '',
      cta_restaurante: '',
      cta_gas: '',
      eden_despensa: '',
      eden_restaurante: '',
      eden_gas: '',
    },
    promotion: {
      num_cia: 0,
      area: {
        id: '',
        clave: '',
        descripcion: '',
      },
      centro: {
        id: '',
        clave: '',
        descripcion: '',
      },
      linea: {
        id: '',
        clave: '',
        descripcion: '',
      },
      zona: {
        id: '',
        clave: '',
        descripcion: '',
      },
      fecha_ingreso: '',
      fecha_antiguedad: '',
      fecha_antig_1: '',
      fecha_baja: '',
      fecha_contrato: '',
      fecha_terminacion: '',
      declaracion_imp: '',
      sueldo: 0,
      importe: '',
      puesto: '',
      puesto_cliente: '',
      status: '',
    },
    social_security: {
      cred_ifvt: '',
      tipo_cred_ifvt: '',
      por_cred_ifvt: 0,
      sal_int_eym: 0,
    },
    benefits: {
      cod_id_06: '',
      cod_id_07: '',
      cod_id_08: '',
    },
  },
  company: {

  },
  user_error: null,
};

export default (state = INITIAL_STATE, { type, payload } = {}) => {
  switch (type) {
    case RETRIEVE_USER:
      return {
        ...state,
        type: payload.type,
        ...payload,
      };

    case RESET:
      return INITIAL_STATE;

    default:
      return state;
  }
};
