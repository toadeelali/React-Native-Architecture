import styled from 'styled-components/native';
import PropTypes from 'prop-types';

export const Image = styled.Image`
  ${props=> props.margin && `margin:${props.margin}`};
  ${props=> props.marginTop && `margin-top:${props.marginTop}px`};
  ${props=> props.marginRight && `margin-right:${props.marginRight}px`};
  ${props=> props.marginBottom && `margin-bottom:${props.marginBottom}px`};
  ${props=> props.marginLeft && `margin-left:${props.marginLeft}px`};
  ${props=> props.height && `height:${props.height}px`};
  ${props=> props.width && `width:${props.width}px`};
`;

Image.propTypes = {
  margin: PropTypes.string,
  marginTop: PropTypes.number,
  marginRight: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.number,
};
