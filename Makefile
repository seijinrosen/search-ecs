dev:
	pnpm run dev

switch:
	git switch --create develop

init:
	pnpm install

clean:
	rm -r node_modules/
	rm -r dist/
