import React, { useState } from 'react';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import cx from 'classnames';
import Row from 'reactstrap/lib/Row';
import styles from './PaperCards.module.scss';

const PaperCards = ({id,selectPaperHandler}) => {

  // const [addPaperState, setAddPaperState] = useState(true);
  return (
    <>
      <div className={cx('pt-5 pb-5 pl-4 pr-4',styles.paperCard)} onClick={()=>selectPaperHandler(id)}>
        <div className={cx('font-weight-bold',styles.title)}>Grade 12 english Paper </div>
        <div className={cx('',styles.difficultyLevel)} >Difficulty level : Easy </div>
      </div>
    </>
  );
};

export default PaperCards;
