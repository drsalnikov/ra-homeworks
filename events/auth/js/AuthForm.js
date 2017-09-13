'use strict';

const AuthForm = ({onAuth}) => {

  const onSubmit = (event) => {
    event.preventDefault();
    if (typeof onAuth === 'function' ){
      console.log(typeof onAuth);
    }
  }

  const getName = event => {
    const field = event.currentTarget;
    console.log(field.value);
  };

  const getEmail = event => {
    console.log(event.currentTarget);
  };

  return (
    <form className='ModalForm' action='/404/auth/' method='POST' onSubmit={onSubmit}>
      <div className='Input'>
        <input required type='text' placeholder='Имя' name='name' defaultValue='test' onChange={getName} />
        <label></label>
      </div>
      <div className='Input'>
        <input type='email' placeholder='Электронная почта' email='email' defaultValue='test@test.ts' onChange={getEmail} />
        <label></label>
      </div>
      <div className='Input'>
        <input required type='password' placeholder='Пароль' password='password' defaultValue='test'/>
        <label></label>
      </div>
      <button type='submit'>
        <span>Войти</span>
        <i className='fa fa-fw fa-chevron-right'></i>
      </button>
    </form>
  );
};
