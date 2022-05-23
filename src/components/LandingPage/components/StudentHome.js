import React, { useEffect, useState } from 'react';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import styles from './StudentHome.module.scss';
import cx from 'classnames';
import PaperCard from './components/PaperCard/PaperCards';
import { useDispatch, useSelector } from 'react-redux';
import { loadPapers, selectPaper } from '../../../actions';

const StudentHome = ({addPaperState, setAddPaperState}) => {

  // REDUX STATE
  const allPapers = useSelector((state) =>state.paperReducer.papers);

  const dispatch = useDispatch();

  useEffect(()=>{
    // load all papers
    dispatch(loadPapers());
  },[]);

  // EVENT HANDLERS
  const selectPaperHandler=(id)=>{
    dispatch(selectPaper(id));
  };

  return (
    <>

      <Row className={cx(styles.paperCards)}>
        {allPapers.map(paper=>(
          <Col className='col-4'>
            <PaperCard className="" key={paper._id} id={paper._id} selectPaperHandler={selectPaperHandler}></PaperCard>
          </Col>
        ))}
      </Row>


    </>
  );
};

export default StudentHome;
