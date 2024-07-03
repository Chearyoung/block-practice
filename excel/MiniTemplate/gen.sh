#!/bin/bash

WORKSPACE=..
LUBAN_DLL=$WORKSPACE/Luban/Luban.dll
CONF_ROOT=.

#客户端
dotnet $LUBAN_DLL \
    -t client \
    -c typescript-json \
    -d json \
    --conf $CONF_ROOT/luban.conf \
    -x typescript-json.outputCodeDir=../../BeaconWar/assets/script/template \
    -x json.outputDataDir=../../BeaconWar/assets/resources/template


#服务器
# dotnet $LUBAN_DLL \
#     -t server \
#     -c java-json \
#     -d json \
#     --conf $CONF_ROOT/luban.conf \
#     -x java-json.outputCodeDir=java-output-code \
#     -x json.outputDataDir=java-output-data