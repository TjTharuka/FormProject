import React, { useState } from 'react';
import cx from 'classnames';
import styles from './AddQuaction.module.scss';
import { FormControl, MenuItem, Select, TextField } from '@material-ui/core';
import { DeleteOutline, InsertPhotoOutlined } from '@material-ui/icons';


const AddQuaction = ({setAddPaperState,handleDeleteQuactionBtn,id}) => {

  const [answerType, setAnswerType] = useState("Short Answer");

  const handleAnswerTypeChange = (event) => {
    setAnswerType(event.target.value);
  };

  return (
    <>
       <div data-id={id} className={cx('pt-2 pl-1 pr-2 pb-3 mt-3 AddQuaction',styles.AddQuaction)} >
            {/* Quaction Row*/}
            <div className={cx('',styles.QuactionRow)}>
              {/* quaction */}
                  <TextField id="quactionId" className='flex-1' label="" placeholder='Quaction' variant="filled" />
              {/* <div className='border flex-1'>
              </div> */}
              {/* add image */}
              <InsertPhotoOutlined className='cursor-pointer ml-1 mr-1 '></InsertPhotoOutlined>

              {/* answer type */}
              <FormControl  className="mt-1 w-20">
                <Select
                  labelId="answerType"
                  id="answerType"
                  onChange={handleAnswerTypeChange}
                  value={answerType}
                >
                  <MenuItem id={"Short Answer"} value="Short Answer">Short Answer</MenuItem>
                  <MenuItem id={""} value="Long Answer">Long Answer</MenuItem>
                  <MenuItem id={""} value="Multiple Answer">Multiple Answer</MenuItem>
                </Select>
              </FormControl>



            </div>

            {/* answer row*/}
            <div className='mt-3'>
              <TextField
                id="answer-input"
                label=""
                className='col-9'
                placeholder={answerType}
                autoComplete="current-answer"
                variant="standard"
              />
            </div>

            {/* bottom line row  */}
            <div className='mt-4 display-flex'>
              <DeleteOutline className={cx('cursor-pointer ml-auto ',styles.deleteIcon)} onClick={()=>handleDeleteQuactionBtn(id)} ></DeleteOutline>
            </div>
      </div>

    </>
  );
};

export default AddQuaction;
