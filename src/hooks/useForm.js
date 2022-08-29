import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../store/FormProvider';
import generateDBKeyPairs from '../utils/generateDBKeyPairs';
import { removeFromLocale } from '../utils/getLocalData';

function useForm() {
  const { collaboratorData, pcData, validCollaborator, validPCInfo, file } =
    useContext(FormContext);
  const valid = validCollaborator && validPCInfo;

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const TOKEN = process.env.REACT_APP_JWT_TOKEN;
    const finalOutPut = { ...collaboratorData, ...pcData, laptopImage: file.file, token: TOKEN };
    const data = {};
    Object.keys(finalOutPut).map((key) => (data[generateDBKeyPairs(key)] = finalOutPut[key]));
    if (valid) {
      ['reservedInfo', 'validUpdate'].forEach((key) => removeFromLocale(key));
      navigate('/add-note/success');
    }
    console.log({ valid, data });
  }

  return { handleSubmit };
}

export default useForm;
