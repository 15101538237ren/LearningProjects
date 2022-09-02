(() => {
  const getCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    if (response.status !== 200) {
      throw new Error("Can't fetch the data");
    }
    const data = await response.json();
    return data;
  };

  getCountries()
    .then((data) => {
      console.log("Data,", data);
      return data;
    })
    .catch((error) => {
      console.log("Error, ", error);
    });
})();
