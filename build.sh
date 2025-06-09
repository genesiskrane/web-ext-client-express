mkdir files
shopt -s extglob
mv !(files|node_modules) files/
ls


# Clone the parent or child repository into the current directory
git clone $REPO_EXT core 
ls
git clone $REPO_FRONTEND client 
ls

mv core/* .
rm -rf core

npm install 

cd client 
npm install
npx vite build

find . -mindepth 1 ! -name 'dist' ! -path './dist/*' -exec rm -rf {} +

cd ..

