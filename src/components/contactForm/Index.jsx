import React from 'react';
import { contactSchema, initialValues } from '../../schemas/contactSchema';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { sendEmail } from "../../services/apiService";
import { toast } from 'react-toastify';
import './style.scss';

const ContactForm = () => {
    const onSubmit = async (values, { resetForm, setSubmitting }) => {
        try {
            await sendEmail(values);
            toast.success(
                'E-mail enviado com sucesso',
                { position: 'top-center' }
            );
            resetForm();
        } catch (error) {
            toast.error(
                'Erro ao enviar e-mail. Por favor, tente novamente mais tarde.',
                { position: 'top-center' }
            );
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Formik
            id='contactForm'
            initialValues={initialValues}
            validationSchema={contactSchema}
            onSubmit={onSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div className="form-group col-md-6">
                        <label htmlFor="name">Nome *</label>
                        <Field type="text" id="name" name="name" className="form-control" placeholder='Digite o nome' />
                        <ErrorMessage name="name" component="div" className="text-danger" />
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="phone">Telefone *</label>
                        <Field type="text" id="phone" name="phone" className="form-control" placeholder='Digite o telefone' />
                        <ErrorMessage name="phone" component="div" className="text-danger" />
                    </div>

                    <div className="form-group col-md-12">
                        <label htmlFor="email">Email *</label>
                        <Field type="email" id="email" name="email" className="form-control" placeholder='Digite o e-mail'/>
                        <ErrorMessage name="email" component="div" className="text-danger" />
                    </div>

                    <div className="form-group col-md-12">
                        <label htmlFor="subject">Assunto *</label>
                        <Field type="text" id="subject" name="subject" className="form-control" placeholder='Digite o assunto' />
                        <ErrorMessage name="subject" component="div" className="text-danger" />
                    </div>

                    <div className="form-group col-md-12">
                        <label htmlFor="message">Mensagem *</label>
                        <Field as="textarea" id="message" name="message" className="form-control no-resize" placeholder='Digite a mensagem'/>
                        <ErrorMessage name="message" component="div" className="text-danger" />
                    </div>

                    <div className="text-center col-md-12">
                        <button type="submit" className="btn btn-primary btn-lg" disabled={isSubmitting}>
                            Enviar Mensagem
                            {isSubmitting && (
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" style={{ marginLeft: '10px' }}></span>
                            )}
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default ContactForm;