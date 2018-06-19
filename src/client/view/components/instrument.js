import React from 'react';
import PropTypes from 'prop-types';

function instrumental(props) {
  const { voice, section } = props;
  return (
    <tr className="instrument">
      <td className="performer">{voice}</td>
      <td>{`section: ${section}`}</td>
    </tr>);
}

export default instrumental;

instrumental.propTypes = {
  voice: PropTypes.string,
  section: PropTypes.number,
};

instrumental.defaultProps = {
  voice: null,
  section: 0,
};

