start:
	yarn run start

lint:
	yarn run lint
	yarn run pretty-quick --staged --branch develop --check

test:
	yarn run test --coverage --watchAll=false

remove_cache:
	rm -rf node_modules/.cache

clean:
	rm -rf node_modules

build:
	NODE_ENV=production GENERATE_SOURCEMAP=false yarn run build

fix:
	yarn run lint --fix
	yarn run pretty-quick --branch develop

themes:
	lessc --include-path=node_modules --js src/styles/antd/light.less > src/styles/themes/antd-light.scss
	lessc --include-path=node_modules --js src/styles/antd/dark.less > src/styles/themes/antd-dark.scss
