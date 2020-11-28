#!/bin/bash

FILEPATH=src/mongodb/models
cd $FILEPATH

DRY_RUN=false
SUPPLEMENTARY=()
while [[ $# -gt 0 ]]; do
  case "$1" in
  --dry-run)
    DRY_RUN=true
    shift
    ;;
  --)
    shift
    ;;
  *)
    SUPPLEMENTARY+=("$1")
    shift
    ;;
  esac
done
set -- ${SUPPLEMENTARY[@]} # restore positional parameters

NAME=$1
KEBABCASE=$(sed --expression 's/\([A-Z]\)/-\L\1/g' --expression 's/^-//' <<<$NAME)
CAMELCASE=$(/bin/sed -e 's/^./\L&\E/' <<<$NAME)
FILE="$KEBABCASE.model.ts"
COLLECTION="${CAMELCASE}s"

if [ $DRY_RUN = true ]; then
  echo "Running in 'DRY' mode (no changes)"
  echo "Generating the model at $FILEPATH/$FILE"
else
  if [ -e $FILE ]; then
    echo "File '$FILE' already exists at $FILEPATH/$FILE !"
  else
    echo "Generating the model at $FILEPATH/$FILE"
    export NAME COLLECTION
    envsubst <"template/template" >"$FILE"
  fi
fi
