const initialFile = {
  didMount: false,
  file: null,
  dragOver: false,
  fileError: {
    message: '',
    error: false,
    valid: false,
  },
};

export const formState = {
  collaboratorData: {
    name: '',
    surname: '',
    teamId: '',
    positionId: '',
    phoneNumber: '',
    email: '',
  },
  pcData: {
    laptopName: '',
    laptopBrandId: '',
    laptopCpu: '',
    laptopCpuCores: '',
    laptopCpuThreads: '',
    laptopRam: '',
    laptopHardDriveType: '',
    laptopState: '',
    laptopPrice: '',
    laptopPurchaseDate: '',
  },
  file: { ...initialFile },
};

export function formReducer(state, action) {
  switch (action.type) {
    case 'ON_CHANGE':
      return { ...state, [action.target]: { ...state[action.target], [action.key]: action.value } };
    case 'SET_GLOBAL':
      return { ...state, [action.target]: { ...state[action.target], ...action.value } };
    case 'SET_DID_MOUNT':
      return { ...state, file: { ...state.file, didMount: true } };
    case 'SET_DRAG_OVER':
      return { ...state, file: { ...state.file, dragOver: action.value } };
    case 'SET_FILE':
      return { ...state, file: { ...state.file, file: action.value } };
    case 'SET_FILE_ERROR':
      return {
        ...state,
        file: {
          ...state.file,
          fileError: {
            ...state.file.fileError,
            error: action.error,
            valid: action.valid,
            message: action.message,
          },
        },
      };
    case 'RESET_FILE':
      return {
        ...state,
        file: { ...initialFile },
      };
    case 'RESET_FORM':
      return {
        ...state,
        ...formState,
      };
    default:
      return state;
  }
}
