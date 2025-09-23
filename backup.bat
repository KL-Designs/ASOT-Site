setlocal

REM Define source and backup folder paths
set "SOURCE=gallery"
set "BACKUP=.backup"

REM Delete previous backup folder (if it exists)
if exist "%BACKUP%" (
    echo Removing old backup...
    rmdir /s /q "%BACKUP%"
)

REM Recreate backup folder
mkdir "%BACKUP%"

REM Copy gallery contents to backup
echo Copying files from %SOURCE% to %BACKUP%...
xcopy "%SOURCE%" "%BACKUP%\" /s /e /h /y

echo Backup complete.
endlocal
pause
