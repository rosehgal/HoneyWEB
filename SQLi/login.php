<?php
$name = isset($_POST['name']) ? $_POST['name'] : '' ;
$pass = isset($_POST['pass']) ? $_POST['pass'] : '' ;
?>
<?php
echo '<?xml version="1.0" encoding="UTF-8"?>'
?>
<?php
$link = new PDO('mysql:dbname=faculty;host=localhost', 'faculty', 'ifaculty');

$sql = "SELECT * FROM users WHERE
	username = '{$name}' AND password = '{$pass}' ";
/*
$sql = 'SELECT * FROM users WHERE ' .
	"name = '" . mysqli_real_escape_string($name, $link) . "' " .
	"AND pass = '" . mysqli_real_escape_string($pass, $link) . "'";
*/
echo $sql;
$result = $link->query($sql);

if (!$result) {
    header('HTTP/1.0 500 Internal Serever Error');
    echo 'Internal Serever Error: ';
    exit;
}

while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
	$rows[] = $row;
}
if (empty($rows)) {
    header('HTTP/1.0 404 Not Found');
    echo 'Not Found: ';
    exit;
} else {
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"
    "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xml:lang="ja" xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Login</title>
</head>
<body>
<h1>Login for Faculty</h1>
<?php
foreach ($rows as $row) {
?>
<dt>
<dl>name: <?php echo htmlspecialchars($row['username'], ENT_QUOTES, 'UTF-8'); ?></dl>
<dd>pass: <?php echo htmlspecialchars($row['password'], ENT_QUOTES, 'UTF-8'); ?></dd>
</dt>
<?php
}
}
?>

<form action="./login.php" method="get">
<p>
<input type="text" name="name" />
<input type="text" name="pass" />
<input type="submit" />
</p>
</form>
</body>
</html>

