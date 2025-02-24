import * as Yup from "yup";

export const initialValues = {
    name: '', phone: '', email: '', subject: '', message: ''
};

export const contactSchema = Yup.object({
    name: Yup.string().required('Nome é obrigatório'),
    phone: Yup.string().required('Telefone é obrigatório'),
    email: Yup.string().email('Email inválido').required('Email é obrigatório'),
    subject: Yup.string().required('Assunto é obrigatório'),
    message: Yup.string().required('Mensagem é obrigatória')
});
