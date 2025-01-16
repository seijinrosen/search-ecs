check:
	pnpm run cspell
	pnpm run prettier:check
	pnpm run types:check
	pnpm run eslint
	pnpm run build

clean:
	rm -r node_modules/
	rm -r dist/

dev:
	pnpm run dev

install:
	pnpm install

switch:
	git switch --create develop
