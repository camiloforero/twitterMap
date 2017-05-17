import React, {Component} from "react";
import {PropTypes} from "prop-types";
import { Meteor } from "meteor/meteor";
import { createContainer} from "meteor/react-meteor-data"

import TweetsResults from "./TweetsResults.jsx";
import {Tweets} from "../api/Tweets.js";

import ColombiaMap from "./ColombiaMap.jsx";

import MapOverlay from "./MapOverlay.jsx";
import { Tweet } from 'react-twitter-widgets'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {selected_tweet:null};
    console.log(this.props.tweets);

  }



  startStream(evt) {
    // "this" will change in the method call, so I need to save it
    let component = this;
    Meteor.call("twitter.stream", "null");

  }


  render() {
    console.log("render!");
    console.log(this.props.tweets);
    return (
      <div>
        <button style={{
            backgroundColor:"#4CAF50",
            border:"none",
            color: "white",
            padding: "15px 32px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px"}}
          onClick={this.startStream.bind(this)}>Start!</button>
        <div style={{position:'relative'}} width="600" height="600">
          <ColombiaMap
            width="600"
            height="600"
            data={{RISARALDA:10}}
            setProjector = {(projector) => {this.setState({projector:projector})}}
            >
          </ColombiaMap>
          <MapOverlay tweets={this.props.tweets} projector={this.state.projector}
            setSelectedTweet={(tweet)=>{this.setState({selected_tweet:tweet})}}></MapOverlay>
          {this.state.selected_tweet ?
            <Tweet
              tweetId={this.state.selected_tweet.id_str}
              />:
            <p>Please select a tweet</p>
          }

        </div>
      </div>
    );
  }
}

App.propTypes = {
  tweets : PropTypes.array.isRequired
};

export default AppContainer = createContainer(() => {
  Meteor.subscribe("tweets");


  return {
    tweets: Tweets.find({}).fetch()
  };
}, App);
