<!DOCTYPE html>
<html>

<head>
    <title>CV</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

    <style>
        /*Navigointipalkille tyyli*/

        .navbar {
            background-color: #585858;
            box-shadow: 8px 8px 11px 0 #000;
            opacity: 0.92;
            color: #585858;
            position: fixed;
            top: 0;
            width: 100%;

        }

        .navbar a {
            float: right;
            font-size: 16px;
            color: black;
            padding: auto;
            text-decoration: none;
        }

        .header {
            float: left;
        }

        .navbar a.icon {
            overflow: hidden;
            color: #fff;
            display: block;
            position: absolute;
            right: 0;
            top: 0;
        }

        .navtext {
            position: relative;
            padding-bottom: 10%;
            color: #fff;
            font-size: 30px;
        }

        .navtext2 {
            padding-top: 10%;
            padding-right: 100px;
            color: #fff;
            font-size: 20px;
        }

        /*rakenteen määrittely*/

        .html,
        body {
            overflow-x: hidden;
            background-image: url("taustakuva.jpg");
        }

        /* Profiiliosion tyylin määrittely */

        .container-3 {
            width: 100%;
            margin-top: 10%;
            margin-bottom: 10%;
            padding: 2% 5% 5%;
            background-image: url(taustakuvapieni.jpg);
            text-align: left;
        }

        .image-11 {
            width: 20%;
        }

        .linkedinpicture {
            padding-top: auto;

        }

        .picture {
            padding-top: 20%;
            width: 20%;
            height: 30%;
        }


        .heading-11 {
            margin-left: 57%;
            font-size: 60px;
            font-weight: 700;
            color: #fff;
            text-align: left;

            padding-top: 30px;


        }

        .navbar-header {
            float: left;
            position: static;
        }

        .text-block-2 {
            padding-top: 5%;
            color: #fff;
            font-size: 30px;
            font-weight: 700;
            text-align: center;
        }

        .text-block-3 {
            width: auto;
            margin-left: 35%;
            padding-left: 15%;
            color: #fff;
            font-size: 25px;
        }

        /*Koulutus osan tyyli*/

        .container-4 {
            height: auto;
            width: auto;
            margin-left: 10%;
            margin-right: 10%;
            margin-top: 10%;
            margin-bottom: 10%;
            padding: 2% 5% 5%;
            background-image: url(taustakuvapieni.jpg);
            text-align: left;
        }

        .heading-2 {
            font-size: 60px;
            font-weight: 700;
            color: #fff;
            text-align: center;
        }

        .heading-12 {

            color: #fffdfd;
            font-size: 30px;
            text-align: center;
            font-weight: 700;
        }

        .text-block-4 {
            padding-left: 35%;
            color: #fff9f9;
            font-size: 25px;
            text-align: left;
        }

        /*Tyyli työkokemus osiolle*/

        .container-5 {
            height: auto;
            width: auto;
            margin-left: 10%;
            margin-right: 10%;
            margin-top: 10%;
            margin-bottom: 10%;
            padding: 2% 5% 5%;
            background-image: url(taustakuvapieni.jpg);
            text-align: left;
        }

        .heading-15 {
            font-size: 60px;
            font-weight: 700;
            color: #fff;
            text-align: center;
        }

        .heading-16 {
            color: #fffdfd;
            font-size: 30px;
            text-align: center;
            font-weight: 700;
        }

        .text-block-5 {
            width: 75%;
            padding-left: 35%;
            color: #fff9f9;
            font-size: 25px;
        }

        /* Tyyli Taidot osiolle*/

        .container-6 {
            height: auto;
            width: auto;
            margin-left: 10%;
            margin-right: 10%;
            margin-top: 10%;
            margin-bottom: 10%;
            padding: 2% 5% 5%;
            background-image: url(taustakuvapieni.jpg);
            text-align: left;
        }

        .heading-18 {
            float: center;
            font-size: 60px;
            font-weight: 700;
            color: #fff;
            text-align: center;
        }

        .heading-17 {
            color: #fffdfd;
            font-size: 40px;
            text-align: center;
            font-weight: 700;
        }

        .text-block-6 {
            margin-left: 5%;
            width: 100%;
            padding-left: 40%;
            color: #fff9f9;
            font-size: 25px;
        }

        /*Tyyli Yhteystiedot osiolle*/

        .container-7 {
            height: auto;
            width: auto;
            margin-left: 10%;
            margin-right: 10%;
            margin-top: 10%;
            margin-bottom: 10%;
            padding: 2% 5% 5%;
            background-image: url(taustakuvapieni.jpg);
            text-align: left;
        }

        .grid-container {
            display: inline;
            height: auto;
            display: grid;
            grid-template-columns: 50% 50%;

        }

        .grid-item1 {
            font-size: 30px;
            text-align: center;
        }

        .grid-item2 {
            background-color: #fff;
        }

        .text-block-7 {
            padding-top: 30%;
            color: #fff9f9;
            font-size: 40px;
        }

        .phone {
            list-style-image: url(puhelin.png);
        }

        .email {
            list-style-image: url(sähköposti.png);
        }

        .linkedin {
            list-style-image: url(linkedinkuva2.png);
        }

        .former {
            position: static;
            background-size: auto;
            padding-top: 5%;
            padding-bottom: 5%;
            padding-left: 10%;
            height: 100%;
            width: 100%;
            margin-left: 50%;
            background-color: #fff;
            font-size: 25px;
        }

        .formheader {
            padding-left: 10%;
            color: black;
            font-size: 40px;
            text-align: left;
            font-weight: 700;

        }

        .div-block-4 {
            height: 50px;
        }

        .div-block-6 {
            height: 100px;
        }

        /*kokeilua*/

        @media only screen and (max-width: 768px) {

            [class*="col-"] {
                width: 100%;
            }

            .html,
            body {
                width: 100%;
                display: block;
                background-image: url("taustakuva.jpg");
                background-position: 0px 0px;
                background-size: auto;
            }

            /*navigointipalkki*/

            .navbar {
                background-color: #555;
                overflow: hidden;
                position: relative;
            }

            .navbar #links {
                display: none;
            }

            .container-fluid {
                overflow: hidden;
                background-color: white;
                position: relative;
            }

            .navbar a {
                float: right;
                font-size: 16px;
                color: black;
                padding: auto;
                text-decoration: none;
            }

            .header {
                padding-top: 10px;
                float: left;
                padding: 15px 20px;
            }

            .navbar a.icon {
                overflow: hidden;
                color: #fff;
                display: block;
                position: absolute;
                right: 0;
                top: 0;
            }

            .navtext {
                padding-left: 0px;
                color: #fff;
                font-size: 30px;
            }

            .navtext2 {
                padding-top: 10px;
                padding-bottom: 30px;
                padding-right: 300px;
                color: #fff;
                font-size: 15px;
            }

            /*Profiili*/

            .container-3 {
                width: 100%;
                margin-top: 10%;
                margin-bottom: 10%;
                padding: 2% 5% 5%;
                background-image: url(taustakuvapieni.jpg);
                text-align: left;
            }

            .image-11 {
                width: 5%;
            }

            .linkedinpicture {
                padding-top: auto;

            }

            .picture {
                padding-top: 20%;
                width: 20%;
                height: 30%;
            }

            .heading-11 {
                margin-left: 0%;
                font-size: 50px;
                font-weight: 700;
                color: #fff;
                text-align: left;
            }

            .navbar-header {
                float: left;
                position: static;
            }

            .text-block-2 {
                padding-top: 5%;
                color: #fff;
                font-size: 20px;
                font-weight: 700;
                text-align: center;
            }

            .text-block-3 {
                width: auto;
                margin-left: 35%;
                padding-left: 15%;
                color: #fff;
                font-size: 25px;
            }

            /*Koulutus osan tyyli*/

            .container-4 {
                height: auto;
                width: auto;
                margin-left: 10%;
                margin-right: 10%;
                margin-top: 10%;
                margin-bottom: 10%;
                padding: 2% 5% 5%;
                background-image: url(taustakuvapieni.jpg);
                text-align: left;
            }

            .heading-2 {
                font-size: 40px;
                font-weight: 700;
                color: #fff;
                text-align: center;
            }

            .heading-12 {

                color: #fffdfd;
                font-size: 30px;
                text-align: center;
                font-weight: 700;
            }

            .text-block-4 {
                padding-left: 35%;
                color: #fff9f9;
                font-size: 25px;
                text-align: left;
            }

            /*Tyyli työkokemus osiolle*/

            .container-5 {
                height: auto;
                width: auto;
                margin-left: 10%;
                margin-right: 10%;
                margin-top: 10%;
                margin-bottom: 10%;
                padding: 2% 5% 5%;
                background-image: url(taustakuvapieni.jpg);
                text-align: left;
            }

            .heading-15 {
                font-size: 60px;
                font-weight: 700;
                color: #fff;
                text-align: center;
            }

            .heading-16 {
                color: #fffdfd;
                font-size: 30px;
                text-align: center;
                font-weight: 700;
            }

            .text-block-5 {
                width: 75%;
                padding-left: 35%;
                color: #fff9f9;
                font-size: 25px;
            }

            /* Tyyli Taidot osiolle*/

            .container-6 {
                height: auto;
                width: auto;
                margin-left: 10%;
                margin-right: 10%;
                margin-top: 10%;
                margin-bottom: 10%;
                padding: 2% 5% 5%;
                background-image: url(taustakuvapieni.jpg);
                text-align: left;
            }

            .heading-18 {
                float: center;
                font-size: 60px;
                font-weight: 700;
                color: #fff;
                text-align: center;
            }

            .heading-17 {
                color: #fffdfd;
                font-size: 40px;
                text-align: center;
                font-weight: 700;
            }

            .text-block-6 {
                margin-left: 5%;
                width: 100%;
                padding-left: 40%;
                color: #fff9f9;
                font-size: 25px;
            }

            /*Tyyli Yhteystiedot osiolle*/

            .container-7 {
                height: auto;
                width: auto;
                margin-left: 10%;
                margin-right: 10%;
                margin-top: 10%;
                margin-bottom: 10%;
                padding: 2% 5% 5%;
                background-image: url(taustakuvapieni.jpg);
                text-align: left;
            }

            .grid-container {
                display: inline;
                height: auto;
                display: grid;
                grid-template-columns: 50% 50%;

            }

            .grid-item1 {
                font-size: 30px;
                text-align: center;
            }

            .grid-item2 {
                background-color: #fff;
            }

            .text-block-7 {
                padding-top: 30%;
                color: #fff9f9;
                font-size: 40px;
            }

            .phone {
                list-style-image: url(puhelin.png);
            }

            .email {
                list-style-image: url(sähköposti.png);
            }

            .linkedin {
                list-style-image: url(linkedinkuva2.png);
            }

            .former {
                position: static;
                background-size: auto;
                padding-top: 5%;
                padding-bottom: 5%;
                padding-left: 10%;
                height: 100%;
                width: 100%;
                margin-left: 50%;
                background-color: #fff;
                font-size: 25px;
            }

            .formheader {
                padding-left: 10%;
                color: black;
                font-size: 40px;
                text-align: left;
                font-weight: 700;

            }

            .div-block-4 {
                height: 50px;
            }

            .div-block-6 {
                height: 100px;
            }
        }

        @media only screen and (max-width: 1500px) {

            /*navigointipalkki*/

            .navbar {
                background-color: #555;
                overflow: hidden;
                position: relative;
            }

            .navbar #links {
                display: none;
            }

            .container-fluid {
                overflow: hidden;
                background-color: white;
                position: relative;
            }

            .navbar a {
                float: right;
                font-size: 16px;
                color: black;
                padding: auto;
                text-decoration: none;
            }

            .header {
                padding-top: 10px;
                float: left;
                padding: 15px 20px;
            }

            .navbar a.icon {
                overflow: hidden;
                color: #fff;
                display: block;
                position: absolute;
                right: 0;
                top: 0;
            }

            .navtext {
                padding-left: 0px;
                color: #fff;
                font-size: 30px;
            }

            .navtext2 {

                color: #fff;
                font-size: 15px;
            }

            /*Profiili*/

            .container-3 {
                width: 100%;
                margin-top: 10%;
                margin-bottom: 10%;
                padding: 2% 5% 5%;
                background-image: url(taustakuvapieni.jpg);
                text-align: left;
            }

            .kuvaa {
                width: auto;
                text-align: center;
            }

            .image-11 {
                margin-left: 10%;
                max-width: 100%;
                height: auto;

            }

            .linkedinpicture {
                padding-top: auto;

            }

            .picture {
                padding-top: 20%;
                width: 20%;
                height: 30%;
            }


            .heading-11 {
                margin-left: 25%;
                margin-top: 1200px;
                font-size: 50px;
                font-weight: 700;
                color: #fff;
                text-align: left;
            }

            .navbar-header {
                padding-left: 0%;
                margin-left: 0%;
                position: static;
                padding-top: 100px;
            }

            .container {
                height: auto;
                width: auto;
                display: grid;
                grid-template-columns: auto auto auto;
                padding: 10px;
                max-width: 100%;
                margin-right: auto;
                margin-left: auto;
            }

            .text-block-2 {
                position: static;
                margin-left: 5%;
                color: #fff;
                font-size: 25px;
                font-weight: 700;
                text-align: center;
            }

            .text-block-3 {
                width: auto;
                margin-left: 0%;
                padding-right: 0px;
                padding-left: 0px;
                color: #fff;
                font-size: 23px;
            }

            /*Koulutus*/

            .container-4 {
                margin-left: 5%;
                padding-left: 8%;
                padding-right: 10%;
                width: 100%;
                height: auto;
                width: auto;
                margin-bottom: 140px;
                background-image: url(taustakuvapieni.jpg);
                background-size: auto;
            }

            .heading-2 {
                font-size: 60px;
                font-weight: 700;
                color: #fff;
                text-align: center;
            }

            .heading-12 {

                color: #fffdfd;
                font-size: 30px;
                text-align: center;
                font-weight: 700;
            }

            .text-block-4 {
                padding-left: 25%;
                text-align: left;
                width: 100%;
                color: #fff9f9;
                font-size: 23px;
            }

            /*Työkokemus*/

            .container-5 {
                margin-left: 5%;
                padding-left: 8%;
                padding-right: 10%;
                height: auto;
                width: auto;
                margin-bottom: 140px;
                background-image: url(taustakuvapieni.jpg);
                background-size: auto;
            }

            .heading-15 {
                font-size: 45px;
                font-weight: 700;
                color: #fff;
                text-align: center;
            }

            .heading-16 {
                margin-bottom: 20px;
                color: #fffdfd;
                font-size: 25px;
                text-align: center;
                font-weight: 700;
            }

            .text-block-5 {
                padding-left: 0%;
                text-align: left;
                width: 100%;
                color: #fff9f9;
                font-size: 23px;
            }

            /*Taidot*/

            .container-6 {
                margin-left: 5%;
                padding-left: 8%;
                padding-right: 10%;
                height: auto;
                width: auto;
                margin-bottom: 140px;
                background-image: url(taustakuvapieni.jpg);
                background-size: auto;
            }

            .heading-18 {
                float: center;
                font-size: 60px;
                font-weight: 700;
                color: #fff;
                text-align: center;
            }

            .heading-17 {
                margin-left: 30%;
                margin-bottom: 20px;
                color: #fffdfd;
                font-size: 40px;
                text-align: left;
                font-weight: 700;
            }

            .text-block-6 {
                margin-left: 30%;
                padding-left: 0%;
                width: 1500px;
                color: #fff9f9;
                font-size: 25px;
            }


            /*yhteystiedot*/

            .text-block-7 {
                padding-top: 20px;
                color: #fff9f9;
                font-size: 40px;
            }

            .former {
                margin-top: 100px;
                margin-left: 10%;
                width: 600px;
            }

            .container-7 {
                margin-left: 5%;
                padding-left: 8%;
                padding-right: 10%;
                width: 100%;
                height: auto;
                width: auto;
                margin-bottom: 140px;
                background-image: url(taustakuvapieni.jpg);
                background-size: auto;
            }

            .container {
                height: auto;
                width: auto;
                display: grid;
                grid-template-columns: auto auto auto;
                padding: 10px;
                position: static;
                max-width: 100%;
                margin-right: auto;
                margin-left: auto;

            }

            .col-xs-4 {
                font-size: 25px;
                margin-top: 120px;
                width: auto;
            }
        }
    </style>
</head>


<body class="body">

    <div id="navigointi" class="navbar navbar-inverse">

        <div class="container-fluid" style="background-color: #5a5a5a">

            <h1 class="nav navbar-toggler">
                <li class="header">
                    <a id="profiili" href="#viisi">
                        <h2 class="navtext">Elli Esimerkki</h2>
                    </a>
                </li>

                <div class="dropdown" id="links">
                    <li>
                        <a id="otayhteytta" href="#nelja">
                            <h4 class="navtext2">Ota yhteyttä</h4>
                        </a>
                        <a id="taidot" href="#kolme">
                            <h4 class="navtext2">Taidot</h4>
                        </a>
                        <a id="työkokemus" href="#kaksi">
                            <h4 class="navtext2">Työkokemus</h4>
                        </a>
                        <a id="koulutus" href="#yksi">
                            <h4 onclick="myFunction()" class="navtext2">Koulutus</h4>
                        </a>
                    </li>

                </div>

                <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                    <i class="fa fa-bars"></i>
        </div>
    </div>


    <div class="container-3 w-container">
        <div class="section wf-section"></div>

        <div class="navbar-header">
            <div class="kuvaa">
                <a class="image-11"></a><img src="profiilikuva2.jpg"></a>
            </div>
            <div class="picture">
                <ul style="list-style: none;">
                    <li> <a
                            href=https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2F><img
                                src="linkedinkuva.png"></a></li>
                    <br><br><br>

                    <li><a id="otayhteytta" href="#nelja"><img src="puhelin.png"></a></li>
                    <br><br><br>
                    <li><a id="otayhteytta" href="#nelja"><img src="sähköposti2.png"></a></li>
                </ul>
            </div>
        </div>

        <div class="wf-section">
            <h1 id="viisi" class="heading-11">Elli Esimerkki</h1>
            <div class="w-layout-grid grid-5">
                <div class="text-block-2">22 vuotta | Kuopio
                    <br> Pääaine: Tietojenkäsittelytiede<br>Sivuaine: Johtaminen ja markkinointi <br><br>
                </div>
                <div class="text-block-3">What is Lorem
                    Ipsum?
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    ock leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                    1960s
                    ock with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                    desktop
                    publishing software like Aldus PageMaker including versions of </div>
            </div>
        </div>
    </div>

    <div class="container-4 w-container">
        <div class="wf-section">
            <h1 id="yksi" class="heading-2">Koulutus</h1>
        </div>
        <div class="div-block-4"></div>

        <div class="wf-section">
            <h3 class="heading-12">Luonnontieteiden kandidaatti</h3>
        </div>
        <div class="wf-section">
            <div class="text-block-4">- Pääaine: Tietojenkäsittelytiede<br>- Sivuaine: Johtaminen ja markkinointi<br>-
                Itä-Suomen yliopisto<br>- Syyskuu 2021-nykyhetki</div>
        </div>
        <br><br><br>

        <div class="div-block-2"></div>

        <div class="wf-section">
            <h3 class="heading-12">Ylioppilas</h3>
        </div>
        <div class="wf-section">
            <div class="text-block-4">- Forssan yhteislyseo<br>- 2017-2020</div>
        </div>
    </div>

    <div class="container-5 w-container">
        <div class="wf-section">
            <h1 id="kaksi" class="heading-15">Työkokemus</h1>
        </div>
        <div class="div-block-4"></div>

        <div class="wf-section">
            <h3 class="heading-16">STUDENT MARKETEER<br>Red Bull Finland Oy<br>10.03.2022 - nykyhetki</h3>
        </div>
        <br>
        <div class="wf-section">
            <div class="text-block-5">- Suoramarkkinointi kuluttajalle sekä markkinoinnin suunnittelu yhdessä
                asiakashankintatiimin kanssa. Toimin satunnaisesti myös myyntitiimin apuna erinäköisissä
                tehtävissä<br><br>- Olen oppinut vastuunottamista, organisointia, sekä yhteistyötaitoja</div>
        </div>

        <div class="div-block-6"></div>
        <div class="wf-section">
            <h3 class="heading-16">MYYJÄ<br>Osuuskauppa Hämeenmaa<br>03.03.2020 - 31.12.2020 &<br>02.06.2021 -
                13.08.2021 &<br>10.12.2021 - 31.12.2021</h3>
        </div>
        <br>
        <div class="wf-section">
            <div class="text-block-5">-Kassatyöskentely, asiakaspalvelu sekä muut vähittäiskaupan työtehtävät, kuten
                tuotteiden hyllytys ja saldojen hallinta.‍<br><br>- Olen saanut tunnustusta tehokkuudesta,
                tiimityöskentelytaidoista, asiakaspalvelusta sekä organisointitaidoista</div>
        </div>

        <div class="div-block-6"></div>
        <div class="wf-section">
            <h3 class="heading-16">LIIKENNEASEMATYÖNTEKIJÄ<br>Hansatie Oy<br>06.08.2019 - 22.02.2020</h3>
        </div>
        <br>
        <div class="wf-section">
            <div class="text-block-5">- Shop & Hesburger: Kassalla työskentely, tarjoilu, keittiötyöt‍<br><br>- Opin
                tiimityöskentelyä, organisointia sekä kehitin paineensietokykyä</div>
        </div>
        <div class="div-block-6"></div>

        <div class="wf-section">
            <h1 class="heading-15">Luottamustehtävät</h1>
        </div>
        <div class="4"></div>
        <div class="div-block-4"></div>
        <div class="wf-section">
            <h3 class="heading-16">VARAPUHEENJOHTAJA<br>Serveri ry<br>01/23 - nykyhetki</h3>
        </div>
        <br>

        <div class="wf-section">
            <div class="text-block-5">-Tehtäviini kuuluu operatiivinen johtaminen yhdessä puheebjohtajan kanssa. Tämän
                lisäksi olen toiminut kaikkien hallituslaisten apuna, mutta erityisesti tapahtumien parissa.</div>
        </div>
        <div class="div-block-6"></div>

        <h3 class="heading-16">TAPAHTUMAVASTAAVA<br>Serveri ry<br>01/22 - 12/22</h3>
        <br>
        <div class="wf-section">
            <div class="text-block-5">-Tehtäviini kuului tapahtumien suunnittelu ja toteutus omalle jäsenistölle sekä
                poikkitieteellisesti kaikille opiskelijoille, yritysten kontaktointi sekä tapahtumien markkinointi
                sosiaalisessa mediassa.</div>
        </div>
    </div>

    <div class="container-6 w-container">
        <div class="wf-section">
            <h1 id="kolme" class="heading-18">Taidot</h1>
        </div>
        <div class="div-block-4"></div>
        <div class="wf-section">
            <h3 class="heading-17">IT-taidot</h3>
        </div>
        <br>
        <div class="wf-section">
            <div class="text-block-6">
                <ul>
                    <li>Python</li>
                    <li>Tea</li>
                    <li>Java</li>
                    <li>Javascript</li>
                    <li>WEB-työkalut; HTML, CSS, React</li>
                    <li>SQL</li>
                    <li>MS Office</li>
                </ul>
            </div>
        </div>
        <br><br><br>
        <div class="wf-section">
            <h3 class="heading-17">Kielitaito</h3>
        </div>
        <br>
        <div class="wf-section">
            <div class="text-block-6">
                <li>suomi - äidinkieli</li>
                <li>englanti - sujuva</li>
                <li>ruotsi - perusteet</li>
            </div>
        </div>
    </div>

    <div class="container-7 w-container">

        <div class="wf-section">
            <h1 id="nelja" class="heading-18">Yhteystiedot</h1>
        </div>
        <div class="div-block-4"></div>

        <div class="row">
            <div class="col-xs-4">
                <div class="text-block-7">
                    <li class="phone">0123456789 </li>
                    <br>
                    <li class="email"><a href="mailto:elliesim@uef.fi"
                            style="color: #fff; text-decoration: underline">elliesim@uef.fi</a></li>
                    <br>
                    <li class="linkedin"><a
                            href=linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2F
                            style="color: #fff; text-decoration: underline"> Elli Esimerkki</a></li>
                </div>
            </div>

            <div class="col-xs-4">
                <form class="former">
                    <h2 class="formheader">Kiinnostuitko?</h2>
                    <br>

                    <input type="radio" id="kylla" name="vastaus" value="kylla">
                      <label for="kylla">Kyllä</label><br>

                      <input type="radio" id="ei" name="vastaus" value="ei">
                      <label for="ei">Ei</label><br>
                    <br><br>

                    <label class="text" for="fname">Mitä voisin kehittää työnhaussani?</label><br>
                    <input type="text" id="area1" name="area1"><br><br>

                    <label class="text" for="lname">Mikä oli onnistunut työnhaussani?</label><br>
                    <input type="text" id="area2" name="area2"><br><br>
                    <button id="nappi" type="submit" value="Vastaus" onclick="tarkista()">Vastaus</button>
                </form>
            </div>

        </div>
    </div>


    <script>

        /*navigointipalkki mobiilinäkymään*/

        function myFunction() {
            var x = document.getElementById("links");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        }

        /*toiminnallisuus navigoinnille*/

        var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("navigointi").style.top = "0";
            } else {
                document.getElementById("navigointi").style.top = "-200px";
            }
            prevScrollpos = currentScrollPos;
        }

        /*toiminnallisuus lomakkeen tarkistukseen*/

        function tarkista() {

            if ((!document.getElementById("area1").value == '') &&
                (!document.getElementById("area2").value == '')) {
                alert("Kiitos vastauksestasi!");
            }
        }

        $('#koulutus').addClass("aktiivinen");

        $("#koulutus").click(function () {
            $('html, body').animate({
                scrollTop: $("#yksi").offset().top - 66
            }, 1000);
            return false;
        });

        $('#työkokemus').addClass("aktiivinen");

        $("#työkokemus").click(function () {
            $('html, body').animate({
                scrollTop: $("#kaksi").offset().top - 66
            }, 1000);
            return false;
        });

        $('#taidot').addClass("aktiivinen");

        $("#taidot").click(function () {
            $('html, body').animate({
                scrollTop: $("#kolme").offset().top - 66
            }, 1000);
            return false;
        });

        $('#otayhteytta').addClass("aktiivinen");

        $("#otayhteytta").click(function () {
            $('html, body').animate({
                scrollTop: $("#nelja").offset().top - 66
            }, 1000);
            return false;
        });

        $('#profiili').addClass("aktiivinen");

        $("#profiili").click(function () {
            $('html, body').animate({
                scrollTop: $("#viisi").offset().top - 66
            }, 1000);
            return false;
        });

    </script>
</body>

</html>
