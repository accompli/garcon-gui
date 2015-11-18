<?php

?>

<html>
    <head>
        <title>Garcon</title>
        <script src="../build/react.js"></script>
        <script src="../build/react-dom.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        
        <link rel="stylesheet" href="https://storage.googleapis.com/code.getmdl.io/1.0.6/material.grey-green.min.css" /> 
        <script src="https://storage.googleapis.com/code.getmdl.io/1.0.5/material.min.js"></script>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
        
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../css/login.css">
       
    </head>
    <body>
        

     <!-- HEADER -->
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <div class ="header">
            <div class="mdl-layout__header-row">
<!--                <img src="../img/logo.png" id="garconlogo" alt="garcon-logo">-->
                    <div class="garconlogo"></div>
                    <!-- Add spacer, to align navigation to the right --> 
                    <div class="mdl-layout-spacer"></div>
                    
                    <!--Tabs-->
                    <div class="navigation menu">
                            <a href="">Dashboard</a>
                            <a href="">Organisations</a>
                            
                            <a id="settings">Settings  
                                <span>
                                    <svg id="arrow_dropdown" fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 10l5 5 5-5z"/>
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                    </svg>
                                </span>
                            </a>
                    </div>
                            
                    
                            <ul class="mdl-menu mdl-js-menu navigation tabmenu_item" for="settings">
                                <li class="mdl-menu__item"><a href="">Users</a></li>
                                <li class="mdl-menu__item"><a href="">System</a></li>
                            </ul>
                            
                 
                    
                    <div class="navigation login_button">
                        <a href="">  
                        <span><svg id="icon_login" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                        </svg></span><span id="login_txt">LOGIN</span></a>
                    </div>
                </div>
            </div>

            <!--BACKGROUND-->
            <main class="mdl-layout__content">
                    <div id="bot">
                        
                        
                    </div>

                    <!--LOGIN-->
                    <div class="login_block">
                        
                        
                    </div>
            </main>
        </div>

    <script src="../lib/login.js"></script>
    </body>
</html>