npm install

mkdir "client"

# Get Client Repos

# Fetch the JSON content
CLIENT_REPOS_JSON=$(curl -s -L "$PROD_GKRANE_URL/krane/get-app-data?name=$APPNAME")

# Loop through each client entry (with name and repo)
echo "$CLIENT_REPOS_JSON" | jq -c '.repos.client[]' | while read -r client; do
  NAME=$(echo "$client" | jq -r '.name')

  echo "Cloning $REPO into client/$NAME"
  git clone https://github.com/genesiskrane/gk-vite "client/$NAME"
  cd client/$NAME 

  npm install
  npx vite build

  find . -mindepth 1 ! -name 'dist' ! -path './dist/*' -exec rm -rf {} +

  ls
done


