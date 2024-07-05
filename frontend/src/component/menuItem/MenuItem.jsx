import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function MenuItem({ linkurl, linktext }) {
  return (
    <Link to={linkurl}> {linktext} </Link>
  );
}

MenuItem.propTypes = {
  linkurl: PropTypes.string.isRequired,
  linktext: PropTypes.string.isRequired,
};

export default MenuItem;
