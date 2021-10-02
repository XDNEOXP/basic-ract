import PropTypes from 'prop-types'

const Image = ({imgSrc, alt}) => <img className="ProductImg" src={imgSrc} alt={alt} />
Image.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    alt: PropTypes.string
}

export default Image