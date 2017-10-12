<?php
// if(isset($_SERVER['HTTP_X_REQUESTED_WITH']) && !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {

function test_form($obj) {
  $obj = trim($obj);
  $obj = stripslashes($obj);
  $obj = strip_tags($obj);
  $obj = htmlspecialchars($obj);
  return $obj;
}
    $name = test_form($_POST['name']);
    $email = test_form($_POST['email']);
    $msg = test_form($_POST['text']);
 
    $mail_message = '
    <html>
        <head>
            <title>Заявка</title>
        </head>
        <body>
            <h2>Заказ бургеров</h2>
            <ul>
                <li>Имя: '. $name .'</li>
                <li>Почта: <strong>'. $email .'</strong></li>
                <li>Сообщение: <strong>'. $msg .'</strong></li>
            </ul>
        </body>
    </html>
    ';
    $headers = "From: Администратор сайта <admin@mrburger.com>\r\n".
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n";
    $mail = mail('welikodub@gmail.com', 'Заказ бургеров', $mail_message, $headers);
    $data = [];
    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Письмо успешно отправлено";
    }else {
        $data['status'] = "NO";
        $data['mes'] = "На сервере произошла ошибка";
    }
    echo json_encode($data);
// }
?>
