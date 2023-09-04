import { Component } from 'react';
import Box from './Box';
import BoxForm from './BoxForm';

export default class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = { boxes: [] };
    this.addBox = this.addBox.bind(this);
    // this.removeBox = this.removeBox.bind(this);
  }
  addBox(box) {
    this.setState((state) => ({
      boxes: [...state.boxes, box]
    }));
  }

  removeBox(id) {
    this.setState({
      boxes: this.state.boxes.filter(box => box.id !== id)
    });
  }

  render() {
    return (
      <div>
        <BoxForm addBox={ this.addBox } />
        { this.state.boxes.map(box => (
          <Box key={ box.id } box={ box } removeBox={ () => this.removeBox(box.id) } />
        )) }
      </div>
    );
  }
}
