import Api from './services/Api';

export const getUserInfo = async (username) => {
  try {
    const response = await Api.get(`users/${username}`);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};
