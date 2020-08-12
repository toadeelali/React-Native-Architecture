import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';

import { Row, H1, BodyMedium, IconTextButton } from '@components/core/';

export const PageHeader = props=> {
  const themeContext = useContext(ThemeContext);
  const { Space, colorPrimary, colorSecondary } = themeContext;
  return (
    <>
      {props.topButton && (
        <Row>
          <IconTextButton
            source={require('@assets/images/arrow-left.png')}
            onPress={props.topButtonCb}
            title={props.topButton}
            color={colorSecondary.main}
          />
        </Row>
      )}
      {props.title && (
        <H1 marginBottom={Space.sm} marginTop={Space.xl}>
          {props.title}
        </H1>
      )}
      {props.subTitle && (
        <BodyMedium marginBottom={props.marginBottom === 0 ? props.marginBottom : Space.xl} color={colorPrimary.light}>
          {props.subTitle}
        </BodyMedium>
      )}
      {props.children}
    </>
  );
};
