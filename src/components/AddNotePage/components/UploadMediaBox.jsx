import styles from './uploadMediaBox.module.scss';

function UploadMediaBox({
  file,
  setFile,
  dragOver,
  setDragOver,
  fileRef,
  discardMediaHandler,
  valid,
}) {
  return (
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
      {(!file || valid.error) && (
        <>
          <span className={styles.uploadMediaCaption}>
            {valid.error ? valid.message : 'ჩააგდე ან ატვირთე ლეპტოპის ფოტო'}
          </span>
          <label htmlFor='file' className={styles.uploadBtn}>
            ატვირთე
          </label>
          <input
            type='file'
            id='file'
            className={styles.flInp}
            ref={fileRef}
            onChange={(e) => setFile(e.target.files[0])}
          />
        </>
      )}
      {file && !valid.error && (
        <>
          <button className={styles.discardMediaBtn} onClick={discardMediaHandler}>
            <figure>
              <img src='/assets/close.svg' alt='close button icon' />
            </figure>
          </button>
          <img src={URL.createObjectURL(file)} alt='user multimedia' className={styles.userMedia} />
        </>
      )}
    </div>
  );
}

export default UploadMediaBox;
