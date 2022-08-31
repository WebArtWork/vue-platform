# ngx-textarea

## Installation

```sh
waw add ngx-textarea
```

## Usage
```
<wtextarea disabled="true" [(model)]="value.textarea" (modelChange)="test()" label="This is a label text for textarea" placeholder="This is a placeholder text for textarea"></wtextarea>
```
```
import { TextareaModule } from 'src/app/modules';
@NgModule({
	imports: [
		TextareaModule
	]
})
```

## Arguments
```
label: string | Displayed label
placeholder: string | Placeholder
model: boolean | Returns the input text
disabled: boolean | Disable input if true
modelChange | Called when model changes
```
