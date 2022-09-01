import { useState } from 'react';

import styles from './styles/uploadMediaBox.module.scss';
import UploadMediaDetails from './UploadMediaDetails';
import UploadMediaLabels from './UploadMediaLabels';

function UploadMediaBox({ file, setFile, dragOver, setDragOver, fileRef, valid }) {
  const [newFile, setNewFile] = useState(false);
  return (
    <>
      <div
        className={`${styles.uploadMediaBox} ${file || dragOver ? styles.active : ''} ${
          valid?.error ? styles.invalid : ''
        }`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          setDragOver(false);
        }}
        onDragEnd={(e) => {
          e.preventDefault();
          setDragOver(false);
        }}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          setFile(e.dataTransfer.files[0]);
        }}>
        <UploadMediaLabels
          file={file}
          setFile={setFile}
          fileRef={fileRef}
          newFile={newFile}
          valid={valid}
        />
        {file && !valid.error && (
          <>
            <img
              src={URL.createObjectURL(file)}
              alt='user multimedia'
              className={styles.userMedia}
            />
          </>
        )}
      </div>
      {file && !valid.error && <UploadMediaDetails file={file} setNewFile={setNewFile} />}
    </>
  );
}

export default UploadMediaBox;
