import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { boolean, string, action } from '../../storybookHelpers';

import { theme } from '../../theme';
import { Panel, PanelSize, PanelHeaderVariant } from './panel';
import { Button, ButtonVariant } from './button';
import notes from 'components/atoms/panel.notes.md';
import React from 'react';

export default {
  title: 'Layout/Panel',
  component: Panel,
  parameters: {
    notes,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/IKgyiORITF0gKid1JDmXqU/NEW-POST-Sticker-sheet?node-id=4296%3A54291',
    },
  },
  argTypes: {
    size: Object.keys(PanelSize),
    variant: Object.keys(PanelHeaderVariant),
    overlay: boolean,
    open: boolean,
    title: string,
    children: string,
  },
  args: {
    size: PanelSize.Medium,
    variant: PanelHeaderVariant.TitleAndCloseButton,
    open: false,
    title: 'Controlled Panel',
    children: 'Panel child content',
    onClose: action('onClose'),
  },
};

export const panel = (props) => <ControlledPanel {...props} />;

export const xLargePanelWithHeader = () => <XLargePanelWithHeader />;

export const largePanelWithHeader = () => <LargePanelWithHeader />;

export const mediumPanelWithTitle = () => <MediumPanelWithTitle />;

export const mediumPanelWithCross = () => <MediumPanelWithCross />;

export const smallPanel = () => <SmallPanel />;

const ControlledPanel = (props) => {
  const [open, setOpen] = useState(false);
  const handlePanelClose = () => setOpen(false);

  return (
    <>
      <Button
        label="Open controlled panel"
        onClick={() => {
          setOpen(true);
        }}
      />
      <Panel {...props} onClose={handlePanelClose} open={open}>
        <SmallButtonWrapper>
          <Button label="Primary Button" variant={ButtonVariant.SecondaryOutlined} />
          <Button label="Secondary Button" variant={ButtonVariant.SecondaryOutlined} />
          <Button label="Action Button" data-autofocus />
        </SmallButtonWrapper>
      </Panel>
    </>
  );
};

const XLargePanelWithHeader = () => {
  const [open, setOpen] = useState(false);

  const [state, setstate] = useState({
    size: PanelSize.XLarge,
    variant: PanelHeaderVariant.TitleAndCloseButton,
    open: false,
    title: 'X-Large Panel',
    children: 'Panel child content',
    onClose: action('onClose'),
  });

  useEffect(() => {
    setstate({ ...state, open: open });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const handlePanelClose = () => setOpen(false);

  return (
    <>
      <Button
        label="Open panel"
        onClick={() => {
          setOpen(true);
        }}
      />
      <Panel {...state} onClose={handlePanelClose} open={open}>
        <LargeButtonWrapper>
          <Button label="Primary Button" variant={ButtonVariant.SecondaryOutlined} />
          <Button label="Secondary Button" data-autofocus />
        </LargeButtonWrapper>
      </Panel>
    </>
  );
};

const LargePanelWithHeader = () => {
  const [open, setOpen] = useState(false);

  const [state, setstate] = useState({
    size: PanelSize.Large,
    variant: PanelHeaderVariant.TitleAndCloseButton,
    open: false,
    title: 'Large Panel',
    children: 'Panel child content',
    onClose: action('onClose'),
  });

  useEffect(() => {
    setstate({ ...state, open: open });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const handlePanelClose = () => setOpen(false);

  return (
    <>
      <Button
        label="Open panel"
        onClick={() => {
          setOpen(true);
        }}
      />
      <Panel {...state} onClose={handlePanelClose} open={open}>
        <LargeButtonWrapper>
          <Button label="Primary Button" variant={ButtonVariant.SecondaryOutlined} />
          <Button label="Secondary Button" data-autofocus />
        </LargeButtonWrapper>
      </Panel>
    </>
  );
};

const MediumPanelWithTitle = () => {
  const [open, setOpen] = useState(false);

  const [state, setstate] = useState({
    size: PanelSize.Medium,
    variant: PanelHeaderVariant.TitleOnly,
    open: false,
    title: 'Medium Panel',
    children: 'Panel child content',
    onClose: action('onClose'),
  });

  useEffect(() => {
    setstate({ ...state, open: open });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const handlePanelClose = () => setOpen(false);

  return (
    <>
      <Button
        label="Open panel"
        onClick={() => {
          setOpen(true);
        }}
      />
      <Panel {...state} onClose={handlePanelClose} open={open}>
        <MediumButtonWrapper>
          <Button label="Primary Button" variant={ButtonVariant.SecondaryOutlined} />
          <Button label="Secondary Button" data-autofocus />
        </MediumButtonWrapper>
      </Panel>
    </>
  );
};

const MediumPanelWithCross = () => {
  const [open, setOpen] = useState(false);

  const [state, setstate] = useState({
    size: PanelSize.Medium,
    variant: PanelHeaderVariant.CloseButtonOnly,
    open: false,
    title: 'Medium Panel',
    children: 'Panel child content',
    onClose: action('onClose'),
  });

  useEffect(() => {
    setstate({ ...state, open: open });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const handlePanelClose = () => setOpen(false);

  return (
    <>
      <Button
        label="Open panel"
        onClick={() => {
          setOpen(true);
        }}
      />
      <Panel {...state} onClose={handlePanelClose} open={open}>
        <MediumButtonWrapper>
          <Button label="Primary Button" variant={ButtonVariant.SecondaryOutlined} />
          <Button label="Secondary Button" data-autofocus />
        </MediumButtonWrapper>
      </Panel>
    </>
  );
};

const SmallPanel = () => {
  const [open, setOpen] = useState(false);

  const [state, setstate] = useState({
    size: PanelSize.Small,
    variant: PanelHeaderVariant.CloseButtonOnly,
    overlay: false,
    open: false,
    title: 'Small Panel',
    children: 'Panel child content',
    onClose: action('onClose'),
  });

  useEffect(() => {
    setstate({ ...state, open: open });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const handlePanelClose = () => setOpen(false);

  return (
    <>
      <Button
        label="Open panel"
        onClick={() => {
          setOpen(true);
        }}
      />
      <Panel {...state} onClose={handlePanelClose} open={open}>
        <SmallButtonWrapper>
          <Button label="Primary Button" variant={ButtonVariant.SecondaryOutlined} />
          <Button label="Secondary Button" variant={ButtonVariant.SecondaryOutlined} />
          <Button label="Action Button" data-autofocus />
        </SmallButtonWrapper>
      </Panel>
    </>
  );
};

const SmallButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  padding: ${theme.spaces.spaceSmall}px;
  margin: 0;
  margin-top: auto;

  button {
    margin-top: ${theme.spaces.spaceXSmall}px;
  }
`;

const MediumButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: ${theme.spaces.spaceSmall}px;
  margin: 0;
  margin-top: auto;

  button {
    width: 48%;
  }
`;

const LargeButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: ${theme.spaces.spaceSmall}px;
  margin: 0;
  margin-top: auto;

  button {
    margin-left: ${theme.spaces.spaceXSmall}px;
  }
`;
