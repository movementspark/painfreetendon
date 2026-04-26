@echo off
cd /d "%~dp0"
echo.
echo ========================================
echo   PainFreeTendon - Push to Live Site
echo ========================================
echo.
set /p msg="Describe what changed (e.g. updated hero text): "
echo.
git add .
git commit -m "%msg%"
git push
echo.
echo ========================================
echo   Done! Your site will update in ~60s
echo   https://painfreetendon.com
echo ========================================
echo.
pause
