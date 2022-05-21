import React, { useState } from 'react';
import styles from './FileUpload.module.scss';
import cx from 'classnames';
import { CloudUploadOutlined, InsertDriveFileOutlined, PhotoSizeSelectActualOutlined } from '@material-ui/icons';
import Axios from 'axios';
import { post, postFormData } from '../../../api/main.api';



function FileUpload({className="",id,handleImageAdd,setImageUploadModel,imageLocation}) {
    const[uploadSatate,SetUploadMessage]=useState('Drag and drop or  click');

    // EVENT LISTNERS
    const handleChange=(e)=>{
        const imagefile = e.target;
        console.log(imagefile);
        console.log(URL.createObjectURL(e.target.files[0]));

        //  set image file name bottom html text
        if(imagefile){
            SetUploadMessage(`${imagefile.name}`);
            setImageUploadModel();
        }

        let formData = new FormData();

        // set options to fromdata
        formData.append('demo_file',imagefile);
        formData.append('dimensions',[{width:590,height:331}]);

        // add image loaction and formdata 
        handleImageAdd(id,{imgLocation:URL.createObjectURL(e.target.files[0]),formData:formData});

        // postFormData('files',formData).then(data=>{
        //     console.log(data);
        // })
    };   

  return (
    <div className={cx(styles.fileUpload)}  onChange={handleChange}>        

        <div className={cx(styles.fileUploadDiv)}>

               
               
               {(uploadSatate.split(' ')[0]=="Drag") &&   <CloudUploadOutlined className={cx(styles.svg,imageLocation?"display-none":"")} ></CloudUploadOutlined>}
               {!(uploadSatate.split(' ')[0]=="Drag") &&  <PhotoSizeSelectActualOutlined className={cx(styles.svg,(imageLocation?"display-none":""))} ></PhotoSizeSelectActualOutlined>}
                <div className={cx('font-1-4',imageLocation?"display-none":"",styles.uploadStateText)}>{uploadSatate}</div>

        </div>

        {/* Uploaded Image */}
        <div className={cx('p-1',styles.dragAndDrop)}>
            <img src={imageLocation} className="w-100"></img>
        </div>  


        <input   type="file"  border={false} className={cx('p-1  opacity-0',styles.fileUploadInput,styles.dragAndDrop)} ></input>



    </div>
  );
}



export default FileUpload;