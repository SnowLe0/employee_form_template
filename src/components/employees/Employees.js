import React from 'react';

import EmployeeForm from "./EmployeeForm";
import PageHeader from "./PageHeader";

export default function Employees() {

    return (
        <>
            <PageHeader title="Информация о сотруднике" />
            <EmployeeForm />
        </>
    );
}
