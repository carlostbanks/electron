import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as yup from 'yup';


interface IValue {
    description: string;
}

export const TodoForm: React.FC = () => {

    const ipcRenderer = (window as any).ipcRenderer;

    const initialValues: IValue = {
        description: '',
    }

    const onSubmit = (values: IValue) => {
        console.log("values", values);
        ipcRenderer.send('submit:todoForm', values);
    };

    const validationSchema = yup.object().shape({
        description: yup.string().required(),
    })

    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form>
                <div>
                <Field name="description" id="description" />
                <ErrorMessage name="description" />
                </div>
                <button type="submit">Save</button>
            </Form>
            </Formik>
        </div>
    )
}