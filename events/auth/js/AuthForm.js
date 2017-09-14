'use strict';

const AuthForm = ({onAuth}) => {
  const user = {};

  const onSubmit = (event) => {
    user.name = event.currentTarget.name.value;
    user.email = event.currentTarget.email.value;
    user.password = event.currentTarget.password.value;

    event.preventDefault();
    if (typeof onAuth === 'function' ){
      onAuth(user);
    }
  };

  const getEmail = event => {
    const field = event.currentTarget.value;
    event.currentTarget.value = field.replace(/[^a-zA-Z@.-]/gi,'');
  };

  const getPassword = event => {
    const field = event.currentTarget.value;
    event.currentTarget.value = field.replace(/[^a-zA-Z0-9_]/gi,'');
  };
  

  return (
    <form className='ModalForm' action='/404/auth/' method='POST' onSubmit={onSubmit}>
      <div className='Input'>
        <input required type='text' placeholder='Имя' name='name' />
        <label></label>
      </div>
      <div className='Input'>
        <input type='email' placeholder='Электронная почта' name='email' onChange={getEmail} />
        <label></label>
      </div>
      <div className='Input'>
        <input required type='password' placeholder='Пароль' name='password' onChange={getPassword} />
        <label></label>
      </div>
      <button type='submit'>
        <span>Войти</span>
        <i className='fa fa-fw fa-chevron-right'></i>
      </button>
    </form>
  );
};
