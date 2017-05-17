import React, {Component} from "react";
import {Circle} from "react-konva";

export default class Dot extends Component {

  constructor(...args) {
    super(...args);
    this.state = {
      color: 'green'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      color: Konva.Util.getRandomColor()
    });
    this.props.setSelectedTweet(this.props.tweet)
  }
  render() {
    return (
      <Circle
        x={this.props.coordinates[0]} y={this.props.coordinates[1]} width={10} height={10}
        fill={this.state.color}
        shadowBlur={10}
        onClick={this.handleClick}
      />
    );
  }
}
