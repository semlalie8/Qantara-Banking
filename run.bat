@echo off
echo 🚀 Launching Qantara Fintech Platform...
echo ---------------------------------------
docker-compose up -d --build
echo ---------------------------------------
echo ✅ Qantara is rising!
echo 🌐 Client: http://localhost:3000
echo ⚡ Server: http://localhost:5000
echo 🧠 AI Base: http://localhost:11434 (Make sure Ollama is running)
echo ---------------------------------------
echo 📝 Use 'docker-compose logs -f' to view logs.
pause
