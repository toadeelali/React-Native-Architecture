import React from 'react';
import { withTheme } from 'styled-components/native';
import { TextField } from 'react-native-material-textfield';

const TextInput = props=> (
  <TextField
    value=""
    label="Phone number"
    tintColor={props.theme.colorSecondary.main}
    labelTextStyle={{ fontFamily: props.theme.fontFamily.SemiBold.Type }}
    baseColor={props.theme.colorPrimary.main}
  />
);

const themedInput = withTheme(TextInput);
export { themedInput as TextInput };
