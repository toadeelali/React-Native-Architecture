import React from 'react';
import { TouchableNativeFeedback, Platform } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

import { Row } from '@components/core/View';
import { Text } from '@components/core/Text';
import { Image } from '@components/core/Image';

export const Button = props=> {
  const { onPress, title, source, ...style } = props;

  return (
    <ButtonContainer>
      <TouchableNativeFeedback
        onPress={onPress}
        background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
        <ButtonBackground {...style}>
          {source && <Image source={source} width={20} height={10} marginRight={3} />}
          <ButtonTextLayer {...style}>{title}</ButtonTextLayer>
        </ButtonBackground>
      </TouchableNativeFeedback>
    </ButtonContainer>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  source: PropTypes.number,
  margin: PropTypes.string,
  marginTop: PropTypes.number,
  marginRight: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.number,
  background: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  textAlignVertical: PropTypes.string,
  textAlign: PropTypes.string,
  color: PropTypes.string,
};

export const TextButton = styled(Button)`
  paddingleft: 3px;
  paddingright: 3px;
  paddingtop: 0;
  paddingbottom: 0;
  margintop: 0;
  color: ${props=> props.color || props.theme.colorPrimary.main};
  background: transparent;
`;

export const IconTextButton = styled(Button)`
  paddingleft: 3px;
  paddingright: 3px;
  paddingtop: 0;
  paddingbottom: 0;
  margintop: 0;
  color: ${props=> props.color || props.theme.colorPrimary.main};
  background: transparent;
`;

/************/
/* Style */
/************/

const ButtonContainer = styled.View`
  ${props=> props.margin && `margin:${props.margin}`};
  ${props=> props.marginTop && `margin-top:${props.marginTop}px`};
  ${props=> props.marginRight && `margin-right:${props.marginRight}px`};
  ${props=> props.marginBottom && `margin-bottom:${props.marginBottom}px`};
  ${props=> props.marginLeft && `margin-left:${props.marginLeft}px`};

  ${props=> props.height && `height:${props.height}px`};
  ${props=> props.width && `width:${props.width}px`};

  border-radius: ${props=> props.theme.Radius.regular}px;
  background: transparent;
  overflow: hidden;
  padding: 0;
`;

const ButtonBackground = styled(Row)`
  background: ${props=> props.background || props.theme.colorSecondary.main};
  justify-content: ${props=> props.justifyContent || 'center'};
  align-items: ${props=> props.alignItems || 'center'};
  flex-direction: row;
  align-self: stretch;
  padding: 0;
  margin: 0;
`;

const ButtonTextLayer = styled(Text)`
  ${props=> props.textAlignVertical && `text-align-vertical:${props.textAlignVertical}`};
  ${props=> props.textAlign && `text-align:${props.textAlign}`};

  color: ${props=> props.color || props.theme.colorCommon.white};

  font-family: ${props=> props.theme.fontFamily.SemiBold.Type};
  font-weight: ${props=> props.theme.fontFamily.SemiBold.Weight};
  font-size: ${props=> props.theme.fontSize.body}px;
  line-height: ${props=> props.theme.lineHeight.body}px;
  padding: 10px;
`;
