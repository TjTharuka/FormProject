import React, { useEffect, useState } from 'react';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import cx from 'classnames';
import CloseIcon from '@material-ui/icons/Close';
import styles from './PaperComp.module.scss';
import Question from './components/Quaction/Question';
import { Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import BootstrapTooltip from '../../../../commons/toolTips/ToolTips';

const AddPaperComp = ({setPaperViewState}) => {

  // STATE
  const [allQuaction, setAllQuaction] = useState([]);
  const [PaperName, setPaperName] = useState("");
  const [diffculty, setDiffculty] = useState("Normal");
  const [grade, setGrade] = useState(10);

  // REDUX STATE
  const userId = useSelector((state) =>state.auth.user.user_id);
  const quactions = useSelector((state) =>state.paperReducer.selectedPaper?.quactions?state.paperReducer.selectedPaper?.quactions:[]);

  const dispatch = useDispatch();


  // EVENT HANDLERS
  // handle submit form
  const handleSubmit = (event) => {
    event.preventDefault();

    // get all quactions by DOM
    const quactionsArray = Array.from(document.querySelectorAll('.AddQuaction'));

    // modifiy quaction details for api endpoint
    const newQuactionArray=quactionsArray.map((element,index)=>{

      let newQuactionObj={
        question:element.querySelector('#quactionId').value,
        questionType:allQuaction[index].file?"image":"text",
        adminId:userId
        // questionType:element.querySelector('#answerType').textContent
      }


      if(allQuaction[index].file){
        const file=allQuaction[index].file.formData;
        // tempory
        newQuactionObj.fileId=file; 
      }

      return newQuactionObj;
    });



  };


  return (
    <>
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
                    setPaperViewState();
                  }}
                />
              </BootstrapTooltip>
            </span>
          </Col>
      </Row>

      {/* title */}
      <Row className="justify-content-center mt-2 mb-3">
        <h4 id={'styles.titleSize'} className=" font-weight-bold p-1">
          Add Paper
        </h4>
      </Row>

      <form onSubmit={handleSubmit}>

        {/*button (add quaction button , submit button) row*/}
        <Button
              className={cx("background-primary cursor-pointer display-flex align-items-center ml-auto",styles.submitBtn)}
              type="submit"
              size="sm"
            >
              <span className="text-capitalize text-white">
                Submit
              </span>
          </Button>



        {/*Added Quactions */}
        <div className='mt-3' id="addedQuactions">
          {
            quactions.map((quactionObj,index)=>(
              <Question key={quactionObj.id} id={quactionObj.id} quaction={quactionObj} index={index} ></Question>
            ))
          }
        </div>
      </form>

    </>
  );
};

export default AddPaperComp;
