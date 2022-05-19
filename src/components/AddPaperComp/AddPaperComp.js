import React, { useState } from 'react';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import BasicModal from '../commons/Modal/BasicModal/BasicModal';
import Row from 'reactstrap/lib/Row';
import BootstrapTooltip from '../commons/toolTips/ToolTips';
import cx from 'classnames';
import CloseIcon from '@material-ui/icons/Close';
import AddQuaction from './components/AddQuaction';
import { Add } from '@material-ui/icons';
import styles from './AddPaperComp.module.scss';
import { Button } from 'reactstrap';

const LandingPage = ({setAddPaperState}) => {

  // STATE
  const [allQuaction, setAllQuaction] = useState([]);

  // EVENT HANDLERS
  const handleAddQuactionBtn = () => {
    setAllQuaction([...allQuaction,{id:Math.random()}]);
  };
  const handleDeleteQuactionBtn = (id) => {
    const newQuactionArray=allQuaction.filter(quaction=>quaction.id !== id)
    setAllQuaction(newQuactionArray);
    console.log(newQuactionArray);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const quactionsArray = Array.from(document.querySelectorAll('.AddQuaction'));

    // modifiy quaction details for api endpoint
    const newQuactionArray=quactionsArray.map(element=>{
      return{
        id:element.dataset.id,
        question:element.querySelector('#quactionId').value,
        questionType:element.querySelector('#answerType').textContent
      };
    });
    console.log(newQuactionArray);

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
                    setAddPaperState();
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
        <div className='display-flex'>
          {/* Add quaction button */}
          <Button
              className="background-primary cursor-pointer display-flex align-items-center"
              size="sm"
              onClick={handleAddQuactionBtn}
            >
              <span className="btn-inner--icon text-white ">
                {/* <i className="fa fa-sign-out mr-2" /> */}
                <Add className="mr-2" />
              </span>
              <span className="text-capitalize text-white ml-1">
                Add Quaction
              </span>
          </Button>   

          {/* submit button */}
          {(!allQuaction.length==0) &&(
            <Button
              className="background-primary cursor-pointer display-flex align-items-center ml-auto"
              type="submit"
              size="sm"
            >
              <span className="text-capitalize text-white">
                Submit
              </span>
          </Button>) }           
        </div>


        {/*Added Quactions */}
        <div className='mt-3' id="addedQuactions">
          {
            allQuaction.map(quactionObj=>(
              <AddQuaction key={quactionObj.id} id={quactionObj.id} handleDeleteQuactionBtn={handleDeleteQuactionBtn}></AddQuaction>
            ))
          }
        </div>
      </form>

    </>
  );
};

export default LandingPage;
