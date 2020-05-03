import React from 'react';
import PropTypes from 'prop-types';

import Image from 'react-bootstrap/Image';

import FetchImage from './FetchImage';

const PreloadImage = ({ fileId, defaultSrc, ...imageProps }) => {
  if (!fileId) {
    return <Image src={defaultSrc} {...imageProps} />;
  }
  return (
    <FetchImage
      fileId={fileId}
      fieldName={'thumbnail_500x500'}
      defaultSrc={defaultSrc}
      {...imageProps}
    />
  );
};

PreloadImage.propTypes = {
  fileId: PropTypes.string,
  defaultSrc: PropTypes.string,
};

export default PreloadImage;
