import React, { useEffect, useState } from 'react';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import styles from './AdminDashboard.module.scss';
import cx from 'classnames';
import PaperComp from '../components/AnswerPaper/PaperComp';
import { useDispatch, useSelector } from 'react-redux';
import { loadAnswerPapers,} from '../../../../actions';
import BasicModal from '../../../commons/Modal/BasicModal/BasicModal';

const AdminDashboard = ({addPaperState, setAddPaperState}) => {

  // REDUX STATE
  const allPapers = useSelector((state) =>state.paperReducer.papers);
  const [paperViewState, setPaperViewState] = useState(false);


  const dispatch = useDispatch();

  useEffect(()=>{
    // load all answePapers
    dispatch(loadAnswerPapers());
  },[dispatch]);

  // EVENT HANDLERS

  return (
    <>

    {/*  */}
    <div className=''>

    </div>

      {/*view signle paper*/}
      <BasicModal
        isOpen={paperViewState}
        modalStyles={styles.PaperViewModelId}
        modalBodyStyles="p-0 px-4 py-3"
        size="md"
        >
        <PaperComp
            setPaperViewState={()=>setPaperViewState(!paperViewState)}
        />
      </BasicModal>

    </>
  );
};

export default AdminDashboard;
