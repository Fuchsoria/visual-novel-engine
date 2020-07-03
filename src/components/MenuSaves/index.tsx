import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Saves } from '../../store/reducers/reducersTypes';
import { addSave, removeSave, loadSave } from '../../store/actions/savesActions';
import MenuButton from '../MenuButton';
import { SceneType, MenuSavesProps } from '../../types/types';
// import styles from './styles.module.scss';

function MenuSaves({ saves, scene, addSave, removeSave, loadSave }: MenuSavesProps) {
  console.log(saves, scene.current?.id);
  const [menu, setMenu] = useState(false);

  const openMenu = () => {
    setMenu(true);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const save = () => {
    console.log('save');
  };

  // const load = (id: string) => {};

  // const remove = (id: string) => {};

  if (menu) {
    return (
      <>
        <MenuButton handleClick={closeMenu} text="Close Saves" />
        {scene.current?.id && <MenuButton handleClick={save} text="Save" />}
      </>
    );
  } else {
    return (
      <>
        <MenuButton handleClick={openMenu} text="Open Saves" />
      </>
    );
  }
}

const mapStateToProps = (state: { saves: Saves; scene: { current: SceneType } }) => {
  return {
    saves: state.saves,
    scene: state.scene,
  };
};

const mapDispatchToProps = {
  addSave,
  removeSave,
  loadSave,
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuSaves);
