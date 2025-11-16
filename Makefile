.PHONY: help setup start stop logs dev-frontend

help:
	@echo "FOINIK Commands:"
	@echo "  make setup         - Initial setup"
	@echo "  make start         - Start all services"
	@echo "  make stop          - Stop services"
	@echo "  make logs          - View logs"
	@echo "  make dev-frontend  - Run frontend dev server"

setup:
	@echo "Setting up FOINIK..."
	copy .env.example .env
	copy backend\.env.example backend\.env
	@echo "Done! Run: make start"

start:
	@echo "Starting services..."
	docker-compose up -d
	@echo "Backend: http://localhost:8000"
	@echo "Frontend: run 'make dev-frontend' in another terminal"

stop:
	docker-compose down

logs:
	docker-compose logs -f

dev-frontend:
	cd frontend && npm run dev