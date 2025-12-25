.PHONY: dev
dev: test

.PHONY: check
check: lint test

.PHONY: test
test: setup
	bun run -- ./src/scramble-generation/index.ts

.PHONY: lint
lint: setup
	bun x -- bun-dx --package @biomejs/biome biome -- check

.PHONY: format
format: setup
	bun x -- bun-dx --package @biomejs/biome biome -- check --write

.PHONY: setup
setup:
	bun install --frozen-lockfile

RM_RF = bun -e 'process.argv.slice(1).map(p => process.getBuiltinModule("node:fs").rmSync(p, {recursive: true, force: true, maxRetries: 5}))' --

.PHONY: clean
clean:
	${RM_RF} ./dist/

.PHONY: reset
reset: clean
	${RM_RF} ./node_modules/
