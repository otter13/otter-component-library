import { useRef, useEffect, useState } from 'react';
import * as React from 'react';
import styled, { css } from 'styled-components';
import FocusLock from 'react-focus-lock';

import { theme } from '../../theme';
import { HL4 } from './typography';
import { ButtonIcon, ButtonSize } from './button';
import IconCrossThinFilled from '../icons/IconCrossThinFilled';

export const PANEL_FADE_ANIMATION_TIME = 150;

export enum DisplayType {
  in = 'in',
  out = 'out',
  swap = 'swap',
}

export enum PanelSize {
  Medium = 'medium',
  Small = 'small',
  Large = 'large',
  XLarge = 'x-large',
}

export enum PanelHeaderVariant {
  TitleAndCloseButton = 'title-and-close-button',
  TitleOnly = 'title-only',
  CloseButtonOnly = 'close-button-only',
}

export interface PanelProps {
  /**
   * The size of panel, eg: small, medium, large, x-large
   */
  size: PanelSize;
  /**
   * The type of panel, eg: header, title, cross and without variant is no header
   */
  variant?: PanelHeaderVariant;
  /**
   * Set Overlay Panel
   */
  overlay?: boolean;
  /**
   * Whether to show the component
   */
  open: boolean;
  /**
   * Text string to display on the header title
   */
  title?: string;
  /**
   * For writing automation test script
   */
  dataTestId?: string;
  /**
   * Handler for closing the panel. The handler should close the panel by changing the open prop
   */
  onClose: () => void;
  children: React.ReactNode;
}

export const Panel: React.FC<PanelProps> = ({
  size = PanelSize.Medium,
  variant,
  overlay = true,
  open = false,
  title,
  onClose,
  children,
  dataTestId,
  ...restProps
}) => {
  const [show, setShow] = useState<DisplayType | null>(null);
  const [visible, setVisible] = useState<boolean>(open);
  const mounted = useRef(false);

  useEffect(() => {
    if (open && show !== DisplayType.out) {
      setShow(DisplayType.swap);
      setTimeout(() => setShow(DisplayType.in), 0);
    }

    /**
     * Safety net to always set overflow back to unset on unmount in case the consumer
     * directly removes the panel
     */
    return () => {
      document.body.style.overflow = 'unset';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!mounted.current) return;

    if (open) {
      setShow(DisplayType.in);
    } else {
      setShow(DisplayType.out);
    }
  }, [open]);

  useEffect(() => {
    if (!mounted.current) return;

    if (show === DisplayType.in) {
      setVisible(true);
      if (overlay) {
        document.body.style.overflow = 'hidden';
      }
    } else if (show === DisplayType.out) {
      // once the show animation is complete the panel can close and scrolling is reset
      setTimeout(() => {
        setVisible(false);
        onClose();
        if (overlay) {
          document.body.style.overflow = 'unset';
        }
      }, PANEL_FADE_ANIMATION_TIME);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  useEffect(() => {
    mounted.current = true;
  }, []);

  const handleBackdropClick = () => {
    setShow(DisplayType.out);
  };

  /**
   * The panel should still be visible just before it slides out for when the parent requests
   * the panel to close by changing the 'open' prop to false. For non-overlay panels they don't
   * slide in/out, so this scenario doesn't apply in that case.
   */
  const panelVisible = open || visible;

  const panel = (
    <>
      {overlay && (
        <PanelBackground onClick={handleBackdropClick} className={`show-${show} ${panelVisible ? 'open' : ''}`} />
      )}
      <FocusLockStyled disabled={!open}>
        <PanelStyled
          {...restProps}
          className={`show-${show} ${overlay ? `${size}-overlay` : size} ${panelVisible ? 'open' : ''}`}
          data-testid={dataTestId}
        >
          {variant && (
            <HeaderWrapper variant={variant} {...restProps}>
              {(variant === PanelHeaderVariant.TitleAndCloseButton || variant === PanelHeaderVariant.TitleOnly) && (
                <HL4>{title}</HL4>
              )}
              {(variant === PanelHeaderVariant.TitleAndCloseButton ||
                variant === PanelHeaderVariant.CloseButtonOnly) && (
                <ButtonIcon
                  type="button"
                  size={ButtonSize.Small}
                  icon={<IconCrossThinFilled />}
                  onClick={handleBackdropClick}
                  data-testid={`${dataTestId}-panel-close-button`}
                />
              )}
            </HeaderWrapper>
          )}
          <BodyWrapper>{children}</BodyWrapper>
        </PanelStyled>
      </FocusLockStyled>
    </>
  );
  return panel;
};

const panelTransition = css`
  &.show-out {
    opacity: 0;
    transition: opacity linear ${PANEL_FADE_ANIMATION_TIME}ms;
  }
  &.show-in {
    opacity: 0.65;
    transition: opacity linear ${PANEL_FADE_ANIMATION_TIME}ms;
  }
  &.open {
    visibility: visible;
  }
`;

const panelSlide = css`
  &.show-swap {
    right: -100%;
  }
  &.show-in {
    right: 0;
  }
  &.open {
    visibility: visible;
  }
`;

const overlayStyle = css`
  z-index: ${theme.zIndex.panel};
  position: fixed;
  top: 0;
  right: -100%;
`;

const inlineStyle = css`
  min-height: 670px;
`;

const panelSize = css`
  &.small {
    width: 260px;
    ${inlineStyle}
  }
  &.small-overlay {
    width: 260px;
    ${overlayStyle}
  }
  &.medium {
    width: 370px;
    ${inlineStyle}
  }
  &.medium-overlay {
    width: 370px;
    ${overlayStyle}
  }
  &.large {
    width: 720px;
    ${inlineStyle}
  }
  &.large-overlay {
    width: 720px;
    ${overlayStyle}
  }
  &.x-large {
    width: 800px;
    ${inlineStyle}
  }
  &.x-large-overlay {
    width: 800px;
    ${overlayStyle}
  }
`;

const PanelBackground = styled.div`
  opacity: 0;
  background: ${theme.colors.slate};
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: ${theme.zIndex.panel - 1};
  top: 0;
  left: 0;
  visibility: hidden;
  ${panelTransition}
`;

const FocusLockStyled = styled(FocusLock)`
  display: flex;
  justify-content: flex-end;
`;

const PanelStyled = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.white};
  height: 100%;
  visibility: hidden;
  box-shadow: ${theme.shadows.shadow4};
  transition: right linear ${PANEL_FADE_ANIMATION_TIME}ms;
  ${panelSize}
  ${panelSlide}
`;

const HeaderWrapper = styled.header<{
  variant: PanelHeaderVariant;
}>`
  width: 100%;
  height: auto;
  padding: ${theme.spaces.spaceMedium / 2}px ${theme.spaces.spaceSmall}px;
  display: flex;
  align-items: center;
  ${(props) =>
    props.variant === 'close-button-only'
      ? css`
          justify-content: flex-end;
        `
      : css`
          justify-content: space-between;
        `}

  h4 {
    margin: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const BodyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex: 1;
  width: 100%;
  padding: 0;
  margin: 0;
`;
