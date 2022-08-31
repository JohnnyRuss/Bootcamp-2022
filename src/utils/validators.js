/* eslint-disable no-useless-escape */
/**
 * object of validator functions
 */
const validators = {
  RegEx: function (target, regExx) {
    const reg = {
      onlyGeorgian: /[ა-ჰ]/g,
      onlyGeorgianAndNumbers: /[ა-ჰ0-9]/g,
      onlyEnglish: /[a-zA-Z]/g,
      onlyEnglishAndNumbers: /[a-zA-Z0-9]/g,
      onlyNumbers: /[0-9]/g,
      notExtraSymbols: /[!@#\$%\^\&*\)\({}["'`+=~>?|<:;.,_-]/g,
      notExtraSymbolsForEmail: /[!#\$%\^\&*\)\({}["'`+=~>|?<:;,_-]/g,
      notExtraSymbolsForPhone: /[@!#\$%\^\&*\)\({}["'`=~>|?<:;.,_-]/g,
    };
    const regEx = new RegExp(reg[regExx]);
    const valid = regEx.test(target);

    return valid;
  },

  symbolsNotInRegEx: ['/', '\\', ']'],

  regFor: function (options) {
    try {
      if (options.target !== '' && this.RegEx(options.target, options.reg))
        throw new Error(`${options.key} უნდა შეიცავდეს ექსტრა სიმბოლოებს`);
      else if (this.symbolsNotInRegEx.some((symbol) => options.target.includes(symbol)))
        throw new Error(`${options.key} უნდა შეიცავდეს ექსტრა სიმბოლოებს`);
    } catch (error) {
      throw error;
    }
  },

  georgianLetters: function (options) {
    try {
      if (this.RegEx(options.target, 'onlyEnglishAndNumbers'))
        throw new Error(`${options.key} უნდა შეიცავდეს მხოლოდ ქართულ ასოებს`);
      else if (this.RegEx(options.target, 'notExtraSymbols'))
        throw new Error(`${options.key} უნდა შეიცავდეს მხოლოდ ქართულ ასოებს`);
      else if (this.symbolsNotInRegEx.some((symbol) => options.target.includes(symbol)))
        throw new Error(`${options.key} უნდა შეიცავდეს ექსტრა სიმბოლოებს`);
    } catch (error) {
      throw error;
    }
  },

  englishLetters: function (options) {
    try {
      if (options.target !== '' && !this.RegEx(options.target, 'onlyEnglishAndNumbers'))
        throw new Error(`${options.key} უნდა შეიცავდეს მხოლოდ ლათინურ სიმბოლოებს`);
      if (this.RegEx(options.target, 'onlyGeorgian'))
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

      this.regFor({ reg: 'notExtraSymbols', key: options.key, target: options.target });
    } catch (error) {
      throw error;
    }
  },

  greaterZero: function (options) {
    try {
      if (+options.target <= 0) throw new Error(`${options.key} - გთხოვთ მიუთითეთ ციფრი 0_ს ზემოთ`);
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

  isEmail: function (options) {
    try {
      if (!options.target.endsWith('@redberry.ge'))
        throw new Error(`${options.key} უნდა მთავრდებოდეს ${options.endsWith}_ით`);
      else if (
        this.regFor({ target: options.target, key: options.key, reg: 'notExtraSymbolsForEmail' })
      )
        throw new Error('ემაილი არ არის ვალიდური');
      else if (options.target.slice(0, options.target.length - 12).includes('@'))
        throw new Error('ემაილი არ არის ვალიდური');
      else if (options.target.slice(0, options.target.length - 12).length < 3)
        throw new Error('ემაილი არ არის ვალიდური');
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
      else if (options.target.slice(1, options.target.length).includes('+'))
        throw new Error(
          `${options.key} უნდა აკმაყოფილებდეს ქართული მობილური ნომრის ფორმატს: +995 5** ** ** **`
        );
      else if (options.target.length < 13 || options.target.length > 13)
        throw new Error(
          `${options.key} უნდა აკმაყოფილებდეს ქართული მობილური ნომრის ფორმატს: +995 5** ** ** ** და არ აღემატებოდეს 13 სიმბოლოს ან იყოს 13 სიმბოლოზე ნაკლები`
        );
      else if (
        this.regFor({ target: options.target, key: options.key, reg: 'notExtraSymbolsForPhone' })
      )
        throw new Error(
          `${options.key} უნდა აკმაყოფილებდეს ქართული მობილური ნომრის ფორმატს: +995 5** ** ** **`
        );
      else if (
        this.RegEx(options.target, 'onlyGeorgian') ||
        this.RegEx(options.target, 'onlyEnglish')
      )
        throw new Error(`${options.key} უნდა შეიცავდეს მხოლოდ ციფრებს ან სიმბოლოს "+"`);
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

  enum: function (options) {
    if (!options.enum.some((en) => en === options.target))
      throw new Error(
        `${options.key} - ველი სავალდებულოა და უნდა შეიცავდეს მხოლოდ ${options.enum
          .map((en, i, err) => {
            if (i === err.length - 1) return `ან ${en}_ს`;
            else return en;
          })
          .join(' ')}`
      );
  },
};

export default validators;
