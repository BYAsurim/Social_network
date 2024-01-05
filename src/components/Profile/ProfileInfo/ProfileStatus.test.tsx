import React from 'react';
import {create} from 'react-test-renderer'
import {ProfileStatus} from "./ProfileStatus";

describe('Button component' , ()=>{
    test('status from props', ()=>{
        const component = create(<ProfileStatus status={'it-kamasutra'}
                                                changeStatus={status => {}}
                                                upDateStatus={status => {}} />)
        const root = component.root
        expect(root.props.status).toBe('it-kamasutra')
    })
})

