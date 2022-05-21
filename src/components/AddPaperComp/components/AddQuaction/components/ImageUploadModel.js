import React, { useEffect, useState } from 'react';
import Col from 'reactstrap/lib/Col';
import Row from 'reactstrap/lib/Row';
import cx from 'classnames';
import CloseIcon from '@material-ui/icons/Close';
import styles from './ImageUploadModel.module.scss';
import BootstrapTooltip from '../../../../commons/toolTips/ToolTips';
import FileUpload from '../../../../commons/FileUpload/FileUpload';
const ImageUploadMOdel = ({id,setImageUploadModel,handleImageAdd,imageLocation}) => {

  // STATE
  const [allQuaction, setAllQuaction] = useState([]);
  const [PaperName, setPaperName] = useState("");
  const [diffculty, setDiffculty] = useState("Normal");
  const [grade, setGrade] = useState(10);


  // EVENT HANDLERS


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
                    setImageUploadModel();
                  }}
                />
              </BootstrapTooltip>
            </span>
          </Col>
      </Row>
      {console.log(PaperName)}

      {/* title */}
      <Row className="justify-content-center mt-2 mb-3">
        <h4 id={'styles.titleSize'} className=" font-weight-bold p-1">
          Image Upload
        </h4>
      </Row>

      <FileUpload handleImageAdd={handleImageAdd} id={id} setImageUploadModel={setImageUploadModel} imageLocation={imageLocation}></FileUpload>

    </>
  );
};

export default ImageUploadMOdel;
