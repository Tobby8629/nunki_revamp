import PropTypes, { string } from 'prop-types'
import content from './Content.module.css'
import React from 'react';


const Content = ({blog}) => {
  return (
    <div className={content.point}>
        <h4>
        <span className={content.point_header}>
            {blog?.point_header}
            {`${blog?.point_header_text ? ": " : " "}`}
        </span>
        {blog?.point_header_text}
        </h4>
        <p>{blog?.point_body}</p>
    </div>

  )
}
Content.propTypes = {
  blog: PropTypes.shape({
    point_header: string.isRequired,
    point_header_text: string.isRequired,
    point_body: string.isRequired
  }).isRequired
};

export default React.memo(Content)