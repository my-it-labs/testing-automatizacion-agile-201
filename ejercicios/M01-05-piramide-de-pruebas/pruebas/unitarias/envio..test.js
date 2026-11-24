// Las reglas de cálculo, en su nivel: pruebas unitarias de calcularEnvio.
import { describe, it, expect } from 'vitest';
import { calcularEnvio } from '../../src/envio.js';

describe('calcularEnvio', () => {
  it.each([
    { importe: 30, zona: 'peninsula', coste: 4.95 },
    { importe: 59.99, zona: 'peninsula', coste: 4.95 },
    { importe: 60, zona: 'peninsula', coste: 0 },
    { importe: 100, zona: 'baleares', coste: 9.95 },
    { importe: 120, zona: 'baleares', coste: 0 },
    { importe: 30, zona: 'canarias', coste: 14.95 },
    { importe: 500, zona: 'canarias', coste: 14.95 },
  ])('$zona, $importe €: envío $coste €', ({ importe, zona, coste }) => {
    expect(calcularEnvio(importe, zona)).toBe(coste);
  });

  it('un importe negativo es un error', () => {
    expect(() => calcularEnvio(-5, 'peninsula')).toThrow('El importe no puede ser negativo');
  });

  it('una zona desconocida es un error', () => {
    expect(() => calcularEnvio(30, 'andorra')).toThrow('Zona desconocida: andorra');
  });
});
