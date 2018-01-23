import Link from 'next/link';

const Hero = (props) => (
  <div className="hero">
    <h1>{props.title }</h1>
    <style jsx>{`
      h1 {
        font-family: 'Slabo 27px', serif;
      }
      .hero {
        background-image:url('/static/hero-bg.jpg');
        background-size: cover;
        border-bottom: 1px solid #ccc;
        margin-bottom: 1rem;
        padding: 2rem 0;
        text-align: center;
      }
      `}</style>
  </div>
);

export default Hero;
