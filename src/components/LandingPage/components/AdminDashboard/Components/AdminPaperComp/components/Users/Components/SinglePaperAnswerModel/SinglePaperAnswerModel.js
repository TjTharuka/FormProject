import React, { useEffect, useState } from 'react';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import cx from 'classnames';
import CloseIcon from '@material-ui/icons/Close';
import styles from './SinglePaperAnswerModel.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import BootstrapTooltip from '../../../../../../../../../commons/toolTips/ToolTips';
import Question from './../../../SinglePaper/Quaction/Question';

const SinglePaperAnswerModel = ({closModel}) => {

  // REDUX STATE
  const userId = useSelector((state) =>state.auth.user.user_id);
  const selectedAnswerPaper = useSelector((state) =>state.answerPaperReducer?.selectedAnswerPaper);
  const [navState,setNavState]=useState('paper');

  // EVENT HANDLERS

  return (
    <>
      {console.log(selectedAnswerPaper)}
      {/* Close button */}
      <Row className="justify-content-end">
          <Col xs={8}>
            <span className={cx(styles.closeIconPlacement)}>
              <BootstrapTooltip title="Close">
                <CloseIcon
                  className={cx(
                    styles.cross,
                    'pt-2 pr-2 mt--1 mr-1 float-right cursor-pointer'
                  )}
                  onClick={() => {
                    closModel();
                  }}
                />
              </BootstrapTooltip>
            </span>
          </Col>
      </Row>

         {/*all Quactions and answers */}
        <div className='mt-3' id="allQuactions">
              {
                (selectedAnswerPaper.answers?selectedAnswerPaper.answers:[]).map((quactionObj,index)=>(
                  <>
                  {console.log(quactionObj)}
                  <Question key={quactionObj._id} id={quactionObj._id} quaction={quactionObj.question} index={index} answer={quactionObj.answer}></Question>
                  </>
                ))
              }
        </div>

    </>
  );
};

export default SinglePaperAnswerModel;
