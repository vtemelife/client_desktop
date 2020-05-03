import React from 'react';
import PropTypes from 'prop-types';
import { useGet } from 'restful-react';

import Image from 'react-bootstrap/Image';

import SERVER_URLS from 'routes/server';

const FetchImage = (props) => {
  const { fileId, fieldName, defaultSrc, ...imageProps } = props;
  const { data: image, loading } = useGet({
    path: SERVER_URLS.STORAGE.RETRIEVE.buildPath({
      fileId: props.fileId,
    }),
  });
  if (loading || !image[fieldName]) {
    return <Image src={defaultSrc} {...imageProps} />;
  }
  return <Image src={image[fieldName]} {...imageProps} />;
};

FetchImage.propTypes = {
  fileId: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  defaultSrc: PropTypes.string,
};

export default FetchImage;
