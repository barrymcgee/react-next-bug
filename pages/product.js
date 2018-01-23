import React from 'react';
// Layout
import Layout from '../layout/base.js';
// Database
import base from '../firebase.js';

export default class extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      item: { }
    };
  }

  componentWillMount () {
    this.req = base.fetch(`/products/${this.props.url.query.id}`, {
      context: this,
      asArray: false,
      then (item) {
        this.setState({ item: item });
      }
    });

    // this.req = base.syncState('/products/1'
    //   , {
    //     context: this,
    //     state: 'item'
    //   }
    // );
  }

  componentWillUnmount () {
    base.removeBinding(this.req);
  }

  render () {
    const product = this.state.item;
    return (
      <Layout>
        <div>
          <h1>{ product.title }</h1>
          {/* <img src={ product.img.url } alt={ product.img.alt } />
          { product.desc ? (
            <p>{ product.desc }</p>
          ) : null }
          <p>£{ parseInt(product.price.gbp) }</p> */}
        </div>
      </Layout>
    );
  }
};
