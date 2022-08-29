const validators = {
  RegEx: function (target, regExx) {
    const reg = {
      onlyGeorgian: /[ა-ჰ]/g,
      onlyGeorgianAndNumbers: /[ა-ჰ0-9]/g,
      onlyEnglish: /[a-zA-Z]/g,
      onlyEnglishAndNumbers: /[a-zA-Z0-9]/g,
      onlyNumbers: /[0-9]/g,
    };
    const regEx = new RegExp(reg[regExx]);
    const valid = regEx.test(target);

    return valid;
  },

  georgianLetters: function (options) {
    try {
      if (options.target !== '' && !this.RegEx(options.target, 'onlyGeorgian'))
        throw new Error(`${options.key} უნდა შეიცავდეს მხოლოდ ქართულ ასოებს`);
      else if (this.RegEx(options.target, 'onlyEnglishAndNumbers'))
        throw new Error(`${options.key} უნდა შეიცავდეს მხოლოდ ქართულ ასოებს`);
    } catch (error) {
      throw error;
    }
  },

  englishLetters: function (options) {
    try {
      if (options.target !== '' && !this.RegEx(options.target, 'onlyEnglishAndNumbers'))
        throw new Error(`${options.key} უნდა შეიცავდეს მხოლოდ ლათინურ სიმბოლოებს`);
      else if (this.RegEx(options.target, 'onlyGeorgian'))
        throw new Error(`${options.key} უნდა შეიცავდეს მხოლოდ ლათინურ სიმბოლოებს`);
    } catch (error) {
      throw error;
    }
  },

  onlyNumbers: function (options) {
    try {
      if (options.target !== '' && !this.RegEx(options.target, 'onlyNumbers'))
        throw new Error(`${options.key} უნდა შეიცავდეს მხოლოდ ციფრებს`);
      else if (
        this.RegEx(options.target, 'onlyGeorgian') ||
        this.RegEx(options.target, 'onlyEnglish')
      )
        throw new Error(`${options.key} უნდა შეიცავდეს მხოლოდ ციფრებს`);
    } catch (error) {
      throw error;
    }
  },

  greaterZero: function (options) {
    try {
      if (options.target <= 0) throw new Error(`${options.key} - გთხოვთ მიუთითეთ ციფრი 0_ს ზემოთ`);
      else if (options.target.startsWith('0'))
        throw new Error(`${options.key} - გთხოვთ მიუთითეთ ციფრი 0_ს ზემოთ`);
    } catch (error) {
      throw error;
    }
  },

  minLength: function (options) {
    try {
      if (options.target.length < options.minLength)
        throw new Error(`${options.key} უნდა შეიცავდეს ${options.minLength} ან მეტ სიმბოლოს`);
    } catch (error) {
      throw error;
    }
  },

  endsWith: function (options) {
    try {
      if (!options.target.endsWith(options.endsWith))
        throw new Error(`${options.key} უნდა მთავრდებოდეს ${options.endsWith}_ით`);
    } catch (error) {
      throw error;
    }
  },

  isGeorgianPhoneNumber: function (options) {
    try {
      if (!options.target.startsWith('+9955'))
        throw new Error(
          `${options.key} უნდა აკმაყოფილებდეს ქართული მობილური ნომრის ფორმატს: +995 5** ** ** **`
        );
      else if (options.target.length < 13 || options.target.length > 13)
        throw new Error(
          `${options.key} უნდა აკმაყოფილებდეს ქართული მობილური ნომრის ფორმატს: +995 5** ** ** **`
        );
    } catch (error) {
      throw error;
    }
  },

  notEmpty: function (options) {
    try {
      if (options.target?.length <= 0) throw new Error(`${options.key} - ველი სავალდებულოა`);
    } catch (error) {
      throw error;
    }
  },
};

export default validators;
