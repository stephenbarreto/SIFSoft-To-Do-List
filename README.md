# SIFSoft To-Do List

![To-Do List Screenshot](screenshot.png)

## Descrição

O SIFSoft To-Do List é uma aplicação simples de lista de tarefas que permite aos usuários adicionar, gerenciar e marcar tarefas como concluídas. É uma ferramenta útil para ajudar a organizar seu trabalho e manter o controle de suas tarefas diárias.

## Uso

- Digite uma tarefa na caixa de entrada.
- Clique no botão "Adicionar" para adicionar a tarefa à lista.
- Para marcar uma tarefa como concluída, clique nela.
- Para excluir uma tarefa, clique no botão "Excluir" ao lado dela.

## Instalação e Requisitos

Não é necessário instalação. Basta abrir o arquivo `index.html` em um navegador da web.

Contribuição
Contribuições são bem-vindas! Por favor, siga as diretrizes de contribuição.

Licença
Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para obter detalhes.

Contato
Se você tiver alguma dúvida ou precisar de ajuda, entre em contato conosco em seu-email@example.com.

## Persistência de Dados
Os dados da lista de tarefas são persistentes graças ao uso do armazenamento local (LocalStorage) do navegador. Isso permite que os dados permaneçam disponíveis mesmo após fechar a página ou reiniciar o navegador. O código JavaScript no projeto cuida do armazenamento e recuperação dos dados no LocalStorage.

### Para salvar dados no LocalStorage:
localStorage.setItem('tarefasData', JSON.stringify(savedData));

### Para recuperar dados do LocalStorage:
var savedData = JSON.parse(localStorage.getItem('tarefasData')) || { tarefas: [], concluidas: [] };

Lembre-se de que o LocalStorage tem limitações de espaço de armazenamento e não sincroniza dados entre dispositivos.
