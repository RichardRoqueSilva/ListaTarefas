# Lista de Tarefas (To-Do List) - React Native

Este é um aplicativo simples de lista de tarefas (To-Do List) desenvolvido em React Native, utilizando Expo, TypeScript e React Navigation. Ele permite que você adicione, marque como concluída, remova e persista suas tarefas, além de consumir uma API externa para exibir uma lista inicial.

## Funcionalidades

-   **Adicionar tarefas:** Insira uma nova tarefa em um campo de texto e adicione-a à lista.
-   **Exibir tarefas:** Uma lista dinâmica que mostra as tarefas adicionadas.
-   **Marcar como concluída:** Marque/desmarque uma tarefa como concluída.
-   **Remover tarefas:** Exclua uma tarefa da lista.
-   **Persistência de dados:** As tarefas são salvas e carregadas usando AsyncStorage, garantindo que persistam entre as sessões.
-   **Estilização básica:** Interface agradável, funcional e responsiva.
-   **Consumo de API:** Integração com uma API pública (JSONPlaceholder) para exibir uma lista inicial de tarefas.
-  **Validação:** Impossibilita salvar 2 tarefas com o mesmo texto.
-  **Alerta de campo vazio:** Apresenta mensagem de alerta caso usuário tente salvar uma tarefa com campo vazio.
-  **About:** Descreve a utilidade da aplicação, de forma clara para o usuário. Dentro do About.

## Tecnologias Utilizadas

-   [React Native](https://reactnative.dev/): Framework para construir aplicativos móveis nativos com JavaScript e React.
-   [Expo](https://expo.dev/): Plataforma para desenvolvimento, construção e publicação de aplicativos React Native.
-   [TypeScript](https://www.typescriptlang.org/): Superset de JavaScript que adiciona tipagem estática.
-   [React Navigation](https://reactnavigation.org/): Biblioteca para criar navegação em aplicativos React Native.
-   [@react-native-async-storage/async-storage](https://github.com/react-native-async-storage/async-storage): Biblioteca para persistência de dados local.
-   [react-native-toast-message](https://github.com/calintamas/react-native-toast-message): Biblioteca para exibir mensagens de feedback (Toasts) na tela.
-   [JSONPlaceholder](https://jsonplaceholder.typicode.com/): API REST falsa para testes e prototipagem.

## Pré-requisitos

Antes de começar, você precisará ter instalado:

-   [Node.js](https://nodejs.org/) (versão 16 ou superior)
-   [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/) (gerenciadores de pacotes)
-   [Expo CLI](https://docs.expo.dev/get-started/installation/): `npm install -g expo-cli`
-   [Expo Go](https://expo.dev/client) instalado em seu dispositivo móvel (Android ou iOS) ou emulador

## Como Executar o Projeto

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/RichardRoqueSilva/ListaTarefas.git
    cd ListaTarefas
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

3.  **Inicie o aplicativo com Expo:**

    ```bash
    npm start
    ```

4.  **Escolha como executar o aplicativo:**

    *   **Dispositivo Móvel:**
        *   Abra o aplicativo Expo Go em seu dispositivo.
        *   Escaneie o código QR exibido no terminal ou no navegador.
    *   **Emulador (Android ou iOS):**
        *   Pressione `a` para executar no emulador Android ou `i` para executar no emulador iOS.
    *   **Navegador Web:**
        *   Pressione `w` para executar no navegador web.

## Estrutura do Projeto

ListaTarefas/
├── .expo/ # Arquivos e configurações do Expo
├── app.json # Arquivo de configuração do Expo
├── package.json # Lista de dependências e scripts do projeto
├── tsconfig.json # Configurações do TypeScript
├── README.md # Este arquivo
├── src/
│ ├── components/ # Componentes reutilizáveis
│ ├── screens/ # Telas do aplicativo
│ │ ├── AboutScreen.tsx # Tela "Sobre"
│ │ └── TodoScreen.tsx # Tela da lista de tarefas
│ ├── services/ # Serviços para consumir APIs
│ │ └── apiService.tsx # Lógica para buscar tarefas da API
│ ├── types/ # Definições de tipos TypeScript
│ │ └── task.tsx # Interface para o objeto Task
│ └── App.tsx # Importa o componente principal
│ └── index.tsx # Rota principal da aplicação e configurações de navegação
├── assets/ # Imagens, fontes e outros arquivos estáticos
├── node_modules/ # Dependências instaladas
└── ...

## Configuração

-   **API:** A URL da API (JSONPlaceholder) está definida no arquivo `src/services/apiService.tsx`.
-   **Persistência de dados:** As chaves de armazenamento do AsyncStorage estão definidas nos componentes que o utilizam (`TodoScreen.tsx`).

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests para melhorar este projeto.
