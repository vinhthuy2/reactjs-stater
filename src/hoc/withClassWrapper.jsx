import React from 'react';

const withClassWrapper = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent />
    </div>
  );
};

export default withClassWrapper;
