import Head from 'next/head';

const base = (props) => (
  <div className="base">
    <Head>
      <title>Bug</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="/static/css/global.css" rel="stylesheet" />
    </Head>
    <div className="container">
      <main className="content">
        {props.children}
      </main>
    </div>
    <style jsx>{`
      .base {
        background-color: #F2F0F0;
      }
      .container {
        max-width: 1400px;
        margin: auto;
      }
      `}</style>
  </div>
);

export default base;
