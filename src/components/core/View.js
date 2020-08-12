import styled from 'styled-components/native';
import PropTypes from 'prop-types';

export const Container = styled.View`
  ${props=> props.flex && `flex:${props.flex}`};
  ${props=> props.alignItems && `align-items:${props.alignItems}`};
  ${props=> props.justifyContent && `justify-content:${props.justifyContent}`};
  ${props=> props.alignSelf && `align-self:${props.alignSelf}`};
  ${props=> props.flexDirection && `flex-direction:${props.flexDirection}`};
  ${props=> props.borderRadius && `border-radius:${props.borderRadius}px`};
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
  ${props=> props.height && `height:${props.height}px`};
  ${props=> props.width && `width:${props.width}px`};
  ${props=> props.background && `background:${props.background}`};
`;

Container.propTypes = {
  flex: PropTypes.number,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  alignSelf: PropTypes.string,
  flexDirection: PropTypes.string,
  borderRadius: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.number,
  background: PropTypes.string,
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

export const Row = styled(Container)`
flex-direction: row;
`;

export const Col = styled(Container)`
flex-direction: column;
`;

export const Page = styled(Container)`
  flex: ${props=> props.flex || 1};
  flex-direction: ${props=> props.flexDirection || 'column'};
  padding: ${props=> props.padding || '20px'};
  background: ${props=> props.background || props.theme.colorBackground.default};
`;

export const Paper = styled(Container)`
  background: ${props=> props.background || props.theme.colorBackground.paper};
`;
