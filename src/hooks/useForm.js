import { useContext, useState } from 'react';

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

  const valid = validCollaborator && validPCInfo;

  const [success, setSuccess] = useState(false);

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

      setSuccess(true);
    } catch (error) {
      // console.log(error.message);
    }
  }

  return { handleSubmit, loading, error, success };
}

export default useForm;
