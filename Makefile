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