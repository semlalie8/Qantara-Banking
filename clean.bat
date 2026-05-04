@echo off
echo 🧹 Cleaning Qantara Environment...
echo ---------------------------------------
docker-compose down -v
echo ---------------------------------------
echo ✅ Cleaned. Database volumes and containers removed.
pause
