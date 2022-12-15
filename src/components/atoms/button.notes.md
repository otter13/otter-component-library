### Getting started 
```tsx
import { Button, ButtonIcon, ButtonSize, ButtonVariant } from "otc-ui-component-library";

const App = () => {
    return <Button label="Click me!" variant={ButtonVariant.SecondaryFilled} size={ButtonSize.Small} />
}
```

### Styling Button

There are 3 ways (not including using css file) to style the button

1. Using style property 

```tsx
<Button style={{color: "tan"}}
```

2. Using styled component 

```tsx
const MyButton = styled(Button)`
    color: tan;
`;
```

3. From a parent styled component 

```tsx
const ButtonStyled = styled(Button)``

const MyWrapper = styled.div`
    ${ButtonStyled} { 
        color: tan; 
    }
`;
```


### Playground