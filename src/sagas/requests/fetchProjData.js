const url = "https://api-test.retable.io/view/public/YcjCO56YzCclr3Cn";

const fetchProjData = () => {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
};

export default fetchProjData;
