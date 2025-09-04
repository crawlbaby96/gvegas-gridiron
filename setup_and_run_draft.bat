@echo off
echo Setting up virtual environment for draft analysis...
echo.

echo Creating virtual environment...
python -m venv draft_venv

echo.
echo Activating virtual environment...
call draft_venv\Scripts\activate.bat

echo.
echo Installing requirements...
pip install -r requirements.txt

echo.
echo Running draft analysis...
python get_2025_draft.py

echo.
echo Press any key to exit...
pause >nul
