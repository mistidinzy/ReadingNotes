# Fifteen - Merge Conflicts

Problem Domain
Merge conflicts occur when files get out of sync between GitHub and a user’s local code base, and Git becomes unsure of where HEAD really is.

Let’s describe and experience how a pretend team would get into that situation and then extricate themselves from it.

**Instructions**

One team member should create a repository within GitHub called mc-exercise and add all other teammates as collaborators (in the ‘Settings’ tab, look for ‘Collaborators’ in the nav on the left of the screen.)

Assign a member of your team to each character, and then do what they do. And do ONLY what they do.

Our sample team has four members: Bob, Carol, Ted, and Alice. Add a file called FUBAR.md to the main branch of the repo. When we start, everyone is totally in sync and freshly pulled from main on their individual laptops, and has FUBAR.md.

Bob and Carol are pair-programming one feature in FUBAR.md on Carol’s laptop in a new feature branch, and Ted and Alice are working on another feature in a different non-main feature branch on Ted’s laptop, also in FUBAR.md.

Do this exercise four times, following the steps below: once with each team member in each role.

For the purposes of this exercise, the work you’re doing on a feature, always in FUBAR.md, consists of adding a sentence or two of “This is what Bob & Carol did on Bob’s computer when working on the first feature” and maybe a joke or something to keep your teammates amused.

Bob and Carol get their feature finished and do a A-C-P of their branch from Carol’s laptop and make a PR.

Ted & Alice review the feature, approve that it is good and subsequently merge it.

Ted & Alice then do a git pull origin main into their feature branch on Ted’s laptop ONLY and continue working on that feature.
In the meantime…

Bob & Carol have switched to Bob’s laptop, started a new feature branch in FUBAR.md, and started working on it. They did not do a git pull origin main and will live to regret it.

They finish that feature at the same time that Ted & Alice finish their feature.

Each team does an A-C-P and makes a PR.

They review each other’s PRs and attempt to merge them.
Merge Conflicts…

To sort out a merge conflict, check all of your project files for the markers that indicate merge conflicts, the >>>>>>>>> and HEAD lines of code. Edit the code to remove the redundancies causing the merge conflict, and eliminate the markers.

Get everyone’s individual laptop back in sync by doing a git pull origin main into main until Git stops no longer sees any conflicts.

Then they switch partners, of course. Bob & Alice start a quick new feature on her laptop in the main branch and Ted & Carol start another new feature of their own, also in main.

They finish these quick features, and attempt to A-C-P and create/merge PRs.
Resolve any merge conflicts in the same manner as above if there are any pending.

How could these problems have been prevented?

_____

## Table of Contents

> 🏡 [Home](/README.md)