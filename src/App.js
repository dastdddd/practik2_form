import React from 'react';
import './App.css';
import Count from './components/count';
import FormInput from './components/formInput';
import HookForm from './components/hookForm';




const App = () => {


  return (
    <div>
      <Count/>
      <hr />
      <FormInput/>
      <hr />
      <HookForm/>
    </div>
  );
};

export default App;