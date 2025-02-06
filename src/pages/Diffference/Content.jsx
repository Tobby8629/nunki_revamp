import content from './Content.module.css'

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

export default Content