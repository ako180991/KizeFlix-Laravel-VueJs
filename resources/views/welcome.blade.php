<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css" rel="stylesheet">
    <link
        href="https://fonts.googleapis.com/css?family=Bebas+Neue|Julius+Sans+One|Nanum+Myeongjo|Poiret+One|Vidaloka&display=swap"
        rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Anton|Quattrocento|Quicksand|Raleway&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.18/vue.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css">
    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
    



    <title>KizeFlix</title>

    <link rel="stylesheet" href="{{ asset('css/app.css') }}">

</head>

<body>

    <div id="app"></div>

    <script>
        var BASE_URL = '{{ URL::to('/') }}';
    </script>

    <script src="/js/app.js"></script>
</body>

</html>