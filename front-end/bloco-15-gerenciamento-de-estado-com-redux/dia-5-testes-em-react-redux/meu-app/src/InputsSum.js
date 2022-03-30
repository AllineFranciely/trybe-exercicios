import React from 'react';
import { connect } from 'react-redux';
import { sumValue1, sumValue2, sumValue3 } from './actions/index';

class InputsSum extends React.Component { 
  render() {
    const { sumValue1, sumValue2, sumValue3 } = this.props;
    return (
      <div>
        <input
          type="number"
          data-testid="input1"
          placeholder="Digite um valor"
          onChange={event => sumValue1(event.target.value)}
        />
        <input
          type="number"
          data-testid="input2"
          placeholder="Digite um valor"
          onChange={event => sumValue2(event.target.value)}
        />
        <input
          type="number"
          data-testid="input3"
          placeholder="Digite um valor"
          onChange={event => sumValue3(event.target.value)}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  sumValue1: event => dispatch(sumValue1(event)),
  sumValue2: event => dispatch(sumValue2(event)),
  sumValue3: event => dispatch(sumValue3(event))});

  export default connect(null, mapDispatchToProps)(InputsSum);
  