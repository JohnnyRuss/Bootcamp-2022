/* eslint-disable array-callback-return */
import { useReducer, useEffect, useState } from 'react';
import { getFormDataFromLocal } from '../utils/getLocalData';
import validators from '../utils/validators';
import validationDirections from '../utils/validationDirections';

const initialState = {
  error: {
    valid: false,
    error: false,
    message: '',
  },
  firstTouch: false,
  active: false,
};

function errorReducer(state, action) {
  switch (action.type) {
    case 'ON_BLUR':
      return { ...state, firstTouch: true, active: false };
    case 'ON_FOCUS':
      return { ...state, active: true };
    case 'VALIDATE':
      try {
        proccessValidation(action.key, action.value);
        return {
          ...state,
          error: { ...state.error, error: false, valid: true, message: '' },
        };
      } catch (error) {
        return {
          ...state,
          error: { ...state.error, error: true, valid: false, message: error.message },
        };
      }
    default:
      return { ...state };
  }
}

function proccessValidation(key, value) {
  try {
    validationDirections[key].validate.map((requirement) =>
      validators[requirement]({ ...validationDirections[key].options, target: value })
    );
  } catch (error) {
    throw error;
  }
}

function useFormValidation(key, value) {
  const [didMount, setDidMount] = useState(false);
  const [{ active, firstTouch, error }, dispatch] = useReducer(errorReducer, initialState);

  const onBlur = () => dispatch({ type: 'ON_BLUR' });

  const onFocus = () => dispatch({ type: 'ON_FOCUS' });

  useEffect(() => {
    if (didMount && (key === 'laptopHardDriveType' || key === 'laptopState'))
      dispatch({ type: 'VALIDATE', key, value });

    if (firstTouch && active) dispatch({ type: 'VALIDATE', key, value });

    if (firstTouch && !active) dispatch({ type: 'VALIDATE', key, value });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, key, active, firstTouch]);

  // after window reload revalidates existing fields
  useEffect(() => {
    const { reservedData, existingCollaboratorData, existingPcData } = getFormDataFromLocal();

    if (existingCollaboratorData || existingPcData) {
      const { collaboratorData, pcData } = reservedData;
      if (existingCollaboratorData)
        Object.keys(collaboratorData)
          .filter((key) => collaboratorData[key] !== '')
          .map((field) => {
            if (field === key)
              dispatch({ type: 'VALIDATE', key: field, value: collaboratorData[field] });
          });

      if (existingPcData)
        Object.keys(pcData)
          .filter((key) => pcData[key] !== '')
          .map((field) => {
            if (field === key) dispatch({ type: 'VALIDATE', key: field, value: pcData[field] });
          });
    }

    setDidMount(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    onFocus,
    onBlur,
    error,
  };
}

export default useFormValidation;
