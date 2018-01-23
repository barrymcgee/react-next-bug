// Layout
import Layout from '../layout/base.js';
// Components
import ProductCard from '../components/ProductCard.js';

const products = [
  {
    id: 1,
    title: 'Murphy',
    orientation: 'landscape',
    img: {
      url: 'http://placehold.it/350x150',
      alt: 'Murph'
    },
    desc: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 9.99
  },
  {
    id: 2,
    title: 'Gilly',
    orientation: 'landscape',
    img: {
      url: 'http://placehold.it/350x150',
      alt: 'Murph'
    },
    price: 9.99
  },
  {
    id: 3,
    title: 'Bazzle',
    orientation: 'landscape',
    img: {
      url: 'http://placehold.it/350x150',
      alt: 'Bazzle'
    },
    desc: 'Ut enim ad minim veniam, quis nostrud exercitation.',
    price: 9.99
  },
  {
    id: 4,
    title: 'Bracken Hill',
    orientation: 'landscape',
    img: {
      url: 'http://placehold.it/350x150',
      alt: 'Bazzle'
    },
    desc: 'Ut enim ad minim veniam, quis nostrud exercitation.',
    price: 9.99
  }
];

const Index = () => (
  <Layout>
    <ul className="product-list">
      {products.map((product, i) => (
        <li key={product.id}>
          <ProductCard item={product} />
        </li>
      ))}
    </ul>
    <style jsx>{`
      .product-list {
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-row-gap: 1rem;
        grid-column-gap: 1rem;
        list-style: none;
      }
      img {
        width: 100%;
      }
    `}</style>
  </Layout>
);

export default Index;
