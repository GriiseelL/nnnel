AOS.init();

var musik = "";

var audio = document.querySelector(".audio");
if (musik) {
    audio.src = musik;
}

function mulai() {
    audio.play();
    window.scrollTo(0, 0);
    document.querySelector(".open").style = "opacity: 0;";
    document.querySelector(".body").style = "overflow-y: scroll";
    setTimeout(function() {
        document.querySelector(".open").style.display = "none";
    }, 1200);
}

function wa(isi) {
    window.open("https://api.whatsapp.com/send?text= " + isi);
}

async function tanya() {
    var {
        value: kado
    } = await swal.fire({
        imageUrl: 'IMG_20220418_091001_674.webp',
        title: 'Hari ini mau apa?',
        input: 'text',
        showCancelButton: false
    });

    if (kado) {
        await swal.fire({
            imageUrl: 'wa.png',
            title: 'kirim jwbn ke wa'
        });
        wa(kado);
    } else {
        await swal.fire({
            icon: 'error',
            title: 'jgn kosong dng'
        });
        tanya();
    }

}