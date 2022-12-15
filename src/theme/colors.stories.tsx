import { useState } from 'react';
import styled from 'styled-components';
import convert from 'color-convert';

import * as colors from './colors';
import { theme } from '../theme';
import { BodyRegular, BodyBold, HL2, Subtitle } from '../components/atoms/typography';
import React from 'react';

const ColorWrapper = styled.div``;

const ColorContainer = styled.div`
  border: 1px solid ${colors.cloudy};
  padding: 10px;
  width: 295px;
  display: inline-block;
  margin-right: 20px;
  margin-bottom: 20px;
`;

const ColorSample = styled.div<{ inputColor: string }>`
  background-color: ${(props) => props.inputColor};
  height: 50px;
  width: 50px;
  margin-right: 10px;
  float: left;
  // @todo use a color library to check set contrast
  border: ${(props) => (colors[props.inputColor] === '#FFFFFF' ? '1px solid #000' : '')};
`;

const ColorInfo = styled.div`
  margin-top: 5px;
`;

const ColorCard = ({ color }: { color: string }) => {
  const colorCode = colors[color];
  return (
    <ColorContainer>
      <ColorSample inputColor={colorCode} />
      <ColorInfo>
        name: {color} <br />
        hex: {colorCode}
      </ColorInfo>
    </ColorContainer>
  );
};

const StoryBookHeader2 = styled(Subtitle)`
  font-size: ${theme.fontSizes.fontBodyMedium}px;
  margin-bottom: ${theme.spaces.spaceSmall}px;
`;

//https://github.com/antimatter15/rgb-lab/blob/master/color.js
function deltaE(labA, labB) {
  var deltaL = labA[0] - labB[0];
  var deltaA = labA[1] - labB[1];
  var deltaB = labA[2] - labB[2];
  var c1 = Math.sqrt(labA[1] * labA[1] + labA[2] * labA[2]);
  var c2 = Math.sqrt(labB[1] * labB[1] + labB[2] * labB[2]);
  var deltaC = c1 - c2;
  var deltaH = deltaA * deltaA + deltaB * deltaB - deltaC * deltaC;
  deltaH = deltaH < 0 ? 0 : Math.sqrt(deltaH);
  var sc = 1.0 + 0.045 * c1;
  var sh = 1.0 + 0.015 * c1;
  var deltaLKlsl = deltaL / 1.0;
  var deltaCkcsc = deltaC / sc;
  var deltaHkhsh = deltaH / sh;
  var i = deltaLKlsl * deltaLKlsl + deltaCkcsc * deltaCkcsc + deltaHkhsh * deltaHkhsh;
  return i < 0 ? 0 : Math.sqrt(i);
}

const brandColors: any = Object.keys(colors).reduce(
  (colorAcc, key) => Object.assign(colorAcc, { [key]: convert.hex.lab(colors[key]) }),
  {}
);

export const ClosestColor = () => {
  const [userColor, updateUserColor] = useState('#');
  const [result, updateResult] = useState<{ color: string; delta: number } | undefined>();
  const updateColor = (e: any) => {
    const rawColor = e.target.value;
    updateUserColor(`#${rawColor.split('#')[1] ?? ''}`);
    if (rawColor.length === 4 || rawColor.length === 5 || rawColor.length === 7) {
      const labUserColor = convert.hex.lab(rawColor.split('#')[1]);

      const { bestMatch, minDelta } = Object.keys(brandColors).reduce(
        ({ bestMatch, minDelta }, key) => {
          const delta = deltaE(brandColors[key], labUserColor);
          return delta < minDelta ? { bestMatch: key, minDelta: delta } : { bestMatch, minDelta };
        },
        { bestMatch: Object.keys(brandColors)[0], minDelta: 180 }
      );

      updateResult({ color: bestMatch, delta: minDelta });
    } else {
      updateResult(undefined);
    }
  };
  return (
    <>
      <HL2>Closest colour</HL2>
      <BodyRegular as="p">Enter an hex color and see which one is the closest in our brand colors</BodyRegular>
      <input type="text" onChange={updateColor} value={userColor} placeholder="#ffffff" maxLength={7} />
      {result && (
        <div>
          <BodyRegular as="p">Your colour</BodyRegular>
          <div>
            <ColorContainer>
              <ColorSample inputColor={userColor} />
              <ColorInfo>
                name: {result.delta === 0 && result.color}
                <br />
                hex: {userColor}
              </ColorInfo>
            </ColorContainer>
          </div>
          <BodyRegular as="p">
            Closest matching colour from branding with a delta of <BodyBold>{result.delta.toFixed(2)}</BodyBold>.
            {result.delta > 10 &&
              ` If the
              delta is larger than 10 you might want to have a chat with your designer.`}
          </BodyRegular>
          <div>
            <ColorCard color={result.color} />
          </div>
        </div>
      )}
    </>
  );
};

export const all = () => {
  return (
    <div>
      <StoryBookHeader2>Primary color:</StoryBookHeader2>
      <ColorWrapper>
        <ColorCard color="primaryPostRed" />
      </ColorWrapper>

      <StoryBookHeader2>Callout colors:</StoryBookHeader2>
      <ColorWrapper>
        <ColorCard color="postTeal" />
      </ColorWrapper>

      <StoryBookHeader2>Text colors:</StoryBookHeader2>
      <ColorWrapper>
        <ColorCard color="ink" />
        <ColorCard color="inkSecondary" />
        <ColorCard color="inkSubheading" />
      </ColorWrapper>

      <StoryBookHeader2>Background colors:</StoryBookHeader2>
      <ColorWrapper>
        <ColorCard color="white" />
        <ColorCard color="slate" />
        <ColorCard color="ash" />
        <ColorCard color="smoke" />
        <ColorCard color="cloudy" />
        <ColorCard color="shell" />
      </ColorWrapper>

      <StoryBookHeader2>Feedback and milestones colors:</StoryBookHeader2>
      <ColorWrapper>
        <ColorCard color="blueInfoDark" />
        <ColorCard color="blueInfoNormal" />
        <ColorCard color="blueInfoLight" />
        <ColorCard color="greenSuccessDark" />
        <ColorCard color="greenSuccessNormal" />
        <ColorCard color="greenSuccessLight" />
        <ColorCard color="orangeWarmingDark" />
        <ColorCard color="orangeWarmingNormal" />
        <ColorCard color="orangeWarmingLight" />
        <ColorCard color="crimsonAlertDark" />
        <ColorCard color="crimsonAlertNormal" />
        <ColorCard color="crimsonAlertLight" />
        <ColorCard color="purpleDark" />
        <ColorCard color="purpleNormal" />
        <ColorCard color="purpleLight" />
      </ColorWrapper>

      <StoryBookHeader2>Customer colors:</StoryBookHeader2>
      <ColorWrapper>
        <ColorCard color="customerDark" />
        <ColorCard color="customerLight" />
      </ColorWrapper>

      <StoryBookHeader2>Product colors:</StoryBookHeader2>
      <ColorWrapper>
        <ColorCard color="products" />
        <ColorCard color="expressPost" />
        <ColorCard color="courierPost" />
        <ColorCard color="international" />
        <ColorCard color="startTrack" />
      </ColorWrapper>

      <StoryBookHeader2>Service colors:</StoryBookHeader2>
      <ColorWrapper>
        <ColorCard color="service1" />
        <ColorCard color="service2" />
        <ColorCard color="service3" />
        <ColorCard color="service4" />
        <ColorCard color="service5" />
      </ColorWrapper>

      <StoryBookHeader2>Admin colors:</StoryBookHeader2>
      <ColorWrapper>
        <ColorCard color="admin1" />
        <ColorCard color="admin2" />
        <ColorCard color="admin3" />
        <ColorCard color="admin4" />
        <ColorCard color="admin5" />
      </ColorWrapper>

      <StoryBookHeader2>Action colors:</StoryBookHeader2>
      <ColorWrapper>
        <ColorCard color="action1" />
        <ColorCard color="action2" />
      </ColorWrapper>
    </div>
  );
};

export default {
  title: 'Theme/Colors',
};
