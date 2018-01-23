import Link from 'next/link';

const Header = () => (
  <header>
    <div className="header__inner">
      <div className="header__logo">
        <a href="/">
          <img width="300" src="/static/logo.png" alt="Irish Art logo"/>
        </a>
      </div>
      <div className="header__links">
        <Link key="" href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/products">
          <a>Products</a>
        </Link>
        |  <a href="#" className="snipcart-checkout">Cart</a>
      </div>
    </div>
    <style jsx>{`
      header {
        background: #104E0B;
        color: white;
        padding: 2rem 1rem;
        width: calc(100vw - 3rem);
      }
      .header__inner {
        display: flex;
        max-width: 1400px;
        margin: auto;
      }
      .header__links {
        margin-left: auto;
        padding-top: 2rem;
      }
      a {
        color: white;
        margin-right: 1rem;
      }
      h1 {
        margin: 0;
        padding: 0;
      }
    `}</style>
  </header>
);

export default Header;
