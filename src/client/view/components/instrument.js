import React from 'react';
import Type from 'prop-types';

class Instrument extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.id = props.id;
  }

  render() {
    return <div>{'section no.' + this.props.section}</div>;
  }
}

export default Instrument;

Instrument.propTypes = {
  section: Type.number,
  id: Type.string,
};

Instrument.defaultProps = {
  section: 0,
  id: String(Math.floor(Math.random() * 100)),
};
