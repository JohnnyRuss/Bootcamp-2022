import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useFormValidation } from '../../hooks';
import { FormContext } from '../../store/FormProvider';

import styles from './styles/addCollaborator.module.scss';
import { PrimaryButton } from '../Layouts';
import { InputField, SelectField } from './components';

function AddCollaborator() {
  const navigate = useNavigate();

  const { handleType, setValidForm, collaboratorData, handleField } = useContext(FormContext);

  const {
    onFocus: onFocusName,
    onBlur: onBlurName,
    error: errorName,
  } = useFormValidation('name', collaboratorData.name);

  const {
    onFocus: onFocusSurName,
    onBlur: onBlurSurName,
    error: errorSurName,
  } = useFormValidation('surname', collaboratorData.surname);

  const {
    onFocus: onFocusEmail,
    onBlur: onBlurEmail,
    error: errorEmail,
  } = useFormValidation('email', collaboratorData.email);

  const {
    onFocus: onFocusPhoneNumber,
    onBlur: onBlurPhoneNumber,
    error: errorPhoneNumber,
  } = useFormValidation('phoneNumber', collaboratorData.phoneNumber);

  const {
    onFocus: onFocusTeam,
    onBlur: onBlurTeam,
    error: errorTeam,
  } = useFormValidation('teamId', collaboratorData.teamId);

  const {
    onFocus: onFocusPosition,
    onBlur: onBlurPosition,
    error: errorPosition,
  } = useFormValidation('positionId', collaboratorData.positionId);

  const validForm =
    errorName.valid &&
    errorSurName.valid &&
    errorEmail.valid &&
    errorPhoneNumber.valid &&
    errorTeam.valid &&
    errorPosition.valid;

  useEffect(() => {
    setValidForm((prev) => ({ ...prev, validCollaborator: validForm }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validForm]);

  useEffect(() => {
    handleType('collaboratorData');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleNextRoute(e) {
    e.preventDefault();
    if (validForm) navigate('/add-note/pc-info');
  }

  return (
    <form className={styles.addCollaboratorForm}>
      <InputField
        id='userNname'
        name='name'
        label='სახელი'
        hint={'მინიმუმ 2 სიმბოლო, ქართული ასოები'}
        value={collaboratorData.name}
        onChange={(e) => handleField(e.target)}
        onFocus={onFocusName}
        onBlur={onBlurName}
        valid={errorName}
        col={1}
      />
      <InputField
        id='surName'
        name='surname'
        label='გვარი'
        hint='მინიმუმ 2 სიმბოლო, ქართული ასოები'
        value={collaboratorData.surname}
        onChange={(e) => handleField(e.target)}
        onFocus={onFocusSurName}
        onBlur={onBlurSurName}
        valid={errorSurName}
        col={1}
      />
      <SelectField
        label='თიმი'
        list={['hr', 'manager', 'developer', 'instructor']}
        name="teamId"
        value={collaboratorData.teamId}
        onSelect={(name, value) => handleField({ name, value })}
        onFocus={onFocusTeam}
        onBlur={onBlurTeam}
        valid={errorTeam}
        col={2}
      />
      <SelectField
        label='პოზიცია'
        list={['hr', 'manager', 'developer', 'instructor']}
        name="positionId"
        value={collaboratorData.positionId}
        onSelect={(name, value) => handleField({ name, value })}
        onFocus={onFocusPosition}
        onBlur={onBlurPosition}
        valid={errorPosition}
        col={2}
      />
      <InputField
        id='meil'
        name='email'
        label='მეილი'
        hint='უნდა მთავრდებოდეს @redberry.ge_ით'
        value={collaboratorData.meil}
        onChange={(e) => handleField(e.target)}
        onFocus={onFocusEmail}
        onBlur={onBlurEmail}
        valid={errorEmail}
        col={2}
      />
      <InputField
        id='phoneNumber'
        name='phoneNumber'
        label='ტელეფონის ნომერი'
        hint='უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს'
        value={collaboratorData.phoneNumber}
        onChange={(e) => handleField(e.target)}
        onFocus={onFocusPhoneNumber}
        onBlur={onBlurPhoneNumber}
        valid={errorPhoneNumber}
        col={2}
      />
      <PrimaryButton
        className={`${styles['col-1']} ${styles.btnNext}`}
        onClick={handleNextRoute}
        disabled={!validForm}>
        შემდეგი
      </PrimaryButton>
    </form>
  );
}

export default AddCollaborator;
