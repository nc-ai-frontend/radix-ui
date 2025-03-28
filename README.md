# NC AI Frontend Radix UI

[Radix Primitives](https://www.radix-ui.com/primitives) 기반 커스텀 UI 라이브러리

## 소개

본 패키지는 Radix UI Primitives를 기반으로 디자인 시스템을 반영하여 개발된 커스텀 UI 컴포넌트 라이브러리입니다.  
디자인 시스템 적용 사례를 공유하는 것이 주요 목적이며, 모든 디자인 시스템을 포함하거나 Radix의 모든 컴포넌트를 제공하지는 않습니다.  
또한, Radix UI에서 제공하지 않는 컴포넌트는 필요에 따라 직접 개발하여 사용하는 것을 원칙으로 합니다.

## 설치

```bash
npm install nc-ai-frontend-radix-ui
```

## 사용법

### 스타일 추가

```typescript jsx
import 'nc-ai-frontend-ui-temp/dist/styles/v3-pc/common/index.scss';
import 'nc-ai-frontend-ui-temp/dist/styles/v3-pc/components/index.scss';
```

### 래핑된 컴포넌트 사용

```typescript jsx
import { Checkbox } from 'nc-ai-frontend-ui-temp';

function App() {
  return (
    <>
      <Checkbox />
    </>
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
<AlertDialogRoot>
  <AlertDialogTrigger asChild>
    <button>Delete account</button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
    <AlertDialogDescription>
      This action cannot be undone. This will permanently delete your
      account and remove your data from our servers.
    </AlertDialogDescription>
    <div
      style={{
        display: 'flex',
        gap: 25,
        justifyContent: 'flex-end',
      }}
    >
      <AlertDialogCancel asChild>
        <button>Cancel</button>
      </AlertDialogCancel>
      <AlertDialogAction asChild>
        <button>Yes, delete account</button>
      </AlertDialogAction>
    </div>
  </AlertDialogContent>
</AlertDialogRoot>
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
  id="abc"
  trigger={<button>Dialog Button</button>}
  modal={true}
  closeButton={true}
  titleText="This is header title text"
  descriptionText="This is header descriptiont text."
  footer={
    <div>
      <DialogClose asChild>
        <button type="button">취소</button>
      </DialogClose>
      <button type="button">확인</button>
    </div>
  }
>
  <div>
    <p>
      제공된 className은 모달 창에 상속됩니다. <br />
      빨간 테두리는 기본 스타일링에 들어가있지 않습니다. <br />
    </p>
  </div>
</Dialog>
```

### Dropdown Menu
https://www.radix-ui.com/primitives/docs/components/dropdown-menu

```tsx
<DropdownMenuRoot>
  <DropdownMenuTrigger asChild>
    <button>Open</button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-56">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
      <DropdownMenuItem>
        <span>Profile</span>
        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <span>Billing</span>
        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <span>Settings</span>
        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <span>Keyboard shortcuts</span>
        <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
      <DropdownMenuItem>
        <span>Team</span>
      </DropdownMenuItem>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>
          <span>Invite users</span>
        </DropdownMenuSubTrigger>
        <DropdownMenuPortal>
          <DropdownMenuSubContent>
            <DropdownMenuItem>
              <span>Email</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Message</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <span>More...</span>
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuPortal>
      </DropdownMenuSub>
      <DropdownMenuItem>
        <span>New Team</span>
        <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <span>GitHub</span>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <span>Support</span>
    </DropdownMenuItem>
    <DropdownMenuItem disabled>
      <span>API</span>
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <span>Log out</span>
      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenuRoot>
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
<TabsRoot defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    This is tab content for "account"
  </TabsContent>
  <TabsContent value="password">
    This is tab content for "password"
  </TabsContent>
</TabsRoot>
```

### Toast
https://www.radix-ui.com/primitives/docs/components/toast

```tsx
```

### Toggle
https://www.radix-ui.com/primitives/docs/components/toggle

```tsx
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
