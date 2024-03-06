
    var selected_option = "";
    var cpu_option;
    const options = ["rock_img", "paper_img", "scissor_img"];

    function play2() {
        //Verificar que usuario haya seleccionado una opción.
        //Si no lo ha hecho, muestra un error, si lo ha hecho, continua el juego.
        if (selected_option == "") {
            alert("Debe seleccionar una opción!!");
        } else {
            //continua el juego
            //Usa la función getCPUChoice para obtener una opcion aleatoria.
            cpu_option = getCPUChoice();

            var winner = getWinner();


            if (winner == "player") {
                //ganó el jugador
                $("#player_score").html(parseInt($("#player_score").html())+1)
                alert("Jugador gana!!!");
            } else if (winner == "cpu") {
                //ganó la máquina
                $("#cpu_score").html(parseInt($("#cpu_score").html())+1)
                alert("Máquina gana");
            } else {
                //empate
                alert("Empate!!!");
            }
        }

    }

    //Esta función retorna un eleccion de piedra, papel o tijera aleatorio.
    function getCPUChoice() {
        //Genera un número aleatorio entre 0 y 2, y lo usar para retornar un valor del array options.
        var random_index = Math.floor(Math.random() * 3);

        return options[random_index];
    }

    function getWinner(){
        //Retorna "noOne" si hay un empate.
        if (cpu_option == selected_option) {
            return "noOne";
        }
        
        switch (cpu_option) {
            case "rock_img":
                switch (selected_option) {
                    case "paper_img":
                        return "player";   
                    break;
                    case "scissor_img":
                        return "cpu";
                    break;
                    default:
                        break;
                }
            break;
            case "paper_img":
                switch (selected_option) {
                    case "rock_img":
                        return "cpu";
                    break;
                    case "scissor_img":
                        return "player";
                    break;
                    default:
                        break;
                }
            break;
            case "scissor_img":
                switch (selected_option) {
                    case "paper_img":
                        return "cpu";   
                    break;
                    case "rock_img":
                        return "player";
                    break;
                    default:
                        break;
                }
            break;
            default:
                break;
        }
    }

    function optionChanged(source_id) {
        //Identifica cual es la opcion que el usuario ha seleccionado, la resalta visualmente y cambia la variable
        //selected_option de acuerdo a la seleccion.
        selected_option = source_id;
        $("#"+source_id).attr("border","3px solid black");
        $("#"+source_id).attr("borderRadius", "10%");
    
        //Usa el bucle forEach, para elimnar el borde de las opciones no seleccionadas.
        options.forEach(element => {
            if (element != source_id) {
                $("#"+element).attr("border", "none");
            }
        });
    }
