import React from 'react'
import { connect } from 'react-redux'
import s from './UpperBlock.module.css'
import { changeGrafikActionCreator } from '../../../redux/idGrafikReducer'
import UpperBlock from './UpperBlock'

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => ({
    changeBtn: (event) => {
        dispatch(changeGrafikActionCreator(direction))
    },
})

const UpperBlockContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UpperBlock)

export default UpperBlockContainer
