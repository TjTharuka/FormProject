import React, { useState } from 'react';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import cx from 'classnames';
import Row from 'reactstrap/lib/Row';
import styles from './PaperCards.module.scss';

const PaperCards = ({id,selectPaperHandler,setPaperViewState,quaction}) => {

  const handleClick=(id)=>{
    selectPaperHandler(id);
    setPaperViewState();
  };

  return (
    <>
      {console.log(quaction)}
      <div className={cx('pt-5 pb-5 pl-4 pr-4',styles.paperCard)} onClick={()=>handleClick(id)}>
        <div className={cx('font-weight-bold',styles.title)}>Grade 12 english Paper </div>
        <div className={cx('',styles.difficultyLevel)} >Difficulty level : Easy </div>
      </div>
    </>
  );
};

export default PaperCards;
