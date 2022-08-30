up:
	@docker compose up -d
	@nx run-many --target=serve --projects=frontend,backend --parallel --maxParallel=100

down:
	@docker compose down

restart:
	@make down && make up

migrate:
