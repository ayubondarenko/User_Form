/**
 * Created by alexander on 03.03.18.
 */

export function userFormValidator(fieldName, value) {
    let errMessage;
    if (fieldName === 'lastName') {
        if (!value || !value.length)
            errMessage = 'Введите фамилию';
        else if (value.length < 2 || value.length > 20)
            errMessage = 'Фамилия должна иметь более 2 и менее 20 символов';
        else errMessage = null;
    }

    if (fieldName === 'firstName') {
        if (!value || !value.length)
            errMessage = 'Введите имя';
        else if (value.length < 2 || value.length > 20)
            errMessage = 'Имя должно иметь более 2 и менее 20 символов';
        else errMessage = null;
    }
    if (fieldName === 'phone') {
        if (!value || !value.length)
            errMessage = 'Введите телефон';
        else {
            const match = value.match(/\d/gi);
            if (!match || match.length < 4)
                errMessage = 'Телефон должен иметь более 4 цифр';
            else errMessage = null;
        }
    }

    if (fieldName === 'profession') {
        if (!value || !value.length)
            errMessage = 'Введите профессию';
        else if (value.length < 2 || value.length > 20)
            errMessage = 'Профессия должна иметь более 2 и менее 20 символов';
        else errMessage = null;
    }
    return errMessage
}

export function checkAllErrors(user) {
    const newUser = {...user};
    let hasError = false;

    for (const fieldName in newUser) {
        const field = newUser[fieldName];
        if (field.value != undefined) {
            field.error = userFormValidator(fieldName, field.value);
            newUser[fieldName] = {...field, error: field.error};
            if (field.error) hasError = true;
        }
    }
    return {hasError: hasError, user: newUser}
}