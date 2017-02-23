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
