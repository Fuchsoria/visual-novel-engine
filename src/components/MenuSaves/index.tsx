import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Saves } from '../../store/reducers/reducersTypes';
import { addSave, removeSaveByTime } from '../../store/actions/savesActions';
import MenuButton from '../MenuButton';
import { SceneType, MenuSavesProps } from '../../types/types';
import styles from './styles.module.scss';

function MenuSaves({ saves, scene, addSave, removeSaveByTime, loadScene }: MenuSavesProps) {
  const [menu, setMenu] = useState(false);

  const openMenu = () => {
    setMenu(true);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const save = () => {
    const saveName = prompt('Your save name', '');

    addSave({ time: Date.now(), name: saveName || 'NoNameSave', id: scene.current.id });
  };

  const load = (id: string) => () => {
    loadScene(id);
  };

  const removeSaveHandler = (time: number) => () => {
    const status = window.confirm('Do you want delete this save?');

    if (status) {
      removeSaveByTime(time);
    }
  };

  const formatNumber = (number: number) => {
    return number > 9 ? number : `0${number}`;
  };

  const formatDate = (time: number) => {
    const date = new Date(time);

    return `${formatNumber(date.getDay())}.${formatNumber(date.getMonth() + 1)}.${date.getFullYear()} ${formatNumber(
      date.getHours()
    )}:${formatNumber(date.getMinutes())}`;
  };

  if (menu) {
    const userSaves = saves.filter((save) => !save.isAutoSave).reverse();
    const autoSaves = saves.filter((save) => save.isAutoSave).reverse();

    return (
      <>
        <MenuButton handleClick={closeMenu} text="Close Saves" />
        {scene.current?.id && <MenuButton handleClick={save} text="Save" />}
        <div className={styles.saves}>
          {userSaves.map((save) => (
            <MenuButton
              key={`${save.time}${save.id}`}
              handleClick={load(save.id)}
              text={`Load ${save.name} (${formatDate(save.time)})`}
              handleRemove={removeSaveHandler(save.time)}
            />
          ))}
          {autoSaves.map((save) => (
            <MenuButton
              key={`${save.time}${save.id}`}
              handleClick={load(save.id)}
              text={`Load AutoSave (${formatDate(save.time)})`}
              handleRemove={removeSaveHandler(save.time)}
            />
          ))}
        </div>
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
  removeSaveByTime,
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuSaves);
