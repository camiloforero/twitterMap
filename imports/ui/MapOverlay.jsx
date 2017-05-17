import React, {Component} from "react";
import {Layer, Stage, Group} from "react-konva";
import Dot from "./Dot"

export default class MapOverlay extends Component {

  renderDots() {
    return this.props.tweets.map((tweet) => {
      return (
        <Dot key={tweet.id} tweet={tweet}
          coordinates={this.props.projector(tweet.coordinates.coordinates)}
          setSelectedTweet={this.props.setSelectedTweet}
          />
      );
    });
  }


  render() {
    return (
      <div style={{position:'absolute', left:0, top:0}}>
        <Stage width={600} height={600}>
          <Layer>
            {this.renderDots()}
          </Layer>
        </Stage>
      </div>

    );
  }
}
