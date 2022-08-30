import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { FormContext } from '../../store/FormProvider';
import { useForm, useFormValidation, useAxios } from '../../hooks';
import { getLocaleStorage } from '../../utils/getLocalData';

import styles from './styles/addPC.module.scss';
import { InputField, SelectField, UploadMediaBox, RadioBlock, StatePopUp } from './components';
import { PrimaryButton } from '../Layouts';

function AddPC() {
  const naviagte = useNavigate();
  const { data: selectOptions } = useAxios('getAllQuery', {
    paths: ['brands', 'cpus'],
  });

  const {
    handleType,
    setValidForm,
    validCollaborator,
    dispatchForm,
    pcData,
    file,
    fileRef,
    discardMediaHandler,
    handleField,
  } = useContext(FormContext);

  const {
    onFocus: onFocusName,
    onBlur: onBlurName,
    error: errorName,
  } = useFormValidation('laptopName', pcData?.laptopName);

  const {
    onFocus: onFocusBrand,
    onBlur: onBlurBrand,
    error: errorBrand,
  } = useFormValidation('laptopBrandId', pcData?.laptopBrandId);

  const {
    onFocus: onFocusCPU,
    onBlur: onBlurCPU,
    error: errorCPU,
  } = useFormValidation('laptopCpu', pcData?.laptopCpu);

  const {
    onFocus: onFocusCpuCore,
    onBlur: onBlurCpuCore,
    error: errorCpuCore,
  } = useFormValidation('laptopCpuCores', pcData?.laptopCpuCores);

  const {
    onFocus: onFocusCpuFlow,
    onBlur: onBlurCpuFlow,
    error: errorCpuFlow,
  } = useFormValidation('laptopCpuThreads', pcData?.laptopCpuThreads);

  const {
    onFocus: onFocusRam,
    onBlur: onBlurRam,
    error: errorRam,
  } = useFormValidation('laptopRam', pcData?.laptopRam);

  const { error: errorLaptopHardDriveType } = useFormValidation(
    'laptopHardDriveType',
    pcData?.laptopHardDriveType
  );

  const {
    onFocus: onFocusPrice,
    onBlur: onBlurPrice,
    error: errorPrice,
  } = useFormValidation('laptopPrice', pcData?.laptopPrice);

  const { error: errorLaptopState } = useFormValidation('laptopState', pcData?.laptopState);

  const handleRouteBack = () => naviagte('/add-note/collaborator-info');

  const validPcInfo =
    file.fileError.valid &&
    errorName.valid &&
    errorBrand.valid &&
    errorCPU.valid &&
    errorCpuCore.valid &&
    errorCpuFlow.valid &&
    errorRam.valid &&
    errorLaptopHardDriveType.valid &&
    errorPrice.valid &&
    errorLaptopState.valid;

  useEffect(() => {
    setValidForm((prev) => ({ ...prev, validPCInfo: validPcInfo }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validPcInfo]);

  /**
   * runs on did mount and checks two thing
   * firstly checks if user somehow make a route to /add-note/pc-info whenever /add-note/collaborator-info has not valid form, user will be renavigated back to /add-note/collaborator-info
   * and after that sets form type to Context
   */
  useEffect(() => {
    const valid = getLocaleStorage('validUpdate');
    if (!valid?.validCollaborator) naviagte('/add-note/collaborator-info');
    handleType('pcData');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { handleSubmit, loading, error } = useForm();

  return (
    <form className={styles.addPcForm}>
      <StatePopUp loading={loading} error={error} />
      <UploadMediaBox
        file={file.file}
        dragOver={file.dragOver}
        setDragOver={(value) => dispatchForm({ type: 'SET_DRAG_OVER', value })}
        setFile={(value) => dispatchForm({ type: 'SET_FILE', value })}
        fileRef={fileRef}
        discardMediaHandler={discardMediaHandler}
        valid={file.fileError}
      />
      <InputField
        id='pcName'
        label='ლეპტოპის სახელი'
        hint='ლათინური ასოები, ციფრები, !@#$%^&*()_+='
        name='laptopName'
        value={pcData?.laptopName}
        onChange={(e) => handleField(e.target)}
        onFocus={onFocusName}
        onBlur={onBlurName}
        valid={errorName}
        col={'6-3'}
      />
      <SelectField
        label='ლეპტოპის ბრენდი'
        list={selectOptions?.brands ? selectOptions.brands : []}
        value={pcData?.laptopBrandId}
        name='laptopBrandId'
        onSelect={(name, value) => handleField({ name, value })}
        onFocus={onFocusBrand}
        onBlur={onBlurBrand}
        valid={errorBrand}
        col={'6-3'}
      />
      <hr className={styles['col-6']} />
      <SelectField
        label='CPU'
        list={selectOptions?.cpus ? selectOptions.cpus : []}
        value={pcData?.laptopCpu}
        name='laptopCpu'
        onSelect={(name, _, value) => handleField({ name, value })}
        onFocus={onFocusCPU}
        onBlur={onBlurCPU}
        valid={errorCPU}
        col={2}
      />
      <InputField
        id='cpu-core'
        label='CPU-ს ბირთვი'
        hint='მხოლოდ ციფრები'
        name='laptopCpuCores'
        value={pcData?.laptopCpuCores}
        onChange={(e) => handleField(e.target)}
        onFocus={onFocusCpuCore}
        onBlur={onBlurCpuCore}
        valid={errorCpuCore}
        col={'6-2'}
      />
      <InputField
        id='cpu-thread'
        label='CPU-ს ნაკადი'
        hint='მხოლოდ ციფრები'
        name='laptopCpuThreads'
        value={pcData?.laptopCpuThreads}
        onChange={(e) => handleField(e.target)}
        onFocus={onFocusCpuFlow}
        onBlur={onBlurCpuFlow}
        valid={errorCpuFlow}
        col={'6-2'}
      />
      <InputField
        id='ram'
        label='ლეპტოპის RAM (GB)'
        hint='მხოლოდ ციფრები'
        name='laptopRam'
        value={pcData?.laptopRam}
        onChange={(e) => handleField(e.target)}
        onFocus={onFocusRam}
        onBlur={onBlurRam}
        valid={errorRam}
        col={'6-3'}
      />
      <RadioBlock
        caption=' მეხსიერების ტიპი'
        name='laptopHardDriveType'
        radios={[
          {
            id: 'ssd',
            label: 'SSD',
            value: 'SSD',
          },
          {
            id: 'hdd',
            label: 'HDD',
            value: 'HDD',
          },
        ]}
        onChange={(e) => handleField(e.target)}
        valid={errorLaptopHardDriveType}
        userValue={pcData.laptopHardDriveType}
      />
      <hr className={styles['col-6']} />
      <input
        type='date'
        className={styles.datePicker}
        defaultValue={pcData?.laptopPurchaseDate || ''}
        name='laptopPurchaseDate'
        onChange={(e) => handleField(e.target)}
      />
      <InputField
        id='price'
        label='ლეპტოპის ფასი'
        hint='მხოლოდ ციფრები'
        col={'6-3'}
        name='laptopPrice'
        value={pcData?.laptopPrice}
        onChange={(e) => handleField(e.target)}
        onFocus={onFocusPrice}
        onBlur={onBlurPrice}
        valid={errorPrice}
      />
      <RadioBlock
        caption='ლეპტოპის მდგომარეობა'
        name='laptopState'
        radios={[
          {
            id: 'new',
            label: 'ახალი',
            value: 'new',
          },
          {
            id: 'secondary',
            label: 'მეორადი',
            value: 'used',
          },
        ]}
        onChange={(e) => handleField(e.target)}
        valid={errorLaptopState}
        userValue={pcData.laptopState}
      />
      <PrimaryButton className={`${styles.btn} ${styles.btnBack}`} onClick={handleRouteBack}>
        უკან
      </PrimaryButton>
      <PrimaryButton
        onClick={handleSubmit}
        className={` ${styles.btn} ${styles.btnNext}`}
        disabled={!validCollaborator || !validPcInfo}>
        დამახსოვრება
      </PrimaryButton>
    </form>
  );
}

export default AddPC;
