import React, { Component } from 'react';
import { ScenePropsType } from '../../types/interfaces';

export default class Scene extends Component<ScenePropsType, {}> {
  render() {
    console.log(this.props.scene);
    
    return <div></div>;
  }
}
