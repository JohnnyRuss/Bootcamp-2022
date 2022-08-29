import { useContext } from 'react';
import { FormContext } from '../store/FormProvider';
import generateDBKeyPairs from '../utils/generateDBKeyPairs';

function useForm() {
  const { collaboratorData, pcData, validCollaborator, validPCInfo, file } =
    useContext(FormContext);
  const valid = validCollaborator && validPCInfo;

  function handleSubmit(e) {
    e.preventDefault();
    const TOKEN = process.env.REACT_APP_JWT_TOKEN;
    const finalOutPut = { ...collaboratorData, ...pcData, laptopImage: file.file, token: TOKEN };
    const data = {};
    Object.keys(finalOutPut).map((key) => (data[generateDBKeyPairs(key)] = finalOutPut[key]));
    console.log({ valid, data });
  }

  return { handleSubmit };
}

export default useForm;
