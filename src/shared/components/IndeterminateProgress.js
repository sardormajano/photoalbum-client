import React from 'react';

export const IndeterminateProgress = ({ visible = false }) =>
  visible ? (
    <div className='progress'>
      <div className='indeterminate'></div>
    </div>
  ) : null;
