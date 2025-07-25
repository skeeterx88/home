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
        const icon = document.getElementById('linkIcon').value;

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
    });

    // Fechar modal clicando fora dele
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
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
            <i class="${link.icon}"></i>
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

// Adicionar novo link
function addLink(tabName) {
    currentEditingTab = tabName;
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

// Funcções utilitárias para manipulação de dados
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