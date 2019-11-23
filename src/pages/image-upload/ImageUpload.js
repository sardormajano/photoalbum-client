import React, { Component } from 'react';
import { UploadForm } from './UploadForm';
import { UploadPreview } from './UploadPreview';
import { httpService } from '../../shared/services';
import { ROUTES } from '../../shared/constants/routes';
import toastr from 'toastr';

const defaultState = {
  imageFiles: [],
  tags: '',
  isFormDisabled: false,
  toastMessage: '',
  toastVisible: false
};

export class ImageUpload extends Component {
  constructor(props) {
    super(props);

    this.state = defaultState;
  }

  tagChangeHandler(event) {
    this.setState({ tags: event.target.value });
  }

  imageChangeHandler(event) {
    this.setState({
      imageFiles: [...this.state.imageFiles, ...Array.from(event.target.files)]
    });
  }

  asyncSetState(newState) {
    return new Promise((resolve, reject) => {
      this.setState(newState, () => resolve());
    });
  }

  async uploadHandler() {
    const metadata = this.state.imageFiles.reduce(
      (prev, curr) => ({
        ...prev,
        [curr.name]: { lastModified: curr.lastModified, tags: this.state.tags }
      }),
      {}
    );

    try {
      await this.asyncSetState({ isFormDisabled: true });
      const data = {
        metadata: JSON.stringify(metadata),
        images: this.state.imageFiles
      };
      await httpService.post(ROUTES.IMAGE_UPLOAD, data, true);
      toastr.success('Image(s) successfully uploaded');
      this.setState(defaultState);
    } catch (err) {
      toastr.error('Error while uploading images');
      console.error(err);
      this.setState({ isFormDisabled: false });
    }
  }

  render() {
    return (
      <div className='row'>
        <div className='col s12'>
          <UploadForm
            tags={this.state.tags}
            tagChangeHandler={event => this.tagChangeHandler(event)}
            imageNames={this.state.imageFiles.map(img => img.name)}
            imageChangeHandler={event => this.imageChangeHandler(event)}
            uploadHandler={form => this.uploadHandler(form)}
            disabled={this.state.isFormDisabled}
          />
        </div>
        <div className='col s12'>
          <UploadPreview imageFiles={this.state.imageFiles} />
        </div>
      </div>
    );
  }
}
