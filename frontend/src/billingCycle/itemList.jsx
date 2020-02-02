import React from 'react'
import Grid from '../common/layout/grid'
import { Field, arrayInsert, arrayRemove } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Input from '../common/form/input'
import If from '../common/operator/if'

class ItemList extends React.Component {
    add(index, item ={}) {
        if(!this.props.readOnly) {
            this.props.arrayInsert('BillingCycleForm', this.props.field, index, item)
        }
    }

    remove(index) {
        if(!this.props.readOnly && this.props.list.length > 1) {
            this.props.arrayRemove('BillingCycleForm', this.props.field, index)
        }
    }

    renderRows() {
        const list = this.props.list || []
        return list.map((item, index) => (
            <tr key={index}>
                <td><Field placeholder='Informe o nome' readOnly={this.props.readOnly}
                    name={`${this.props.field}[${index}].name`} component={Input}/></td>
                <td><Field placeholder='Informe o valor' readOnly={this.props.readOnly}
                    name={`${this.props.field}[${index}].value`} component={Input}/></td>
                <If test={this.props.showStatus}>
                <td><Field placeholder='Informe o status' readOnly={this.props.readOnly}
                    name={`${this.props.field}[${index}].status`} component={Input}/></td>
                </If>
                <td>
                <button onClick={() => this.add(index + 1)} type="button" className="btn btn-success"><i className="fa-plus fa"></i></button>
                <button onClick={() => this.add(index + 1, item)} type="button" className="btn btn-warning"><i className="fa-clone fa"></i></button>
                <button onClick={() => this.remove(index)} type="button" className="btn btn-danger"><i className="fa-trash fa"></i></button>
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>{this.props.legend}</legend>
                </fieldset>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Valor</th>
                            <If test={this.props.showStatus}>
                                <th>Status</th>
                            </If>
                            <th className="table-actions">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </Grid>
        )
    }
}


const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch)
export default connect(null, mapDispatchToProps)(ItemList)