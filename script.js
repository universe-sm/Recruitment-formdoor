 document.getElementById("b1").addEventListener("click", function () {
            document.querySelector(".box1").classList.add("left-door");
            document.querySelector(".box2").classList.add("right-door");

            document.querySelector(".tex").style.display = "none";
            document.querySelector(".text2").style.display = "none";
            document.querySelector(".text3").style.display = "none";
            document.querySelector(".text4").style.display = "none";
            document.getElementById("b1").style.display = "none";
            document.querySelector(".star1").style.display = "none";
            document.querySelector(".star2").style.display = "none";
            document.querySelector(".star3").style.display = "none";
            document.querySelector(".star4").style.display = "none";
            document.querySelector(".star5").style.display = "none";
            document.querySelector(".star6").style.display = "none";
            document.querySelector(".star7").style.display = "none";
            document.querySelector(".star8").style.display = "none";
            document.querySelector(".star9").style.display = "none";
        }
        )

        document.querySelector(".box1").addEventListener("animationend", function () {
            document.querySelector(".container2").style.display = "none";
            document.querySelector(".container3").style.display = "block";
             document.querySelector(".form").classList.add("retro-form-animation");

           

        })
