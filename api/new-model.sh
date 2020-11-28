FILEPATH=src/mongodb/models
cd $FILEPATH

MODEL=$1
MODEL_LOWERCASE=$(/bin/sed -e 's/\(.*\)/\L\1/' <<<$1)
FILE="$MODEL_LOWERCASE.model.ts"
COLLECTION="${MODEL_LOWERCASE}s"
if [ ! -z "$2" ]; then
  COLLECTION=$2
fi

if [ -e $FILE ]; then
  echo "File '$FILE' already exists at $FILEPATH/$FILE !"
else
  echo "Generating the model at $FILEPATH/$FILE"
  export MODEL COLLECTION
  envsubst <"template/template" >"$FILE"
fi
