import axios from "axios";

function getData() {
  axios
    .get("https://dummyjson.com/products")
    .then((res) => console.log(res.data.products))
    .catch((err) => console.log(err));
}

export default getData;
