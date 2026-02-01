/**
 * ================================
 * IMOBILIÁRIA SANTOS - JavaScript
 * ================================
 * Arquivo de scripts para interatividade
 * Desenvolvido com foco em UX melhorada
 * ================================
 */

// ================================
// SEÇÃO 1: INICIALIZAÇÃO DO DOCUMENTO
// Executa quando o DOM está completamente carregado
// ================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('Página Imobiliária Santos carregada com sucesso!');
    
    // Inicializa funcionalidades
    initializeNavbar();
    initializeScrollAnimations();
    initializeFormValidation();
    initializeSmoothScroll();
});

// ================================
// SEÇÃO 2: BARRA DE NAVEGAÇÃO (NAVBAR)
// Menu hambúrguer minimalista e efeito ghost
// ================================

function initializeNavbar() {
    console.log('Inicializando navbar minimalista...');
    
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navbar = document.querySelector('.navbar');
    
    // Toggle do menu hambúrguer ao clicar
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Efeito Ghost navbar - muda de transparente para branco ao rolar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ================================
// SEÇÃO 3: ANIMAÇÕES DE SCROLL
// Detecta quando elementos entram na viewport
// ================================

function initializeScrollAnimations() {
    console.log('Inicializando animações de scroll...');
    
    // Cria um Intersection Observer para detectar elementos visíveis
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    });
    
    // Seleciona elementos com classe 'animate-on-scroll'
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => observer.observe(element));
}

// ================================
// SEÇÃO 4: VALIDAÇÃO DE FORMULÁRIO
// Valida dados antes do envio
// ================================

function initializeFormValidation() {
    console.log('Inicializando validação de formulário...');
    
    // Placeholder para futura validação de formulários
    // Pode ser expandido com regras de validação específicas
}

// ================================
// SEÇÃO 5: SCROLL SUAVE (SMOOTH SCROLL)
// Navegação suave entre seções
// ================================

function initializeSmoothScroll() {
    console.log('Inicializando scroll suave...');
    
    // Seleciona todos os links que começam com '#'
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Scroll suave até o elemento
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ================================
// SEÇÃO 5: FUNÇÕES UTILITÁRIAS
// Funções auxiliares reutilizáveis
// ================================

/**
 * Função: mostrarMensagem
 * Descrição: Exibe uma mensagem no console
 * Parâmetro: mensagem (string)
 */
function mostrarMensagem(mensagem) {
    console.log('📢 Mensagem: ' + mensagem);
}

/**
 * Função: adicionarClasse
 * Descrição: Adiciona classe CSS a um elemento
 * Parâmetros: elemento (DOM), classe (string)
 */
function adicionarClasse(elemento, classe) {
    if (elemento) {
        elemento.classList.add(classe);
        console.log('Classe adicionada: ' + classe);
    }
}

/**
 * Função: removerClasse
 * Descrição: Remove classe CSS de um elemento
 * Parâmetros: elemento (DOM), classe (string)
 */
function removerClasse(elemento, classe) {
    if (elemento) {
        elemento.classList.remove(classe);
        console.log('Classe removida: ' + classe);
    }
}

// ================================
// SEÇÃO 6: EVENTOS PERSONALIZADOS
// Listeners para interações do usuário
// ================================

/**
 * Evento: Clique em Corretores
 * Descrição: Pode ser usado para exibir mais informações
 */
const corretores = document.querySelectorAll('.corretor');
corretores.forEach(corretor => {
    corretor.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    corretor.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ================================
// SEÇÃO 7: COMPATIBILIDADE E FALLBACKS
// Tratamento de erros e navegadores antigos
// ================================

// Verifica suporte a Intersection Observer
if (!('IntersectionObserver' in window)) {
    console.warn('Intersection Observer não suportado neste navegador');
}

// ================================
// FIM DO ARQUIVO JAVASCRIPT
// ================================

