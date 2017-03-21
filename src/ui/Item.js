import React, { Component } from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card';
//import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import Slider from 'material-ui/Slider';
import { purple900, deepPurple900 }  from 'material-ui/styles/colors';

const styles = {
  chip: {
    margin: 4
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

export default class Item extends Component {
  state = {
    firstSlider: 0.5
  };
  handleFirstSlider = (event, value) => {
    this.setState({firstSlider: value});
    if (window.socket) window.socket.send('{"params" :[{"name" : 12,"value" :'+value+'}]}');
  };
  render() {
    return (
            <Card>
                <CardMedia overlay={<CardTitle title="work in progress" subtitle="come back later!"/>}>
                    <img src="./images/anim131.jpg" alt="batchass" />
                </CardMedia>
                <CardText>
                    <div style={styles.wrapper}>
                        <Chip
                            backgroundColor={purple900}
                            style={styles.chip}
                        >
                        <Avatar size={32} color={purple900} backgroundColor={deepPurple900}>
                            VD
                        </Avatar>
                            videodromm
                        </Chip>
                        <Slider 
                            axis="y"
                            defaultValue={0.5}
                            value={this.state.firstSlider}
                            onChange={this.handleFirstSlider}
                        />
                        <p>
                        <span>{this.state.firstSlider}</span>
                        </p>
                    </div>
                </CardText>
                <CardActions>
                    
                </CardActions>               
            </Card>
    );
  }
}