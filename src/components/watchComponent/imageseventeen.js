
import React, { Component } from 'react';

import Watch1 from '../../images/watchz/watch17/watch1.jpg';
import Watch2 from '../../images/watchz/watch17/watch2.jpg';
import Watch3 from '../../images/watchz/watch17/watch3.jpg';
import Watch4 from '../../images/watchz/watch17/watch4.jpg';
import Watch5 from '../../images/watchz/watch17/watch5.jpg';

class ImageSeventeen extends Component {   


  state = {
      index: 0, 
      picList: [Watch1, Watch2, Watch3, Watch4, Watch5]
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
        <img src={this.state.picList[this.state.index]} style={{"maxHeight":"0%",}} alt="imageseventeen" />
        <br/>
        <button style={{"fontSize":"18px"}} onClick={this.onClickPrevious}> Prev </button>
        <button style={{"marginLeft":"5px", "fontSize":"18px"}} onClick={this.onClickNext}> Next </button>
      </div>
    );
  }
}
export default ImageSeventeen;