import React from 'react';
import { Form, Checkbox, Button } from 'semantic-ui-react';


export const SignInForm = () => {
    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Sign in Form</h2>
            <Form>
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
}