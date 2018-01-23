import Link from 'next/link';

const ProductCard = (props) => (
  <div className="productCard">
    <img src={props.item.img.url} alt={props.item.img.alt} />
    <h3>
      <Link href={`/product?id=${props.item.id}`} as={`/product/${props.item.id}`} prefetch>
        <a>{props.item.title}</a>
      </Link>
    </h3>
    { props.item.desc ? (
      <p>{props.item.desc}</p>
    ) : null }
    <strong>£{props.item.price}</strong>
    <style jsx>{`
      .productCard {
        background: #fff;
        border: 1px solid #ccc;
        padding: 1rem;
      }

      img {
        width: 100%;
      }
    `}</style>
  </div>
);

export default ProductCard;
