import styled from 'styled-components/native';
import PropTypes from 'prop-types';

// ${props => props["letter-spacing"] && `letter-spacing:${props["letter-spacing"]}`};
export const Text = styled.Text`
  ${props=> props.fontFamily && `font-family:${props.fontFamily}`};
  ${props=> props.fontWeight && `font-weight:${props.fontWeight}`};
  ${props=> props.fontSize && `font-size:${props.fontSize}`};
  ${props=> props.lineHeight && `line-height:${props.lineHeight}`};
  ${props=> props.textAlignVertical && `text-align-vertical:${props.textAlignVertical}`};
  ${props=> props.color && `color:${props.color}`};
  ${props=> props.textAlign && `text-align:${props.textAlign}`};
  ${props=> props.padding && `padding:${props.padding}`};
  ${props=> props.paddingTop && `padding-top:${props.paddingTop}px`};
  ${props=> props.paddingRight && `padding-right:${props.paddingRight}px`};
  ${props=> props.paddingBottom && `padding-bottom:${props.paddingBottom}px`};
  ${props=> props.paddingLeft && `padding-left:${props.paddingLeft}px`};
  ${props=> props.margin && `margin:${props.margin}`};
  ${props=> props.marginTop && `margin-top:${props.marginTop}px`};
  ${props=> props.marginRight && `margin-right:${props.marginRight}px`};
  ${props=> props.marginBottom && `margin-bottom:${props.marginBottom}px`};
  ${props=> props.marginLeft && `margin-left:${props.marginLeft}px`};
`;

Text.propTypes = {
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.number,
  fontSize: PropTypes.number,
  lineHeight: PropTypes.number,
  textAlignVertical: PropTypes.string,
  color: PropTypes.string,
  textAlign: PropTypes.string,
  padding: PropTypes.string,
  paddingTop: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,
  margin: PropTypes.string,
  marginTop: PropTypes.number,
  marginRight: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
};

export const H1 = styled(Text)`
  font-family: ${props=> props.theme.fontFamily.Bold.Type};
  font-weight: ${props=> props.theme.fontFamily.Bold.Weight};
  font-size: ${props=> props.theme.fontSize.h1}px;
  line-height: ${props=> props.theme.lineHeight.h1}px;
  color: ${props=> props.color || props.theme.colorPrimary.main};
`;

export const BodySemiBold = styled(Text)`
  font-family: ${props => props.theme.fontFamily.SemiBold.Type};
  font-weight: ${props=> props.theme.fontFamily.SemiBold.Weight};
  font-size: ${props=> props.theme.fontSize.body}px;
  line-height: ${props=> props.theme.lineHeight.body}px;
  color: ${props=> props.color || props.theme.colorPrimary.light};
`;

export const BodyMedium = styled(Text)`
  font-family: ${props=> props.theme.fontFamily.Medium.Type};
  font-weight: ${props=> props.theme.fontFamily.Medium.Weight};
  font-size: ${props=> props.theme.fontSize.body}px;
  line-height: ${props=> props.theme.lineHeight.body}px;
  color: ${props=> props.color || props.theme.colorPrimary.light};
`;
