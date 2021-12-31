<!-- <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Numeros Random</title>
<link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@200&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="num.css">
</head>
<body> -->
<?php include("template/cabecera.php") ?>

    <main class="cont">
        <section class="caja">
            <p class="cont_msj">🍀 Vamos a probar tu suerte.
                Ingresa un numero entre el 0 y el 99; luego pulsa el botón "JUGAR",
                te aparecera un numero entre 0 y 99, y si el mismo es igual a tu numero ingresado; serás un feliz ganador sino seras lo contrario. 🍀
            </p>
            <div class="input">
                <!-- <input type="text" class="entradaT" placeholder="Ingrese un numero"> -->
                <input type="text" class="entrada" placeholder="Ingrese un numero" maxlength="2">
            </div>
            <!-- <div class="output"> -->
                <!-- <p class="antesalida">Salio el:</p> -->
                <p class="salida">Resultado</p>
            <!-- </div> -->
            <div class="botones">
                <button class="jugar" type="button">jugar</button>
                <button class="reset" type="button">reset</button>
            </div>
        </section>
        <!-- ******mensaje resultado******************** -->
        <div class="ms_resultado">
            <span class="cerrar_suerte">X</span>
            <p class="ms_p">
                ------
            </p>
        </div>
        <!-- *********************footer***************************** -->
        <!-- <div class="footer">
            <section>
                <div class="copy"><i class="far fa-copyright"></i> Creado por: <a href="https://www.facebook.com/rolandoRivera85">Rolando Rivera.</a></div>
            </section>
        </div> -->
    </main>
    <!-- <script src="https://kit.fontawesome.com/f7f35171d9.js" crossorigin="anonymous"></script>
    <script src="num.js"></script> -->
    <?php include("template/header.php") ?>



    <?php include("template/pie.php") ?>

</body>
</html>