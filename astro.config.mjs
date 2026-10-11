// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'CTFで学ぶ',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/suikamin' },
				{ icon: 'blueSky', label: 'BlueSky', href: 'https://bsky.app/profile/nikodehyakuen.bsky.social'}
			],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'CTF入門と環境構築',
					items: [{ autogenerate: { directory: 'step1-intro' } }],
				},
				{
					label: 'Webの成り立ちと仕組み',
					items: [{ autogenerate: { directory: 'step2-web' } }],
				},
				{
					label: 'Web脆弱性とExploit',
					items: [{ autogenerate: { directory: 'step3-web-vuln' } }],
				},
				{
					label: 'コンピュータが動く仕組み',
					items: [{ autogenerate: { directory: 'step4-low-layer' } }],
				},
				{
					label: 'バイナリ解析とPwn',
					items: [{ autogenerate: { directory: 'step5-pwn-rev' } }],
				},
			],
		}),
	],
});
