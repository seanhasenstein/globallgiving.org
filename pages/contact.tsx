import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { ContactForm } from '../interfaces';
import { contactFormSchema } from '../schemas';
import Layout from '../components/layout';

export default function Contact() {
  const [status, setStatus] = React.useState<'IDLE' | 'ERROR' | 'SUCCESS'>(
    'IDLE'
  );

  const handleSubmit = async (formValues: ContactForm) => {
    if (formValues.hp !== '') {
      setStatus('ERROR');
      return;
    }

    const response = await fetch('/api/send-contact-form-message', {
      method: 'POST',
      body: JSON.stringify(formValues),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      setStatus('ERROR');
      return;
    }

    setStatus('SUCCESS');
  };

  return (
    <Layout title="Contact">
      {status === 'SUCCESS' ? (
        <SuccessStyles>
          <div className="container">
            <div className="box">
              <CheckCircleIcon className="icon" />
              <h2>We got your message!</h2>
              <p>
                Thank you for contacting Globall Giving. We will be with you as
                soon as we can.
              </p>
              <button
                type="button"
                onClick={() => setStatus('IDLE')}
                className="reset-button"
              >
                Send another message
              </button>
            </div>
          </div>
        </SuccessStyles>
      ) : (
        <ContactStyles>
          <div className="container">
            <Formik
              initialValues={{
                name: '',
                email: '',
                phone: '',
                message: '',
                hp: '',
              }}
              validationSchema={contactFormSchema}
              onSubmit={handleSubmit}
            >
              {formik => (
                <Form>
                  <div className="details">
                    <h2>Contact us</h2>
                    <p>
                      We'd love to hear from you! Please complete this form and
                      we will be with you as soon as we can.
                    </p>
                  </div>
                  <div className="form-item">
                    <label htmlFor="name">Name</label>
                    <Field name="name" id="name" />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="validation-error"
                    />
                  </div>
                  <div className="grid-cols-2">
                    <div className="form-item">
                      <label htmlFor="email">Email address</label>
                      <Field name="email" id="email" />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="validation-error"
                      />
                    </div>
                    <div className="form-item">
                      <label htmlFor="phone">Phone number</label>
                      <Field name="phone" id="phone" />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="validation-error"
                      />
                    </div>
                  </div>
                  <div className="form-item">
                    <label htmlFor="message">How can we help you?</label>
                    <Field as="textarea" name="message" id="message" />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="validation-error"
                    />
                  </div>
                  <div className="sr-only">
                    <label htmlFor="hp">Please leave this field blank</label>
                    <Field name="hp" id="hp" tabIndex={-1} />
                  </div>
                  <div className="actions">
                    <button type="submit" className="submit-button">
                      {formik.isSubmitting
                        ? 'Loading...'
                        : 'Submit your message'}
                    </button>
                  </div>
                  {status === 'ERROR' ? (
                    <div className="server-error">
                      Server error. Please try sending again.
                    </div>
                  ) : null}
                </Form>
              )}
            </Formik>
          </div>
        </ContactStyles>
      )}
    </Layout>
  );
}

const ContactStyles = styled.div`
  padding: 3rem 1.5rem 5rem;

  .container {
    margin: 0 auto;
    max-width: 80rem;
    width: 100%;
  }

  form {
    max-width: 34rem;
  }

  .details {
    margin: 0 0 2rem;

    p {
      margin: 1rem 0 0;
    }
  }

  .form-item {
    margin: 1.5rem 0 0;
    display: flex;
    flex-direction: column;
  }

  .grid-cols-2 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
    gap: 1.5rem;
  }

  label {
    margin: 0 0 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: #4b5563;
  }

  input,
  textarea {
    padding: 0.625rem 0.75rem;
    appearance: none;
    background-color: #fff;
    border: 1px solid #c9cbd1;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }

  input {
    height: 2.5rem;
  }

  textarea {
    min-height: 8rem;
    resize: vertical;
  }

  .actions {
    margin: 1.25rem 0 0;
  }

  .submit-button {
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.5rem;
    width: 100%;
    background-color: #374151;
    border: none;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing: 0.0125rem;
    color: #fff;
    transition: background-color 200ms linear;

    &:hover {
      background-color: #1f2937;
    }

    &:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }

    &:focus-visible {
      box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px, #4338ca 0px 0px 0px 4px,
        rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    }
  }

  .validation-error,
  .server-error {
    margin: 0.5rem 0 0;
    font-size: 0.875rem;
    font-weight: 500;
    color: #b91c1c;
  }

  .server-error {
    margin: 1rem 0 0;
    text-align: center;
  }
`;

const SuccessStyles = styled.div`
  padding: 3rem 1.5rem;

  .container {
    margin: 0 auto;
    max-width: 80rem;
    width: 100%;
  }

  .box {
    padding: 2rem;
    max-width: 40rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 0.125rem;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  }

  .icon {
    height: 2.25rem;
    width: 2.25rem;
    color: #65a30d;
  }

  h2 {
    margin: 0.5rem 0 0;
  }

  p {
    margin: 1rem auto 0;
    max-width: 28rem;
    width: 100%;
  }

  .reset-button {
    margin: 1.25rem 0 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.4375rem;
    max-width: 30rem;
    width: 100%;
    background-color: #374151;
    border: none;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing: 0.0125rem;
    color: #fff;
    transition: background-color 200ms linear;

    &:hover {
      background-color: #1f2937;
    }

    &:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }

    &:focus-visible {
      box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px, #4338ca 0px 0px 0px 4px,
        rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    }
  }
`;
