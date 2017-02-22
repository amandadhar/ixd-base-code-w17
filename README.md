#WeHaul
##COGS 120 Winter 2017

####Git Guidelines
- Always do feature development on a personal branch (**not** master).

- When features are bug-free and stable, ask everyone to update their local copy of master by using `git pull` when on the master branch. If they have any un-pushed changes to master, use `git push origin master` after adding all changed files.

- push your changes to your personal branch, then `git checkout master` and `git merge <your-branch>`

- finally, push the merge using `git push origin master`.