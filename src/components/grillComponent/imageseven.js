
import React, { Component } from 'react';

import GrillOne from '../../images/grills/grill7/grill1.jpg';
import GrillTwo from '../../images/grills/grill7/grill2.jpg';
import GrillThree from '../../images/grills/grill7/grill3.jpg';
import GrillFour from '../../images/grills/grill7/grill4.jpg';
import GrillFive from '../../images/grills/grill7/grill5.jpg';
import GrillSix from '../../images/grills/grill7/grill6.jpg';

class ImageSeven extends Component {   


  state = {
    index: 0, 
    picList: [GrillOne, GrillTwo, GrillThree, GrillFour, GrillFive, GrillSix]
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
        <img src={this.state.picList[this.state.index]} style={{"maxHeight":"0%",}} alt="imageseven" />
        <br/>
        <button style={{"fontSize":"18px"}} onClick={this.onClickPrevious}> Prev </button>
        <button style={{"marginLeft":"5px", "fontSize":"18px"}} onClick={this.onClickNext}> Next </button>
      </div>
    );
  }
}
export default ImageSeven;