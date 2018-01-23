import Link from 'next/link';

const Footer = () => (
  <footer>
    <div className="footer__inner">
      <span className="footer__meta">
        irishArt · 2018
      </span>
      <Link key="" href="/">
        <a>Privacy Policy</a>
      </Link>
      <Link href="/">
        <a>Terms &amp; Conditions</a>
      </Link>
    </div>
    <style jsx>{`
      footer {
        background: white;
        color: darkgrey;
        margin-top: 2rem;
        padding: 1rem;
        width: calc(100vw - 3rem);
      }
      .footer__meta {
        display: inline-block;
        margin-right: 1rem;
      }
      a {
        margin-right: 1rem;
        color: #104E0B;
      }
      .footer__inner {
        max-width: 1400px;
        margin: auto;
      }
    `}</style>
  </footer>
);

export default Footer;
