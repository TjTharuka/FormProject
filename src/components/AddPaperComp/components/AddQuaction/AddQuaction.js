import React, { useState } from 'react';
import cx from 'classnames';
import styles from './AddQuaction.module.scss';
import { FormControl, MenuItem, Select, TextField } from '@material-ui/core';
import { CloudDoneOutlined, DeleteOutline, InsertPhotoOutlined } from '@material-ui/icons';
import BasicModal from '../../../commons/Modal/BasicModal/BasicModal';
import ImageUploadMOdel from './components/ImageUploadModel';


const AddQuaction = ({setAddPaperState,handleDeleteQuactionBtn,handleImageAdd,id,imageLocation}) => {
  

  const [answerType, setAnswerType] = useState("Short Answer");
  const [imageUploadModel, setImageUploadModel] = useState(false);

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
              <div onClick={()=>setImageUploadModel(true)}>
                {!imageLocation &&<InsertPhotoOutlined className='cursor-pointer ml-1 mr-1 '></InsertPhotoOutlined>}
                {imageLocation && <CloudDoneOutlined className='text-color-primary cursor-pointer ml-1 mr-1'></CloudDoneOutlined>}
              </div>

              {/* answer type */}
              <FormControl  className="mt-1 w-20">
                <Select
                  labelId="answerType"
                  id="answerType"
                  onChange={handleAnswerTypeChange}
                  value={answerType}
                >
                  <MenuItem id={"ShortAnswer"} value="Short Answer">Short Answer</MenuItem>
                  <MenuItem id={"LongAnswer"} value="LongAnswer">Long Answer</MenuItem>
                </Select>
              </FormControl>



            </div>


              {/* Added image (if uploaded image) */}
              <img src={imageLocation} className="w-100"/>


            {/* Answer row*/}
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



            {/*image upload model*/}
            <BasicModal
              isOpen={imageUploadModel}
              modalStyles={styles.addQuactionModel}
              modalBodyStyles="p-0 px-4 py-3"
              size="md"
              >
                {console.log(imageUploadModel)}
              <ImageUploadMOdel
                  id={id}
                  setImageUploadModel={()=>setImageUploadModel(!imageUploadModel)}
                  handleImageAdd={handleImageAdd}
                  imageLocation={imageLocation}
              />
            </BasicModal>
      </div>

    </>
  );
};

export default AddQuaction;
