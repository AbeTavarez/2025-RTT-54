interface ProductCardProps {
  name: string;
  price: number;
  description: string;
  status: boolean;
  image: string;
}

function ProductCard({ name, price, description, status, image }: ProductCardProps) {
//   const { name, price, description, status, image } = props;
  return (
    <div>
      <img src={image} alt="product image" width={500} />
      <div>Name: {name}</div>
      <div>Price: ${price}</div>
      <div>Description: {description}</div>
      <div>Status: {status ? "In Stock" : "Out of Stock"}</div>
    </div>
  );
}

export default ProductCard;

// function ProductCard(props: ProductCardProps) {
//   return (
//     <div>
//       <img src={props.image} alt="product image" width={500}/>
//       <div>Name: {props.name}</div>
//       <div>Price: ${props.price}</div>
//       <div>Description: {props.description}</div>
//       <div>Status: {props.status ? "In Stock" : "Out of Stock"}</div>
//     </div>
//   );
// }
