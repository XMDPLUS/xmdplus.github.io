# publi.sh
# change the branch names appropriately
git checkout xphelp
rm -rf _site/
jekyll build
git add --all
git commit -m "`date`"
git push origin xphelp
git subtree push --prefix _site/ origin master