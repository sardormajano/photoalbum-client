import React from 'react';

export const IndeterminateProgress = ({ visible = false }) =>
  visible ? (
    <div class="progress">
      <div class="indeterminate"></div>
    </div>
  ) : null;
