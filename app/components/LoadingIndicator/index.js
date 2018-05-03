import React from 'react';
import './LoadingIndicator.scss';

function LoadingIndicator() {
  return (
    <div className={'mdc-layout-grid mdc-grid-remove-gutter-margin full-height'}>
      <div className={'mdc-layout-grid__inner full-height'}>
        <div className={'mdc-layout-grid__cell mdc-layout-grid__cell--span-5'} />
        <div className={'mdc-layout-grid__cell mdc-layout-grid__cell--span-2 mdc-layout-grid__cell--align-middle'}>
          <div role={'progressbar'} className={'mdc-linear-progress mdc-linear-progress--indeterminate'} data-buffer={'true'}>
            <div className={'mdc-linear-progress__buffer'} />
            <div className={'mdc-linear-progress__bar mdc-linear-progress__secondary-bar'}>
              <span className={'mdc-linear-progress__bar-inner'}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingIndicator;
