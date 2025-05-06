check:
	pnpm run coverage
	pnpm run cspell
	pnpm run prettier:check
	pnpm run types:check
	pnpm run eslint
	pnpm run build
	pnpm run knip

clean:
	rm -r node_modules/
	rm -r coverage/
	rm -r dist/
	rm -r storybook-static/

dev:
	pnpm run dev

fix:
	pnpm run eslint:fix
	pnpm run prettier:write

install:
	pnpm install

switch:
	git switch --create develop
