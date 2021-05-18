module.exports = {
	name: 'collapsible',
	events: [
		{
			name: 'update:modelValue',
			description: 'Event emitted for setting the modelValue',
			type: []
		}
	],
	slots: [
		{
			name: 'default',
			description: 'Slot for default collapsible content',
			type: []
		}
	],
	props: [
		{
			name: 'accordion',
			description: 'Display the collapsible as an accordion, keeping a maximum of one open collapsible item',
			type: [
				'Boolean'
			],
			default: 'false'
		},
		{
			name: 'color',
			description: 'The color variant of the button',
			type: [
				'light',
				'dark',
				'blank'
			],
			default: 'light'
		},
		{
			name: 'size',
			description: 'The size variant of the collapsible',
			type: [
				'sm',
				'md',
				'lg'
			],
			default: 'md'
		},
		{
			name: 'modelValue',
			description: 'Used to determine which collapsible item is open',
			type: [
				'Array.<String>'
			],
			default: '{"type":"","default":""}'
		}
	],
	styles: [
		{
			name: 'font-size',
			description: 'The font size of the collapsible component',
			type: 'size',
			default: 'font-size()'
		},
		{
			name: 'border-radius',
			description: 'The border radius of the collapsible component',
			type: 'size',
			default: 'border-radius()'
		},
		{
			name: 'padding',
			description: 'The padding of the collapsible component',
			type: 'size',
			default: 'spacing()'
		},
		{
			name: 'color',
			description: 'The color of the collapsible component',
			type: 'color',
			variants: {
				light: 'contrast-color($color-light)',
				dark: 'contrast-color($color-dark)'
			}
		},
		{
			name: 'background',
			description: 'The background of the collapsible component',
			type: 'color',
			variants: {
				light: 'color(\'light\')',
				dark: 'color(\'dark\')'
			}
		},
		{
			name: 'border-color',
			description: 'The border color of the collapsible component',
			type: 'color',
			variants: {
				light: 'color(\'light-55\')',
				dark: 'color(\'dark-45\')'
			}
		},
		{
			name: 'body-background',
			description: 'The background of the collapsible component body',
			type: 'color',
			variants: {
				light: 'color(\'white\')',
				dark: 'color(\'dark-45\')'
			}
		}
	]
};