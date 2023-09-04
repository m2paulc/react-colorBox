import { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

export default class BoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = { height: '', width: '', bgColor: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newBox = { ...this.state, id: uuidv4() };
    this.props.addBox(newBox);
    this.setState({ height: '', width: '', bgColor: '' });
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <div className='grid'>
          <label htmlFor='height'>
            Height (px):
            <input type='text' id='height' name='height' value={ this.state.height } onChange={ this.handleChange } />
          </label>
          <label htmlFor='width'>
            Width (px):
            <input type='text' id='width' name='width' value={ this.state.width } onChange={ this.handleChange } />
          </label>
          <label htmlFor='bgColor'>
            Background Color:
            <input type='text' id='bgColor' name='bgColor' value={ this.state.bgColor } onChange={ this.handleChange } />
          </label>
        </div>
        <button>Add Box</button>
      </form>
    );
  }
}

BoxForm.propTypes = {
  addBox: PropTypes.func
};