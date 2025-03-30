# NC AI Frontend Radix UI

[Radix Primitives](https://www.radix-ui.com/primitives) 기반 커스텀 UI 라이브러리

## 소개

본 패키지는 Radix UI Primitives를 기반으로 디자인 시스템을 반영하여 개발된 커스텀 UI 컴포넌트 라이브러리입니다.  
디자인 시스템 적용 사례를 공유하는 것이 주요 목적이며, 모든 디자인 시스템을 포함하거나 Radix의 모든 컴포넌트를 제공하지는 않습니다.  
또한, Radix UI에서 제공하지 않는 컴포넌트는 필요에 따라 직접 개발하여 사용하는 것을 원칙으로 합니다.

---

## 설치

```bash
npm install nc-ai-frontend-radix-ui radix-ui sass
```

---

## 사용법

### 스타일 추가

```tsx
import 'nc-ai-frontend-radix-ui/dist/styles/v3-pc/common/index.scss';
import 'nc-ai-frontend-radix-ui/dist/styles/v3-pc/components/index.scss';
```

### 래핑된 컴포넌트 사용

```tsx
import { Checkbox } from 'nc-ai-frontend-radix-ui';

function App() {
  return (
    <>
      <Checkbox />
    </>
  );
}

export default App;
```

### Radix Primitive 컴포넌트 사용

```tsx
import { Checkbox } from 'radix-ui';

function App() {
  return (
    <Checkbox.Root className="CheckboxRoot" defaultChecked id="c1">
      <Checkbox.Indicator className="CheckboxIndicator">v</Checkbox.Indicator>
    </Checkbox.Root>
  );
}

export default App;
```

### 기본 디자인 적용된 태그

``` scss
input,
textarea {
  margin: 0;
  outline: none;
  vertical-align: top;
  color: var(--Label-Primary, #171717);
  border: solid 1px var(--Line-Secondary, #e6e6e6);
  border-radius: var(--Radius-Small, 4px);
  background-color: transparent;
  caret-color: var(--Static-Primary, #006eff);
  @include body-m-r;
  &::placeholder {
    color: var(--Label-Quaternary, rgba(23, 23, 23, 0.4));
  }
  &:disabled {
    border: 1px solid var(--Line-Secondary, #e6e6e6);
    background: var(--Interaction-Disabled, rgba(56, 58, 58, 0.12));
  }
  &:not(:disabled) {
    &:hover {
      border-color: var(--Line-Primary, #cccccc);
    }
    &:focus {
      border-color: var(--Static-Primary, #006eff);
    }
  }
}
```

### 버튼 믹스인

```scss
/*
$types: ("filled", "tonal", "outlined", "text");
$sizes: ("medium", "small", "large");
$variants: ("primary", "secondary", "tertiary", "negative");
*/

@include button($type: "filled", $size: "medium", $variant: "primary");
```

---

## 컴포넌트 목록

본 패키지는 Radix UI 컴포넌트를 래핑하거나 확장하여 사용하는 예시를 제공합니다.  
각 컴포넌트의 상세한 사용법(API 및 Props)은 공식 문서를 참고하세요.

### Accordion
https://www.radix-ui.com/primitives/docs/components/accordion

```tsx
<Accordion
  type="single"
  collapsible
  items={[
    {
      trigger: 'Is it accessible?',
      content: 'Yes. It adheres to the WAI-ARIA design pattern.',
      value: 'item-1',
    },
    {
      trigger: 'Is it unstyled?',
      content: 'Yes. Its unstyled by default, giving you freedom over the look and feel.',
      value: 'item-2',
    },
  ]}
/>
```
  
### Alert Dialog
https://www.radix-ui.com/primitives/docs/components/alert-dialog

```tsx
<AlertDialog
  trigger={<button>Open ALertDialog</button>}
  title={'hello'}
  description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text'}
  actionLabel="Action"
  cancelLabel="Cancel"
/>
```

### Aspect Ratio(제공하지 않음)
https://www.radix-ui.com/primitives/docs/components/aspect-ratio

### Avatar(제공하지 않음)
https://www.radix-ui.com/primitives/docs/components/avatar

### Checkbox
https://www.radix-ui.com/primitives/docs/components/checkbox

```tsx
<Checkbox />
```

### Collapsible(제공하지 않음)
https://www.radix-ui.com/primitives/docs/components/collapsible

### Context Menu(제공하지 않음)
https://www.radix-ui.com/primitives/docs/components/context-menu

### Dialog
https://www.radix-ui.com/primitives/docs/components/dialog

```tsx
<Dialog
  trigger={<button>Open Dialog</button>}
  closeButton={true}
  title={'Title'}
  description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
  cancelLabel="Cancel"
  actionLabel="Action"
  onCancel={() => alert('click cancel')}
  onAction={() => alert('click action')}
>
  <div>Custom Body</div>
</Dialog>
```

### Dropdown Menu
https://www.radix-ui.com/primitives/docs/components/dropdown-menu

```tsx
<DropdownMenu
  trigger={<button>Open DropdownMenu</button>}
  groups={[
    {
      label: 'Group 1',
      items: [
        { children: <span>Item</span> },
      ],
    },
    {
      label: 'Group 2',
      items: [
        { children: <span>Disabled</span>, disabled: true },
      ],
    },
  ]}
/>
```

### Form(제공하지 않음)
https://www.radix-ui.com/primitives/docs/components/form

### Hover Card(제공하지 않음)
https://www.radix-ui.com/primitives/docs/components/hover-card

### Label
https://www.radix-ui.com/primitives/docs/components/label

```tsx
<Label>text</Label>
```

### Menubar(제공하지 않음)
https://www.radix-ui.com/primitives/docs/components/menubar

### Navigation Menu(제공하지 않음)
https://www.radix-ui.com/primitives/docs/components/navigation-menu

### Popover(제공하지 않음)
https://www.radix-ui.com/primitives/docs/components/popover

### Progress
https://www.radix-ui.com/primitives/docs/components/progress

```tsx
<Progress value={30} />
```

### Radio Group
https://www.radix-ui.com/primitives/docs/components/radio-group

```tsx
<RadioGroup
  defaultValue="comfortable"
  items={[
    { value: 'default', id: 'r1' },
    { value: 'comfortable', id: 'r2' },
    { value: 'compact', id: 'r3' },
  ]}
/>
```

### Scroll Area

https://www.radix-ui.com/primitives/docs/components/scroll-area

```tsx
<ScrollArea style={{ height: "100px", width: "200px" }}>
  <div style={{ width: "100%", height: "1000px", background: "black" }}>
    Whatever Contents You Want
  </div>
</ScrollArea>
```

### Select
https://www.radix-ui.com/primitives/docs/components/select

```tsx
<Select
  width="180px"
  placeholder={'Select Options'}
  groups={[
    {
      label: 'Group Label1',
      items: [
        { value: '1', text: 'Option1' },
        { value: '2', text: 'Option2' },
        { value: '3', text: 'Option3' },
      ],
    },
    {
      label: 'Group Label2',
      items: [
        { value: '4', text: 'Option4' },
        { value: '5', text: 'Option5' },
        { value: '6', text: 'Option6' },
      ],
    },
  ]}
/>
```

### Separator
https://www.radix-ui.com/primitives/docs/components/separator

```tsx
<Separator />
```

### Slider
https://www.radix-ui.com/primitives/docs/components/slider

```tsx
<Slider defaultValue={[50]} max={100} step={1} />
```

### Switch
https://www.radix-ui.com/primitives/docs/components/switch

```tsx
<Switch />
```

### Tabs
https://www.radix-ui.com/primitives/docs/components/tabs

```tsx
 <Tabs
  defaultValue="account"
  triggers={[
    {
      value: 'account',
      children: <>Account</>,
      style: { width: '125px' },
    },
    {
      value: 'password',
      children: <>Password</>,
      style: { width: '125px' },
    },
    {
      value: 'disabled',
      children: <>Disabled</>,
      style: { width: '125px' },
      disabled: true,
    },
  ]}
>
  <TabsContent value="account" style={{ marginTop: '1rem' }}>
    This is tab content for "account"
  </TabsContent>
  <TabsContent value="password" style={{ marginTop: '1rem' }}>
    This is tab content for "password"
  </TabsContent>
</Tabs>
```

### Toast

https://www.radix-ui.com/primitives/docs/components/toast

```tsx
export default function App() {
  const { toast } = useToast();

  const handleToastButtonClick = () => {
    toast({
      text: 'Title only',
      duration: 3000,
      close: true,
      state: 'error',
      action: <ToastAction altText="hi">hi</ToastAction>,
    });
  };

  return (
    <>
      <button onClick={handleToastButtonClick}>
        Add to calendar
      </button>
      <Toaster />
    </>
  );
}
```

### Toggle
https://www.radix-ui.com/primitives/docs/components/toggle

```tsx
<Toggle>
  <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.25 1.5C19.6589 1.5 20.0266 1.74895 20.1785 2.12861L22.0816 6.8863C22.3611 7.58513 22.9148 8.13885 23.6137 8.41834L28.3724 10.3215C28.7521 10.4734 29.001 10.8411 29.001 11.25C29.001 11.6589 28.7521 12.0266 28.3724 12.1785L23.6137 14.0817C22.9148 14.3612   22.3611 14.9149 22.0816 15.6137L20.1785 20.3714C20.0266 20.751 19.6589 21 19.25 21C18.8411 21 18.4734 20.751 18.3215 20.3714L16.4184 15.6136C16.1389 14.9148 15.5852 14.3611 14.8864 14.0816L10.1286 12.1785C9.74895 12.0266 9.5 11.6589 9.5 11.25C9.5 10.8411 9.74895 10.4734 10.1286 10.3215L14.8864 8.4184C15.5852 8.13889 16.1389 7.5852 16.4184 6.88642L18.3215 2.12861C18.4734 1.74895 18.8411 1.5 19.25 1.5Z" fill="#FF00CD"/>
    <path d="M8.62467 15.25C9.03358 15.25 9.4013 15.499 9.55315 15.8786L10.5633 18.4042C10.8428 19.103 11.3966 19.6567 12.0954 19.9362L14.6214 20.9465C15.001 21.0984 15.25 21.4661 15.25 21.875C15.25 22.2839 15.001 22.6516 14.6214 22.8035L12.0954 23.8138C11.3966 24.0933 10.8428 24.647 10.5633 25.3458L9.55315 27.8714C9.4013 28.251 9.03358 28.5 8.62467 28.5C8.21576 28.5 7.84804 28.251 7.69619 27.8714L6.68599 25.3457C6.40649 24.6469 5.85281 24.0932 5.15403 23.8137L2.62859 22.8035C2.24894 22.6516 2 22.2839 2 21.875C2 21.4661 2.24894 21.0984 2.62859 20.9465L5.15403 19.9363C5.85281 19.6568 6.40649 19.1031 6.68598 18.4043L7.69619 15.8786C7.84804 15.499 8.21576 15.25 8.62467 15.25Z" fill="#FF00CD"/>
  </svg>
</Toggle>
```

### Toggle Group(제공하지 않음)
https://www.radix-ui.com/primitives/docs/components/toggle-group


### Toolbar(제공하지 않음)
https://www.radix-ui.com/primitives/docs/components/toolbar


### Tooltip

https://www.radix-ui.com/primitives/docs/components/tooltip

```tsx
<TooltipProvider>
  <Tooltip text="Add to library">
    <button>
      <PlusIcon />
    </button>
  </Tooltip>
</TooltipProvider>
```

---

## 문의사항

버그 신고 및 개선 제안은 이슈(issue)에 남겨주시고, PR(Pull Request)도 환영합니다.

---

## 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.  
자세한 내용은 LICENSE 파일을 참고하세요.

---
