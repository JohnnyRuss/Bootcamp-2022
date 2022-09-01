/* eslint-disable no-useless-escape */
import validator from 'validator';
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
      notExtraSymbolsForEmail: /[!#\$%\^\&*\)\({}["'`+=~>|?<:;,]/g,
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

  includesEmptySpace: function (options) {
    if (options.target.includes(' '))
      throw new Error(`${options.key} არ შეძლება შეიცავდეს ცარიელ სივრცეებს`);
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
    const enabledExtras = ['.', '-', '_'];
    const emailPrefix = options.target.split('@')[0];

    try {
      if (!validator.isEmail(options.target)) throw new Error(`${options.key} არ არის ვალიდური`);
      else if (!options.target.endsWith('@redberry.ge'))
        throw new Error(`${options.key} უნდა მთავრდებოდეს @redberry.ge_ით`);
      else if (
        this.regFor({ target: options.target, key: options.key, reg: 'notExtraSymbolsForEmail' })
      )
        throw new Error('ემაილი არ არის ვალიდური');
      else if (
        enabledExtras.some((extra) => emailPrefix.endsWith(extra) || emailPrefix.startsWith(extra))
      )
        throw new Error('ემაილი არ არის ვალიდური');
      else if (
        [...emailPrefix].some(
          (char, i, str) => enabledExtras.includes(char) && enabledExtras.includes(str[i + 1])
        )
      )
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
      const targ = `${options.target}`;
      if (targ.trim().length < 1) throw new Error(`${options.key} - ველი სავალდებულოა`);
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

  isImage: function (options) {
    if (options.file?.type?.split('/')?.[0] !== 'image' || !options.file?.size)
      throw new Error('ლეპტოპის სურათი - ველი სავალდებულოა და უნდა შეიცავდეს მხოლოდ ფოტოს');
    else if (options.file.size / 1024 >= 900)
      throw new Error('ლეპტოპის სურათი - ფაილის ზომა არ უნდა აღემატებოდეს 900KB_ს');
  },
};

export default validators;
