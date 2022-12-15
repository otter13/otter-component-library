The panel component will be used for additional information/interactions related to the existing screens and will display rich interactive content such as tabs, input fields operator instructions, and imagery.

### Assumption:
- The Panel is a container, body content and action buttons are children of Panel.

### Getting started 
```tsx
import { Panel } from "otc-ui-component-library";

const App = () => {
    const [open, setOpen] = useState(false);
    const handleModalClose = () => setOpen(false);
    return (
        <Panel {...props} onClose={handleModalClose} open={open}>
            ...
            <Button label="Secondary Button" data-autofocus />
        </Panel>)
}
```
### Component structure:
- Panel not setting autofocus inside of content
- FocusLock is a package used on the parent of Panel and looking for (data-autofocus) attribute in the elements for auto focusing.

### Business rules:
- The small panels are used for additional information like product details or transaction details etc.
- The medium panels are used for more interactive elements like the shopping cart.
- The large panels are used for side missions like the cash/cheque calculator (Bank@Post).
- The X large panels are used for showing data like table with multiple columns (POB Customer Search)
- All panels have variants for the header including hiding and showing of the title and cross button.
- Only the medium panel has additional button group variants including stacked, horizontal, and full width. 
- If an input field or actionable item is displayed in the content area, it will be focused on automatically upon entering the panel. If the panel is just text-based, it will be focused on the action buttons in the footer, if no action buttons are available, it will focus on the cross.