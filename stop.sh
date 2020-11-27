#!/bin/bash

FRONT_END="front-end"
BACK_END="api"
DATABASE="mongodb"

TEARDOWN=false
while [[ $# -gt 0 ]]; do
  case "$1" in
  -d | --down)
    TEARDOWN=true
    shift
    ;;
  --front)
    BACK_END=
    DATABASE=
    shift
    ;;
  --api)
    FRONT_END=
    DATABASE=
    shift
    ;;
  --database)
    FRONT_END=
    BACK_END=
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

if [ $TEARDOWN = true ]; then
  docker-compose --compatibility down $SUPPLEMENTARY
else
  docker-compose --compatibility stop $SUPPLEMENTARY \
  $FRONT_END \
  $BACK_END \
  $DATABASE
fi
