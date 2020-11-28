PATH=src/mongodb/models/
cd $PATH

MODEL=$1
MODEL_LOWERCASE=$(/bin/sed -e 's/\(.*\)/\L\1/' <<<$1)
FILE="$MODEL_LOWERCASE.model.ts"
COLLECTION="${MODEL_LOWERCASE}s"
if [ ! -z "$2" ]; then
  COLLECTION=$2
fi

if [ -e $FILE ]; then
  echo "File '$FILE' already exists at ${PATH}$FILE !"
else
  echo "Generating the model at $PATH/$FILE"
  export MODEL COLLECTION
  /bin/envsubst <"template/template" >"$FILE"
fi
