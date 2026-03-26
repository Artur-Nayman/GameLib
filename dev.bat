@echo off
echo Starting GameLib...
echo.

:: Launch Client
start cmd /k "echo Starting Client... && cd client && npm run dev"

:: Launch Server
start cmd /k "echo Starting Server... && cd server && npm run dev"

echo.
echo Both client and server should be starting in separate windows.
echo If they don't, make sure you have run 'npm install' in both directories.
echo Or run 'npm run install-all' from the root if you just created it.
timeout /t 5
