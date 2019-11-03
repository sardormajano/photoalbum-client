import React from 'react';

export const UploadPreview = ({ imageFiles }) => {
  return (
    <div className="row">
      {imageFiles.map(imageFile => (
        <div className="col s3 m2 l1" key={imageFile.name}>
          <img
            alt={imageFile.src}
            className="responsive-img"
            src={URL.createObjectURL(imageFile)}
          />
        </div>
      ))}
    </div>
  );
};
