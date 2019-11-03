import React from 'react';
import { IndeterminateProgress } from '../../shared/components';

export const UploadForm = ({
  tags,
  tagChangeHandler,
  imageNames,
  imageChangeHandler,
  uploadHandler,
  disabled = false
}) => {
  return (
    <fieldset disabled={disabled}>
      <div className="card">
        <div className="card-content white-text">
          <div className="col s12">
            <IndeterminateProgress visible={disabled} />
          </div>
          <span className="card-title">Upload images</span>
          <div className="row">
            <div className="input-field col s12">
              <input
                placeholder="zoo birthday astana"
                type="text"
                className="validate"
                value={tags}
                onChange={event => tagChangeHandler(event)}
              />
              <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              >
                Tags for photos (e.g. 'zoo birthday astana')
              </span>
            </div>
          </div>
          <div className="row">
            <div className="file-field input-field">
              <div className="btn btn-small">
                <span>images</span>
                <input
                  type="file"
                  multiple
                  readOnly
                  onChange={event => imageChangeHandler(event)}
                />
              </div>
              <div className="file-path-wrapper">
                <input
                  className="file-path validate"
                  type="text"
                  value={imageNames}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
        <div className="card-action">
          <button
            type="submit"
            className="waves-effect red lighten-1 btn"
            onClick={event => uploadHandler(event)}
          >
            Upload
          </button>
        </div>
      </div>
    </fieldset>
  );
};
