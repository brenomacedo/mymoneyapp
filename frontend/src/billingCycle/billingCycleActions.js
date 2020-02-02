import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'
const BASE_URL = 'http://localhost:3333/api'
const INITIAL_VALUES = {
    credits: [{}],
    debts: [{}]
}

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {   
    return submit(values, 'post')
}

export function update (values) {
    return submit(values, 'put')
}

export function remove (values) {
    return submit(values, 'delete')
}

function submit(values, method) {
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso')
                dispatch(init())
            })
            .catch(err => err.response.data.errors.forEach(e => toastr.error('Erro', e)))
        
    }
}

export function showUpdate(bc) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('BillingCycleForm', bc)
    ]
}

export function showDelete(bc) {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('BillingCycleForm', bc)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('BillingCycleForm', INITIAL_VALUES)
    ]
}