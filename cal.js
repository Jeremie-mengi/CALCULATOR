//DOM
const touches = [...document.querySelectorAll(".bouton")]
const listkeycode = touches.map(touche => touche.dataset.key)
const ecran = document.querySelector('.ecran')

document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    console.log(e);
    calculer(valeur)
});

document.getElementsByClassName

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key
    calculer(valeur)
    console.log(listkeycode.indexOf(valeur))
})

const calculer = (valeur) => {
    if (listkeycode.includes(valeur)) {
        switch (valeur) {
            case '67':
                ecran.textContent = "";
                break;
            case '187':
                const calcul = eval(ecran.textContent)
                ecran.textContent = calcul
                break;
            default:
                const indexKeycode = listkeycode.indexOf(valeur)
                const touche = touches[indexKeycode]
                ecran.textContent += touche.innerHTML
        }
    }
}
window.addEventListener('error', (e) => console.log(e))