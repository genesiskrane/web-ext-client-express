npm install

# Get Client Repos

# Fetch the JSON content
CLIENT_REPOS_JSON=$(curl -s -L "$PROD_GKRANE_URL/krane/get-app-data?name=$APPNAME&repos=client")

echo $CLIENT_REPOS_JSON

REPOS=$()

for REPO in $REPOS; do
  echo "Cloning $REPO"
#   git clone "$REPO"
done