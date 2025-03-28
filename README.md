# NC AI Frontend Radix UI

[Radix Primitives](https://www.radix-ui.com/primitives) 기반 커스텀 UI 라이브러리

## 소개

본 패키지는 Radix UI Primitives를 기반으로 디자인 시스템을 반영하여 개발된 커스텀 UI 컴포넌트 라이브러리입니다.  
디자인 시스템 적용 사례를 공유하는 것이 주요 목적이며, 모든 디자인 시스템을 포함하거나 Radix의 모든 컴포넌트를 제공하지는 않습니다.  
또한, Radix UI에서 제공하지 않는 컴포넌트는 필요에 따라 직접 개발하여 사용하는 것을 원칙으로 합니다.

## 설치

```bash
npm install nc-ai-frontend-radix-ui radix-ui sass
```

## 사용법

### 스타일 추가

```tsx
import 'nc-ai-frontend-ui-temp/dist/styles/v3-pc/common/index.scss';
import 'nc-ai-frontend-ui-temp/dist/styles/v3-pc/components/index.scss';
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

### 믹스인 사용

```css
$abc: #fff;

.test {
  color: $abc;
}
```

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
      content:
        "Yes. It's unstyled by default, giving you freedom over the look and feel.",
      value: '"item-2',
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
  description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text`}
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
  description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}
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
      label: 'Group Label 1',
      items: [
        {
          children: (
            <>
              <span>Item1</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </>
          ),
        },
        {
          children: (
            <>
              <span>Item2</span>
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </>
          ),
        },
        {
          children: (
            <>
              <span>Item3</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </>
          ),
        },
      ],
    },
    {
      label: 'Group Label 2',
      items: [
        {
          children: (
            <>
              <span>Disabled</span>
              <DropdownMenuShortcut>Ctrl [</DropdownMenuShortcut>
            </>
          ),
          disabled: true,
        },
        {
          children: (
            <>
              <span>Item4</span>
              <DropdownMenuShortcut>Ctrl ]</DropdownMenuShortcut>
            </>
          ),
        },
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
        {
          value: '1',
          text: 'Option1',
        },
        {
          value: '2',
          text: 'Option2',
        },
        {
          value: '3',
          text: 'Option3',
        },
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
```

### Toggle
https://www.radix-ui.com/primitives/docs/components/toggle

```tsx
<Toggle>
  <BookmarkIcon />
</Toggle>
```

### Toggle Group(제공하지 않음)
https://www.radix-ui.com/primitives/docs/components/toggle-group


### Toolbar(제공하지 않음)
https://www.radix-ui.com/primitives/docs/components/toolbar


### Tooltip
https://www.radix-ui.com/primitives/docs/components/tooltip

```tsx
```


## 문의사항

버그 신고 및 개선 제안은 이슈(issue)에 남겨주시고, PR(Pull Request)도 환영합니다.

## 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.  
자세한 내용은 LICENSE 파일을 참고하세요.
