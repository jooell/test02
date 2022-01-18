

    let produktbild = document.getElementById('imgReplace')



    let picbutt1 = document.getElementById('picbutt1')
    picbutt1.addEventListener('click', picChange)
    let picbutt2 = document.getElementById('picbutt2')
    picbutt2.addEventListener('click', picChange)
    let picbutt3 = document.getElementById('picbutt3')
    picbutt3.addEventListener('click', picChange)

    function picChange(){
        console.log(event.target.src)
        produktbild.srcset = event.target.src
        
    }

