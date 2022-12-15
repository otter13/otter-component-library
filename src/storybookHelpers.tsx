import * as React from 'react';
import { useState } from 'react';
import { BodyRegular, HL2 } from './components/atoms/typography';

import { Panel, PanelSize } from './components/atoms/panel';
import { action as action_ } from '@storybook/addon-actions';
import seed from 'seed-random';

export const hideStyledComponentProps = {
  ref: { table: { disable: true } },
  theme: { table: { disable: true } },
  as: { table: { disable: true } },
  forwardedAs: { table: { disable: true } },
};

export const hide = { control: { disable: true } };
export const boolean = { control: { type: 'boolean' } };
export const string = { control: { type: 'text' } };
export const disable = { control: { type: null } };
export const number = { control: { type: 'number' } };
export const object = { control: { type: 'object' } };
export const select = (options: any[]) => ({ control: { type: 'select', options } });
export const range = (min: number, max: number, step: number | undefined = 1) => ({
  control: { type: 'range', min, max, step },
});
export const array = { control: { type: 'array' } };

/**
 *  random props generator
 */

const words = [
  'Hello',
  'World',
  'Jonathan',
  'Kara',
  'Frederico',
  'Tim',
  'Jian',
  'Gerard',
  'Trump',
  'Kitchen',
  'Towel',
  'Frisbee',
  'Doctor',
  'Bond',
  'Table',
  'The Hero',
  'The Archivist',
  'The Great',
  'Simple',
  'Polite',
  'Extrovert',
  'Introvert',
  'Small',
  'Tall',
  'The Designer',
  'Miss',
  'Mister',
  'Professor',
  'Is',
  'No',
  'Has',
  'Not',
  'Needs',
];

const boolGenerator = (randomNumber, odds: number | undefined = 2) => randomNumber % odds === 0;

// use faker.js?
const stringGenerator = (randomNumber) => {
  const wordCount = randomNumber % 10; // 0 to 10 words

  if (wordCount === 0) {
    return '';
  } else {
    return Array(wordCount)
      .fill(0)
      .map((_, idx) => {
        return words[Math.floor(randomNumber / (idx + 1)) % words.length];
      })
      .join(' ');
  }
};

const optionPicker = (randomNumber, options) => options[randomNumber % options.length];

const numberGenerator = (randomNumber) => parseInt(`${randomNumber}`.slice(0, randomNumber % 4), 10) || 0;

export const generateProps = (obj: any, randomInts: number[]) => {
  const generatorMapper = (key: string, obj: any, randomNumber: number) => {
    if (!obj?.control?.type) {
      return null;
    }
    switch (obj.control.type) {
      case 'boolean':
        return boolGenerator(randomNumber, key === 'disabled' ? 3 : 2);
      case 'text':
        return stringGenerator(randomNumber);
      case 'radio':
      case 'inline-radio':
      case 'select':
        return optionPicker(randomNumber, obj.control.options);
      case 'number':
        return numberGenerator(randomNumber);
      default:
        return null;
    }
  };
  return Object.entries(obj).reduce((acc, [key, value], idx) => {
    // 20 being the size of the array of random ints
    const generatedValue = generatorMapper(key, value, randomInts[idx % 20]);
    if (generatedValue !== null) {
      return { ...acc, [key]: generatedValue };
    } else {
      return acc;
    }
  }, {});
};

export const RandomWrapper: React.FC<{ argTypes: any; render: any; propsFormatter?: any }> = ({
  render,
  argTypes,
  propsFormatter,
}) => {
  // We need unseeded random word to start the seeding, hence the use of Math.random
  const randomForFirstWord = Math.floor(100000000 + Math.random() * 900000000);
  const randomWord = words[randomForFirstWord % words.length];
  const [seedValue, updateSeedValue] = React.useState<string>(randomWord);
  const random = seed(seedValue);
  const randomInt = Math.floor(100000000 + random() * 900000000);

  const randomInts = Array(20)
    .fill(0)
    .reduce((acc, val, idx) => [...acc, Math.floor(100000000 + seed(acc[idx])() * 900000000)], [randomInt]);
  const props = generateProps(argTypes, randomInts);

  const formatProps = (props) => {
    if (propsFormatter) {
      return propsFormatter(props);
    } else {
      return props;
    }
  };

  const [open, setOpen] = useState(false);
  const handleModalClose = () => setOpen(false);

  return (
    <>
      <Panel {...props} size={PanelSize.Medium} onClose={handleModalClose} open={open}>
        <HL2>Seeded random generator</HL2>
        <BodyRegular>
          Enter a text, it will generate a random seed and generate properties for the component.
        </BodyRegular>
        <BodyRegular>
          The advantage of seeded random is that it's repeatable. The same text will generate the same properties.
        </BodyRegular>
        <BodyRegular>
          If your word produces a faulty component, share it with a developer and they will be able to reproduce the
          error.
        </BodyRegular>
      </Panel>
      <div>
        <input type="text" onChange={(e: any) => updateSeedValue(e.target.value)} value={seedValue} />
      </div>
      <p>
        There are a total of <b>{Math.pow(Object.keys(props).length, 2)}</b> possible combinations (counting string as
        being defined or undefined only).
      </p>
      <div>
        Seed: <pre style={{ display: 'inline' }}>{randomInt}</pre>
      </div>
      <pre>{JSON.stringify(formatProps(props), null, 4)}</pre>
      {render(props)}
    </>
  );
};

export const action =
  (str: string) =>
  (...a: any) => {
    console.log(str, a);
    action_(str)(a);
  };
