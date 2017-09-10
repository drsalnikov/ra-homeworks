'use strict';

function MessageHistory( {list} ) {

  if ( !Array.isArray(list) || list.length === 0 ) {
    return null;
  }

  let history = list.map( (message, index) => {

    switch (message.type) {
      case 'message':
        return <Message from = {message.from} message = {message} />
        break;
      case 'response':
        return <Response from = {message.from} message = {message} />
        break;   
      case 'typing':
        return <Typing from = {message.from} message = {message} />
        break;     
    }

  });

  return <ul>{ history }</ul>;
}
