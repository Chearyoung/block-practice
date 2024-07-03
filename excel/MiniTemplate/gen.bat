set WORKSPACE=..
set LUBAN_DLL=%WORKSPACE%\Luban\Luban.dll
set CONF_ROOT=.

dotnet %LUBAN_DLL% ^
    -t client ^
    -c typescript-json ^
    -d json ^
    --conf %CONF_ROOT%/luban.conf ^
    -x typescript-json.outputCodeDir=../../BeaconWar/assets/script/template ^
    -x json.outputDataDir=../../BeaconWar/assets/resources/template

@REM dotnet %LUBAN_DLL% ^
@REM     -t server ^
@REM     -c java-json ^
@REM     -d json ^
@REM     --conf %CONF_ROOT%/luban.conf ^
@REM     -x java-json.outputCodeDir=java-output-code ^
@REM     -x json.outputDataDir=java-output-data

pause