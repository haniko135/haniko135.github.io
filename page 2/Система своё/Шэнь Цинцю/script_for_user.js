let imgElement;
/*function showImage(block, charachter, id){   

    imgElement = document.createElement('img');
    imgElement.style.width = '10%';
    imgElement.style.height = '10%';
    imgElement.style.zIndex = 4;
    if(charachter =='SQQ'){
        imgElement.src = "../../img/Чиби Цинцю ориг.jpg";
    }
    else if (charachter == 'LBH'){
        imgElement.src = "../../img/чиби бинхэ.jpg";
    }
    document.body.append(imgElement);
    let position = document.getElementById(id);

    if(block == "left_block"){
        
    }
    else if(block == "right_block"){
        //imgElement.style.marginLeft = '90%';
        imgElement.style.position = 'fixed';
        position.style.backgroundImage = imgElement;
    }
}*/

function showImage(id){
    document.getElementById(id).style.display = "block";
    document.getElementById(id).style.left = '90%';
}
function hideImage(id){
    document.getElementById(id).style.display = "none";
}

/*document.onmouseout = function (e){
    if(imgElement){
        imgElement.remove();
        imgElement = null;
    }
}*/