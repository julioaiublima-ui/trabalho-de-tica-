# Privacidade em Ação

Portal web informativo sobre os direitos previstos na Lei Geral de Proteção de
Dados (LGPD). O projeto é uma página estática feita apenas com HTML, CSS e
JavaScript.

## Como ativar o projeto

### Opção 1: abrir diretamente no navegador

1. Baixe ou clone este repositório.
2. Abra o arquivo `index.html` no navegador.

Essa opção é suficiente para visualizar a página e testar o formulário e o
acompanhamento de protocolo no próprio navegador.

### Opção 2: usar um servidor local

Usar um servidor local é recomendado para uma experiência mais próxima de um
ambiente real. No terminal, dentro da pasta do projeto, execute:

```bash
python3 -m http.server 8000
```

Depois, acesse <http://localhost:8000> no navegador. Para encerrar o servidor,
pressione `Ctrl+C` no terminal.

### Opção 3: usar o Live Server no VS Code

1. Abra a pasta do projeto no VS Code.
2. Instale a extensão **Live Server** (por exemplo, a extensão de Ritwick Dey).
3. Clique com o botão direito em `index.html`.
4. Selecione **Open with Live Server**.

O navegador será aberto automaticamente com a aplicação.

## Funcionalidades

- Navegação entre as seções de direitos, solicitação, acompanhamento e cartilha.
- Formulário de solicitação com geração de protocolo simulado.
- Consulta de protocolo com retorno de status simulado.
- Menu responsivo para telas menores.
- Layout adaptável para desktop e dispositivos móveis.

> Os formulários funcionam apenas no navegador e não enviam dados para um
> servidor ou banco de dados.

## Estrutura do projeto

```text
.
├── index.html   # Estrutura e conteúdo da página
├── styles.css   # Estilos, layout e responsividade
├── script.js    # Interações do menu e dos formulários
└── README.md    # Instruções do projeto
```
