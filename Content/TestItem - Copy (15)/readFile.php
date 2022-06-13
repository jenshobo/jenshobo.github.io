<?php
$myfile = fopen("Content.txt", "r") or die("Unable to open file!");
$string = fread($myfile,filesize("Content.txt"));
fclose($myfile);

$strings = explode("ß", $string);
$fullIndex = sizeof($strings);
for($index = 2; $index < $fullIndex; $index++){
    if ($index % 2 == 0) {
        if ($index == 2){
            ?> <h1><?php echo $strings[$index] ?></h1> <?php
        }
        else if ($index == 6){
            ?> <iframe width="420" height="315" src="<?php echo $strings[$index] ?>"> </iframe> <?php
        }else{
            echo $strings[$index]. "<br>";
        }
    }
}