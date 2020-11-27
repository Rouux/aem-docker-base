#!/bin/bash

FRONT_END="front-end"
BACK_END="api"
DATABASE="mongodb"

START_MODE="start"
while [[ $# -gt 0 ]]; do
  case "$1" in
  -b | --build)
    START_MODE="up --build"
    BACKGROUND="--detach"
    shift
    ;;
  -f | --foreground)
    BACKGROUND=
    shift
    ;;
  --no-front)
    FRONT_END=
    shift
    ;;
  --no-api)
    BACK_END=
    shift
    ;;
  --no-database)
    DATABASE=
    shift
    ;;
  --)
    shift
    break
    ;;
  *)
    shift
    ;;
  esac
done
SUPPLEMENTARY="$@"

docker-compose --compatibility \
$START_MODE \
$BACKGROUND \
$SUPPLEMENTARY \
$FRONT_END \
$BACK_END \
$DATABASE
