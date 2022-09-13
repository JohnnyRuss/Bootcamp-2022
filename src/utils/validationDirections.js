/**
 * describes each form-data field, what kind of validation requests field must to pass
 */
const validationDirections = {
  name: {
    validate: ['georgianLetters', 'minLength', 'includesEmptySpace'],
    options: { minLength: 2, key: 'მომხმარებლის სახელი' },
  },
  surname: {
    validate: ['georgianLetters', 'minLength', 'includesEmptySpace'],
    options: { minLength: 2, key: 'მომხმარებლის გვარი' },
  },
  email: {
    validate: ['notEmpty', 'isEmail', 'englishLetters'],
    options: { key: 'მომხმარებლის ემაილი' },
  },
  phoneNumber: {
    validate: ['notEmpty', 'isGeorgianPhoneNumber', 'includesEmptySpace'],
    options: { key: 'მომხმარებლის ტელეფონის ნომერი' },
  },
  teamId: {
    validate: ['notEmpty'],
    options: { key: 'თიმი' },
  },
  positionId: {
    validate: ['notEmpty'],
    options: { key: 'პოზიცია' },
  },
  laptopName: {
    validate: ['notEmpty', 'englishLetters'],
    options: { minLength: 2, key: 'ლეპტოპის სახელი' },
  },
  laptopBrandId: {
    validate: ['notEmpty'],
    options: { key: 'ლეპტოპის ბრენდი' },
  },
  laptopCpu: {
    validate: ['notEmpty'],
    options: { key: 'CPU' },
  },
  laptopCpuCores: {
    validate: ['notEmpty', 'onlyNumbers', 'greaterZero', 'includesEmptySpace'],
    options: { key: 'CPU_ს ბირთვი' },
  },
  laptopCpuThreads: {
    validate: ['notEmpty', 'onlyNumbers', 'greaterZero', 'includesEmptySpace'],
    options: { key: 'CPU_ს ნაკადი' },
  },
  laptopRam: {
    validate: ['notEmpty', 'onlyNumbers', 'greaterZero', 'includesEmptySpace'],
    options: { key: 'ლეპტოპის RAM (GB)' },
  },
  laptopHardDriveType: {
    validate: ['notEmpty', 'englishLetters', 'enum'],
    options: { key: 'მეხსიერების ტიპი', enum: ['SSD', 'HDD'] },
  },
  laptopPrice: {
    validate: ['notEmpty', 'onlyNumbers', 'greaterZero', 'includesEmptySpace'],
    options: { key: 'ლეპტოპის ფასი' },
  },
  laptopState: {
    validate: ['notEmpty', 'enum'],
    options: { key: 'ლეპტოპის მდგომარეობა', enum: ['new', 'used'] },
  },
};

export default validationDirections;
