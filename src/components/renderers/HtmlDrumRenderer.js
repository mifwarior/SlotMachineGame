import React from 'react';
import propTypes from 'prop-types';

class HtmlDrumRenderer extends React.Component {

  render() {
    const { drums, symbols, types, result } = this.props;

    const items = result.map((val, index)=>{
      return <span key={index}>{val}</span>
    });
    return (
      <div className="html-renderer">
        {items}
      </div>
    );
  }
};

HtmlDrumRenderer.propTypes = {
  drums: propTypes.number.isRequired,
  symbols: propTypes.number.isRequired,
  types: propTypes.number.isRequired,
  result: propTypes.array.isRequired
}

export default HtmlDrumRenderer;
