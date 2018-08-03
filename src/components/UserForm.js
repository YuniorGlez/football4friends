import React, { Component } from 'react';
import { View, Text, Button } from 'native-base';
import GenerateForm from 'react-native-form-builder';

const fields = [
  {
    type: 'text',
    name: 'name',
    required: true,
    icon: 'ios-person',
    label: 'Nombre completo',
  },
  {
    type: 'text',
    name: 'alias',
    required: true,
    icon: 'ios-person',
    label: 'Apodo',
  },
  {
    type: 'text',
    name: 'phone',
    icon: 'ios-call',
    required: true,
    label: 'Número de teléfono (formato : +34622626262)',
  },
];

class UserForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GenerateForm
        ref={(c) => { this.form = c; }}
        fields={fields}
        onValueChange={() => this.props.onChange(this.form.getValues())}
      />

    );
  }
}

export default UserForm;
