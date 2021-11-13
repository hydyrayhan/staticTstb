var imgs = [];
var loadFile = function(event,el) {
    var image = document.querySelectorAll('#output');
    // console.log(image[el])

    image[el].src = URL.createObjectURL(event.target.files[0]);
    image[el].style.width = "100%";
    image[el].style.height = "100%";
    var img = document.querySelectorAll(".inputs p input")[el];
    imgs.push(img.files[0])

};


function sendImg(link,form){
    var file = document.querySelectorAll(".box .inputs input[type='file']");

    async function send(addGalleryImage){
        var data = new FormData();
        for(var i =0; i < addGalleryImage.length; i ++){
            // console.log(addGalleryImage[i])
            data.append(`img${i}`,addGalleryImage[i]);
        }

        const option = {
            method: "POST",
            body:data
        }

        await fetch(link,option);
    }

    var submit = document.querySelector(".save");

    submit.addEventListener("click",async function(e){
        // e.preventDefault()
        await send(imgs);
    })


    var more = document.querySelector(".more");
    var yene = 1;
    more.addEventListener("click",function(){
        moreBtn();
        var a = document.querySelectorAll('.ql-editor p');
        for(var i = yene*3; i<(yene+1)*3;i++){
            a[i].textContent = ''
        }
        yene+=1;


        file = document.querySelectorAll(".box .inputs input[type='file']");
    })
}
let sana=1
var imgBox = 3;
function moreBtn(){
    var form1 = document.querySelector("form .form1")
    var form2 = document.querySelector("form .form2")
    form2.innerHTML += form1.innerHTML;
    form2.childNodes[imgBox].childNodes[5].childNodes[1].childNodes[0].setAttribute("onchange",`loadFile(event,${sana})`);
    form2.childNodes[imgBox].childNodes[5].childNodes[1].childNodes[0].setAttribute("id",`img${sana}`);
    form2.childNodes[imgBox].childNodes[5].childNodes[3].setAttribute("for",`img${sana}`); 
    form2.childNodes[imgBox].childNodes[5].childNodes[3].childNodes[0].setAttribute("src","/pictures/icon/addPicture.svg")
    form2.childNodes[imgBox].childNodes[5].childNodes[3].childNodes[0].setAttribute("style","")

    imgBox+=8;
    sana+=1
}

