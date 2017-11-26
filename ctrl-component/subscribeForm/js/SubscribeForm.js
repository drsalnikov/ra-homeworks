const SubscribeForm = () => {
    let emailText;
    let form;
    let message;
    const handleEmail = event => {
        if (emailText.validity.valid && emailText.value.length > 0) {
            form.classList.remove('is-error');
            form.classList.add('is-valid');
            message.style.opacity = 0;
        } else {
            form.classList.remove('is-valid');
            form.classList.add('is-error');
            message.style.opacity = 1;
        }
    };

    return (
        <div className="subscribe__form">
            <form className="form form--subscribe" ref={field => form = field}>
                <h4 className="form-title">Подписаться:</h4>
                <div className="form-group">
                    <label htmlFor="input-email" className="sr-only">Email</label>
                    <input type="email" id="input-email" placeholder="Email" className="form-control" ref={field => emailText = field} onChange={handleEmail}/>
                    <div className="form-error" ref={field => message = field}>Пожалуйста, проверьте корректность адреса электронной почты</div>
                    <button type="submit" className="form-next">
                        <i className="material-icons">keyboard_arrow_right</i>
                    </button>
                </div>
            </form>
        </div>
    )
};