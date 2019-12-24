function sendForm(e) {
  e.preventDefault();
  const input = document.getElementsByTagName("input")[0];
  console.log(input.value);
  axios.post("/add-product", { product: input.value });
}
