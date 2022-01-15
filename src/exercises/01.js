import { Component } from 'react';

class ClassComp01 extends Component {
  render() {
    const { imageSource } = this.props;
    return <img alt="zzzzzzzzzzzz" src={imageSource} />;
  }
}

const FunctionalComponent01 = (props) => {
  return <img alt="zzzzzzzzzzzz" src={props.imageSource} />;
};

export default FunctionalComponent01;
