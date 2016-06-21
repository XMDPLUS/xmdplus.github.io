# publi.sh
# change the branch names appropriately
git checkout xphelp
rm -rf _site/ ../_site/
jekyll build
git add --all
git commit -m "`date`"
git push origin xphelp
cp -R _site ..
git checkout master
cp -R ../_site/* .
git add --all
git commit -m "`date`"
git push origin master
