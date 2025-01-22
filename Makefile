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
	rm -r dist/

dev:
	pnpm run dev

install:
	pnpm install

switch:
	git switch --create develop
