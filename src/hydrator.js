import React from 'react';
import { hydrate } from 'react-dom';

export default input => {
  let registry = [];
  let uniqueId = -1;

  // must run first to push to registry
  const server = input(component => {
    uniqueId = uniqueId + 1;
    const id = `z${uniqueId}`;
    const wrapped = <div id={id}>{component}</div>;
    registry.push({ id, wrapped });
    return wrapped;
  });

  const client = () => {
    registry.forEach(({ wrapped, id }) => {
      hydrate(wrapped, document.getElementById(id));
    });
  };

  return { server, client };
};
