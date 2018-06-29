# Group Agreement

Once you've had a chance to talk some as a group, step away from the project planning to develop a group agreement. This is a document that your group creates collaboratively; it details your expectations of how you will work with each other. It is a "living document" - that is, it can be changed as you go along to meet your group's needs as they emerge. Again, develop this collaboratively and write it down together on a whiteboard or in a document. Keep refining it until everyone in the group agrees with it. At the minimum, it should cover:
Communication plan: How will your group communicate with each other? What is your strategy for ensuring everyone's voices are heard, and that contributions from both loud and soft voices are listened to? Do you have a plan for managing psychological safety, as we learned about in the article on Google and teams and discussing it with Nicholas:
Conflict plan: What will your group do when it encounters conflict? What will your process be to resolve it?
Work plan: How you will identify tasks, assign tasks, know when they are complete, and manage work in general? In particular, make sure you know how you'll track whether everyone is contributing equally to the JavaScript, CSS, and HTML portions, and that each person is working on "meaty" problems.
Git process: What is your Git flow? How many people must review a PR? Who merges PRs?
Anything else you feel is important: expectations around work times, standup times, taking breaks/seeking help when you're stuck, etc.

## Communication:
* Tools:
* Outside communication will be managed via slack in the teamaquamarine channel
* Issues/task assignment/and to-dos on github
* File storage and version control via github

#### Brainstorming/Meetings
* 15-30 minutes, allowing for exceptions
* Make sure everyone is on-board/understanding of the situation BEFORE moving forward with a decision.

### Psychological Safety
There is no personal possession of an idea once voiced. Success and failures are the burden of the group, not an individual.


## Conflict Plan
* Create safe place to be able to express feelers
* If a conflict arises:
* First step is to get together as a group (if a group challenge) and talk about any conflict that comes up.
Don’t talk about others not present.
Go directly to the person you have a conflict with.
Scenarios
Feelings of not equal distribution
Feelings that it’s getting too off task
Someone totally breaks the internet
Struggling with the work process
Someone is becoming micromanag-ie

Work Plan
Flow
Let group know if you’re going to work on something before doing so.
Moving to science lab every day
Break as you need, but 10 minute breaks an hour encouraged
Check-in option after lunch
Lunch at 11ish
Openness to outside hours and flexibility if MVPs don’t look like they will be done in time
Ask for help from a neighbor/partner after being stuck for 15 minutes. If both can’t solve within 30-45min, seek help from instructors


Git Process

Git & GitHub Team Workflow
=================

## When you start a new feature...
* Start from an up-to-date _master_ branch   
 * `git checkout master`  
 * `git pull origin master`
 *  Create a new feature branch with `git checkout -b <branchname>`  
* Do work on your feature branch and **add**, **commit**, and **push**   
 * `git add <file>`  
 * `git commit -m <useful message>`   
 * `git push origin <feature_branch_name>`
* On GitHub...
 * Create a Pull Request (PR) for that branch on GitHub
 * Have at LEAST one other person review the code in the PR and merge it


## Time for a Merge Party!

**WHEN A PULL REQUEST FROM SOMEONE ELSE'S \<FEATURE BRANCH> IS MERGED TO MASTER, EVERYONE MUST DO THESE STEPS**  

 * commit changes to your _feature branch_
   * `git add <file>`  
   * `git commit -m <useful message>`   
 * update your local _master_ branch  
   * `git checkout master`   
   * `git pull origin master`  
 * update your _feature branch_ with changes in _master_  
 	 * `git checkout <feature_branch_name>`  
   * `git merge master`   
 * handle merge conflicts _if there are any_  
  	* Check all of your project files for the markers that indicate merge conflicts (in other words, the `>>>>>>>>>` and `HEAD` stuff that has mysteriously appeared in your code)
  	* Edit the code to remove the redundancies causing the merge conflict, and eliminate the markers
  	* `git add <affected-files>`
  	* `git commit -m "merged master"` 



Additional Thoughts
