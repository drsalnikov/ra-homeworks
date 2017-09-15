'use strict';

function ItemPrice({price, currency}) {
  let fullPrice;

  if (currency === 'USD') {
    fullPrice = '$' + price;
  } else if (currency === 'EUR') {
    fullPrice = '€' + price;
  } else {
    fullPrice = price + currency;
  }

  return <p className='item-price'>{fullPrice}</p>
}

function ItemQuantity({quantity}) {
  let level = 'item-quantity level-';

  if (quantity <= 10) {
    level += 'low';
  } else if (quantity > 10 && quantity <= 20) {
    level += 'medium';
  } else if (quantity > 20) {
    level += 'high';
  }

  return <p className={level}>{quantity} left</p>
}

function MyItem({item}) {
  if (!item.hasOwnProperty('MainImage')) {
    return null;
  }

  return (
    <div className='item'>
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
    return <MyItem key={item.listing_id} item={item} />;
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
