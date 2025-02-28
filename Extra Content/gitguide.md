# Git guide

## Introduction

The main language used on git should be English. Meaning all self written names and documentation should be in English with proper use of grammar as to make it readable for anyone inside and outside the project.

Within this guide all standards that are required for this project regarding the use of git / gitlab are documented and should be followed at all times.

## Branches

For each functionality of the project a new branch is to be created as a fork of the then main branch or another branch if necessarily. Each branch should be named accordingly.

## Commit and push

Each commit and push should be names accordingly and should start with a prefix regarding what the commit changed.

| prefix | function |
| --- | --- |
| `doc:` | change in documentation |
| `fix:` | fixing a bug or exploit |
| `refactor:` | refactoring code |
| `feat:` | adding a feature |

These prefixes should be followed by an empty space and the name should be in lower case.

A commit and push is only allowed to change one thing at a time regarding these prefixes.

These changes should be described in the commit description.

## Pull request

When the complete functionality of a branch has been realized, a pull request can be made to update the main branch.

This pull request is required to be approved by at least one other developer whitin the team before a merge can be done.

A pull request should include the following checklist in the description:

```
## Pull request checklist

Please check if your PR fulfills the following requirements (if needed):

-   [ ] Unit tests for the changes have been added
-   [ ] Project docs have been updated

## What is the new behavior?

## Is further testing or are further changes required?
-  [ ] No
-  [x] Yes (Please provide further detail below.)

## How can the changes be tested?

## Other information
```

This checklist should be filled out by the developer making the pull request and should be added at all times regardless of the size of pull request.

