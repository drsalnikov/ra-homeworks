'use strict';

function ItemPrice({price, currency}) {
  if (currency === 'USD') {
    return <p className='item-price'>${price}</p>

  } else if (currency === 'EUR') {
    return <p className='item-price'>€{price}</p>

  } else  {
    return <p className='item-price'>{price}{currency}</p>

  }
}

function ItemQuantity({quantity}) {
  if (quantity <= 10) {
    return <p className='item-quantity level-low'>{quantity} left</p>

  } else if (quantity > 10 && quantity <= 20) {
    return <p className='item-quantity level-medium'>{quantity} left</p>

  } else if (quantity > 20) {
    return <p className='item-quantity level-high'>{quantity} left</p>

  }
}

function MyItem({item}) {
  if (!item.hasOwnProperty('MainImage')) {
    return null;
  }

  return (
      <div className='item' key = {item.listing_id}>
        <div className='item-image'>
          <a href = {item.url}>
            <img src = {item.MainImage.url_570xN} />
          </a>
        </div>
        <div className='item-details'>
          <p className='item-title'>{item.title}</p>
          <ItemPrice price={item.price} currency={item.currency_code} />
          <ItemQuantity quantity={item.quantity} />
        </div>
      </div>
  );
}

function Listing({items}) {
  const lists = items.map((item) => {
    return <MyItem item={item} />;
  });

  return <div className='item-list' >{lists}</div>;
}


/*********************************/

fetch('https://neto-api.herokuapp.com/etsy')
  .then(function(response) {
    return response.json();
  })
  .then(function(items) {
    ReactDOM.render(
      <Listing items={items} />,
      document.getElementById('root')
    );
  })
  .catch( function (err) {
    console.log('err', err);
  });
