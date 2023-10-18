<?php
if(isset($_GET['folder'])) {
  $folderPath = $_GET['folder'];
  $allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];

  $files = scandir($folderPath);
  $imageFiles = [];

  foreach ($files as $file) {
      $fileParts = pathinfo($file);
      $extension = strtolower($fileParts['extension']);
      
      if (in_array($extension, $allowedExtensions)) {
          $imageFiles[] = $file;
      }
  }

  echo json_encode($imageFiles);
} else {
  echo json_encode([]);
}
?>
