import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';

const ContactForm = () => {
    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });

    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));

    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value });
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            setForms({
                name: '',
                email: '',
                subject: '',
                phone: '',
                message: ''
            });
        } else {
            validator.showMessages();
        }
    };

    return (
      <form onSubmit={(e) => submitHandler(e)} className="contact-validation-active">
          <div className="row">
              <div className="col col-lg-6 col-12">
                  <div className="form-field">
                      <input
                        value={forms.name}
                        type="text"
                        name="name"
                        onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)}
                        placeholder="Ваше имя" />
                      {validator.message('name', forms.name, 'required|alpha_space')}
                  </div>
              </div>
              <div className="col col-lg-6 col-12">
                  <div className="form-field">
                      <input
                        value={forms.email}
                        type="email"
                        name="email"
                        onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)}
                        placeholder="Ваш email" />
                      {validator.message('email', forms.email, 'required|email')}
                  </div>
              </div>
              <div className="col col-lg-6 col-12">
                  <div className="form-field">
                      <input
                        value={forms.phone}
                        type="phone"
                        name="phone"
                        onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)}
                        placeholder="Ваш телефон" />
                      {validator.message('phone', forms.phone, 'required|phone')}
                  </div>
              </div>
              <div className="col col-lg-6 col-12">
                  <div className="form-field">
                      <select
                        onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)}
                        value={forms.subject}
                        type="text"
                        name="subject">
                          <option>Добыча нефти и газа</option>
                          <option>Переработка газа</option>
                          <option>Продажа углеводородов</option>
                          <option>Устойчивое развитие</option>
                          <option>Социальная ответственность</option>
                          <option>Инновации и технологии</option>
                      </select>
                      {validator.message('subject', forms.subject, 'required')}
                  </div>
              </div>
              <div className="col col-lg-12 col-12">
                    <textarea
                      onBlur={(e) => changeHandler(e)}
                      onChange={(e) => changeHandler(e)}
                      value={forms.message}
                      type="text"
                      name="message"
                      placeholder="Сообщение">
                    </textarea>
                  {validator.message('message', forms.message, 'required')}
              </div>
          </div>
          <div className="submit-area">
              <button type="submit" className="theme-btn">Отправить</button>
          </div>
      </form>
    );
};

export default ContactForm;
