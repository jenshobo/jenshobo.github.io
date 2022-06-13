import os
import pathlib

name = (str(input("Project name: ")))

with open ('indexCopy.php', 'r') as indexCopy, open ('ReadFileCopy.php', 'r') as readCopy:
    os.chdir('Content')
    os.mkdir(name)
    os.chdir(name)
    
    title = (str(input("Project title: ")))
    content = (str(input("Project description: ")))
    videoURL = (str(input("Project video URL: ")))

    with open ('Content.txt', 'w') as f:
        f.write('ßHeaderß' + title + '\n')
        f.write('ßContentß' + content + '\n')
        f.write('ßVideoß' + videoURL + '\n')
        f.write('ß')
    
    with open ('index.php', 'w') as f:
        for line in indexCopy:
            print(line)
            f.write(line)
            
    with open ('readFile.php', 'w') as f:
        for line in readCopy:
            print(line)
            f.write(line)