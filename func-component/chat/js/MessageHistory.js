'use strict';

function MessageHistory({list}) {

  if (!Array.isArray(list) || list.length === 0) {
    return null;
  }

  const messages = {
    response: Response,
    message: Message,
    typing: Typing
  };

  let history = list.map((message, index) => {
    console.log(message);
    const Component = messages[message.type];
    return <Component key={message.id} from={message.from} message={message} />
  });

  return <ul>{history}</ul>;
}
