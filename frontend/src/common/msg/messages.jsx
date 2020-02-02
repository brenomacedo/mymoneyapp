import React from 'react'
import ReduxToastr from 'react-redux-toastr'
import '../../../node_modules/react-redux-toastr/lib/css/react-redux-toastr.css'
export default props => (
    <ReduxToastr
        timeOut={8000}
        preventDuplicates={true}
        position={'top-right'}
        transitionIn={'bounceInDown'}
        transitionOut={'fadeOut'}
        progressBar={true}
        newestOnTop={false}
    />
)