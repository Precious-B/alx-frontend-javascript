export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, fail) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      fail(new Error('The fake API is not working currently'));
    }
  });
}
