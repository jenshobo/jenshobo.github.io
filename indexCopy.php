<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Main</title>
</head>
<body>
<a><?php try {
        include "readFile.php";
    } catch(Exception $e) {
        echo $e;
    }
    ?></a>
</body>
</html>