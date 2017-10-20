$(function () {
    var i = 0,
        words = [
        "un développeur",
        "un designer",
        "un passionné",
        "dynamique"
        ];

    //menu responsive pour ecrans <= medium (<992px)
    $(".navbar-responsive").toggle();

    $(".menu").click(function () {
        $(".navbar-responsive").toggle("slow");
    });

    //affichage aleatoire phrases accroches toutes les 3.5s
    setInterval(function () {
        $("#word").fadeOut(function () {
            $(this).html(words[i = (i+1) % words.length]).fadeIn();
        })
    }, 3500);

    //scroll vers differentes sections
    $(".scroll").click(function () {
        //va recuperer l'id de l'element quand on va cliquer dessus
        var section = $("." + this.id);

        //menu qui se referme apres le clique
        $(".navbar-responsive").hide("slow");

        //animation du scroll du haut de la page a partir du menu jusqu'au sommet de la section selectionee
        $("html, body").animate({scrollTop: section.offset().top}, "slow");
    });

    //animation progressbar
    window.sr = ScrollReveal();

    sr.reveal(".progress-bar",{
        origin: "left",
        duration: 2000,
        distance: "100%"
    });
});