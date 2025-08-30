Controle de Notas - Aplicativo Web
Esta é uma ferramenta web para auxiliar estudantes no acompanhamento de suas notas escolares ao longo do ano letivo. Ela permite o cálculo automático de médias trimestrais e anuais, considerando recuperações, e oferece a possibilidade de ser instalada como um aplicativo no celular para acesso offline.
✨ Funcionalidades
Tabela Dinâmica: Adicione e remova disciplinas conforme sua necessidade.
Cálculo Automático: As médias (AP, NP, NT, Média Final) são calculadas instantaneamente conforme você insere as notas.
Sugestão de Notas: A planilha exibe como placeholder as notas mínimas necessárias para alcançar a média de aprovação.
Persistência de Dados: Suas notas ficam salvas no navegador, mesmo que você feche a aba.
Exportação e Importação: Salve um backup das suas notas em um arquivo .json ou carregue dados de um arquivo.
Gerar PDF: Crie um relatório em PDF com o boletim e um resumo do desempenho.
Instalável (PWA): Adicione a ferramenta à tela inicial do seu celular para usá-la como um aplicativo, com acesso offline.
🚀 Como Instalar no Celular (Android)
Para transformar esta ferramenta em um aplicativo no seu celular, siga os passos abaixo:
1. Arquivos Necessários
Certifique-se de que você tem os três arquivos do projeto na mesma pasta:
index.html (A aplicação principal)
manifest.json (Arquivo de configuração do aplicativo)
service-worker.js (Arquivo que permite o funcionamento offline)
2. Hospedagem Online
O aplicativo precisa ser hospedado em um servidor web. Não é possível instalá-lo apenas abrindo o arquivo index.html localmente.
Você pode usar serviços de hospedagem gratuitos e fáceis de usar, como:
GitHub Pages
Netlify
Vercel
Basta fazer o upload dos três arquivos para um desses serviços.
3. Instalação no Dispositivo
Após hospedar os arquivos, acesse o link do seu site (ex: https://seusite.netlify.app) usando o navegador Google Chrome no seu celular Android.
O navegador irá detectar que o site é um "Aplicativo Web Instalável" e mostrará uma notificação ou um ícone no menu.
Toque na opção "Adicionar à tela inicial" ou "Instalar aplicativo".
Pronto! Um ícone para o Controle de Notas aparecerá na sua tela inicial, e você poderá usá-lo como qualquer outro aplicativo.
