import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NovelProps } from '../../types/types';
import { NovelState, SceneState } from '../../store/reducers/reducersTypes';
import Scene from '../../components/Scene';
import { setScene } from '../../store/actions/sceneActions';
import MenuSettings from '../../components/MenuSettings';
import styles from './styles.module.scss';

class Novel extends Component<NovelProps> {
  nextScene = (id: string) => {
    const scene = this.props.novel?.scenes[id];

    if (scene) {
      this.props.setScene(scene);
    }
  };

  render() {
    const { scene } = this.props;

    return (
      <>
        <div className={styles.menu}>
          <MenuSettings />
        </div>
        {scene && <Scene scene={scene} nextScene={this.nextScene} />}
      </>
    );
  }
}

const mapStateToProps = (state: { novel: NovelState; scene: SceneState }) => {
  return { novel: state.novel.current, scene: state.scene.current || state.novel.current?.scenes.start };
};

const mapDispatchToProps = {
  setScene,
};

export default connect(mapStateToProps, mapDispatchToProps)(Novel);
