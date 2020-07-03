import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Saves } from '../../store/reducers/reducersTypes';
import { setLazyTexts, unsetLazyTexts } from '../../store/actions/settingsActions';
import MenuButton from '../MenuButton';
// import styles from './styles.module.scss';

function MenuSaves({ saves }: { saves: Saves }) {
  console.log(saves);
  const [menu, setMenu] = useState(false);

  const openMenu = () => {
    setMenu(true);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  if (menu) {
    return (
      <>
        <MenuButton handleClick={closeMenu} text="Close Saves" />
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

const mapStateToProps = (state: { saves: Saves }) => {
  return {
    saves: state.saves,
  };
};

const mapDispatchToProps = {
  setLazyTexts,
  unsetLazyTexts,
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuSaves);
