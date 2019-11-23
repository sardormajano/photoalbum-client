import React, { useState } from 'react';
import { IndeterminateProgress } from '../../shared/components';
import { dateService, DATE_FORMATS } from '../../shared/services';

export const SearchCard = ({
  searchHandler,
  hideHandler,
  isVisible,
  isLoading
}) => {
  const now = dateService.formatDate(new Date(), DATE_FORMATS.INPUT);
  const [periodStart, setPeriodStart] = useState(now);
  const [periodEnd, setPeriodEnd] = useState(now);
  const [tags, setTags] = useState('');

  return (
    <div className={`${!isVisible && 'hide'} row`}>
      <fieldset>
        <div className='card'>
          <div className='card-content white-text'>
            <div className='col s12'>
              <IndeterminateProgress visible={isLoading} />
            </div>
            <span className='card-title'>Search images</span>
            <div className='row'>
              <div className='input-field col s12 m4'>
                <input
                  placeholder='zoo birthday astana'
                  type='text'
                  className='validate'
                  value={tags}
                  onChange={({ target }) => setTags(target.value)}
                />
                <span
                  className='helper-text'
                  data-error='wrong'
                  data-success='right'
                >
                  Tags for photos (e.g. 'zoo birthday astana')
                </span>
              </div>
              <div className='input-field col s12 m4'>
                <input
                  placeholder=''
                  type='date'
                  className='validate'
                  value={periodStart}
                  onChange={({ target }) => setPeriodStart(target.value)}
                />
                <span
                  className='helper-text'
                  data-error='wrong'
                  data-success='right'
                >
                  Period start
                </span>
              </div>
              <div className='input-field col s12 m4'>
                <input
                  placeholder=''
                  type='date'
                  className='validate'
                  value={periodEnd}
                  onChange={({ target }) => setPeriodEnd(target.value)}
                />
                <span
                  className='helper-text'
                  data-error='wrong'
                  data-success='right'
                >
                  Period end
                </span>
              </div>
            </div>
          </div>
          <div className='card-action'>
            <button
              type='submit'
              className='waves-effect red lighten-1 btn'
              onClick={() =>
                searchHandler({
                  tags,
                  periodStart: dateService.parseToIntDate(
                    periodStart,
                    DATE_FORMATS.INPUT
                  ),
                  periodEnd: dateService.parseToIntDate(
                    periodEnd,
                    DATE_FORMATS.INPUT
                  )
                })
              }
            >
              Search
            </button>
            &nbsp;
            <button
              type='submit'
              className='waves-effect red lighten-1 btn'
              onClick={() => hideHandler()}
            >
              Hide
            </button>
          </div>
        </div>
      </fieldset>
    </div>
  );
};
