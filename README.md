## Setup
The site is built on Angular, so you need it running on some sort of server for it to work and make changes on your computer. If you know how to do that, good, otherwise, follow the steps below.

1. Download Atom editor from [Atom.io](http://atom.io).
2. Download the GitHub Desktop application from [desktop.github.com](http://desktop.github.com). You can also use the Git Command line, but if you've never used Git, the Desktop app is much easier. Here's a good guide to follow if you're new to Git: https://guides.github.com/activities/hello-world/
2.5. GitHub is awesome. If you are new to it, you should be using it for all your (CS) projects. You can upgrade to a pro account, which lets you make your code private, for free with a .edu email address. Do that here: https://education.github.com/
3. Install the GitHub application then clone the project from GitHub onto your computer.
4. Install Atom, then open Atom and click file>Open Folder. Find the folder to the Wisconsin Engineer project you cloned from GitHub.
5. In Atom, click file>Settings>Install. Search for 'atom-live-server' and install that.
6. After the live server installs, close the settings tab.
7. In Atom, click Packages>Live Server>Start on Port 3000 (Any port - it doesn't matter)
8. The site should open in your browser and you should be ready to edit it.


## Editing for new issue

1. Go to the /current_issue/ folder. Replace those images with images for the new issue.
2. Open the home.html file at /pages/home.html. Change the issue date wherever that is.
3. In the home.html file, find any links going to the current issue, and fix them to go to the new issue. Example: Change any links to http://read.wisconsinengineer.co/tagged/march-2016 to http://read.wisconsinengineer.com/tagged/**new issue date**


## How to Contribute

A guide to contributing responsibly to the WEM website. This example shows what adding a new feature might look like, but the best way to actually know what you're doing is to simply learn Git. It's easy to learn online through the following resources: [Codecademy](https://www.codecademy.com/learn/learn-git), StackOverflow questions, or [Atlassian's Tutorial](https://www.atlassian.com/git/tutorials), just to name a few.

#### 1. Update local repo
Navigate to your local repo (which you previously cloned to that location) and pull the most recent changes that others have made since you last updated your local code. 
```
cd Repos
cd Wisconsin-engineer
ls
git status
git pull
```

#### 2. Create a new Branch and switch to it. 
Now that your files are up to date, create a new branch for this new feature. It's best to use lowercase separated by dashes, by convention.
```
git checkout -b "website-analytics"
```

#### 3. Push new branch to remote (cloud) repo
We'll push this new feature branch right away, to "declare" in a sense that you're working on this feature.

```
git push -u origin website-analytics
```

#### 4. Makes changes to local branch, and test them!
Here's the part where you write the new code for this feature. It's extremely important to test whether the changes worked before pushing to the cloud, and it's easy to do with Atom's live-reload-server plugin. See above for details.

#### 5. Stage changes, and make commit to local repo
We can choose which files we'd like to stage for this commit. In most cases, we'll select to stage changes from all files. Then we'll use the status command to make sure all of the relevant files we changed have been selected, and then do the commit, adding a brief, descriptive message in the *present tense* (by convention).
```
git add .
git status
git commit -m "Add small analytics scripts for Google Analytics page tracking"
```

#### 6. Push changes to remote repo
We'd then like to push these changes to the cloud, for others to see (and pull to their own local repos, if they'd like).

```
git push
```

#### 7. Once reviewed, merge feature branch into master branch
Once the changes have been given the green light, we'll integrate the new feature into the master branch.
```
git checkout master
git pull origin master
git merge website-analytics
git push origin master
```

#### 8. Delete branch after merge
The branch has served its purpose, and is no longer needed, so we delete it to keep the repo clean.
```
git push origin -d website-analytics
git branch -d website-analytics
```

#### 9. Use an FTP client (FileZilla, Cyberduck, etc.) to update actual website.
Since our website doesn't automatically see the changes made in GitHub, we use an FTP client to replace whichever files we've changes on the server. The best way to ensure all updated files get replaced is to look at the summary of the commit on GitHub.
