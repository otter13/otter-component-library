import styled, { css } from 'styled-components';

import { theme } from '../../theme';

const TYPEFACE_PREFIX = 'APTypePro';

type FontMixinParam = {
  typeface: string;
  weight: string;
  line: string;
  letter?: string;
  px: string;
};

const fontMixin = ({ typeface, weight, line, letter = 'normal', px }: FontMixinParam) => css`
  font-family: ${theme.fontTypes[`${TYPEFACE_PREFIX}${typeface}${weight}`]};
  font-size: ${px};
  line-height: ${line};
  letter-spacing: ${letter};
  color: ${theme.colors.ink};
  font-weight: normal;
`;

////////////// headings ///////////////
const headingsPreset = { typeface: 'Display', weight: 'Medium' };

export const HXLMixin = fontMixin({ ...headingsPreset, line: '54px', letter: '1.6px', px: '48px' });
export const HXL = styled.h1`
  ${HXLMixin}
`;
HXL.displayName = 'HXL';

export const HLMixin = fontMixin({ ...headingsPreset, line: '48px', letter: '1.3px', px: '42px' });
export const HL = styled.h1`
  ${HLMixin}
`;
HL.displayName = 'HL';

export const HL1Mixin = fontMixin({ ...headingsPreset, line: '38px', letter: '1.3px', px: '32px' });
export const HL1 = styled.h1`
  ${HL1Mixin}
`;
HL1.displayName = 'HL1';

export const HL2Mixin = fontMixin({ ...headingsPreset, line: '34px', letter: '0.8px', px: '28px' });
export const HL2 = styled.h2`
  ${HL2Mixin}
`;
HL2.displayName = 'HL2';

export const HL3Mixin = fontMixin({ ...headingsPreset, line: '30px', letter: '0.8px', px: '24px' });
export const HL3 = styled.h3`
  ${HL3Mixin}
`;
HL3.displayName = 'HL3';

export const HL4Mixin = fontMixin({ ...headingsPreset, line: '26px', letter: '0.8px', px: '20px' });
export const HL4 = styled.h4`
  ${HL4Mixin}
`;
HL4.displayName = 'HL4';

export const HL5Mixin = fontMixin({ ...headingsPreset, line: '24px', letter: '0.8px', px: '18px' });
export const HL5 = styled.h5`
  ${HL5Mixin}
`;
HL5.displayName = 'HL5';

export const HL6Mixin = fontMixin({ ...headingsPreset, line: '20px', letter: '0.8px', px: '16px' });
export const HL6 = styled.h6`
  ${HL6Mixin}
`;
HL6.displayName = 'HL6';

////////////// body text ///////////////
const bodyTextPreset = { typeface: 'Text', weight: 'Regular', line: '24px', letter: '0', px: '16px' };

export const BodyRegularMixin = fontMixin({ ...bodyTextPreset });
export const BodyRegular = styled.span`
  ${BodyRegularMixin}
`;
BodyRegular.displayName = 'BodyRegular';

export const BodyMediumMixin = fontMixin({ ...bodyTextPreset, weight: 'Medium' });
export const BodyMedium = styled.span`
  ${BodyMediumMixin}
`;
BodyMedium.displayName = 'BodyMedium';

export const BodyBoldMixin = fontMixin({ ...bodyTextPreset, weight: 'Bold' });
export const BodyBold = styled.span`
  ${BodyBoldMixin}
`;
BodyBold.displayName = 'BodyBold';

const bodySmallTextPreset = { typeface: 'Text', weight: 'Regular', line: '20px', letter: '0', px: '14px' };

export const BodySmallRegularMixin = fontMixin({ ...bodySmallTextPreset });
export const BodySmallRegular = styled.span`
  ${BodySmallRegularMixin}
`;
BodySmallRegular.displayName = 'BodySmallRegular';

export const BodySmallMediumMixin = fontMixin({ ...bodySmallTextPreset, weight: 'Medium' });
export const BodySmallMedium = styled.span`
  ${BodySmallMediumMixin}
`;
BodySmallMedium.displayName = 'BodySmallMedium';

export const BodySmallBoldMixin = fontMixin({ ...bodySmallTextPreset, weight: 'Bold' });
export const BodySmallBold = styled.span`
  ${BodySmallBoldMixin}
`;
BodySmallBold.displayName = 'BodySmallBold';

const bodyLargeTextPreset = { typeface: 'Text', weight: 'Regular', line: '26px', letter: '0', px: '18px' };

export const BodyLargeRegularMixin = fontMixin({ ...bodyLargeTextPreset });
export const BodyLargeRegular = styled.span`
  ${BodyLargeRegularMixin}
`;
BodyLargeRegular.displayName = 'BodyLargeRegular';

export const BodyLargeMediumMixin = fontMixin({ ...bodyLargeTextPreset, weight: 'Medium' });
export const BodyLargeMedium = styled.span`
  ${BodyLargeMediumMixin}
`;
BodyLargeMedium.displayName = 'BodyLargeMedium';

export const BodyLargeBoldMixin = fontMixin({ ...bodyLargeTextPreset, weight: 'Bold' });
export const BodyLargeBold = styled.span`
  ${BodyLargeBoldMixin}
`;
BodyLargeBold.displayName = 'BodyLargeBold';

//////////// Variants ////////////
export const SubtitleMixin = css`
  ${fontMixin({ typeface: 'Text', weight: 'Medium', line: '14px', letter: '0.8px', px: '12px' })}
  text-transform: uppercase;
`;
export const Subtitle = styled.div`
  ${SubtitleMixin}
`;
Subtitle.displayName = 'Subtitle';

export const CaptionMixin = fontMixin({
  typeface: 'Text',
  weight: 'Regular',
  line: '16px',
  letter: '0.1px',
  px: '12px',
});
export const Caption = styled.div`
  ${CaptionMixin}
`;
Caption.displayName = 'Caption';
