// dto de creación (sin id)
export interface TallerCreateDto {
  nombre: string;
  descripcion: string;
  nivel: string;
  precio: string;
}

// dto de respuesta (con id)
export interface TallerDto extends TallerCreateDto {
  id: number;
}
