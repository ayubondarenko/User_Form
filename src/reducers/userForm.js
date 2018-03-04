/**
 * Created by alexander on 23.01.18.
 */
import {userFormValidator, checkAllErrors} from "./userFormValidator";
const initData = {
    professions: [],
    user: {
        lastName: {
            title: 'Фамилия',
            name: 'lastName',
            error: null,
            value: '',
        },
        firstName: {
            title: 'Имя',
            name: 'firstName',
            error: null,
            value: '',
        },
        profession: {
            title: 'Профессия',
            name: 'profession',
            error: null,
            value: '',
        },
        phone: {
            title: 'Телефон',
            name: 'phone',
            error: null,
            value: '',
        },
        registered: false,
        country: {}
    }
};

export default function userForm(state = initData, action) {


    if (action.type === 'REGISTER_USER') {
        const checkResult = checkAllErrors(state.user);
        if (checkResult.hasError)
            return {...state, user: {...checkResult.user, registered: false}};
        else
            return {...state, user: {...state.user, registered: true}};
    }

    if (action.type === 'CHANGE_PHONE_COUNTRY') {
        const country = state.countries[action.payload];
        return {...state, user: {...state.user, country: country}};
    }

    if (action.type === 'CHANGE_PHONE') {
        return {
            ...state, user: {
                ...state.user,
                phone: {...state.user.phone, value: action.payload}
            }
        };
    }

    if (action.type === 'GET_COUNTRIES_SUCCESS') {
        let data = action.payload.sort((a, b) => (a.name == b.name ? 0 : a.name > b.name ? 1 : -1 ));
        return {...state, countries: data, user: {...state.user, country: data[0]}};

    }


    if (action.type === 'SELECT_PROFESSION') {
        return {
            ...state, user: {
                ...state.user, profession: {
                    ...state.user.profession, value: action.payload, error: null
                }
            }
        };
    }


    if (action.type === 'CHANGE_FIELD') {
        // сделал чтобы не рендилось
        state.user[action.payload.fieldName] = {
            ...state.user[action.payload.fieldName],
            value: action.payload.value
        };
        return {...state};
    }

    if (action.type === 'CHECK_ERROR') {
        const user = {};
        user[action.payload.fieldName] = {
            ...state.user[action.payload.fieldName],
            error: userFormValidator(action.payload.fieldName, action.payload.value)
        };
        return {
            ...state, user: {
                ...state.user, ...user
            }
        };
    }

    if (action.type === 'CLEAN_ERROR') {
        const user = {};
        user[action.payload.fieldName] = {
            ...state.user[action.payload.fieldName],
            error: null
        };
        return {
            ...state, user: {
                ...state.user, ...user
            }
        };
    }

    if (action.type === 'SEARCH_PROFESSION_SUCCESS') {
        if (action.payload)
            return {
                ...state,
                professions: action.payload
            };
        return state;

    }

    return state

}
