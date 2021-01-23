import React from 'react';
import './home.css';
import {FaRegHandScissors, FaRegHandRock, FaRegHandPaper} from 'react-icons/fa';
import {Link} from 'react-router-dom';

class Home extends React.Component {
  state={
    radioGroup:{
      rock: true,
      scissors: false,
      paper:false
    }
  }
  handleRadio(event) {
    let obj = {}
    obj[event.target.value] = event.target.checked // true
    this.setState({radioGroup: obj})
  }
  constructor(props) {
    super(props)
    this.handleRadio = this.handleRadio.bind(this)
  }
  render() {
    return (
      
      <div className="container">
        <div className="textContainer">
          <div className="title">가위 바위 보</div>
        </div>
        <div className="rockpaperscissors">

          <label htmlFor="id_rock">
            <div className="rock">
              <FaRegHandRock size="64" />
              <input id="id_rock" type="radio" name="chk_ifo" value="rock" checked={this.state.radioGroup['rock']} onChange={this.handleRadio}/>
            </div>
          </label>

          <label htmlFor="id_scissors">
            <div className="scissors">
              <FaRegHandScissors size="64" transform="rotate(90)" />
              <input id="id_scissors" type="radio" name="chk_ifo" value="scissors" checked={this.state.radioGroup['scissors']} onChange={this.handleRadio}/>
            </div>
          </label>

          <label htmlFor="id_paper">
            <div className="paper">
              <FaRegHandPaper size="64" />
              <input id="id_paper" type="radio" name="chk_ifo" value="paper" checked={this.state.radioGroup['paper']} onChange={this.handleRadio}/>
            </div>
          </label>
        </div>
        <Link to={{
            pathname:"/send",
            state:{
                radioGroup:this.state.radioGroup
            }
        }}
        >
            <div className="buttonSection">
                <button>링크생성</button>
            </div>
        </Link>
      </div>
    );
  }
}

export default Home;
