import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as yup from 'yup';
import { Text } from "../common/Text";
import { Button } from "../common/Button";

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
                <Form className="shadow border rounded-3xl p-4 my-4">
                    <div className="my-4">
                        <label htmlFor="description" className="font-bold">Task Description</label>
                        <Field name="description" id="description" component={Text} placeholder="Enter the description" autoFocus={true} />
                        <ErrorMessage name="description" component="span" className="text-red-500 text-sm" />
                    </div>
                    <Button text="Add" />
                </Form>
            </Formik>
        </div>
    )
}