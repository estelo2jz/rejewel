
import React, { Component } from 'react';

import Chain1 from '../../images/chainz/chain4/chain1.jpg';
import Chain2 from '../../images/chainz/chain4/chain2.jpg';
import Chain3 from '../../images/chainz/chain4/chain3.jpg';
import Chain4 from '../../images/chainz/chain4/chain4.jpg';

class ImageFour extends Component {   


  state = {
      index: 0, 
      picList: [Chain1, Chain2, Chain3, Chain4]
    }
    
  onClickNext= () => {
      if (this.state.index + 1 === this.state.picList.length ){
          this.setState({ 
              index: 0 
            })
        } else {
            this.setState({
                index: this.state.index + 1
            })
        }

      }
  onClickPrevious= () => {
    if (this.state.index - 1 === -1 ){
        this.setState({ 
            index: this.state.picList.length - 1
          })
      } else {
          this.setState({
              index: this.state.index - 1
          })
      }
    }
    
  render() {
    return (
      <div className="images-container">
        <img src={this.state.picList[this.state.index]} style={{"maxHeight":"0%",}} alt="imagefour" />
        <br/>
        <button style={{"fontSize":"18px"}} onClick={this.onClickPrevious}> Prev </button>
        <button style={{"marginLeft":"5px", "fontSize":"18px"}} onClick={this.onClickNext}> Next </button>
      </div>
    );
  }
}
export default ImageFour;