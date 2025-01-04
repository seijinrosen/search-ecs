dev:
	pnpm run dev

switch:
	git switch --create develop

init:
	pnpm install

clean:
	rm -r node_modules/
	rm -r dist/

check-all:
	pnpm run cspell
	pnpm run prettier:check
	pnpm run types:check
	pnpm run eslint
	pnpm run build
