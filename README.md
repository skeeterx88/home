# Dashboard Pessoal

Um dashboard pessoal para organizar links importantes com interface de abas.

## Funcionalidades

✅ **Interface com Abas**: Quatro abas organizadas por contexto:
- **Pessoal**: Links pessoais e redes sociais
- **TQI**: Links relacionados ao trabalho na TQI
- **PagSeguro**: Links relacionados ao PagSeguro
- **RedHat**: Links relacionados à RedHat

✅ **Gerenciamento de Links**: 
- Adicionar novos links com título, URL e ícone personalizado
- Remover links existentes
- Links abrem em nova aba
- Dados salvos localmente no navegador

✅ **Design Responsivo**: Interface adaptável para desktop e mobile

## Como Usar

### Visualizar o Dashboard
1. Abra o arquivo `index.html` em seu navegador
2. Alternativamente, inicie um servidor local:
   ```bash
   python3 -m http.server 8000
   # Acesse http://localhost:8000
   ```

### Adicionar Links
1. Clique na aba desejada (Pessoal, TQI, PagSeguro, RedHat)
2. Clique no botão "Adicionar Link"
3. Preencha:
   - **Título**: Nome do link
   - **URL**: Endereço web (ex: https://github.com)
   - **Ícone**: Classe do Font Awesome (ex: fas fa-github)
4. Clique em "Adicionar"

### Remover Links
1. Passe o mouse sobre o link que deseja remover
2. Clique no botão "×" que aparece no canto superior direito
3. Confirme a remoção

### Atalhos de Teclado
- **Ctrl/Cmd + 1-4**: Alternar entre abas
- **ESC**: Fechar modal de adicionar link

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização moderna com gradientes e animações
- **JavaScript**: Funcionalidade interativa e persistência de dados
- **Font Awesome**: Ícones vetoriais
- **LocalStorage**: Armazenamento local dos dados

## Estrutura dos Arquivos

```
├── index.html      # Página principal do dashboard
├── style.css       # Estilos e layout responsivo
├── script.js       # Lógica JavaScript e gerenciamento de dados
└── README.md       # Documentação
```

## Screenshots

### Dashboard - Aba Pessoal
![Dashboard Pessoal](https://github.com/user-attachments/assets/dd496e21-6635-4dd9-88d6-2e4bd840a500)

### Dashboard - Aba RedHat com Link Adicionado
![Dashboard RedHat](https://github.com/user-attachments/assets/fc0012ba-7b62-41f7-a954-69a11a679faf)

## Personalização

### Adicionar Novas Abas
Para adicionar uma nova aba, edite os arquivos:

1. **HTML** (`index.html`): Adicione botão na navegação e container de conteúdo
2. **JavaScript** (`script.js`): Adicione a nova categoria no objeto `dashboardData`

### Customizar Ícones
Use classes do Font Awesome 6. Exemplos:
- `fas fa-globe` - Globo
- `fab fa-github` - GitHub
- `fas fa-envelope` - Email
- `fas fa-building` - Empresa
- `fas fa-server` - Servidor

### Modificar Cores
Edite as variáveis CSS no arquivo `style.css` para personalizar o tema de cores.