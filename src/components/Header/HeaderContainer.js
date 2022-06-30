/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'

function HeaderContainer({ auth }) {
    return <Header auth={auth} />
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})

export default connect(mapStateToProps, null)(HeaderContainer)
