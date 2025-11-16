# FOINIK - AI Security Testing Platform

AI/LLM security testing platform implementing the MYNDRA methodology.

## Structure

```
foinik/
├── backend/      # Python FastAPI backend
├── frontend/     # React frontend
├── data/         # Attack patterns
├── databases/    # Database configs
├── docs/         # Documentation
└── scripts/      # Utility scripts
```

## Quick Start

### Prerequisites

- Docker & docker-compose
- Ollama (with llama3.1:8b model)
- Node.js 18+ (for frontend)

### Setup

```bash
# 1. Install Ollama and download model
ollama pull llama3.1:8b
ollama serve

# 2. Setup environment
make setup

# 3. Start backend services
make start

# 4. Run frontend (in another terminal)
make dev-frontend
```

### Access

- Frontend: http://localhost:5174
- Backend API: http://localhost:8000
- API Docs: http://localhost:8000/docs

## Development

### Frontend

```bash
cd frontend
npm run dev
```

### Backend (without Docker)

```bash
cd backend
python -m venv venv
venv\Scripts\activate  # Windows
pip install -r requirements.txt
uvicorn app.main:app --reload
```

## MYNDRA Methodology

**M**odel Discovery  
**Y**ield Exploration  
**N**avigate & Exploit  
**D**erive Insights  
**R**emediate & Assure

Four-step adaptive AI security testing framework.

## Author

Spyros

## License

MIT
