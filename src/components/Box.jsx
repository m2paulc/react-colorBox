import PropTypes from 'prop-types';

function Box(props) {
  const { height, width, bgColor } = props.box;
  const divStyle = {
    height: `${height}px`,
    width: `${width}px`,
    backgroundColor: `${bgColor}`,
    margin: '1rem'
  };
  return (
    <div className='container'>
      <div style={ divStyle }>
      </div>
      <button onClick={ props.removeBox }>Remove Box</button>
    </div>
  );
}

Box.propTypes = {
  box: PropTypes.object,
  height: PropTypes.string,
  width: PropTypes.string,
  bgColor: PropTypes.string,
  removeBox: PropTypes.func
};

export default Box;