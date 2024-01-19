import React, { Component } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BiInfoCircle } from 'react-icons/bi';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Container from 'react-bootstrap/Container';

import Box from './Box'
import AlgorithmData from '../../algorithms/AlgorithmData';



class BinarySearch extends Component{

  state = { 
    targetVal: 35,
    array: [],
    steps: [],
    colorKey: [],
    colors: [],
    timeouts: [],
    currStep: 0,
    count: 10,
    delay: 1000,
    algorithm: this.props.algorithm,
    showModal: false,
    startDisabled: false
} 

componentDidMount(){
    this.generateElements();
}

UNSAFE_componentWillReceiveProps(nextProps){
    if(this.props.algorithm !== nextProps.algorithm){
        this.changeAlgorithm(nextProps.algorithm);
    }
}

changeAlgorithm = (algo) => {
this.clearTimeouts();
this.clearColorKey();
this.setState(
  {
    algorithm: algo,
    currStep: 0,
    steps: [
      this.state.steps[0]
    ],
  },
  () => this.generateSteps()
);
};

ans=-1;
generateSteps = () => {
    
    let array = this.state.array.slice();
    let steps = this.state.steps.slice();
    let colors = this.state.colors.slice();
    let currAlgo = this.state.algorithm;
    let targetVal = this.state.targetVal;

    this.ans = AlgorithmData[currAlgo].component(array, 0, steps, colors, this.state.targetVal);

    this.setState({
        steps: steps,
        colors: colors,
        targetVal: targetVal
    });

}

clearTimeouts = () => {
    this.state.timeouts.forEach(timeout => clearTimeout(timeout));
    this.setState({ timeouts: [] });
}

clearColorKey = () => {
    let blank = new Array(this.state.count).fill(0);
    this.setState({colorKey: blank, colors: [blank]});
}

generateElements = () => {
    this.clearTimeouts();
    this.clearColorKey();

    let cnt = this.state.count;
    let tempArr = [];
    for(let i=0; i<cnt; i++){
        let num = Math.floor(Math.random() * 100) + 1;
        if(tempArr.indexOf(num) === -1)tempArr.push(num);
    }
    tempArr.sort((a, b) => a - b);

    this.setState({
        array: tempArr,
        steps: [tempArr],
        count: cnt,
        currStep: 0,
        startDisabled: false
    }, () => {this.generateSteps()})
}

changeArray = (index, value) => {
    let array = this.state.array;
    array[index] = value;

    array.sort((a, b) => a - b);
    
    this.setState({
        array: array,
        steps: [array],
        currStep: 0
    }, () => {this.generateSteps()});
}

handleStart = () => {
    let steps = this.state.steps;
    let colors = this.state.colors;

    this.clearTimeouts();
    let timeouts = [];

    let i=0;
    while(i < steps.length - this.state.currStep){
        let timeout = setTimeout(() => {
            let currStep = this.state.currStep;
            this.setState({
                array: steps[currStep],
                colorKey: colors[currStep],
                currStep: currStep + 1
            });
            timeouts.push(timeout);
        }, this.state.delay * i);
        i++;
    }

    this.setState({
        timeouts: timeouts,
        startDisabled: true
    });
}

size = 0;
handleChange = (e) =>{
    this.size = parseInt(e.target.value);
}

handleTargetChange=(e)=>{
    this.val = parseInt(e.target.value);
}

changeArrSize = () => {
    if(this.size===0){
        toast.error('Array cannot be empty');
    }
    else if(this.size < 5 || this.size > 25){
        toast.error('Array size should be between 5 and 25');
    }
    else{
        this.setState({count : this.size}, () => {this.generateElements()});
    }
}

val=0;
changeTargetValue=()=>{
    this.setState({targetVal : this.val}, ()=>{ this.generateSteps()})
}

handleShow = () => {
    this.setState({showModal : true});
}

handleClose = () => {
    this.setState({showModal : false});
}

  render(){

    let boxs = this.state.array.map((value, index)=>{
      return(
          <Box 
          key={index} 
          index={index} 
          length={value} 
          colorKey={this.state.colorKey[index]} 
          changeArray={this.changeArray}
          />
      );
  })

  let playButton;

		if (this.state.steps.length === this.state.currStep) {
			playButton = (
				<button className='cstBtn' onClick={this.generateElements}>Regenerate</button>
			);
		} else {
			playButton = (
				<button className='cstBtn' onClick={this.handleStart} disabled={this.state.startDisabled}>Start</button>
			);
		}

    let displayAns;

    if(this.state.steps.length === this.state.currStep){
        if(this.ans!=-1){displayAns=(
            <p>{this.state.targetVal} is found at index {this.ans}</p>
        );}else{
            displayAns=(<p>{this.state.targetVal} is not present in given array.</p>)
        }
    }

    return(
      <div className='frame'>
          <p className='sorting-title'>{this.state.algorithm}</p>
          <div onClick={this.handleShow}>
              <BiInfoCircle className='info-circle'/>Instructions
          </div>
          <Modal show={this.state.showModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Instructions</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ul>
                            <li>You can change the size of the array.</li>
                            <li>Size input should be between 5 and 25.</li>
                            <li>You can also change the values of the elements using the bottom input field.</li>
                            <li>You can make a note by clicking on the buttom at the right bottom of the page.</li>
                            <li>The saved notes will be visible in the MyNotes Page in the navbar.</li>
                        </ul>
                    </Modal.Body>
                </Modal>
          <div className='bar-cards'>{boxs} 
          </div>
          <div className='ans-tab'>{displayAns}</div>
          <div>
            <div><p className='arr-size'>Size of array</p>
                <input type='number' className='arr-size' value={this.state.size} onChange={this.handleChange} placeholder='Enter size' />
                <button className='arr-size goBtn' onClick={this.changeArrSize} disabled={this.state.startDisabled}>Create</button>
            </div>
            <div>
                <p className='arr-size targetValue'>Target </p>
                <input type='number' className='targetValue' value={this.state.val} onChange={this.handleTargetChange} placeholder={this.state.targetVal} />
                <button className='arr-size goBtn' onClick={this.changeTargetValue} disabled={this.state.startDisabled}>Set</button>
            </div>
          </div>

          {playButton}
          <div className='about-sorting'>
                    <Card className='sort-def'>
                        <h3 className='sort-title'>Definition</h3>
                        <div className='about-text'>{AlgorithmData[this.state.algorithm].definition}</div>

                        <h3 className='sort-title'>Working of {this.state.algorithm}</h3>
                        <div className='sort-steps'>
                            <ul>
                                {AlgorithmData[this.state.algorithm].working.map((step, index)=>{
                                    return (<li key={index}>{step}</li>);
                                })}
                            </ul>
                        </div>

                        <Container>
                            <Row>
                                <Col lg={6}><img
                                className="sort-image"
                                src={AlgorithmData[this.state.algorithm].image}
                                alt="bubble"
                                /></Col>
                                <Col lg={6}className='box'>
                                    <h3 className='sort-title steps-title'>Steps</h3>
                                    <div className='sort-steps'>
                                        <ul>
                                            {AlgorithmData[this.state.algorithm].steps.map((step, index)=>{
                                                return (<li key={index}>{step}</li>);
                                            })}
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Card>
                </div>

      </div>
      
    );

  }

}

export default BinarySearch;