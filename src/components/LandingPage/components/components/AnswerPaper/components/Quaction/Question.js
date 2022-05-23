import React, { useState } from 'react';
import cx from 'classnames';
import styles from './Question.module.scss';
import { FormControl, MenuItem, Select, TextField } from '@material-ui/core';
import { CloudDoneOutlined, DeleteOutline, InsertPhotoOutlined } from '@material-ui/icons';
import BootstrapTooltip from '../../../../../../commons/toolTips/ToolTips';


const AddQuaction = ({id,imageLocation,quaction,index}) => {
  

  const [answerType, setAnswerType] = useState("Short Answer");
  const [imageUploadModel, setImageUploadModel] = useState(false);

  const handleAnswerTypeChange = (event) => {
    setAnswerType(event.target.value);
  };

  return (
    <>
      {console.log(quaction)}
       <div data-id={id} className={cx('pt-2 pl-1 pr-2 pb-3 mt-3 AddQuaction',styles.AddQuaction)} >
            {/* Quaction Row*/}
            <div className={cx('',styles.QuactionRow)}>
              {/* quaction */}
              <div id="quactionId" className='flex-1'>{index}) {quaction.question} ? *</div>

            </div>

            {/* Added image Preview (if uploaded image) */}
              {quaction.fileId &&(<div className='display-flex mt-3'>
                 <img src={`https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg`} className={cx('border-radius-15 cursor-pointer ',styles.addedImagePreview)} onClick={()=>setImageUploadModel(!imageUploadModel)}/>
              </div>)}


            {/* Answer row*/}
            <div className={cx('mt-3',styles.AnswerRow)}>{answerType}</div>

      </div>

    </>
  );
};

export default AddQuaction;
