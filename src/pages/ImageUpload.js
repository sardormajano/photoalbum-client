import React, { useReducer, useRef } from 'react';

function reducer(state, { type, payload: value }) {
  switch (type) {
    case 'tags':
      return {
        ...state,
        tags: value
      };

    case 'images':
      return {
        ...state,
        images: Array.from(value)
          .map(file => file.name)
          .join(', ')
      };
    default:
      return state;
  }
}

const initialState = {
  tags: '',
  images: ''
};

const onUpload = state => {
  console.log(state);
};

export function ImageUpload() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const imageInputRef = useRef();

  return (
    <div className='row'>
      <div className='col s12'>
        <div className='card'>
          <div className='card-content white-text'>
            <span className='card-title'>Upload images</span>
            <div className='row'>
              <div className='input-field col s12'>
                <input
                  placeholder='zoo birthday astana'
                  type='text'
                  className='validate'
                  value={state.tags}
                  onChange={event =>
                    dispatch({
                      type: 'tags',
                      payload: event.target.value
                    })
                  }
                />
                <span
                  className='helper-text'
                  data-error='wrong'
                  data-success='right'
                >
                  Tags for photos (e.g. 'zoo birthday astana')
                </span>
              </div>
            </div>
            <div className='row'>
              <div className='file-field input-field'>
                <div className='btn btn-small'>
                  <span>images</span>
                  <input
                    ref={imageInputRef}
                    type='file'
                    multiple
                    onChange={event =>
                      dispatch({ type: 'images', payload: event.target.files })
                    }
                  />
                </div>
                <div className='file-path-wrapper'>
                  <input
                    className='file-path validate'
                    type='text'
                    value={state.images}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='card-action'>
            <button
              type='submit'
              className='waves-effect red lighten-1 btn'
              onClick={() =>
                onUpload({ imageFiles: imageInputRef.current.files, ...state })
              }
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
