import { Component, useState } from 'react';

class ClassComp02 extends Component {
  constructor() {
    super();
    this.state = { isBored: false };
  }
  render() {
    const { isBored } = this.state;
    return (
      <div>
        <h1>
          {isBored
            ? "Yeah, I'm bored too."
            : 'Really? Well good for you I suppose.'}
        </h1>
        <div>
          {!isBored && (
            <button onClick={() => this.setState({ isBored: true })}>
              I'm Bored
            </button>
          )}
          {isBored && (
            <button onClick={() => this.setState({ isBored: false })}>
              I'm Not Bored
            </button>
          )}
        </div>
      </div>
    );
  }
}

const FunctionalComponent02 = () => {
  const [isBored, setIsBored] = useState(false);
  const [isTime, setIsTime] = useState(Date.now());

  return (
    <div>
      <h3>{isTime}</h3>
      <h1>
        {isBored
          ? "Yeah, I'm bored too."
          : 'Really? Well good for you I suppose.'}
      </h1>
      <div>
        {!isBored && (
          <button
            onClick={() => {
              setIsBored(true);
              setIsTime(Date.now());
            }}>
            I'm Bored
          </button>
        )}
        {isBored && (
          <button
            onClick={() => {
              setIsBored(false);
              setIsTime(Date.now());
            }}>
            I'm Not Bored
          </button>
        )}
      </div>
    </div>
  );
};

export default FunctionalComponent02;
