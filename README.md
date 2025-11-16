# FOINIK - AI Security Testing Platform

AI/LLM security testing platform implementing the MYNDRA methodology.

## 🏗️ Structure

```
foinik/
├── backend/      # Python FastAPI backend
├── frontend/     # React frontend
├── data/         # Attack patterns
├── databases/    # Database configs
├── docs/         # Documentation
└── scripts/      # Utility scripts
```

## 🚀 Quick Start

### Prerequisites

- **Docker & docker-compose** (for containerized deployment)
- **Ollama** (with llama3.1:8b model)
- **Python 3.11+** (for local backend development)
- **Node.js 18+** (for frontend development)

### Initial Setup

1. **Install Ollama and download model**

```bash
   # Install from: https://ollama.ai/
   ollama pull llama3.1:8b
   ollama serve
```

2. **Clone and setup environment**

```bash
   # Clone repository
   git clone https://github.com/yourusername/foinik.git
   cd foinik

   # Create environment files
   copy .env.example .env
   copy backend\.env.example backend\.env
```

3. **Choose your development method:**
   - **Option A**: Docker (all services) - See "Docker Development"
   - **Option B**: Local (backend + frontend separately) - See "Local Development"

---

## 💻 Local Development (Recommended for Development)

### Frontend Development

```bash
# Navigate to frontend
cd frontend

# Install dependencies (first time only)
npm install

# Run development server
npm run dev
```

✅ Frontend available at: **http://localhost:5174**

**To stop:** Press `Ctrl + C`

---

### Backend Development

```bash
# Navigate to backend
cd backend

# Create virtual environment (first time only)
python -m venv venv

# Activate virtual environment
# Windows PowerShell:
.\venv\Scripts\Activate.ps1

# Windows CMD:
.\venv\Scripts\activate.bat

# macOS/Linux:
source venv/bin/activate

# Install dependencies (first time only or when requirements.txt changes)
pip install -r requirements.txt

# Run development server
uvicorn app.main:app --reload
```

✅ Backend API available at: **http://localhost:8000**  
✅ API Docs available at: **http://localhost:8000/docs**

**To stop:** Press `Ctrl + C`

**To deactivate venv:** Type `deactivate`

---

### MongoDB (for Local Development)

**Option 1: Use Docker for MongoDB only**

```bash
docker-compose up mongodb -d
```

**Option 2: Install MongoDB locally**

- Install from: https://www.mongodb.com/try/download/community
- Default connection: `mongodb://localhost:27017`

---

## 🐳 Docker Development (All Services)

```bash
# Start all services (backend + frontend + mongodb)
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down
```

**Access:**

- Frontend: http://localhost:5174
- Backend API: http://localhost:8000
- API Docs: http://localhost:8000/docs
- MongoDB: mongodb://localhost:27017

---

## 📝 Common Workflows

### Daily Development (Local)

**Terminal 1 - Backend:**

```bash
cd backend
.\venv\Scripts\Activate.ps1  # Activate venv
uvicorn app.main:app --reload
```

**Terminal 2 - Frontend:**

```bash
cd frontend
npm run dev
```

**Terminal 3 - MongoDB (if using Docker):**

```bash
docker-compose up mongodb -d
```

---

### Using VS Code Split Terminal

1. Open VS Code terminal: `` Ctrl + ` ``
2. Split terminal: `Ctrl + Shift + 5` (or click split icon)
3. **Left pane**: Backend (with venv activated)
4. **Right pane**: Frontend

---

## 🛠️ Common Commands

### Backend

```bash
# Activate virtual environment
cd backend
.\venv\Scripts\Activate.ps1

# Install new package
pip install package-name
pip freeze > requirements.txt  # Update requirements

# Deactivate venv when done
deactivate
```

### Frontend

```bash
cd frontend

# Install new package
npm install package-name

# Build for production
npm run build
```

### Docker

```bash
# Start specific service
docker-compose up mongodb -d

# Restart service
docker-compose restart backend

# View logs for specific service
docker-compose logs -f backend

# Enter container shell
docker-compose exec backend bash
```

---

## 🧪 Testing

### Backend Tests (Coming Soon)

```bash
cd backend
.\venv\Scripts\Activate.ps1
pytest
```

### Frontend Tests (Coming Soon)

```bash
cd frontend
npm run test
```

---

## 📚 Documentation

- **API Documentation**: http://localhost:8000/docs (when backend is running)
- **MYNDRA Methodology**: See `docs/architecture/myndra-methodology.md`
- **Architecture**: See `docs/` folder

---

## 🐛 Troubleshooting

### Backend Issues

**"Cannot activate venv" error:**

```powershell
# Run this once to allow script execution
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

**"Module not found" error:**

```bash
# Make sure venv is activated (you should see (venv) in terminal)
# Then reinstall dependencies:
pip install -r requirements.txt
```

**Port 8000 already in use:**

```bash
# Find and kill process
netstat -ano | findstr :8000
taskkill /PID <PID> /F
```

---

### Frontend Issues

**Port 5174 already in use:**

```bash
# Find and kill process
netstat -ano | findstr :5174
taskkill /PID <PID> /F
```

**"Module not found" error:**

```bash
# Reinstall dependencies
cd frontend
rm -rf node_modules
npm install
```

---

### Docker Issues

**"Cannot connect to Docker daemon":**

- Make sure Docker Desktop is running

**Containers not starting:**

```bash
# Check logs
docker-compose logs

# Rebuild containers
docker-compose down
docker-compose up --build -d
```

---

## 🔐 Environment Variables

### Backend (.env)

- `MONGODB_URL` - MongoDB connection string
- `MONGODB_DB` - Database name
- `OLLAMA_BASE_URL` - Ollama API endpoint
- `OLLAMA_MODEL` - Model to use (llama3.1:8b)

### Frontend (.env)

- `VITE_API_URL` - Backend API URL

---

## 🎯 MYNDRA Methodology

**M**odel Discovery  
**Y**ield Exploration  
**N**avigate & Exploit  
**D**erive Insights  
**R**emediate & Assure

Four-step adaptive AI security testing framework.

For full methodology, see: [MYNDRA Repository](https://github.com/yourusername/myndra)

---

## 👤 Author

**Spyros** - Senior Cybersecurity Engineer @ Vodafone  
Master's Thesis Project - AI Security Testing

---

## 📄 License

Proprietary - All Rights Reserved

This is a commercial product. Unauthorized copying, distribution, or use is strictly prohibited.

For licensing inquiries: [contact information]

---

## 🙏 Acknowledgments

Built on top of the MYNDRA methodology developed for academic research.
