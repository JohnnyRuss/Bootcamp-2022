import { createContext, useEffect, useState, useRef, useReducer } from 'react';
import { useLocation } from 'react-router-dom';
import {
  getFormDataFromLocal,
  getLocaleStorage,
  removeFromLocale,
  setDataToLocale,
} from '../utils/getLocalData';
import { formReducer, formState } from './formReducer';

export const FormContext = createContext({
  handleType: (type) => {},
  setValidForm: () => {},
  validCollaborator: false,
  validPCInfo: false,
  dispatchForm: ({ type, target, key, value }) => {},
  collaboratorData: {},
  pcData: {},
  file: {},
  fileRef: {},
  teamId: '',
  setTeamId: (id) => {},
  discardMediaHandler: () => {},
  handleField: ({ name, value }) => {},
  setSumbited: () => {},
});

function FormProvider({ children }) {
  /////////////////////////////////////////////////
  // scrolls to top on path-change
  /////////////////////////////////////////////////
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname]);

  /////////////////////////////////////////////////
  // final validation
  /////////////////////////////////////////////////

  const [sumbited, setSumbited] = useState(false);

  const [validForm, setValidForm] = useState({
    validCollaborator: false,
    validPCInfo: false,
  });

  const { validCollaborator, validPCInfo } = validForm;

  // saves information about page validation
  useEffect(() => {
    const valid = getLocaleStorage('validUpdate');

    setDataToLocale('validUpdate', {
      validCollaborator: valid?.validCollaborator ? true : validCollaborator,
      validPCInfo: valid?.validPCInfo ? true : validPCInfo,
    });
  }, [validCollaborator, validPCInfo]);

  /////////////////////////////////////////////////
  // forms state
  /////////////////////////////////////////////////
  const [{ collaboratorData, pcData, file }, dispatchForm] = useReducer(formReducer, formState);
  const [type, setType] = useState('');
  const handleType = (tp) => setType(tp);
  const fileRef = useRef();
  const imgFile = file.file;
  const [teamId, setTeamId] = useState('');

  /**
   * runs whenever selected data will change and in the 1s delayed timer reserves data to localeStorage.
   * returns timer cleaner function
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      const { reservedData } = getFormDataFromLocal();
      const tmId = getLocaleStorage('teamId');

      if (sumbited) {
        removeFromLocale('reservedInfo');
        removeFromLocale('validUpdate');
        return;
      }

      if (type === 'collaboratorData') {
        setDataToLocale('reservedInfo', {
          collaboratorData: collaboratorData,
          pcData: reservedData?.pcData,
        });

        if (!tmId?.tmId && teamId) setDataToLocale('teamId', { tmId: teamId });
      }

      if (type === 'pcData')
        setDataToLocale('reservedInfo', {
          collaboratorData: reservedData?.collaboratorData,
          pcData: pcData,
        });
    }, 1000);

    return () => clearTimeout(timer);
  }, [collaboratorData, pcData, type, teamId, sumbited]);

  /**
   * runs on component did mount and checks if reserved data exists and checks last validation state. if exists reSets them
   */
  useEffect(() => {
    const { reservedData, existingCollaboratorData, existingPcData } = getFormDataFromLocal();
    const valid = getLocaleStorage('validUpdate');
    const tmId = getLocaleStorage('teamId');

    if (existingPcData)
      dispatchForm({ type: 'SET_GLOBAL', target: 'pcData', value: reservedData.pcData });

    if (existingCollaboratorData)
      dispatchForm({
        type: 'SET_GLOBAL',
        target: 'collaboratorData',
        value: reservedData.collaboratorData,
      });

    if (tmId?.tmId) setTeamId(tmId.tmId);

    if (valid) setValidForm(valid);
  }, []);

  function discardMediaHandler() {
    if (fileRef.current) fileRef.current.value = '';
    dispatchForm({ type: 'RESET_FILE' });
  }

  useEffect(() => {
    function isImg() {
      if (imgFile?.type?.split('/')?.[0] !== 'image' || !imgFile?.size)
        dispatchForm({
          type: 'SET_FILE_ERROR',
          message: 'ლეპტოპის სურათი - ველი სავალდებულოა და უნდა შეიცავდეს მხოლოდ ფოტოს',
          error: true,
          valid: false,
        });
      else dispatchForm({ type: 'SET_FILE_ERROR', message: '', error: false, valid: true });
    }

    if (file.didMount) isImg();

    dispatchForm({ type: 'SET_DID_MOUNT' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imgFile]);

  const handleField = (e) =>
    dispatchForm({
      type: 'ON_CHANGE',
      target: type,
      key: e.name,
      value: e.value,
    });

  return (
    <FormContext.Provider
      value={{
        setSumbited,
        handleType,
        validCollaborator,
        validPCInfo,
        setValidForm,
        dispatchForm,
        collaboratorData,
        pcData,
        file,
        fileRef,
        discardMediaHandler,
        teamId,
        setTeamId,
        handleField,
      }}>
      {children}
    </FormContext.Provider>
  );
}

export default FormProvider;
