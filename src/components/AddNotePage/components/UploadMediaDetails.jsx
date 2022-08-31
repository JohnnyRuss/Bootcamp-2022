import styles from './styles/uploadMediaDetails.module.scss';
import bytesToSize from '../../../utils/bytesToSize';

function UploadMediaDetails({ file, setNewFile }) {
  return (
    file && (
      <div className={styles.mediaDetailsBox}>
        <figure>
          <img src='/assets/valid-media-icon.svg' alt='close button icon' />
          <span>{file?.name}</span>
          <span>{bytesToSize(file?.size) || ''}</span>
        </figure>
        <label htmlFor='file' onClick={() => setNewFile(true)}>
          თავიდან ატვირთე
        </label>
      </div>
    )
  );
}

export default UploadMediaDetails;
