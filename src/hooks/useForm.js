import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAxios } from './';
import { FormContext } from '../store/FormProvider';
import generateDBKeyPairs from '../utils/generateDBKeyPairs';

function useForm() {
  const {
    collaboratorData,
    pcData,
    validCollaborator,
    validPCInfo,
    file,
    dispatchForm,
    setSumbited,
  } = useContext(FormContext);

  const { sendQuery, loading, error } = useAxios();

  const navigate = useNavigate();

  const valid = validCollaborator && validPCInfo;

  async function handleSubmit(e) {
    e.preventDefault();

    if (!valid) return;

    try {
      const TOKEN = process.env.REACT_APP_JWT_TOKEN;

      const finalOutPut = {
        ...collaboratorData,
        ...pcData,
        laptopImage: file.file,
        token: TOKEN,
      };

      const data = {};
      Object.keys(finalOutPut).map((key) => (data[generateDBKeyPairs(key)] = finalOutPut[key]));

      await sendQuery(data);

      setSumbited(true);
      dispatchForm({ type: 'RESET_FORM' });

      navigate('/add-note/success');
    } catch (error) {
      // console.log(error.message);
    }
  }

  return { handleSubmit, loading, error };
}

export default useForm;
