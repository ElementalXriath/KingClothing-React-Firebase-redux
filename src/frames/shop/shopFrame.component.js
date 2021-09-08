import React, { Component } from 'react';
import CollectionPreview from '../../components/previewCollection/previewCollection.component';
import SHOP_DATA from './shop.data';

class ShopFrame extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        collections: SHOP_DATA
      };
    }
  
    render() {
      const { collections } = this.state;
      return (
        <div className='shop-page'>
          {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))}
        </div>
      );
    }
  }
  
  export default ShopFrame;