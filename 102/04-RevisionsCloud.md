# Revisions & The Cloud

## 🏡 [**Home**](https://mistidinzy.github.io/ReadingNotes/)

> 💭 [Growth Mindset](01-GrowthMindset.md)
>
> ✍️ [Learning Markdown](02-LearningMarkdown.md)
>
> 💻 [Coder's Computer](03-CodersComputer.md)
>
> 🌩️ [Revisions & the Cloud](04-RevisionsCloud.md)
>
> 🏗️ [Structure Webpages with HTML](05-Structure.md)
>
> 🎨 [Design Webpages with CSS](06-DesignCSS.md)
>
> ☕ [Dynamic Webpages with JavaScript](07-DynamicJavascript.md)
>
> 🌵 [Programming with JavaScript](08-ProgramJS.md)
>
> 🤖 [Operators & Loops](09-OperatorsLoops.md)
<!-- >
> 🧮 [Computer Architecture & Logic](10-CompArchLogic.md) -->

_____

## A Quick Little Bit About Git

Git was created by Linus Toralds, the creator of Linux.

Git is a "distributed version control system" that creates "snapshots" of changes made to your project.

A changed version of your project is called a **commit**.

Git allows developers to collaborate with each other on a project from multiple workflows.

Git tracks every change applied to files & directories, minimizing risk of loss or corruption to files.
_____

## Cloning a GitHub Repository

   Cloning your GitHub repo allows you to save a local copy of your repository onto your computer.
   You can then make changes to this copy and feed those through to your remote repo later.
   This can be especially useful in scenarios where you may not have a stable internet connection, but would like to keep working on your code!

### To clone a Repo from GitHub to your computer

 1. Go to your Repo's page on GitHub.
 2. Click the green "Code" box.
 3. Under the "clone" section, find your repo's https URL and copy it.
 4. Open your terminal and navigate to the directory (folder) where you'd like to store your clone.

        cd deltavcode102

 5. Enter command **git clone + your URL**.

        git clone https://github.com/test

Done!
Now you can:

* Move into your clone repo's directory.

       cd clonenamehere

* Open VS Code to make changes to your files

       code .

* See ACP section below for how to save changes to your GitHub online repo.
* Do a little dance.

_____

### Git Flow

#### Repository Structure

Your local Git Repository has three components.

 1. Working Directory: This is where your files are, and where you make your changes.
 2. Index: This is the staging area. Where your changed version goes when you add it to be committed.
 3. Head: This is your remote directory where your changed files go once they have been saved/committed.

#### File States

This is the "life cycle" of your file.

 1. Modified - Git has noted that the file has changed in working directory, but not committed (saved).
 2. Staged - Changed version has been flagged as "to be committed", it is now in the staging area.
 3. Committed - File data has been securely stored in database/repository.

#### ACP

These are the steps to move your files between file states.

 1. Add - Move changed version into the staging area.
 2. Commit - Creates the official snapshot of your changes.
 3. Push - Feeds your snapshot through to your remote repository.

 _____

### ❗**Important:** Once you're done making changes to your files, you have to ACP!❗

# ⭐Add - Commit - Push ⭐

 **Note**: Using command **git status** before ACP is a very very good practice! It shows you all the changes you have made since your last commit.

    git status

## 1. (Add) your changes to be saved

 Add file individually:

    git add 'filenamehere'

 or

 Add all files:

    git add *

## 2. (Commit) changes

Include **-m** + notes explaining the changes you are making

    git commit -m 'changed file contents because'

## 3. (Push) changes through to GitHub

    git push origin master

_____
