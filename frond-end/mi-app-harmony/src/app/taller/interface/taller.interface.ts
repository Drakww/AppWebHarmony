export interface Taller {
  id: number;
  nombre: string;
  descripcion: string;
  nivel: string;
  precio: string;
}

export interface TallerRequest {
  nombre: string;
  descripcion: string;
  nivel: string;
  precio: string;
}


export interface TallerResponse {
  id: number;
  nombre: string;
  descripcion: string;
  nivel: string;
  precio: string;
}

