Quick API server (Express)

1. Install dependencies

```powershell
cd api-server
npm init -y
npm install express cors
```

2. Run server

```powershell
node index.js
```

Server listens on http://localhost:4000 and exposes:
- GET /api/items
- POST /api/items { name }
