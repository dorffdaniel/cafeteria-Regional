let changeContent = document.getElementById('ChangeContent');

function atualizarConteudo (titulo, texto){
    changeContent.innerHTML=`<h2>${titulo}</h2>
    <p>${texto}</p>`;
}

let backGroundSection = document.querySelector('.conteudo-principal');

function alterarImgFundo (imagemUrl){
    backGroundSection.style.backgroundImage = `url(${imagemUrl})`
}


const homeLink= document.getElementById('home-link');
const aboutLink = document.getElementById('about-link');
const contactLink = document.getElementById('contact-link');



homeLink.addEventListener('click', (event)=>{
    event.preventDefault();
    atualizarConteudo(
        'Cafe Regional',

        'Aqui é onde a paixão por café e momentos especiais se encontram. Explore nossos sabores únicos, delicie-se com nossas criações artesanais e relaxe em um ambiente feito para você. Aproveite as novidades e deixe-nos tornar seu dia mais especial!'
    )
    alterarImgFundo('src/imagens/background.jpg')
})

aboutLink.addEventListener('click', (event)=>{
    event.preventDefault();
    atualizarConteudo(
        'Um pouco de nos',
        'uma cafetaria no mercado desde 1961, acreditamos que cada xícara conta uma história. Desde a escolha cuidadosa dos grãos até o preparo com amor, nossa missão é proporcionar uma experiência inesquecível. Somos mais do que um lugar para um café – somos um refúgio onde as pessoas se conectam, trabalham e celebram momentos importantes. Venha nos conhecer e descobrir o que torna nosso café tão especial!'
    )
    alterarImgFundo('src/imagens/imagemSobre.jpg')
})

contactLink.addEventListener('click', (event)=>{
    event.preventDefault();
    atualizarConteudo(
        'contato',
        'Visite-nos ou entre em contato: Rua do Sabor, 123, Centro. Telefone: (+351) 7070-7070'
    )

    alterarImgFundo('src/imagens/imagemLocal.jpg')
})


let cardsProdutos = document.querySelectorAll('.cards');

cardsProdutos.forEach((event)=>{
    event.addEventListener('mouseover',()=>{
        event.classList.toggle('efeitocardProdutos');
    })
})

cardsProdutos.forEach((event)=>{
    event.addEventListener('mouseout',()=>{
        event.classList.toggle('efeitocardProdutos');
    })
})

