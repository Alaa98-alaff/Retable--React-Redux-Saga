const url = "https://api-test.retable.io/view/public/YcjCO56YzCclr3Cn";

const fetchProjData = async () => {
  const response = await fetch(url)
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });

  return response?.data;
};

export default fetchProjData;
