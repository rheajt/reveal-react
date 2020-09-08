import React from 'react';

export default ({ children, ...props }) => {
  return <section {...props}>{children}</section>;
};
