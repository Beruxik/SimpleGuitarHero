import {
    Button1,
    Button2,
    Button3,
    Button4,
    Button5
} from "./button.js";
import {
    Circle1,
    Circle2,
    Circle3,
    Circle4,
    Circle5
} from "./circle.js";
import {
    Line1,
    Line2,
    Line3,
    Line4,
    Line5
} from "./line.js"

window.addEventListener("load", () => {
    const cnv = document.getElementById("cnv");
    cnv.width = 700;
    cnv.height = 600;

    const ctx = cnv.getContext("2d");

    const line1 = new Line1();
    const line2 = new Line2();
    const line3 = new Line3();
    const line4 = new Line4();
    const line5 = new Line5();

    const button1 = new Button1();
    const button2 = new Button2();
    const button3 = new Button3();
    const button4 = new Button4();
    const button5 = new Button5();

    const kolkared = [];
    const kolkablue = [];
    const kolkagreen = [];
    const kolkaorange = [];
    const kolkabrown = [];

    let score = 0;
    let scoreHTML = document.getElementById("score");

    let a = 20;
    let b = 10;

    while (a < 4 || a > 17) {
        a = prompt("Choose speed (Number between 4 and 17):");
        a = Number(a);
    }

    while (b < 1 || b > 5) {
        b = prompt("Choose number of lines (Number between 1 and 5):");
        b = parseInt(b);
    }

    // Jedna linia
    if (b == 1) {

        // Dodaje kółka do gry
        setInterval(function() {
            const circle1 = new Circle1(a);
            kolkared.push(circle1);
        }, 3000)

        // Odświeża kółka
        function Update() {
            for (let i = 0; i < kolkared.length; i++) {
                kolkared[i].update();
            }
        }

        // Rysuje grę
        function Draw() {
            ctx.clearRect(0, 0, cnv.width, cnv.height);
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, cnv.width, cnv.height);
            line1.draw(ctx);
            button1.draw(ctx);
            for (let i = 0; i < kolkared.length; i++) {
                kolkared[i].draw(ctx);
            }
        }

        // Działanie gry
        window.addEventListener("keydown", function(e) {
            if (e.keyCode == 81) {
                button1.color = "red";

                for (let i = 0; i < kolkared.length; i++) {
                    if (kolkared[i].y > 510 && kolkared[i].y < 600) {
                        score++;
                    } else if (kolkared[i].y > 0 && kolkared[i].y < 510) {
                        score--;
                    }
                }

                scoreHTML.innerHTML = "Score: " + score;
            }
        })

        // Zmiana koloru przycisków
        window.addEventListener("keyup", function(e) {
            if (e.keyCode == 81) {
                button1.color = "pink";
            }
        })

        MainLoop.setUpdate(Update).setDraw(Draw).start();
    }

    // Dwie linie
    else if (b == 2) {

        // Dodaje kółka do gry
        setInterval(function() {
            const circle1 = new Circle1(a);
            const circle2 = new Circle2(a);
            kolkared.push(circle1);
            kolkablue.push(circle2);
        }, 3000)

        // Odświeża kółka
        function Update() {
            for (let i = 0; i < kolkared.length; i++) {
                kolkared[i].update();
                kolkablue[i].update();
            }
        }

        // Rysuje grę
        function Draw() {
            ctx.clearRect(0, 0, cnv.width, cnv.height);
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, cnv.width, cnv.height);
            line1.draw(ctx);
            line2.draw(ctx);
            button1.draw(ctx);
            button2.draw(ctx);
            for (let i = 0; i < kolkared.length; i++) {
                kolkared[i].draw(ctx);
                kolkablue[i].draw(ctx);
            }
        }

        // Działanie gry
        window.addEventListener("keydown", function(e) {
            if (e.keyCode == 81) {
                button1.color = "red";

                for (let i = 0; i < kolkared.length; i++) {
                    if (kolkared[i].y > 510 && kolkared[i].y < 600) {
                        score++;
                    } else if (kolkared[i].y > 0 && kolkared[i].y < 510) {
                        score--;
                    }
                }

                scoreHTML.innerHTML = "Score: " + score;
            }

            if (e.keyCode == 87) {
                button2.color = "blue";

                for (let i = 0; i < kolkablue.length; i++) {
                    if (kolkablue[i].y > 510 && kolkablue[i].y < 600) {
                        score++;
                    } else if (kolkablue[i].y > 0 && kolkablue[i].y < 510) {
                        score--;
                    }
                }

                scoreHTML.innerHTML = "Score: " + score;
            }
        })

        // Zmiana koloru przycisków
        window.addEventListener("keyup", function(e) {
            if (e.keyCode == 81) {
                button1.color = "pink";
            }

            if (e.keyCode == 87) {
                button2.color = "lightblue";
            }
        })

        MainLoop.setUpdate(Update).setDraw(Draw).start();
    }

    // Trzy linie
    else if (b == 3) {

        // Dodaje kółka do gry
        setInterval(function() {
            const circle1 = new Circle1(a);
            const circle2 = new Circle2(a);
            const circle3 = new Circle3(a);
            kolkared.push(circle1);
            kolkablue.push(circle2);
            kolkagreen.push(circle3);
        }, 3000)

        // Odświeża kółka
        function Update() {
            for (let i = 0; i < kolkared.length; i++) {
                kolkared[i].update();
                kolkablue[i].update();
                kolkagreen[i].update();
            }
        }

        // Rysuje grę
        function Draw() {
            ctx.clearRect(0, 0, cnv.width, cnv.height);
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, cnv.width, cnv.height);
            line1.draw(ctx);
            line2.draw(ctx);
            line3.draw(ctx);
            button1.draw(ctx);
            button2.draw(ctx);
            button3.draw(ctx);
            for (let i = 0; i < kolkared.length; i++) {
                kolkared[i].draw(ctx);
                kolkablue[i].draw(ctx);
                kolkagreen[i].draw(ctx);
            }
        }

        // Działanie gry
        window.addEventListener("keydown", function(e) {
            if (e.keyCode == 81) {
                button1.color = "red";

                for (let i = 0; i < kolkared.length; i++) {
                    if (kolkared[i].y > 510 && kolkared[i].y < 600) {
                        score++;
                    } else if (kolkared[i].y > 0 && kolkared[i].y < 510) {
                        score--;
                    }
                }

                scoreHTML.innerHTML = "Score: " + score;
            }

            if (e.keyCode == 87) {
                button2.color = "blue";

                for (let i = 0; i < kolkablue.length; i++) {
                    if (kolkablue[i].y > 510 && kolkablue[i].y < 600) {
                        score++;
                    } else if (kolkablue[i].y > 0 && kolkablue[i].y < 510) {
                        score--;
                    }
                }

                scoreHTML.innerHTML = "Score: " + score;
            }

            if (e.keyCode == 69) {
                button3.color = "green";

                for (let i = 0; i < kolkagreen.length; i++) {
                    if (kolkagreen[i].y > 510 && kolkagreen[i].y < 600) {
                        score++;
                    } else if (kolkagreen[i].y > 0 && kolkagreen[i].y < 510) {
                        score--;
                    }
                }

                scoreHTML.innerHTML = "Score: " + score;
            }
        })

        // Zmiana koloru przycisków
        window.addEventListener("keyup", function(e) {
            if (e.keyCode == 81) {
                button1.color = "pink";
            }

            if (e.keyCode == 87) {
                button2.color = "lightblue";
            }

            if (e.keyCode == 69) {
                button3.color = "lightgreen";
            }
        })

        MainLoop.setUpdate(Update).setDraw(Draw).start();
    }

    // Cztery linie
    else if (b == 4) {

        // Dodaje kółka do gry
        setInterval(function() {
            const circle1 = new Circle1(a);
            const circle2 = new Circle2(a);
            const circle3 = new Circle3(a);
            const circle4 = new Circle4(a);
            kolkared.push(circle1);
            kolkablue.push(circle2);
            kolkagreen.push(circle3);
            kolkaorange.push(circle4);
        }, 3000)

        // Odświeża kółka
        function Update() {
            for (let i = 0; i < kolkared.length; i++) {
                kolkared[i].update();
                kolkablue[i].update();
                kolkagreen[i].update();
                kolkaorange[i].update();
            }
        }

        // Rysuje grę
        function Draw() {
            ctx.clearRect(0, 0, cnv.width, cnv.height);
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, cnv.width, cnv.height);
            line1.draw(ctx);
            line2.draw(ctx);
            line3.draw(ctx);
            line4.draw(ctx);
            button1.draw(ctx);
            button2.draw(ctx);
            button3.draw(ctx);
            button4.draw(ctx);
            for (let i = 0; i < kolkared.length; i++) {
                kolkared[i].draw(ctx);
                kolkablue[i].draw(ctx);
                kolkagreen[i].draw(ctx);
                kolkaorange[i].draw(ctx);
            }
        }

        // Działanie gry
        window.addEventListener("keydown", function(e) {
            if (e.keyCode == 81) {
                button1.color = "red";

                for (let i = 0; i < kolkared.length; i++) {
                    if (kolkared[i].y > 510 && kolkared[i].y < 600) {
                        score++;
                    } else if (kolkared[i].y > 0 && kolkared[i].y < 510) {
                        score--;
                    }
                }

                scoreHTML.innerHTML = "Score: " + score;
            }

            if (e.keyCode == 87) {
                button2.color = "blue";

                for (let i = 0; i < kolkablue.length; i++) {
                    if (kolkablue[i].y > 510 && kolkablue[i].y < 600) {
                        score++;
                    } else if (kolkablue[i].y > 0 && kolkablue[i].y < 510) {
                        score--;
                    }
                }

                scoreHTML.innerHTML = "Score: " + score;
            }

            if (e.keyCode == 69) {
                button3.color = "green";

                for (let i = 0; i < kolkagreen.length; i++) {
                    if (kolkagreen[i].y > 510 && kolkagreen[i].y < 600) {
                        score++;
                    } else if (kolkagreen[i].y > 0 && kolkagreen[i].y < 510) {
                        score--;
                    }
                }

                scoreHTML.innerHTML = "Score: " + score;
            }

            if (e.keyCode == 82) {
                button4.color = "orange";

                for (let i = 0; i < kolkaorange.length; i++) {
                    if (kolkaorange[i].y > 510 && kolkaorange[i].y < 600) {
                        score++;
                    } else if (kolkaorange[i].y > 0 && kolkaorange[i].y < 510) {
                        score--;
                    }
                }

                scoreHTML.innerHTML = "Score: " + score;
            }
        })

        // Zmiana koloru przycisków
        window.addEventListener("keyup", function(e) {
            if (e.keyCode == 81) {
                button1.color = "pink";
            }

            if (e.keyCode == 87) {
                button2.color = "lightblue";
            }

            if (e.keyCode == 69) {
                button3.color = "lightgreen";
            }

            if (e.keyCode == 82) {
                button4.color = "yellow";
            }
        })

        MainLoop.setUpdate(Update).setDraw(Draw).start();
    }

    // Pięć linii
    if (b == 5) {

        // Dodaje kółka do gry
        setInterval(function() {
            const circle1 = new Circle1(a);
            const circle2 = new Circle2(a);
            const circle3 = new Circle3(a);
            const circle4 = new Circle4(a);
            const circle5 = new Circle5(a);
            kolkared.push(circle1);
            kolkablue.push(circle2);
            kolkagreen.push(circle3);
            kolkaorange.push(circle4);
            kolkabrown.push(circle5);
        }, 3000)

        // Odświeża kółka
        function Update() {
            for (let i = 0; i < kolkared.length; i++) {
                kolkared[i].update();
                kolkablue[i].update();
                kolkagreen[i].update();
                kolkaorange[i].update();
                kolkabrown[i].update();
            }
        }

        // Rysuje grę
        function Draw() {
            ctx.clearRect(0, 0, cnv.width, cnv.height);
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, cnv.width, cnv.height);
            line1.draw(ctx);
            line2.draw(ctx);
            line3.draw(ctx);
            line4.draw(ctx);
            line5.draw(ctx);
            button1.draw(ctx);
            button2.draw(ctx);
            button3.draw(ctx);
            button4.draw(ctx);
            button5.draw(ctx);
            for (let i = 0; i < kolkared.length; i++) {
                kolkared[i].draw(ctx);
                kolkablue[i].draw(ctx);
                kolkagreen[i].draw(ctx);
                kolkaorange[i].draw(ctx);
                kolkabrown[i].draw(ctx);
            }
        }

        // Działanie gry
        window.addEventListener("keydown", function(e) {
            if (e.keyCode == 81) {
                button1.color = "red";

                for (let i = 0; i < kolkared.length; i++) {
                    if (kolkared[i].y > 510 && kolkared[i].y < 600) {
                        score++;
                    } else if (kolkared[i].y > 0 && kolkared[i].y < 510) {
                        score--;
                    }
                }

                scoreHTML.innerHTML = "Score: " + score;
            }

            if (e.keyCode == 87) {
                button2.color = "blue";

                for (let i = 0; i < kolkablue.length; i++) {
                    if (kolkablue[i].y > 510 && kolkablue[i].y < 600) {
                        score++;
                    } else if (kolkablue[i].y > 0 && kolkablue[i].y < 510) {
                        score--;
                    }
                }

                scoreHTML.innerHTML = "Score: " + score;
            }

            if (e.keyCode == 69) {
                button3.color = "green";

                for (let i = 0; i < kolkagreen.length; i++) {
                    if (kolkagreen[i].y > 510 && kolkagreen[i].y < 600) {
                        score++;
                    } else if (kolkagreen[i].y > 0 && kolkagreen[i].y < 510) {
                        score--;
                    }
                }

                scoreHTML.innerHTML = "Score: " + score;
            }

            if (e.keyCode == 82) {
                button4.color = "orange";

                for (let i = 0; i < kolkaorange.length; i++) {
                    if (kolkaorange[i].y > 510 && kolkaorange[i].y < 600) {
                        score++;
                    } else if (kolkaorange[i].y > 0 && kolkaorange[i].y < 510) {
                        score--;
                    }
                }

                scoreHTML.innerHTML = "Score: " + score;
            }

            if (e.keyCode == 84) {
                button5.color = "brown";

                for (let i = 0; i < kolkabrown.length; i++) {
                    if (kolkabrown[i].y > 510 && kolkabrown[i].y < 600) {
                        score++;
                    } else if (kolkabrown[i].y > 0 && kolkabrown[i].y < 510) {
                        score--;
                    }
                }

                scoreHTML.innerHTML = "Score: " + score;
            }
        })

        // Zmiana koloru przycisków
        window.addEventListener("keyup", function(e) {
            if (e.keyCode == 81) {
                button1.color = "pink";
            }

            if (e.keyCode == 87) {
                button2.color = "lightblue";
            }

            if (e.keyCode == 69) {
                button3.color = "lightgreen";
            }

            if (e.keyCode == 82) {
                button4.color = "yellow";
            }

            if (e.keyCode == 84) {
                button5.color = "violet";
            }
        })

        MainLoop.setUpdate(Update).setDraw(Draw).start();
    }

})