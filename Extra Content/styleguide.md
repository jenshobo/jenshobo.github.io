# Style guide

# Introduction

The main language for this project should be English. Meaning all code and comments should be written in English with proper use of grammar as to make it readable for anyone inside and outside the project. If you cannot read/write English then an exception can be made.

Whithin this guide all standard that are required for this project regarding code, comment and file management are documented and should be followed at all times.

## File management

When writing code all code should be separated into files. These files should follow the following rules:

- [ ] Each file should have only one specified task and should not be able to do more than that task.
- [ ] Each file should be ordered in its own folder or in a folder group which it applies to.
- [ ] Each file and folder should be named acordingly to it's functions.

The only file that this does not apply to is the main file whose function is only to start other programs.

## Commenting conventions

For writing comments in the code, the following rulse are to be applied at all times:

- [ ] Comments are to be on separate lines from code.
- [ ] A comment sign should always be followed by an empty space.
- [ ] Each function is to have a description about it's functionality, input and/or output variables using the ```<summary>``` tags.

### Example

```
# This is how we write a comment.

"""
 This is acceptable.
"""

""" And so is this. """
```

## Naming conventions
When writing code a style of writing should be followed at all times, these are as follows:

- [ ] For classes, use PascalCase.
- [ ] For methodes, use snake_casing.
- [ ] For arguments and variables, use snake_casing.

As a followup rule, abbreviations are not permitted and should instead be named according to their function with in the code. An exception for this rule can be made with commenly used abbreviations in speaking language.

### Example
```
is_raining = True

def read_file(file_location):
   ...

class system_management:
   ...
```

## Layout conventions
When writing code a specified layout is required, these are as follows:

- [ ] Avoid writing long code on a single line ```< 100```.
- [ ] Write a minimum of one empty space between methods, variables and operators.
- [ ] Use brackets for boolean expressions where necessary but also to increase readability of the expression.

### Example

```
if ((var_1 > var_2) AND (var_1 < var_3)):
   // Your code.
```
