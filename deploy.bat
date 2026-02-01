@echo off
echo ========================================
echo   Portfolio Deployment Helper
echo ========================================
echo.

:menu
echo Please select a deployment option:
echo.
echo 1. Open portfolio locally in browser
echo 2. Start local development server (Python)
echo 3. Start local development server (Node.js)
echo 4. Initialize Git repository
echo 5. Deploy to GitHub Pages (setup)
echo 6. Exit
echo.

set /p choice="Enter your choice (1-6): "

if "%choice%"=="1" goto open_local
if "%choice%"=="2" goto python_server
if "%choice%"=="3" goto node_server
if "%choice%"=="4" goto git_init
if "%choice%"=="5" goto github_setup
if "%choice%"=="6" goto end

echo Invalid choice. Please try again.
echo.
goto menu

:open_local
echo Opening portfolio in default browser...
start index.html
echo.
echo Portfolio opened successfully!
pause
goto menu

:python_server
echo Starting Python HTTP server on port 8000...
echo.
echo Your portfolio will be available at: http://localhost:8000
echo Press Ctrl+C to stop the server
echo.
python -m http.server 8000
pause
goto menu

:node_server
echo Starting Node.js HTTP server on port 8080...
echo.
echo Your portfolio will be available at: http://localhost:8080
echo Press Ctrl+C to stop the server
echo.
npx http-server -p 8080
pause
goto menu

:git_init
echo Initializing Git repository...
git init
git add .
git commit -m "Initial portfolio commit"
echo.
echo Git repository initialized successfully!
echo.
echo Next steps:
echo 1. Create a repository on GitHub (e.g., portfolio or orielmalik.github.io)
echo 2. Run: git remote add origin https://github.com/orielmalik/REPO_NAME.git
echo 3. Run: git push -u origin main
echo.
pause
goto menu

:github_setup
echo ========================================
echo   GitHub Pages Deployment Guide
echo ========================================
echo.
echo Step 1: Create a GitHub repository
echo   - Go to https://github.com/new
echo   - Name it 'portfolio' or 'orielmalik.github.io'
echo   - Make it public
echo   - Don't initialize with README
echo.
echo Step 2: Push your code
echo   Run these commands:
echo   git init
echo   git add .
echo   git commit -m "Initial portfolio commit"
echo   git branch -M main
echo   git remote add origin https://github.com/orielmalik/REPO_NAME.git
echo   git push -u origin main
echo.
echo Step 3: Enable GitHub Pages
echo   - Go to repository Settings
echo   - Click on 'Pages' in the sidebar
echo   - Under 'Source', select branch 'main' and folder '/ (root)'
echo   - Click 'Save'
echo.
echo Your site will be live at:
echo   https://orielmalik.github.io/REPO_NAME/
echo.
pause
goto menu

:end
echo.
echo Thank you for using the Portfolio Deployment Helper!
echo.
pause
