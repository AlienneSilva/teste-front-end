# Teste Técnico Front-End — Econverse

Projeto desenvolvido como parte do processo seletivo para a vaga de Estágio em Desenvolvimento Front-End da Econverse.

O objetivo é reproduzir uma interface de e-commerce com base no layout disponibilizado no Figma, utilizando React, TypeScript e SCSS, além de consumir uma API JSON para apresentar os produtos dinamicamente.

## Tecnologias utilizadas

- React
- TypeScript
- Vite
- Sass (SCSS)
- HTML semântico
- CSS responsivo
- Fetch API

## Funcionalidades implementadas

- Interface de e-commerce baseada no Figma.
- Cabeçalho com navegação responsiva e menu mobile.
- Banner promocional e categorias de produtos.
- Vitrines de produtos alimentadas por uma API JSON.
- Carrossel com navegação entre os produtos.
- Modal com imagem, nome, descrição e preço do produto selecionado.
- Controle de quantidade no modal.
- Banners de parceiros e seção de marcas.
- Newsletter com validação de nome, e-mail e aceite dos termos.
- Rodapé com informações institucionais e ícones de redes sociais.
- Layout adaptado para desktop e dispositivos móveis.

## API de produtos

Os produtos são carregados a partir do endpoint disponibilizado para o teste técnico:

https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json

A aplicação utiliza os dados retornados pela API para apresentar as informações dos produtos nas vitrines e no modal.

## Como executar o projeto

### Pré-requisitos

É necessário ter o Node.js e o npm instalados.

### 1. Clonar o repositório

```bash
git clone URL_DO_REPOSITORIO
cd teste-front-end
```

Substitua `URL_DO_REPOSITORIO` pelo endereço deste projeto no GitHub.

### 2. Instalar as dependências

```bash
npm install
```

### 3. Executar em ambiente de desenvolvimento

```bash
npm run dev
```

Abra no navegador o endereço informado pelo Vite, normalmente:

http://localhost:5173/

### 4. Gerar a versão de produção

```bash
npm run build
```

Os arquivos de produção serão gerados na pasta `dist`.

### 5. Visualizar a versão de produção

```bash
npm run preview
```

Abra o endereço informado no terminal.

## Como testar as funcionalidades

1. Navegue pelas vitrines utilizando as setas do carrossel.
2. Clique em COMPRAR para abrir o modal do produto selecionado.
3. Confira a imagem, a descrição e o preço.
4. Utilize os botões de quantidade e o controle de exibição dos detalhes.
5. Feche o modal pelo botão de fechar, pela tecla Esc ou clicando fora dele.
6. Teste o menu de navegação em uma tela de celular.
7. Preencha o formulário da newsletter e confira a validação dos campos obrigatórios.

## Observações

- Os dados dos produtos são obtidos do JSON fornecido para o desafio.
- O formulário da newsletter possui validação local e não realiza cadastro em um serviço externo.
- O projeto não implementa processamento de pagamentos ou finalização de pedidos.
- A interface foi desenvolvida sem bibliotecas prontas de componentes visuais.

## Referência de design

Layout fornecido no Figma:

https://www.figma.com/file/rWnzPeoxgynuNPsJjV0VmV/Teste-Front-End-Jr?node-id=0%3A1

## Autoria

**Alienne Silva**

Desenvolvido para o teste técnico de Front-End da Econverse.

GitHub: https://github.com/AlienneSilva