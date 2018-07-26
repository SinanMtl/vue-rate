build: ## Compiles for browser using Browserify
	@echo "Compiling..."
	# Running builder
	@rm -rf dist/*
	@npm run build

version:
	@npm --no-git-tag-version version $(v) > VERSION
	@git checkout package.json
	@make build
	@git add -A
	@git commit -m `cat VERSION`
	@npm version $(v)

demo:
	@make build
	rm -rf /tmp/dist
	cp -a dist /tmp/dist
	git checkout gh-pages
	cp -a /tmp/dist/ .
