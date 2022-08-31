import styles from './styles/uploadMediaLabels.module.scss';

function UploadMediaLabels({ file, setFile, fileRef, newFile, valid }) {
  return (
    (!file || newFile || valid.error) && (
      <>
        {!newFile && (
          <>
            <label
              htmlFor='file'
              className={`${styles.uploadMediaCaption} ${valid?.error ? styles.invalid : ''}`}
              data-message={valid.message}></label>
            <label htmlFor='file' className={styles.uploadBtn}>
              ატვირთე
            </label>
          </>
        )}
        <input
          type='file'
          id='file'
          className={styles.flInp}
          ref={fileRef}
          onChange={(e) => setFile(e.target.files[0])}
        />
      </>
    )
  );
}

export default UploadMediaLabels;
