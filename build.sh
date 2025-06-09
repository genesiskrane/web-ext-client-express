npm install

mkdir 'client'

ls


# URL to your JSON file


# Fetch the JSON content
REPOS_JSON=$(curl -s "$PROD_GKRANE_URL/$APPNAME")

echo $REPO_JSON

# # Parse JSON and extract repo URLs using jq
# REPOS=$(echo "$REPOS_JSON" | jq -r '.repositories[]')

# # Loop through each repo and do something (e.g., clone)
# for REPO in $REPOS; do
#   echo "Cloning $REPO"
#   git clone "$REPO"
# done
