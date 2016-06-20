# publi.sh
# change the branch names appropriately
git checkout master
rm -rf _site/
jekyll build
git add --all
git commit -m "`date`"
git remote add origin https://xmdplus@github.com/XMDPLUS/xmdplus.github.io.git
git push origin master
git subtree push --prefix  _site/ origin gh-pages
