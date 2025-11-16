# FOINIK Backend

FastAPI backend for FOINIK AI security testing platform.

## Quick Start

### Every Time You Work on Backend:

```bash
# 1. Navigate to backend folder
cd backend

# 2. Activate virtual environment
.\venv\Scripts\Activate.ps1  # Windows PowerShell
# .\venv\Scripts\activate.bat  # Windows CMD
# source venv/bin/activate     # macOS/Linux

# You should see (venv) in your terminal prompt

# 3. Run backend
uvicorn app.main:app --reload

# 4. When done, deactivate
deactivate
```

## First Time Setup Only

```bash
# Create virtual environment
python -m venv venv

# Activate it
.\venv\Scripts\Activate.ps1

# Install dependencies
pip install -r requirements.txt
```

## Common Tasks

### Install New Package

```bash
# Make sure venv is activated first!
pip install package-name

# Update requirements.txt
pip freeze > requirements.txt
```

### Run Without Auto-reload

```bash
uvicorn app.main:app
```

### Run on Different Port

```bash
uvicorn app.main:app --port 8001 --reload
```

## Troubleshooting

### Cannot Activate Venv

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Wrong Python Version

```bash
# Use specific Python version
python3.11 -m venv venv
```

---

**Remember:** Always activate venv before working on backend! 🐍
