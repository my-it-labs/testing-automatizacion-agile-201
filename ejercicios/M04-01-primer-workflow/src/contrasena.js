// Reglas de una contraseña válida: al menos 8 caracteres, una letra y un número.
export const LONGITUD_MINIMA = 6;

export function esContrasenaValida(texto) {
  if (typeof texto !== 'string') return false;
  return texto.length >= LONGITUD_MINIMA && /[a-zA-Z]/.test(texto) && /\d/.test(texto);
}
