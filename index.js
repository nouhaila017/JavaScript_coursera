function upDate(previewPic) {
            console.log("Événement onmouseover déclenché !");
                        console.log("Image survolée - alt:", previewPic.alt, "src:", previewPic.src);
                        document.getElementById('image').innerHTML = previewPic.alt;
                        document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
                        console.log("Style appliqué:", document.getElementById('image').style.backgroundImage);
        }
                function unDo() {
            console.log("Événement onmouseout déclenché !");
            
            document.getElementById('image').style.backgroundImage = "url('')";
                        document.getElementById('image').innerHTML = "Survolez une image ci-dessous pour l'afficher ici";
        }
