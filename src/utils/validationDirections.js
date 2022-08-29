const validationDirections = {
  name: {
    validate: ['georgianLetters', 'minLength'],
    options: { minLength: 2, key: 'მომხმარებლის სახელი' },
  },
  surname: {
    validate: ['georgianLetters', 'minLength'],
    options: { minLength: 2, key: 'მომხმარებლის გვარი' },
  },
  email: {
    validate: ['notEmpty', 'englishLetters', 'endsWith'],
    options: { endsWith: '@redberry.ge', key: 'მომხმარებლის ემაილი' },
  },
  phoneNumber: {
    validate: ['notEmpty', 'onlyNumbers', 'isGeorgianPhoneNumber'],
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
    validate: ['notEmpty', 'onlyNumbers', 'greaterZero'],
    options: { key: 'CPU_ს ბირთვი' },
  },
  laptopCpuThreads: {
    validate: ['notEmpty', 'onlyNumbers', 'greaterZero'],
    options: { key: 'CPU_ს ნაკადი' },
  },
  laptopRam: {
    validate: ['notEmpty', 'onlyNumbers', 'greaterZero'],
    options: { key: 'ლეპტოპის RAM (GB)' },
  },
  laptopHardDriveType: {
    validate: ['notEmpty', 'englishLetters'],
    options: { key: 'მეხსიერების ტიპი', enum: ['SSD', 'HDD'] },
  },
  laptopPrice: {
    validate: ['notEmpty', 'onlyNumbers', 'greaterZero'],
    options: { key: 'ლეპტოპის ფასი' },
  },
  laptopState: {
    validate: ['notEmpty', 'georgianLetters'],
    options: { key: 'ლეპტოპის მდგომარეობა', enum: ['ახალი', 'მეორადი'] },
  },
};

export default validationDirections;
