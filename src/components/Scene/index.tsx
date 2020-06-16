import React, { Component } from 'react';
import { ScenePropsType } from '../../types/types';

export default class Scene extends Component<ScenePropsType, {}> {
  handleClick = (id: string) => () => {
    this.props.nextScene(id);
  };

  render() {
    const { image, text, buttons } = this.props.scene;

    return (
      <div>
        <img src={image} alt="Background" />
        <p>{text}</p>
        {buttons.map(({ text, redirectId }) => (
          <button key={`${text}${redirectId}`} onClick={this.handleClick(redirectId)}>
            {text}
          </button>
        ))}
      </div>
    );
  }
}
