import React from 'react'
import Header from './index'
import '../../index.css'

export default {
    title: 'Header',
    component: Header,
}

function Template(arg) {
    return <Header {...arg} />
}

export const Default = Template.bind({})
Default.args = {}
