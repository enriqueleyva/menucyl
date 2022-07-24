document.addEventListener('DOMContentLoaded', function(event) {

    displayPages()
    const cards = ['i1','i2','i3','i4','i5','i6','i7','i8','i9','i10','i11','i12','i13','i14','i15','i16','i17','i18','i19','i20','i21','i22']

    const chosen = cards[random(0,cards.length-1)]

    // document.getElementById('flip-card-btn-turn-to-back').style.visibility = 'visible';
    // document.getElementById('flip-card-btn-turn-to-front').style.visibility = 'visible';

    // document.getElementById('flip-card-btn-turn-to-back').onclick = function() {
    document.getElementById('flip-card-front').onclick = function() {
        document.getElementById('flip-card').classList.toggle('do-flip');
        document.getElementById('random-card').style.backgroundImage  = 'url(../img/cartas/' + chosen + '.png)';
        document.getElementById('random-card').style.backgroundSize   = 'contain';
        document.getElementById('random-card').style.backgroundRepeat = 'no-repeat';
        document.getElementById('random-card').style.backgroundPosition = 'center';

        sleep(5000).then(() => {
            // document.getElementById('random-card').classList.toggle('slide-top')
            $("#random-card").animate({
                top: "1000px"
            }, "slow");
            // document.getElementById('revista').style.display = 'block'
            // document.getElementById('revista').style.height = '800px'
            return false;

            
        })
        sleep(6000).then(() => {
            // document.getElementById('random-card').classList.toggle('slide-top')
            
            document.getElementById('revista').style.display = 'block'
            document.getElementById('revista').style.height = '800px'
            

            
        })
        // background-size: contain;
        // background-repeat: no-repeat;
    };

    // document.getElementById('random-card').onclick = function(){
    // }
    // document.getElementById('flip-card-btn-turn-to-front').onclick = function() {
    //     document.getElementById('flip-card').classList.toggle('do-flip');
    // };
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}


function checkMobile() {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

function displayPages( ) {
   
    // const cards = ['https://http2.mlstatic.com/D_NQ_NP_947230-MLM45440130435_042021-O.jpg', 'https://m.media-amazon.com/images/I/51KuCIyB3wL._AC_.jpg', 'http://pm1.narvii.com/6547/11c42d354cc82f37c8ec06d7d8c6e69f863db049_00.jpg']
    const cards = ['Contraportada.jpg','pagina 1.jpg','pagina 2.jpg','pagina 3.jpg','pagina 4.jpg','pagina 5.jpg','pagina 6.jpg','pagina7.jpg', 'pagina 8.jpg', 'pagina 9.jpg', 'pagina 10.jpg']
    // const divPasta = document.createElement('div')
    // divPasta.className = 'hard'
    
    // const imgPortada = document.createElement('img')
    // imgPortada.src = `../img/${cards[0]}`
    // imgPortada.style.width = '100%'
    // imgPortada.style.height = '100%'
    // divPasta.appendChild(imgPortada)
    // document.getElementById('flipbook').appendChild(divPasta)
    
    // document.getElementById('flipbook').appendChild(divPasta)
    for (let index = 0; index < cards.length; index++) {
        const divPagina = document.createElement('div')
        // divPagina.className = 'page'
        const img = document.createElement('img')
        img.src = `../img/${cards[index]}`
        img.style.width = '100%'
        img.style.height = '100%'
        
        divPagina.appendChild(img)
        document.getElementById('flipbook').appendChild(divPagina)
    }
    document.getElementById('flipbook').style.marginLeft = "35%"
    yepnope({
        test : Modernizr.csstransforms,
        yep: ['../../libs/turn.js'],
        nope: ['../../libs/turn.html4.min.js'],
        complete: loadApp
    });
    console.log('termino');
    // document.getElementById('buttonBack').style.display = 'block'
    // document.getElementById('books').style.display = 'none'
}


function loadApp() {
    // const documento = document.getElementById('divRevista')
    // divWidth  = documento.clientWidth
    // divHeigth = documento.clientHeight
    divWidth  = 360
    divHeigth = 540

    // console.log(divWidth);
    // if (!checkMobile()) { // not mobile
    //     $('.flipbook').turn('display', 'double');
    //    }
    //    else {
    //     $('.flipbook').turn('display', 'single');
    //    }

    console.log(checkMobile());
    $('.flipbook').turn({
        // Width

        width:divWidth,

        // Height

        height:divHeigth,

        // Elevation

        elevation: 50,
        
        // Enable gradients

        gradients: true,
        
        // Auto center this flipbook

        autoCenter: true

    });
    $('.flipbook').turn('display', 'single');
    
     // console.log(divWidth);
    // if (!checkMobile()) { // not mobile
    //     $('.flipbook').turn('display', 'double');
    // }
    // else {
    // }

}