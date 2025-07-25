// Dados dos links - armazenados no localStorage
let dashboardData = {
    pessoal: [
        {
            title: "Gmail",
            url: "https://gmail.com",
            icon: "fas fa-envelope"
        },
        {
            title: "GitHub",
            url: "https://github.com",
            icon: "fab fa-github"
        },
        {
            title: "YouTube",
            url: "https://youtube.com",
            icon: "fab fa-youtube"
        }
    ],
    tqi: [
        {
            title: "Portal TQI",
            url: "https://tqi.com.br",
            icon: "fas fa-building"
        },
        {
            title: "Jira",
            url: "https://jira.atlassian.com",
            icon: "fab fa-jira"
        }
    ],
    pagseguro: [
        {
            title: "PagSeguro",
            url: "https://pagseguro.uol.com.br",
            icon: "fas fa-credit-card"
        },
        {
            title: "UOL",
            url: "https://uol.com.br",
            icon: "fas fa-globe"
        }
    ],
    redhat: [
        {
            title: "Red Hat",
            url: "https://redhat.com",
            icon: "fab fa-redhat"
        },
        {
            title: "OpenShift",
            url: "https://openshift.com",
            icon: "fas fa-server"
        }
    ]
};

// Variável para controlar qual tab está sendo editada
let currentEditingTab = '';

// Lista de ícones disponíveis para seleção
const availableIcons = [
    // Redes Sociais
    { class: 'fab fa-facebook', name: 'Facebook' },
    { class: 'fab fa-twitter', name: 'Twitter' },
    { class: 'fab fa-instagram', name: 'Instagram' },
    { class: 'fab fa-linkedin', name: 'LinkedIn' },
    { class: 'fab fa-youtube', name: 'YouTube' },
    { class: 'fab fa-github', name: 'GitHub' },
    { class: 'fab fa-gitlab', name: 'GitLab' },
    { class: 'fab fa-discord', name: 'Discord' },
    { class: 'fab fa-slack', name: 'Slack' },
    { class: 'fab fa-whatsapp', name: 'WhatsApp' },
    { class: 'fab fa-telegram', name: 'Telegram' },
    { class: 'fab fa-reddit', name: 'Reddit' },
    { class: 'fab fa-tiktok', name: 'TikTok' },
    
    // Trabalho e Produtividade
    { class: 'fas fa-briefcase', name: 'Trabalho' },
    { class: 'fas fa-building', name: 'Empresa' },
    { class: 'fas fa-chart-line', name: 'Análise' },
    { class: 'fas fa-tasks', name: 'Tarefas' },
    { class: 'fas fa-calendar', name: 'Calendário' },
    { class: 'fas fa-clock', name: 'Tempo' },
    { class: 'fas fa-file-alt', name: 'Documento' },
    { class: 'fas fa-folder', name: 'Pasta' },
    { class: 'fas fa-archive', name: 'Arquivo' },
    { class: 'fab fa-jira', name: 'Jira' },
    { class: 'fab fa-trello', name: 'Trello' },
    { class: 'fab fa-confluence', name: 'Confluence' },
    
    // Comunicação
    { class: 'fas fa-envelope', name: 'Email' },
    { class: 'fas fa-phone', name: 'Telefone' },
    { class: 'fas fa-comments', name: 'Chat' },
    { class: 'fas fa-video', name: 'Vídeo' },
    { class: 'fas fa-microphone', name: 'Microfone' },
    
    // Tecnologia
    { class: 'fas fa-server', name: 'Servidor' },
    { class: 'fas fa-database', name: 'Banco de Dados' },
    { class: 'fas fa-code', name: 'Código' },
    { class: 'fas fa-terminal', name: 'Terminal' },
    { class: 'fas fa-laptop', name: 'Laptop' },
    { class: 'fas fa-desktop', name: 'Desktop' },
    { class: 'fas fa-mobile-alt', name: 'Mobile' },
    { class: 'fas fa-wifi', name: 'WiFi' },
    { class: 'fas fa-cloud', name: 'Cloud' },
    { class: 'fab fa-docker', name: 'Docker' },
    { class: 'fab fa-aws', name: 'AWS' },
    { class: 'fab fa-google-cloud', name: 'Google Cloud' },
    { class: 'fab fa-microsoft', name: 'Microsoft' },
    
    // Web e Internet
    { class: 'fas fa-globe', name: 'Website' },
    { class: 'fas fa-link', name: 'Link' },
    { class: 'fas fa-search', name: 'Pesquisa' },
    { class: 'fas fa-download', name: 'Download' },
    { class: 'fas fa-upload', name: 'Upload' },
    { class: 'fas fa-share', name: 'Compartilhar' },
    { class: 'fas fa-bookmark', name: 'Favorito' },
    { class: 'fab fa-chrome', name: 'Chrome' },
    { class: 'fab fa-firefox', name: 'Firefox' },
    { class: 'fab fa-safari', name: 'Safari' },
    
    // Finanças
    { class: 'fas fa-credit-card', name: 'Cartão' },
    { class: 'fas fa-money-bill', name: 'Dinheiro' },
    { class: 'fas fa-chart-pie', name: 'Gráfico' },
    { class: 'fas fa-coins', name: 'Moedas' },
    { class: 'fas fa-piggy-bank', name: 'Poupança' },
    { class: 'fab fa-paypal', name: 'PayPal' },
    
    // Entretenimento
    { class: 'fas fa-music', name: 'Música' },
    { class: 'fas fa-film', name: 'Filme' },
    { class: 'fas fa-gamepad', name: 'Games' },
    { class: 'fas fa-book', name: 'Livro' },
    { class: 'fas fa-newspaper', name: 'Notícias' },
    { class: 'fab fa-spotify', name: 'Spotify' },
    { class: 'fab fa-netflix', name: 'Netflix' },
    { class: 'fab fa-steam', name: 'Steam' },
    
    // Utilidades
    { class: 'fas fa-home', name: 'Casa' },
    { class: 'fas fa-user', name: 'Usuário' },
    { class: 'fas fa-users', name: 'Usuários' },
    { class: 'fas fa-cog', name: 'Configuração' },
    { class: 'fas fa-tools', name: 'Ferramentas' },
    { class: 'fas fa-bell', name: 'Notificação' },
    { class: 'fas fa-star', name: 'Estrela' },
    { class: 'fas fa-heart', name: 'Coração' },
    { class: 'fas fa-thumbs-up', name: 'Like' },
    { class: 'fas fa-flag', name: 'Bandeira' },
    { class: 'fas fa-map-marker-alt', name: 'Local' },
    { class: 'fas fa-shopping-cart', name: 'Carrinho' },
    { class: 'fas fa-gift', name: 'Presente' },
    { class: 'fas fa-key', name: 'Chave' },
    { class: 'fas fa-lock', name: 'Cadeado' },
    { class: 'fas fa-shield-alt', name: 'Segurança' },
    { class: 'fas fa-fire', name: 'Fogo' },
    { class: 'fas fa-lightbulb', name: 'Ideia' },
    { class: 'fas fa-rocket', name: 'Foguete' }
];

let selectedIcon = 'fas fa-link';

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    loadData();
    setupTabSwitching();
    setupModal();
    renderAllTabs();
});

// Carregar dados do localStorage
function loadData() {
    const stored = localStorage.getItem('dashboardData');
    if (stored) {
        dashboardData = JSON.parse(stored);
    } else {
        saveData(); // Salva os dados iniciais
    }
}

// Salvar dados no localStorage
function saveData() {
    localStorage.setItem('dashboardData', JSON.stringify(dashboardData));
}

// Configurar mudança de tabs
function setupTabSwitching() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');
    const currentSection = document.getElementById('current-section');

    const tabNames = {
        'pessoal': 'Links Pessoais',
        'tqi': 'TQI',
        'pagseguro': 'PagSeguro', 
        'redhat': 'Red Hat'
    };

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class de todos os botões e panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Adiciona active class ao botão clicado
            button.classList.add('active');

            // Mostra o pane correspondente
            const targetTab = button.dataset.tab;
            document.getElementById(targetTab).classList.add('active');
            
            // Atualiza breadcrumb
            if (currentSection) {
                currentSection.textContent = tabNames[targetTab] || targetTab;
            }
        });
    });
}

// Configurar modal
function setupModal() {
    const modal = document.getElementById('addLinkModal');
    const form = document.getElementById('addLinkForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const title = document.getElementById('linkTitle').value;
        const url = document.getElementById('linkUrl').value;
        const icon = selectedIcon;

        // Adicionar o link
        dashboardData[currentEditingTab].push({
            title: title,
            url: url,
            icon: icon
        });

        saveData();
        renderTab(currentEditingTab);
        closeModal();
        form.reset();
        resetIconSelection();
    });

    // Fechar modal clicando fora dele
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Configurar icon picker
    setupIconPicker();
}

// Configurar o seletor de ícones
function setupIconPicker() {
    const iconGrid = document.getElementById('iconGrid');
    const iconSearch = document.getElementById('iconSearch');
    const selectedIconPreview = document.getElementById('selectedIconPreview');
    
    // Renderizar todos os ícones inicialmente
    renderIcons(availableIcons);
    
    // Configurar pesquisa de ícones
    if (iconSearch) {
        iconSearch.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const filteredIcons = availableIcons.filter(icon => 
                icon.name.toLowerCase().includes(searchTerm) ||
                icon.class.toLowerCase().includes(searchTerm)
            );
            renderIcons(filteredIcons);
        });
    }
}

// Renderizar ícones no grid
function renderIcons(icons) {
    const iconGrid = document.getElementById('iconGrid');
    if (!iconGrid) return;
    
    iconGrid.innerHTML = icons.map(icon => `
        <div class="icon-option ${icon.class === selectedIcon ? 'selected' : ''}" 
             onclick="selectIcon('${icon.class}', '${icon.name}')"
             title="${icon.name}">
            <i class="${icon.class}"></i>
            <span class="icon-name">${icon.name}</span>
        </div>
    `).join('');
}

// Selecionar um ícone
function selectIcon(iconClass, iconName) {
    selectedIcon = iconClass;
    
    // Atualizar preview do ícone selecionado
    const selectedIconPreview = document.getElementById('selectedIconPreview');
    if (selectedIconPreview) {
        selectedIconPreview.innerHTML = `
            <i class="${iconClass}"></i>
            <span>${iconName}</span>
        `;
    }
    
    // Atualizar seleção visual no grid
    document.querySelectorAll('.icon-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    const selectedOption = document.querySelector(`.icon-option[data-icon-class="${iconClass}"]`);
    if (selectedOption) {
        selectedOption.classList.add('selected');
    }
}

// Resetar seleção de ícone
function resetIconSelection() {
    selectedIcon = 'fas fa-link';
    const selectedIconPreview = document.getElementById('selectedIconPreview');
    if (selectedIconPreview) {
        selectedIconPreview.innerHTML = `
            <i class="fas fa-link"></i>
            <span>Link</span>
        `;
    }
    
    // Limpar pesquisa
    const iconSearch = document.getElementById('iconSearch');
    if (iconSearch) {
        iconSearch.value = '';
        renderIcons(availableIcons);
    }
}

// Renderizar todos os tabs
function renderAllTabs() {
    Object.keys(dashboardData).forEach(tab => {
        renderTab(tab);
    });
}

// Renderizar um tab específico
function renderTab(tabName) {
    const container = document.getElementById(`${tabName}-links`);
    const links = dashboardData[tabName];

    if (links.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-plus-circle"></i>
                <h3>Nenhum link adicionado</h3>
                <p>Clique em "Adicionar Link" para começar</p>
            </div>
        `;
        return;
    }

    container.innerHTML = links.map((link, index) => `
        <div class="link-card" onclick="openLink('${link.url}')">
            <button class="delete-button" onclick="event.stopPropagation(); deleteLink('${tabName}', ${index})">&times;</button>
            <i class="${validateIcon(link.icon)}"></i>
            <h3>${link.title}</h3>
            <div class="url">${getDomainFromUrl(link.url)}</div>
        </div>
    `).join('');
}

// Abrir link em nova aba
function openLink(url) {
    // Garantir que a URL tenha protocolo
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
    }
    window.open(url, '_blank');
}

// Extrair domínio da URL para exibição
function getDomainFromUrl(url) {
    try {
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'https://' + url;
        }
        return new URL(url).hostname;
    } catch (e) {
        return url;
    }
}

// Validar ícone Font Awesome
function validateIcon(iconClass) {
    // Se não fornecido ou vazio, usar ícone padrão
    if (!iconClass || iconClass.trim() === '') {
        return 'fas fa-link';
    }
    
    // Se não começa com fa-, fas-, far-, fab-, adicionar fas
    if (!iconClass.match(/^(fa|fas|far|fab|fal|fat|fad|fass|fasr|fasl|fast)-/)) {
        return `fas fa-${iconClass}`;
    }
    
    return iconClass.trim();
}

// Adicionar novo link
function addLink(tabName) {
    currentEditingTab = tabName;
    resetIconSelection();
    document.getElementById('addLinkModal').style.display = 'block';
    document.getElementById('linkTitle').focus();
}

// Fechar modal
function closeModal() {
    document.getElementById('addLinkModal').style.display = 'none';
    document.getElementById('addLinkForm').reset();
}

// Deletar link
function deleteLink(tabName, index) {
    if (confirm('Tem certeza que deseja remover este link?')) {
        dashboardData[tabName].splice(index, 1);
        saveData();
        renderTab(tabName);
    }
}

// Atalhos de teclado
document.addEventListener('keydown', function(e) {
    // ESC para fechar modal
    if (e.key === 'Escape') {
        closeModal();
    }
    
    // Ctrl/Cmd + números para trocar de tab
    if ((e.ctrlKey || e.metaKey) && e.key >= '1' && e.key <= '4') {
        e.preventDefault();
        const tabIndex = parseInt(e.key) - 1;
        const tabs = ['pessoal', 'tqi', 'pagseguro', 'redhat'];
        if (tabs[tabIndex]) {
            const button = document.querySelector(`[data-tab="${tabs[tabIndex]}"]`);
            if (button) button.click();
        }
    }
});

// Funções utilitárias para manipulação de dados
const DashboardUtils = {
    // Exportar dados
    exportData() {
        const dataStr = JSON.stringify(dashboardData, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'dashboard-backup.json';
        link.click();
        URL.revokeObjectURL(url);
    },

    // Importar dados
    importData(fileInput) {
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const importedData = JSON.parse(e.target.result);
                    if (confirm('Isso irá substituir todos os seus links atuais. Continuar?')) {
                        dashboardData = importedData;
                        saveData();
                        renderAllTabs();
                        alert('Dados importados com sucesso!');
                    }
                } catch (error) {
                    alert('Erro ao importar arquivo. Verifique se é um arquivo JSON válido.');
                }
            };
            reader.readAsText(file);
        }
    },

    // Resetar para dados padrão
    resetToDefault() {
        if (confirm('Isso irá apagar todos os seus links e restaurar os padrões. Continuar?')) {
            localStorage.removeItem('dashboardData');
            location.reload();
        }
    }
};

// Expor funções globalmente para uso no console se necessário
window.DashboardUtils = DashboardUtils;