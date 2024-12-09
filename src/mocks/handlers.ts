import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/users', () => {
    return HttpResponse.json([
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
    ]);
  }),

  http.post('/api/messages', async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json({ id: 1, ...body });
  }),
];
