npm install

mkdir "client"

# Get Client Repos

# Fetch the JSON content
CLIENT_REPOS_JSON=$(curl -s -L "$PROD_GKRANE_URL/krane/get-app-data?name=$APPNAME&repos=client")

echo $CLIENT_REPOS_JSON

# Loop through each client entry (with name and repo)
echo "$CLIENT_REPOS_JSON" | jq -c '.repos.client[]' | while read -r client; do
  NAME=$(echo "$client" | jq -r '.name')
  REPO=$(echo "$client" | jq -r '.repo')

  echo "Cloning $REPO into client/$NAME"
  git clone "$REPO" "client/$NAME"
  cd client/$NAME 
  ls
done


