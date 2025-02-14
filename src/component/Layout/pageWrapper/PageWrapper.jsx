import PropTypes from "prop-types"

const PageWrapper = ({children, className, style, mainStyle}) => {
  return (
    <section className={`main_section_wrapper ${className}`} style={style}>
      <main className="main_section" style={mainStyle}>
        {children}
      </main>
    </section>
  )
}

PageWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    style: PropTypes.string,
    mainStyle: PropTypes.string
}

export default PageWrapper