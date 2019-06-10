([
	{
		shouldDeps: [
			{ block: 'color' },
			{ block: 'color', elem: 'image' },
			{ block: 'doc-view' },
			{ block: 'badge', mods: { view: ['default', 'alert', 'warning', 'success'] } },
			{ block: 'icon' },
			{ block: 'icon', mods: { name: 'close', size: 's', view: ['ghost', 'link'] } },
			{ block: 'tpl-grid' },
			{ block: 'tpl-grid', mods: {'row-gap': 'third'} },
			{ block: 'space', elem: 'image' },
			{ block: 'space-image' },
			{ block: 'button', mods: { theme: 'islands', size: ['xl', 'm'], type: 'link', view: 'action' } },
			{ block: 'button', elem: 'text' },
			{ block: 'component', mods: { whitepaper: ['default', 'success'] } },
			{ block: 'card-doc-preview' },
			{ block: 'preview' },
			{ block: 'input', mods: { theme: 'islands', width: 'available', size: 'm' } },
			{ block: 'input', elem: 'box' },
			{ block: 'avatar' },
			{ block: 'avatar', elem: 'photo', mods: { size: ['l', 'm', 's', 'xs'] } },
			{ block: 'theme', mods: { color: ['whitepaper-default', 'whitepaper-portal-brand', 'whitepaper-portal-inverse', 'whitepaper-portal-default'] } },
			{ block: 'brand-logo' },
			{ block: 'brand-logo', mods: { form: ['round', 'mask' ], size: ['2xs', 'xs', 's', 'm', 'l'] } },

		]
	}
])
