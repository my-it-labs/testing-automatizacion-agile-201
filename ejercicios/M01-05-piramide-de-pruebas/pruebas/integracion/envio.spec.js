// El contrato de la API: lo que la página espera recibir de /api/envio.
import { test, expect } from '@playwright/test';

test('API: responde 200 con importe, zona y coste', async ({ request }) => {
  const respuesta = await request.get('/api/envio?importe=30&zona=peninsula');
  expect(respuesta.status()).toBe(200);
  expect(await respuesta.json()).toEqual({ importe: 30, zona: 'peninsula', coste: 4.95 });
});

test('API: una zona desconocida responde 400 con el motivo', async ({ request }) => {
  const respuesta = await request.get('/api/envio?importe=30&zona=andorra');
  expect(respuesta.status()).toBe(400);
  expect(await respuesta.json()).toEqual({ error: 'Zona desconocida: andorra' });
});
