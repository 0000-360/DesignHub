import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({ title, description, canonical, name, type, image }) => {
    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{title}</title>
            <meta name='description' content={description} />
            <link rel="canonical" href={canonical} />

            {/* Open Graph tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
}

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    canonical: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.string
}

SEO.defaultProps = {
    title: 'DesignHub360 | Digital Agency & AI Solutions',
    description: 'DesignHub360 transforms brands with strategic design, digital innovation, and AI-powered marketing solutions.',
    canonical: 'https://www.designhub360.in/',
    name: 'DesignHub360',
    type: 'website',
    image: '/dh-logo-final.png'
}

export default SEO;
