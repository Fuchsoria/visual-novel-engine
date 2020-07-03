import React, { useState } from 'react';
import { connect } from 'react-redux';
import { MenuState } from '../../types/types';
import { SettingsState } from '../../store/reducers/reducersTypes';
import { setLazyTexts, unsetLazyTexts } from '../../store/actions/settingsActions';
import MenuButton from '../MenuButton';
// import styles from './styles.module.scss';

function MenuSettings({ settings, setLazyTexts, unsetLazyTexts }: MenuState) {
  const [menu, setMenu] = useState(false);

  const openMenu = () => {
    setMenu(true);
  };

  const closeMenu = () => {
    setMenu(false);
  };
  console.log(settings);

  if (menu) {
    return (
      <>
        <MenuButton handleClick={closeMenu} text="Close Settings" />
        {settings.lazyTexts ? (
          <MenuButton handleClick={unsetLazyTexts} text="Unset Lazy Text" />
        ) : (
          <MenuButton handleClick={setLazyTexts} text="Set Lazy Text" />
        )}
      </>
    );
  } else {
    return (
      <>
        <MenuButton handleClick={openMenu} text="Open Settings" />
      </>
    );
  }
}

const mapStateToProps = (state: { settings: SettingsState }) => {
  return {
    settings: state.settings,
  };
};

const mapDispatchToProps = {
  setLazyTexts,
  unsetLazyTexts,
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuSettings);
