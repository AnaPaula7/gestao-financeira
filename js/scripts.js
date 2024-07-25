

//script para mostrar que uma mensagem de alerta quando um botão é clicado
document.addEventListener('DOMContentLoaded', function() {
    const alertButtons = document.querySelectorAll('.btn-primary');

    alertButtons.forEach(button => {
        button.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Esta é uma funcionalidade em desenvolvimento.');
        });
    });
});

//Aplicar efeito de zoom nas seções ao rolar a página
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    const homeSection = document.querySelector('#home');

    const observerOptions = { //a função de callback será chamada quando 50% do elemento estiver visível na janela de visualização.
        threshold: 0.5
    };

    const observerCallback = (entries) => { //Define a função de callback para o IntersectionObserver. Esta função é chamada sempre que os elementos observados entram ou saem da janela de visualização.
        entries.forEach(entry => { //Itera sobre cada entrada (elemento observado) fornecida pelo IntersectionObserver
        if (entry.isIntersecting && entry.target !== homeSection) { //Verifica se o elemento está intersectando (visível) na janela de visualização e é diferente do home.
            entry.target.classList.add('zoom-in'); //Adiciona a classe zoom-in ao elemento visível, aplicando o efeito de zoom.
        } else {
            entry.target.classList.remove('zoom-in'); //Se o elemento não estiver visível, remove a classe zoom-in
        }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions); //Cria uma nova instância de IntersectionObserver com a função de callback e as opções fornecidas

    sections.forEach(section => { //Itera sobre cada elemento section
        if (section !== homeSection) {
            section.classList.add('zoom'); //Adiciona a classe zoom a cada seção, configurando-a para a transição.
            observer.observe(section); // Inicia a observação de cada seção, de modo que o IntersectionObserver começará a chamar a função de callback quando as seções entrarem ou saírem da janela de visualização.
        }
    });
  });