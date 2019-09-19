import React,{ Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import Counter from './components/Counter'
import { 
  decrement, 
  decrement2, 
  increment, 
  increment2,
  reset,
  reset2 
} from './actions/actionCreator'

class App extends Component {
  render() {
    console.log(this.props)
    return (
            <>
              <Counter 
                  count={ this.props.reducer.count }
                  increment={ this.props.increment } 
                  decrement={ this.props.decrement }
                  reset={ this.props.reset }
              />
               <Counter 
                  count={ this.props.count2.count }
                  increment={ this.props.increment2 } 
                  decrement={ this.props.decrement2 }
                  reset={ this.props.reset2 }
              />
            </>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
    increment2: () => dispatch(increment2()),

    decrement: () => dispatch(decrement()),
    decrement2: () => dispatch(decrement2()),
    
    reset: () => dispatch(reset()),
    reset2: () => dispatch(reset2())
  }
}

const mapStateToProps = state => {
   return { ...state }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
