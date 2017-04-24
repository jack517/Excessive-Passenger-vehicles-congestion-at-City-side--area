<?php
session_start();
session_destroy();
echo "<html>
<head>
	<script>
		window.location.href='../index.html';
	</script>
</head>
</html>";

?>