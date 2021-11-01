<template>
  <div>
<div class="form-style">
  
<form  @submit.prevent="checkForm" class="mt-3 mb-5">
<fieldset>
<legend><span class="number"></span> Form</legend>

  <p v-if="errors.length">
    <b>Fill the gaps</b>
    <ul>
      <li v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
  </p>
<input 
      type="text"
      id="name"
      v-model="name"
      name="name"
      placeholder="First Name"
      
      >

<input 
      type="text"
      id="surname"
      v-model="surname"
      name="surname"
      placeholder="Surname"
      
      >
<input 
      type="text"
      id="email"
      v-model="email"
      name="email"
      placeholder="email"
      
      >

<input 
      type="number"
      id="age"
      v-model="age"
      name="age"
      placeholder="Age"
      
      >

<input 
      type="text"
      id="hes"
      v-model="hes"
      name="hes"
      placeholder="Hes Code"
      
      >

<input 
      type="text"
      id="tc"
      v-model="tc"
      name="tc"
      placeholder="TC Number"
      
      >


<input 
      type="text"
      id="tnumber"
      v-model="tnumber"
      name="tnumber"
      placeholder="Phone Number"
      
      >

<div style="display:inline;">
  <input type="radio" id="women" name="gender" value="female"
         checked>
  <label for="women">Women</label>


  <input type="radio" id="man" name="gender" value="male">
  <label for="man">Male</label>
</div>


</fieldset>
<input type="submit" value="Book" />
</form>
</div>
  </div>
</template>

<script>
import validation from "../mixins/validation";
export default {
  data: function () {
    return {
      errors: [],
      name: null,
      surname: null,
      email: null,
      age: null,
      hes: null,
      tc: null,
      tnumber: null,
      gender: null,
    };
  },
  mixins: [validation],
};
</script>
<style scoped>
</style>