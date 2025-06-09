npm install

# Fetch the JSON content
REPOS_JSON=$(curl -s -L "$PROD_GKRANE_URL/krane/get-app-data?name=$APPNAME")

echo $REPOS_JSON

# # Parse JSON and extract repo URLs using jq
# REPOS=$(echo "$REPOS_JSON" | jq -r '.repositories[]')

# # Loop through each repo and do something (e.g., clone)
# for REPO in $REPOS; do
#   echo "Cloning $REPO"
#   git clone "$REPO"
# done

mkdir 'client'

ls
