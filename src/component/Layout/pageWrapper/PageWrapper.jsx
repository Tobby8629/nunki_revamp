import PropTypes from "prop-types"

const PageWrapper = ({children, className}) => {
  return (
    <section className={`main_section_wrapper ${className}`}>
      <main className="main_section">
        {children}
      </main>
    </section>
  )
}

PageWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
}

export default PageWrapper