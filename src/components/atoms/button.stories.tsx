import * as React from 'react';
import * as icons from 'components/icons';

import { ArrowPaginationButton, Button, ButtonGroupColumn, ButtonIcon, ButtonSize, ButtonVariant } from 'components/atoms/button';
import { BodyRegular, BodySmallBold } from 'components/atoms/typography';
import { RandomWrapper, boolean, select, string } from 'storybookHelpers';

import notes from 'button.notes.md';
import styled from 'styled-components';
import { theme } from 'theme';

const config = {
  title: 'Form Fields/Button',
  component: Button,
  argTypes: {
    variant: select(Object.values(ButtonVariant)),
    size: select(Object.values(ButtonSize)),
    label: string,
    icon: select([undefined, ...Object.keys(icons)]),
    keyboardShortcut: select([undefined, '1', 'A', 'Y', 'o']),
    vertical: boolean,
    darkMode: boolean,
    disabled: boolean,
    loading: boolean,
    fullWidth: boolean,
    dropdownIcon: select([undefined, 'IconChevronUpFilled', 'IconChevronDownFilled']),
  },
  args: {
    label: 'Click me!',
  },
  parameters: {
    notes,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/IKgyiORITF0gKid1JDmXqU/%5BNEW%5D-POST%2B-Sticker-sheet?node-id=2224%3A49',
    },
  },
};

export default config;

const VerticalButton = ({ disable }) => {
  const { IconPlusFilled } = icons;

  return (
    <Button
      icon={<IconPlusFilled />}
      label="Click Me!"
      disabled={disable}
      vertical={true}
      variant={ButtonVariant.SecondaryOutlined}
    />
  );
};

const createIconReactElement = (iconName: string) =>
  icons[iconName] ? React.createElement(icons[iconName], null, null) : undefined;

export const button = (props) => {
  const [Icon, DropdownIcon] = [createIconReactElement(props.icon), createIconReactElement(props.dropdownIcon)];
  return <Button {...props} icon={Icon} dropdownIcon={DropdownIcon} type="button" />;
};

export const darkMode = () => {
  return (
    <div style={{ display: 'flex' }}>
      <ButtonGroupColumn
        style={{ background: theme.colors.slate, padding: '50px', width: '50%', alignItems: 'center' }}
      >
        <Button type="button" label="Click Me!" darkMode />
        <Button type="button" label="Click Me!" darkMode variant={ButtonVariant.SecondaryOutlined} />
        <Button type="button" label="Click Me!" darkMode variant={ButtonVariant.SecondaryFilled} />
        <Button type="button" disabled label="Click Me!" darkMode variant={ButtonVariant.SecondaryFilled} />
      </ButtonGroupColumn>
      <ButtonGroupColumn style={{ padding: '50px', width: '50%', alignItems: 'center' }}>
        <Button type="button" label="Click Me!" />
        <Button type="button" label="Click Me!" variant={ButtonVariant.SecondaryOutlined} />
        <Button type="button" label="Click Me!" variant={ButtonVariant.SecondaryFilled} />
        <Button type="button" disabled label="Click Me!" variant={ButtonVariant.SecondaryFilled} />
      </ButtonGroupColumn>
    </div>
  );
};

export const buttonWithIconOnly = () => {
  const { IconPlusFilled } = icons;

  return (
    <>
      <BodyRegular>
        Although it is possible to have a `Button` with an icon only, <code>ButtonIcon</code> is the preferred way of
        using an actionable button. Eg:
      </BodyRegular>
      <Button icon={<IconPlusFilled />} variant={ButtonVariant.SecondaryOutlined} />
      <div style={{ display: 'flex', marginTop: '30px' }}>
        <ButtonGroupColumn style={{ padding: '50px', width: '50%', alignItems: 'center' }}>
          <ButtonIcon icon={<IconPlusFilled />} />
          <ButtonIcon size={ButtonSize.Small} icon={<IconPlusFilled />} />
          <ButtonIcon size={ButtonSize.Small} icon={<IconPlusFilled />} disabled />
        </ButtonGroupColumn>
        <ButtonGroupColumn
          style={{ background: theme.colors.slate, padding: '50px', width: '50%', alignItems: 'center' }}
        >
          <ButtonIcon icon={<IconPlusFilled />} darkMode />
          <ButtonIcon icon={<IconPlusFilled />} darkMode size={ButtonSize.Small} />
          <ButtonIcon icon={<IconPlusFilled />} darkMode size={ButtonSize.Small} disabled />
        </ButtonGroupColumn>
      </div>
    </>
  );
};

export const verticalButtonWithIcon = () => {
  return (
    <>
      <SectionWrapper>
        <ButtonGroupColumnWrapper>
          <VerticalButton disable={false} />
          <VerticalButton disable={true} />
        </ButtonGroupColumnWrapper>
      </SectionWrapper>
    </>
  );
};

export const buttonWithDropdown = () => {
  const { IconChevronDownFilled, IconChevronUpFilled } = icons;

  return (
    <>
      <BodyRegular>
        It is possible to pass a chevron icon <IconChevronDownFilled />
        <IconChevronUpFilled /> for horizontal buttons that behave like dropdowns e.g. the add customer button
      </BodyRegular>
      <ButtonGroupColumn style={{ padding: '50px', width: '100%', alignItems: 'center' }}>
        <Button type="button" label="Menu" dropdownIcon={<IconChevronDownFilled />} />
        <BodySmallBold style={{ padding: '20px 0 10px 0' }}>Add customer button</BodySmallBold>
      </ButtonGroupColumn>
    </>
  );
};

export const buttonWithArrowPagination = () => {
  return (
    <PaginationButtonsWrapper>
      <ArrowPaginationButton up />
      <ArrowPaginationButton />
      <ArrowPaginationButton up disabled />
      <ArrowPaginationButton disabled />
    </PaginationButtonsWrapper>
  );
};

export const randomProps = () => (
  <RandomWrapper
    argTypes={config.argTypes}
    propsFormatter={(props) => {
      return {
        ...props,
        ...(props.icon && { icon: `<${props.icon}} />` }),
      };
    }}
    render={(props) => {
      const [Icon, DropdownIcon] = [createIconReactElement(props.icon), createIconReactElement(props.dropdownIcon)];
      return (
        <div style={{ padding: '50px', backgroundColor: props.darkMode ? theme.colors.slate : theme.colors.white }}>
          <Button {...props} icon={Icon} dropdownIcon={DropdownIcon}>
            Button
          </Button>
        </div>
      );
    }}
  />
);

const PaginationButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  & button {
    margin-right: 9px;
  }
`;

const SectionWrapper = styled.div`
  display: flex;
  margin-top: 30px;
`;

const ButtonGroupColumnWrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  > button + button {
    margin-top: 10px;
  }
`;
