import React from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import labelAndInput from '../common/form/labelAndInput'
import { init } from '../billingCycle/billingCycleActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ItemList from './itemList'
import Summary from './summary'

class BillingCycleForm extends React.Component {

    calculateSummary() {
        const sum = (t, v) => t + v
        return {
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
            sumOfDebts: this.props.debts.map(c => +c.value || 0).reduce(sum)
        }
    }

    render() {
        const { sumOfDebts, sumOfCredits } = this.calculateSummary()
        const { handleSubmit, readOnly, credits, debts } = this.props
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field readOnly={readOnly} name="name" component={labelAndInput} label='Nome' cols='12 4' placeholder='Informe o nome' />
                    <Field readOnly={readOnly} name="month" component={labelAndInput} type='number' label='Mês' cols='12 4' placeholder='Informe o mês'/>
                    <Field readOnly={readOnly} name="year" component={labelAndInput} type='number' label='Ano' cols='12 4' placeholder='Informe o ano' />
                    <Summary credit={sumOfCredits} debt={sumOfDebts} />
                    <ItemList field='credits' legend='Créditos' list={credits} readOnly={readOnly} cols='12 6'/>
                    <ItemList showStatus={true} field='debts' legend='Débitos' list={debts} readOnly={readOnly} cols='12 6'/>
                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type="button" className="btn btn-default" onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({form: 'BillingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const selector = formValueSelector('BillingCycleForm')
const mapStateToProps = state => ({credits: selector(state, 'credits'), debts: selector(state, 'debts')})
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)