import client from './client';

export const getScheduleList = async () => {
  const response = await client.get('/api/board/counsilEvents', {
    headers: {
      'Content-Type': `application/json`,
      'ngrok-skip-browser-warning': '69420',
    },
  });
  return response.data;
};
