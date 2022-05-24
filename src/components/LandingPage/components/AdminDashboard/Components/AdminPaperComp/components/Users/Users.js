import React, { useEffect, useState } from 'react';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import styles from './Users.module.scss';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { loadAnswerPapers, selectAnswerPapers } from '../../../../../../../../actions';
import { PersonOutlineOutlined } from '@material-ui/icons';

const AdminDashboard = ({addPaperState, setAddPaperState}) => {

  // REDUX STATE
  // const selectAllAnswers = useSelector((state) =>state.answerPaperReducer?.answerPapers?state.answePaperReducer?.answerPapers:[]);
  const selectAllAnswers = useSelector((state) =>state.answerPaperReducer?.answerPapers);
  const paperId = useSelector((state) => state.paperReducer.selectedPaper._id);


  const dispatch = useDispatch();

  // EVENT LISTNERS
  const handleClick=(id)=>{
    console.log(id);
    dispatch(selectAnswerPapers(id))
  };

  useEffect(()=>{
    dispatch(loadAnswerPapers(`?paperId=${paperId}`));
  },[dispatch])



  return (
    <>
      <Row className={cx("pb-2 pt-2",styles.allUsers)}>
      {selectAllAnswers.map((answer,index)=>(
        <>
        <div key={answer._id} className={cx('ml-3 mt-2 pl-3 pt-1 pb-1',styles.userName)}  onClick={()=>handleClick(answer._id)}>
          <PersonOutlineOutlined></PersonOutlineOutlined>
          <span className='ml-1'>{answer.userId.name}</span>
        </div>
        </>
      ))}
    </Row>
    </>
  );
};

export default AdminDashboard;
