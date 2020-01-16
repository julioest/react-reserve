import { Card } from "semantic-ui-react";

function ProductList({ products }) {
  console.log(products);
  function mapProductsToItems(products) {
    return products.map(product => ({
      header: product.name,
      image: product.mediaUrl,
      color: 'teal',
      fluid: true,
      childKey: product._id,
      href: `/product?_id=${product._id}`
    }));
  }
  return <Card.Group stackable itemsPerRow="3" items={mapProductsToItems(products)} />;
}

export default ProductList;
