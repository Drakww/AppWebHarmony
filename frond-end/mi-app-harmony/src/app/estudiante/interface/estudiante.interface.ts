export interface Estudiante {
  id: number;
  nombre: string;
  apellido: string;
  edad: string;
  correo: string;
  telefono: string
}

export interface EstudianteRequest {
  nombre: string;
  apellido: string;
  edad: string;
  correo: string;
  telefono: string
}

export interface EstudianteResponse {
  id: number;
  nombre: string;
  apellido: string;
  edad: string;
  correo: string;
  telefono: string
}

