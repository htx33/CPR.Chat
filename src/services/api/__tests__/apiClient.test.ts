import { apiClient } from '../apiClient';
import { server } from '../../../mocks/server';
import { http, HttpResponse } from 'msw';

describe('ApiClient', () => {
  // Integration test with MSW
  describe('get', () => {
    it('should fetch users successfully', async () => {
      const users = await apiClient.get('/api/users');
      expect(users).toHaveLength(2);
      expect(users[0]).toHaveProperty('name', 'John Doe');
    });

    it('should handle network errors', async () => {
      // Override handler to simulate network error
      server.use(
        http.get('/api/users', () => {
          return HttpResponse.error();
        })
      );

      await expect(apiClient.get('/api/users')).rejects.toThrow('Network error occurred');
    });
  });

  // Snapshot test
  describe('post', () => {
    it('should match snapshot for message creation', async () => {
      const message = {
        content: 'Hello, world!',
        recipientId: '123',
      };

      const response = await apiClient.post('/api/messages', message);
      expect(response).toMatchSnapshot();
    });
  });
});
