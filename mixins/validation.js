const validation = {
  methods: {
    checkForm: function (e) {

      this.errors = [];
      if (!this.name) {
        this.errors.push('Cant be empty');
      }
      if (!this.surname) {
        this.errors.push('Cant be empty');
      }
      if (!this.age) {
        this.errors.push('Cant be empty');
      }

      if (this.age < 1) {
        this.errors.push('Cant be empty');
      }


      if (!this.email) {
        this.errors.push('Cant be empty');

      }

      if (!this.hes) {
        this.errors.push('Cant be empty');
      }

      if (!this.tc) {
        this.errors.push('Cant be empty');
      }

      if (!this.tnumber) {
        this.errors.push('Cant be empty');
      }

      if (!this.tnumber.length == 11) {
        this.errors.push('Number length must be 11 numbers');
      }




      if (!emailIsValid(this.email)) {
        this.errors.push('Email not confirmed');
      }


      if (!hesValid(this.hes)) {
        this.errors.push('Hes code is not real');
      }

      function emailIsValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      }

      function hesValid(hes) {
        return /^[A-Z0-9][A-Z0-9][A-Z0-9][A-Z0-9]-[A-Z0-9][A-Z0-9][A-Z0-9][A-Z0-9]-[0-9][0-9]$/g.test(hes)
      }

      if (!this.tc.length == 11) {
        this.errors.push('Your number must be 11 numbers');
      }

      if (this.errors.length == 0) {
        return true;
      }

      e.preventDefault();
    }
  },



}

export default validation;