import client from './client';

export const getScheduleList = async () => {
  const response = await client.get('/api/board/counsilEvents');
  return response.data;
};
