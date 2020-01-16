import React from 'react';
import axios from 'axios';

function Home({ products }) {
  // React.useEffect(() => {
  //   getProducts();
  // }, []);

  async function getProducts() {
    const url = 'http://localhost:3000/api/products';
    const response = await axios.get(url);
  }

  return <>home</>;
}

Home.getInitialProps = async () => {
  // fetch data on server
  const url = 'http://localhost:3000/api/products';
  const response = await axios.get(url);
  // return response data as an object
  return { products: response.data };
  // note: gets merged with existing props
}

export default Home;
