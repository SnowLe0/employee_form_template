import React from 'react';

import Grid from '@material-ui/core/Grid';
import InputMask from 'react-input-mask';

import Common from "../common";
import Form from '../common/Form';
import useForm from '../../hooks/useForm'

const genderItems = [
    { id: 'male', title: 'Мужской' },
    { id: 'female', title: 'Женский' },
    { id: 'other', title: 'Другой' },
];

const initialValues = {
    lastName: '',
    firstName: '',
    middleName: '',
    gender: 'male',
    birthDay: new Date(),
    mobile: '+7()',
    email: '',
    address: '',
    employer: '',
};

export default function EmployeeForm() {

    const validate = (fieldValues = values) => {

        let temp = { ...errors };

        if ('lastName' in fieldValues) {
            temp.lastName = fieldValues.lastName ? "" : "Поле является обязательным";
        }

        if ('firstName' in fieldValues) {
            temp.firstName = fieldValues.firstName ? "" : "Поле является обязательным";
        }

        if ('birthDay' in fieldValues) {
            temp.birthDay = fieldValues.birthDay ? "" : "Поле является обязательным";
        }

        if ('email' in fieldValues) {
            temp.email = (/$^|.+@.+\..{2,}/).test(fieldValues.email) ? "" : "Введен некорректный адрес почты";
        }

        if ('mobile' in fieldValues) {
            temp.mobile = (/\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/).test(fieldValues.mobile) ? "" : "Введен некорректный номер телефона";
        }

        if ('departmentId' in fieldValues) {
            temp.departmentId = fieldValues.departmentId.length !== 0 ? "" : "Поле является обязательным";
        }

        setErrors({
            ...temp
        });

        if (fieldValues === values) {
            return Object.values(temp).every(x => x === "");
        }

    }

    const {
        values,
        //setValues,
        errors,
        setErrors,
        handleInputChange,
    } = useForm(initialValues, true, validate);

    const handleSubmit = e => {

        e.preventDefault();

        if (validate()) {
            alert('Форма валидна, отправляется запрос');
        }

    };

    return (
        <Form onSubmit={handleSubmit}>
            <Grid
                container
                spacing={2}
            >
                <Grid item xs={12}>
                    <Common.Input
                        name="lastName"
                        label="Фамилия"
                        value={values.lastName}
                        onChange={handleInputChange}
                        error={errors.lastName}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Common.Input
                        name="firstName"
                        label="Имя"
                        value={values.firstName}
                        onChange={handleInputChange}
                        error={errors.firstName}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Common.Input
                        name="middleName"
                        label="Отчество"
                        value={values.middleName}
                        onChange={handleInputChange}
                        error={errors.middleName}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Common.Select
                        name="gender"
                        label="Пол"
                        value={values.gender}
                        onChange={handleInputChange}
                        options={genderItems}
                        error={errors.gender}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Common.DatePicker
                        name="birthDay"
                        label="Дата рождения"
                        value={values.birthDay}
                        onChange={handleInputChange}
                        error={errors.birthDay}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputMask mask="+7(999)999-99-99" value={values.mobile} onChange={handleInputChange}>
                        <Common.Input
                            label="Мобильный телефон"
                            name="mobile"
                            error={errors.mobile}
                        />
                    </InputMask>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Common.Input
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Common.Input
                        label="Адрес постоянной регистрации"
                        name="address"
                        value={values.address}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Common.Input
                        label="Название работодателя"
                        name="employer"
                        value={values.employer}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid container item justify="flex-end" xs={12}>
                    <Common.Button
                        type="submit"
                        text="Сохранить" />
                </Grid>
            </Grid>
        </Form>
    )
}