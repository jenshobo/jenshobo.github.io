<?php
$dir = "./Content";

if (is_dir($dir)){
    if ($dh = opendir($dir)){
        $index = 2;
        ?>
        <div class="content">
        <?php
        while (($file = readdir($dh)) !== false){
            if ($index <= 0){
            ?>
                <div class="item">
                    <div class="title">
                        <a href='<?php echo "Content/". "$file". '/index.php'; ?>' style='text-decoration: none;'> <?php echo "$file". "<br>"; ?> </a>
                    </div>
                    <div class="text"
                        <a href='<?php echo "Content/". "$file". '/index.php'; ?>' style='text-decoration: none;'> <?php echo "$file". "<br>"; ?> </a>
                    </div>
                </div>
                <?php
            }else{
                $index--;
            }
        }
        closedir($dh);
        ?>
        </div>
        <?php
    }
}