import React from 'react'
import style from './UploadBox.module.scss'

const UploadBox = () => {
  return (
    <div className={style.flexContainer}>
        <img src="upload.png" alt=''/>
        <p className={style.flexContainer_paragraph}>( File accepted: pdf. doc/ docx -<br />
Max file size : 150kb for demo limit )</p>
<button className={style.flexContainer_btn}>Upload The Documents</button>
    </div>
  )
}

export default UploadBox