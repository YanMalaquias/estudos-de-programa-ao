# 🏠 Imobiliária Santos - Landing Page

## Descrição do Projeto

Este é um projeto educacional que reproduz uma landing page de uma imobiliária chamada **Imobiliária Santos**. O projeto foi desenvolvido com **HTML puro**, **CSS puro** e **JavaScript**, seguindo a filosofia do **"Vibe Coding"** — utilizando IA para gerar e otimizar código.

O objetivo principal é aprender como estruturar uma página web através de:
- **HTML**: Estrutura e conteúdo
- **CSS**: Estilização e layout
- **JavaScript**: Interatividade (opcional)

---

## 📁 Estrutura de Pastas

```
imobiliaria-santos/
├── index.html          # Arquivo principal da página
├── css/
│   └── style.css       # Estilos e layout
├── js/
│   └── script.js       # Scripts e interatividade
├── img/                # Pasta para imagens (vazia por enquanto)
└── README.md           # Este arquivo
```

---

## 🎯 Seções da Página

### 0️⃣ **Barra de Navegação** (`.navbar`)
- **Design minimalista e discreto**
- Logo simplificado: "Santos"
- Menu com 5 itens essenciais
- **Efeito Ghost Navbar**: Azul ao rolar a página
- Menu hambúrguer funcional para mobile
- Fontes finas e elegantes (font-weight: 300)
- Espaçamento azul generoso
- Microinterações suaves (hover com linha)

### 1️⃣ **Cabeçalho** (`.secao-topo`)
- Logo/Título: "Imobiliária Santos"
- Slogan: "Sua confiança é nosso compromisso"
- Fundo azul corporativo

### 2️⃣ **Banner Principal** (`.secao-banner`)
- Imagem de destaque profissional
- Gradiente azul com barras amarelas decorativas
- Textos de apresentação e CTA
- Responsivo (adapta-se a qualquer tamanho)

### 3️⃣ **Sobre Nós** (`.sobre`)
- Apresentação da empresa
- Descrição de experiência e valores

### 4️⃣ **Serviços** (`.servicos`)
- Lista de serviços oferecidos:
  - Venda de imóveis
  - Aluguel de imóveis
  - Financiamento imobiliário
  - Consultoria imobiliária

### 5️⃣ **Corretores** (`.corretores`)
- Cards com informações dos profissionais
- Foto, nome e especialidade de cada corretor
- Layout flexível

### 6️⃣ **Contato e Mapa** (`.contato`)
- Informações de contato (telefone, email, endereço)
- Mapa Google Maps incorporado
- Texto centralizado

---

## 🎨 Personalizações Realizadas

### ✏️ Alterações em HTML
- **Navbar minimalista**: Logo simplificado ("Santos"), 5 itens de menu
- **IDs em seções**: Para navegação suave (#inicio, #sobre, #servicos, #corretores, #contato)
- **Menu hambúrguer**: Integrado e funcional

### ✏️ Alterações em CSS
- **Navbar discreto**: Fundo azul generoso (#0066cc) com espaçamento elegante
- **Efeito Ghost Navbar**: Muda de cor ao rolar a página (classe `.scrolled`)
- **Tipografia fina**: Font-weight 300 para elegância minimalista
- **Cores corporativas**: Azul (#0066cc) + branco + amarelo (#feca57) no hover
- **Microinterações**: Linhas finas abaixo dos links ao passar o mouse
- **Links**: Cor vermelha para destaque
- **Footer**: Centralizado com flexbox
- **Seção Contato**: Texto centralizado
- **Imagens**: Banner profissional com gradiente

### ✏️ Alterações em JavaScript
- **Menu hambúrguer funcional**: Toggle ao clicar
- **Efeito scroll detector**: Detecta quando rolar e ativa `.scrolled`
- **Fechamento automático**: Menu fecha ao clicar em um link
- **Scroll suave**: Navegação entre seções com transição fluida

### 📝 Comentários Adicionados
- Comentários em **HTML**: Identificação de cada seção
- Comentários em **CSS**: 11 seções bem organizadas incluindo navbar
- Comentários em **JavaScript**: 7 seções com funções documentadas

---

## � Funcionalidades da Navbar

### 🎯 Navbar Minimalista
- **Posição fixa**: Permanece no topo ao rolar
- **Background azul generoso**: #0066cc com transições suaves
- **Efeito Ghost**: Muda de cor ao rolar (classe `.scrolled`)
- **Tipografia elegante**: Maiúsculas, espaçamento, peso 300
- **Menu hambúrguer**: Funcional em mobile

### 🔄 Interações
- **Hover nos links**: Linha fina branca/amarela surge embaixo
- **Menu hambúrguer**: Se transforma em X ao abrir
- **Scroll suave**: Navegação entre seções com efeito smooth
- **Responsivo**: Adapta-se perfeitamente a mobile

### 📱 Mobile
- Menu hambúrguer discreto (3 linhas)
- Menu lateral escuro ao abrir
- Layout vertical de itens
- Touch-friendly

---

## 💡 Princípios de Menu Discreto Aplicados

1. **Poucos Itens**: Apenas 5 opções essenciais (Início, Sobre, Serviços, Equipe, Contato)
2. **Tipografia Fina**: Font-weight 300 para elegância minimalista
3. **Microinterações**: Efeitos hover sutis sem exagero visual
4. **Espaço Azul Generoso**: Amplo uso de espaçamento com tema corporativo
5. **Sem Distrações**: Sem botões CTA destacados, foco no conteúdo
6. **Ghost Effect**: Navbar muda ao interagir, não distrai inicialmente

---

## 🚀 Como Usar

1. Navegue até a pasta `imobiliaria-santos/`
2. Abra o arquivo `index.html` em um navegador web (clique duplo ou arraste para o navegador)

### Editar a Página

1. **Para alterar conteúdo**: Edite o arquivo `index.html`
2. **Para alterar estilos**: Edite o arquivo `css/style.css`
3. **Para adicionar interatividade**: Edite o arquivo `js/script.js`

### Adicionar Imagens

1. Coloque as imagens na pasta `img/`
2. Altere os caminhos em `index.html`:
   ```html
   <img src="img/banner.jpg" alt="Banner principal">
   ```

---

## 💡 Conceitos Aprendidos

### HTML
- Estrutura semântica com tags (`<h1>`, `<p>`, `<img>`, `<a>`, `<iframe>`)
- Organização em seções com `<div class="...">`
- Incorporação de iframes (Google Maps)

### CSS
- Seletores por classe (`.classe`)
- Propriedades de cor, tamanho, espaçamento
- Layout com Flexbox
- Media queries para responsividade
- Variações de cores corporativas

### JavaScript
- Event listeners (clique, hover)
- Intersection Observer para animações
- Smooth scroll
- Validação de formulários

---

## 🎯 Próximos Passos

- [ ] Adicionar imagens reais à pasta `img/`
- [ ] Criar um formulário de contato funcional
- [ ] Adicionar animações ao scroll
- [ ] Melhorar responsividade para mobile
- [ ] Implementar um menu de navegação
- [ ] Adicionar página de detalhes dos imóveis

---

## 🔗 Conexão entre Arquivos

```
index.html
  ├── Link CSS: <link rel="stylesheet" href="css/style.css">
  └── Link JS: <script src="js/script.js"></script>

css/style.css
  └── Estiliza as classes definidas em index.html

js/script.js
  └── Adiciona interatividade aos elementos do HTML
```

---

## 📋 Comentários no Código

### HTML - Cada seção tem um bloco de comentário:
```html
<!-- ================================
     SEÇÃO 1: CABEÇALHO (secao-topo)
     Contém: Logo/Título e slogan
     ================================ -->
```

### CSS - Cada seção tem um bloco de comentário:
```css
/* ================================
   SEÇÃO 1: RESET E ESTILOS GLOBAIS
   Remove margens padrão e define fonte geral
   ================================ */
```

### JavaScript - Funções documentadas com JSDoc:
```javascript
/**
 * Função: mostrarMensagem
 * Descrição: Exibe uma mensagem no console
 * Parâmetro: mensagem (string)
 */
```

---

## 🎨 Paleta de Cores

| Cor | Código | Uso |
|-----|--------|-----|
| Azul Corporativo | `#0066cc` | Cabeçalho, títulos, rodapé |
| Branco | `#ffffff` | Fundo, texto em áreas coloridas |
| Cinza Claro | `#f9f9f9` | Fundo alternado de seções |
| Cinza Escuro | `#333333` | Texto principal |
| Azul Claro | `#e6f0ff` | Fundo de itens de serviços |
| Cinza Médio | `#666666` | Texto secundário |
| Vermelho | `#ff0000` | Links |

---

## 📱 Responsividade

A página possui media queries para adaptar-se a telas menores:

```css
@media (max-width: 768px) {
    /* Cards de corretores em coluna */
    /* Títulos menores */
    /* Layouts ajustados */
}
```

---

## ✨ Filosofia "Vibe Coding"

Este projeto segue o conceito de **"Vibe Coding"**, que significa:

> Usar prompts em linguagem natural para instruir a IA a gerar código HTML, CSS e JavaScript de forma eficiente, sem necessidade de ser um especialista em programação.

**Benefícios:**
- ✅ Foco em lógica e design ao invés de sintaxe
- ✅ Geração rápida de código estruturado
- ✅ Fácil manutenção e personalização
- ✅ Aprendizado prático e interativo

---

## 📚 Recursos Educacionais

Este projeto foi desenvolvido como parte de uma formação sobre:
- Reprodução de landing pages existentes
- Uso de IA para geração de código
- Entendimento de estrutura HTML/CSS
- Personalização e customização de designs

---

## 🤝 Contribuições

Para melhorar este projeto, você pode:
- Adicionar novas seções
- Implementar novas funcionalidades em JavaScript
- Melhorar o design e responsividade
- Adicionar mais comentários e documentação

---

## 📄 Licença

Este é um projeto educacional. Sinta-se livre para usar, modificar e distribuir conforme necessário para fins de aprendizado.

---

## 📞 Informações do Projeto

- **Data de Criação**: 01 de fevereiro de 2026
- **Objetivo**: Aprendizado de HTML, CSS e JavaScript
- **Nível**: Iniciante
- **Tempo Estimado**: 4-6 horas de aprendizado

---

**Desenvolvido com ❤️ usando a filosofia "Vibe Coding"**
