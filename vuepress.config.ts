import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import { readdirSync } from "fs";

let navbar = [
	{
		text: "联系我",
		link: "http://wpa.qq.com/msgrd?v=3&uin=295984047&site=qq&menu=yes",
	},
];

let sidebar = list("./docs/");

export default defineUserConfig<DefaultThemeOptions>({
	base: "/d/",
	lang: "zh-CN",
	title: "daily",
	description: "just a little",
	themeConfig: {
		logo: "https://vuejs.org/images/logo.png",
		navbar,
		sidebar,
		lastUpdatedText: "最近更新",
		contributors: false,
	},
	bundler: "@vuepress/vite",
});

function list(p: string): string[] {
	let s: string[] = [];
	const files = readdirSync(p);
	for (const file of files) {
		if (file.endsWith(".md")) {
			s.push("/" + file.toString());
		}
	}
	return s;
}
