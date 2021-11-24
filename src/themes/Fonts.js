import {RFValue} from 'react-native-responsive-fontsize';

const type = {
  regular: 'DmSansRegular',
  medium: 'DmSansMedium',
  bold: 'DmSansBold',
};
const size = {
  h1: RFValue(38),
  h2: RFValue(34),
  h3: RFValue(30),
  h4: RFValue(26),
  h5: RFValue(20),
  h6: RFValue(19),
  input: RFValue(18),
  regular: RFValue(16),
  medium: RFValue(14),
  small: RFValue(12),
  tiny: RFValue(8.5),
};

const style = {
  h1: {
    fontFamily: type.bold,
    fontSize: size.h1,
  },
  h2: {
    fontFamily: type.bold,
    fontSize: size.h2,
  },
  h3: {
    fontFamily: type.bold,
    fontSize: size.h3,
  },
  h4: {
    fontFamily: type.bold,
    fontSize: size.h4,
  },
  h5: {
    fontFamily: type.bold,
    fontSize: size.h5,
  },
  h6: {
    fontFamily: type.regular,
    fontSize: size.h6,
  },
  normal: {
    fontFamily: type.regular,
    fontSize: size.regular,
  },
  description: {
    fontFamily: type.regular,
    fontSize: size.medium,
  },
};

export default {
  type,
  size,
  style,
};