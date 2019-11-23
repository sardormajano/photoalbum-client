import React, { Component, Fragment } from 'react';
import { httpService } from '../../shared/services';
import { ROUTES } from '../../shared/constants';
import { SearchCard } from './SearchCard';

const floatingButtonStyle = {
  position: 'fixed',
  bottom: 50,
  right: 50,
  zIndex: 2
};

const defaultState = {
  images: [],
  tags: '',
  isSearchLoading: false,
  isSearchVisible: false
};

export class Images extends Component {
  constructor(props) {
    super(props);

    this.state = defaultState;
  }

  searchHandler(params) {
    httpService.get(ROUTES.IMAGES, params).then(({ data: images }) =>
      this.setState({
        images,
        isSearchVisible: false,
        isSearchLoading: false
      })
    );
    this.setState({ isSearchLoading: true });
  }

  renderImages(images) {
    return images.map(image => (
      <div className='col s4 m3 l2' key={image._id}>
        <a target='_blank' href={image.mediaLink}>
          <img
            className='responsive-img hoverable'
            alt={image.name}
            src={`${ROUTES.GCLOUD_PREFIX}${image.name}-thumbnail`}
          />
        </a>
      </div>
    ));
  }

  render() {
    return (
      <Fragment>
        <SearchCard
          searchHandler={params => this.searchHandler(params)}
          hideHandler={() => this.setState({ isSearchVisible: false })}
          isVisible={this.state.isSearchVisible}
          isLoading={this.state.isSearchLoading}
        />
        <div className='row'>{this.renderImages(this.state.images)}</div>
        <a
          style={floatingButtonStyle}
          href={ROUTES.IMAGES}
          onClick={e => {
            e.preventDefault();
            window.scrollTo(0, 0);
            this.setState({ isSearchVisible: true });
          }}
          className={`
            btn-floating 
            btn-large waves-effect 
            waves-light red 
            ${this.state.isSearchVisible && 'hide'}
          `}
        >
          <i className='material-icons'>search</i>
        </a>
      </Fragment>
    );
  }
}
