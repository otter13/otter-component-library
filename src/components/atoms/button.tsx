import { ButtonHTMLAttributes, cloneElement, useEffect, useMemo, useRef } from 'react';
import { IconChevronDownFilled, IconChevronUpFilled } from '../icons';
import { darken, lighten, opacify } from '../../helpers/colours';
import styled, { css } from 'styled-components';

import { BodyMedium } from './typography';
import { HotKey } from './hotKey';
import { theme } from '../../theme';
import { fade, rotate } from '../../animations';
import React from 'react';

export enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export enum ButtonVariant {
  Primary = 'primary',
  SecondaryOutlined = 'secondaryOutlined',
  SecondaryFilled = 'secondaryFilled',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The type of button, eg: primary, secondary, secondary-filled, tertiary, chevron, text-link, plain-text-link, round
   */
  variant?: ButtonVariant;
  /**
   * The size of button, eg: slim, medium, default, large
   */
  size?: ButtonSize;
  /**
   * If loading it'll display a spinner
   */
  loading?: boolean;
  /**
   * The keyboard key that once pressed will trigger a button click.
   */
  keyboardShortcut?: string;
  /**
   * Whether the background is dark
   */
  darkMode?: boolean;
  /**
   * Vertical mode uses 100% of the width and aligns the icon and the text vertically
   */
  vertical?: boolean;
  /**
   * Text string to display on the button
   */
  label?: string;
  /**
   * Icon to display on the button
   */
  icon?: React.ReactElement;
  /**
   * Chevron icon for dropdown
   */
  dropdownIcon?: React.ReactElement;
  /**
   * Whether to take the full available width
   */
  fullWidth?: boolean;
  /**
   * Whether to force the original size of the icon passed in
   */
  persistOriginalIconSize?: boolean;
  /**
   * For writing automation test script
   */
  dataTestId?: string;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    dataTestId,
    label,
    icon,
    dropdownIcon,
    variant = ButtonVariant.Primary,
    size = ButtonSize.Medium,
    disabled = false,
    loading = false,
    darkMode = false,
    keyboardShortcut,
    vertical = false,
    fullWidth = false,
    persistOriginalIconSize = false,
    ...restProps
  } = props;

  const buttonRef = useRef<HTMLButtonElement>(null);

  // handle hotkeys if any.
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        !loading &&
        !disabled &&
        keyboardShortcut &&
        String.fromCharCode(e.which) === keyboardShortcut.toUpperCase() &&
        buttonRef.current
      ) {
        buttonRef.current.click();
      }
    };

    window.addEventListener('keydown', handleKeyDown, false);

    return () => {
      window.removeEventListener('keydown', handleKeyDown, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Icon = useMemo(
    () => icon && cloneElement(icon, !persistOriginalIconSize ? { width: 24, height: 24 } : {}),
    [icon, persistOriginalIconSize]
  );

  const DropdownIcon = useMemo(
    () => dropdownIcon && cloneElement(dropdownIcon, { width: 9, height: 9 }),
    [dropdownIcon]
  );

  /* for some reason loading attr causes React to throw warnings, changed to isLoading */
  return (
    <ButtonStyled
      variant={variant}
      size={size}
      disabled={disabled}
      isLoading={loading}
      ref={buttonRef}
      hasContentText={!!label}
      title={label}
      darkMode={darkMode}
      tabIndex={loading ? -1 : undefined}
      vertical={vertical}
      fullWidth={fullWidth}
      data-testid={dataTestId}
      {...restProps}
    >
      <ContentWrapper vertical={vertical} fullWidth={fullWidth}>
        {Icon && (
          <IconWrapper hasIconOnly={!label && !!icon} vertical={vertical}>
            {Icon}
          </IconWrapper>
        )}
        {!icon && keyboardShortcut && (
          <HotKeyWrapper
            hasShortcutOnly={!label && !!keyboardShortcut}
            isLoading={loading}
            isOutlinedButton={variant === ButtonVariant.SecondaryOutlined}
            vertical={vertical}
            fullWidth={fullWidth}
          >
            {keyboardShortcut}
          </HotKeyWrapper>
        )}
        <LabelWrapper
          fullWidth={fullWidth}
          hasIconOrShortcut={!!icon || !!keyboardShortcut}
          hasDropdownIcon={!!dropdownIcon}
        >
          {label}
        </LabelWrapper>
        {DropdownIcon && !vertical && (
          <IconWrapper hasIconOnly vertical={false}>
            {DropdownIcon}
          </IconWrapper>
        )}
      </ContentWrapper>
    </ButtonStyled>
  );
};

// STYLE WRAPPERS

const ContentWrapper = styled.span<{ vertical: boolean; fullWidth: boolean }>`
  display: flex;
  align-items: center;
  ${(props) =>
    props.vertical &&
    css`
      flex-direction: column;
      line-height: 20px;
    `}
`;

const IconWrapper = styled.span<{ hasIconOnly: boolean; vertical: boolean }>`
  display: flex;
  align-items: center;

  ${(props) => !props.hasIconOnly && !props.vertical && 'margin-right: 10px;'}
  ${(props) => !props.hasIconOnly && props.vertical && 'margin-bottom: 8px;'}
`;

const HotKeyWrapper = styled(HotKey)<{
  isOutlinedButton: boolean;
  isLoading: boolean;
  hasShortcutOnly: boolean;
  vertical: boolean;
  fullWidth: boolean;
}>`
  ${(props) => !props.hasShortcutOnly && !props.vertical && 'margin-right: 10px;'}
  ${(props) => !props.hasShortcutOnly && props.vertical && 'margin-bottom: 8px;'}
  ${(props) =>
    !props.isOutlinedButton &&
    css`
      border: none;
    `}
  ${(props) =>
    props.isLoading &&
    css`
      background-color: inherit;
      color: inherit;
      border-color: transparent;
    `}
`;

const LabelWrapper = styled.span<{ fullWidth: boolean; hasIconOrShortcut: boolean; hasDropdownIcon: boolean }>`
  max-width: 200px;
  ${(props) =>
    props.fullWidth &&
    css`
      max-width: 100%;
    `}
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: ${(props) => (props.hasDropdownIcon ? theme.spaces.spaceXSmall : 0)}px;
`;

// STYLE VARIANTS
/**
 *  Every button has a border of 2px, for primary and secondaryFilled it is transparent, for some reason left 0 is
 *  within the border and left 2px is on the border's outer edge.
 *  We want our border and the gap to be 2px each. Bringing it to 5px
 */

export const focusOutlineEffect = (color) => css`
  content: '';
  left: -6px;
  right: -6px;
  background: transparent;
  top: -6px;
  border: 2px solid ${color};
  bottom: -6px;
  position: absolute;
  border-radius: ${theme.borders.borderRadiusLarge + 4}px;
`;

const primaryVariant = css`
  background-color: ${theme.colors.primaryPostRed};
  color: ${theme.colors.white};

  &:hover,
  &:focus {
    background-color: ${darken(theme.colors.primaryPostRed, 0.6)};
  }

  &:focus:not(:active):after {
    ${focusOutlineEffect(darken(theme.colors.primaryPostRed, 0.6))}
  }

  &:active {
    background-color: ${darken(theme.colors.primaryPostRed, 0.8)};
  }
`;

const secondaryFilledVariant = css`
  background-color: ${theme.colors.slate};
  color: ${theme.colors.white};

  &:hover,
  &:focus {
    background-color: ${theme.colors.ink};
  }

  &:focus:not(:active):after {
    ${focusOutlineEffect(theme.colors.ink)}
  }

  &:active {
    background-color: ${theme.colors.system};
  }
`;

const secondaryFilledVariantDark = css`
  color: ${theme.colors.ink};
  background-color: ${theme.colors.smoke};

  &:hover,
  &:focus {
    background-color: ${theme.colors.white};
  }

  &:focus:not(:active):after {
    ${focusOutlineEffect(theme.colors.white)}
  }

  &:active {
    background-color: ${theme.colors.cloudy};
  }
`;

const secondaryOutlinedVariant = css`
  background-color: transparent;
  color: ${theme.colors.ink};
  border-color: ${opacify(theme.colors.slate, 0.2)};

  &:hover,
  &:focus {
    background-color: ${theme.colors.slate};
    color: ${theme.colors.white};
    border-color: ${theme.colors.slate};
  }

  &:focus:not(:active):after {
    ${focusOutlineEffect(theme.colors.slate)}
  }

  &:active {
    background-color: ${theme.colors.ink};
  }
`;

const secondaryOutlinedVariantDark = css`
  background: transparent;
  color: ${theme.colors.white};
  // changing opacity of the slate on a slate background doesn't render, use a similar color non opacified
  border-color: #d6d6d8;

  &:hover,
  &:focus {
    background-color: ${theme.colors.white};
    color: ${theme.colors.ink};
    border-color: ${theme.colors.white};
  }

  &:focus:not(:active):after {
    ${focusOutlineEffect(theme.colors.white)}
  }

  &:active {
    background-color: ${theme.colors.cloudy};
  }
`;

const styleVariants = ({ variant, darkMode }: { variant: ButtonVariant; darkMode: boolean }) => {
  switch (variant) {
    case ButtonVariant.Primary:
      return primaryVariant;
    case ButtonVariant.SecondaryOutlined:
      return darkMode ? secondaryOutlinedVariantDark : secondaryOutlinedVariant;
    case ButtonVariant.SecondaryFilled:
      return darkMode ? secondaryFilledVariantDark : secondaryFilledVariant;
  }
};

// SIZE VARIANTS

const smallVariant = css`
  padding: 10px 32px;
`;

const mediumVariant = css`
  padding: 12px 32px;
`;

const largeVariant = css`
  padding: 19px ${theme.spaces.spaceXLarge}px;
  font-size: 18px;
  line-height: 26px;
`;

const sizeVariants = ({ size }: { size: ButtonSize }) => {
  switch (size) {
    case ButtonSize.Small:
      return smallVariant;
    case ButtonSize.Medium:
      return mediumVariant;
    case ButtonSize.Large:
      return largeVariant;
  }
};

const noTextVariant = ({ hasContentText }) =>
  !hasContentText &&
  css`
    padding: 12px;
  `;

const ButtonStyled = styled(BodyMedium).attrs({ as: 'button' })<{
  variant: ButtonVariant;
  size: ButtonSize;
  disabled: boolean;
  isLoading: boolean;
  darkMode: boolean;
  tabIndex?: number;
  vertical: boolean;
  fullWidth: boolean;
  hasContentText: boolean;
}>`
  position: relative;
  border-radius: ${theme.borders.borderRadiusLarge}px;
  outline: none;
  border: 2px solid transparent;
  display: inline-flex;
  justify-content: center;
  transition: background-color 150ms ease-out;

  ${styleVariants};

  ${sizeVariants};

  ${noTextVariant};

  ${(props) => props.fullWidth && 'width: 100%;'}

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${theme.colors.cloudy};
      color: ${theme.colors.inkSubheading};
      border-color: ${opacify(theme.colors.inkSubheading, 0.2)};
      pointer-events: none;
    `}

  ${({ isLoading, variant, disabled, darkMode }) =>
    isLoading &&
    !disabled &&
    css`
      color: transparent;
      pointer-events: none;

      &:before {
        content: '';

        position: absolute;
        margin: auto;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        animation: ${fade(0, 1)} 300ms ease 1 forwards, ${rotate} 1s linear infinite;
        border: 3px solid
          ${variant === ButtonVariant.SecondaryOutlined && !darkMode ? theme.colors.slate : theme.colors.white};
        border-right-color: transparent;
        border-radius: 50%;
        display: inline-block;
        height: ${theme.spaces.spaceMedium}px;
        width: ${theme.spaces.spaceMedium}px;
      }
    `}
`;

export interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactElement;
  size?: Exclude<ButtonSize, ButtonSize.Large>;
  darkMode?: boolean;
}

/**
 * Used for single char/icon button
 */
export const ButtonIcon = (props: ButtonIconProps) => {
  const { icon, size = ButtonSize.Medium, darkMode = false, ...restProps } = props;
  const Icon = () => {
    const dimensions = size === ButtonSize.Small ? '20' : '24';
    return cloneElement(icon, { width: dimensions, height: dimensions });
  };
  return (
    <ButtonIconStyled darkMode={darkMode} {...restProps}>
      <Icon />
    </ButtonIconStyled>
  );
};

const buttonIconDarkModeVariant = (props) =>
  props.darkMode &&
  css`
    color: ${theme.colors.white};

    &:hover,
    &:focus {
      background-color: ${theme.colors.inkSubheading};
    }

    &:focus:not(:active):after {
      ${focusOutlineEffect(theme.colors.inkSubheading)}
    }

    &:active {
      background-color: ${theme.colors.ash};
    }

    &:disabled {
      background-color: ${opacify(theme.colors.inkSecondary, 0.5)};
      color: ${theme.colors.smoke};
      border-color: ${opacify(theme.colors.white, 0.1)};
    }
  `;

const ButtonIconStyled = styled.button<{ darkMode: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  padding: 12px;
  border-radius: ${theme.borders.borderRadiusLarge}px;
  transition: background-color 150ms ease-out;
  outline: none;
  border: 2px solid transparent;

  &:hover,
  &:focus {
    background-color: ${theme.colors.smoke};
  }

  &:focus:not(:active):after {
    ${focusOutlineEffect(theme.colors.smoke)}
  }

  &:active {
    background-color: ${darken(theme.colors.smoke, 0.2)};
  }

  &:disabled {
    pointer-events: none;
    background-color: ${theme.colors.cloudy};
    color: ${theme.colors.inkSubheading};
    border-color: ${opacify(theme.colors.slate, 0.2)};
  }

  ${buttonIconDarkModeVariant}
`;

export const ButtonGroupColumn = styled.div`
  display: flex;
  flex-direction: column;

  > button + button {
    margin-top: 10px;
  }
`;

export const ButtonGroupRow = styled.div`
  display: flex;

  > button + button {
    margin-left: 17px;
  }
`;

const ArrowPaginationStyled = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  padding: 12px;
  border-radius: ${theme.borders.borderRadiusLarge}px;
  transition: background-color 150ms ease-out;
  outline: none;
  border: 2px solid ${theme.colors.smoke};
  & svg {
    color: ${theme.colors.ink};
  }
  width: ${theme.spaces.spaceXLarge}px;
  height: ${theme.spaces.spaceXLarge}px;

  &:hover,
  &:focus {
    background-color: ${theme.colors.slate};
    border-color: ${theme.colors.slate};
    & svg {
      color: ${theme.colors.white};
    }
  }

  &:focus:not(:active):after {
    ${focusOutlineEffect(theme.colors.smoke)}
  }

  &:active {
    background-color: ${darken(theme.colors.smoke, 0.2)};
  }

  &:disabled {
    pointer-events: none;
    border-color: ${lighten(theme.colors.smoke, 0.2)};
    & svg {
      color: ${opacify(theme.colors.ink, 0.2)};
    }
  }
`;

export interface ArrowPaginationButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  darkMode?: boolean;
  disabled?: boolean;
  up?: boolean;
  dataTestId?: string;
}

/**
 * Used for single char/icon button
 */
export const ArrowPaginationButton = ({ disabled, up, dataTestId, ...restProps }: ArrowPaginationButtonProps) => {
  return (
    <ArrowPaginationStyled disabled={disabled} data-testid={dataTestId} {...restProps}>
      {up ? <IconChevronUpFilled width={12} height={10} /> : <IconChevronDownFilled width={12} height={10} />}
    </ArrowPaginationStyled>
  );
};
