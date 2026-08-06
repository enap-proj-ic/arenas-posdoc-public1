const products = [
  {id:'e1',code:'E1 · PAPER 1',title:'A materialidade negligenciada',subtitle:'Gap paper bibliométrico',category:'principal',categoryLabel:'Linha principal',status:'Apresentação confirmada · ENAJUS 2026',statusGroup:'available',accent:'#c1782b',summary:'Mapeia em que extensão o espaço físico aparece como variável analítica ativa na literatura de implementação e street-level bureaucracy.',question:'Em que extensão e de que forma o espaço físico dos pontos de serviço público aparece como variável analítica ativa na literatura de implementação de políticas?',methodology:['Scoping review bibliométrica orientada pelo PRISMA-ScR.','Construção de um denominador da literatura de implementação e de um numerador ARENAS-core.','Deduplicação e análise bibliométrica multibase.','Testes de dispersão terminológica, institucional e intelectual.'],expected:'Artigo que quantifique e caracterize a lacuna e identifique vocabulários e trabalhos de ponte.',evidence:'Protocolo e corpus em consolidação; o Paper 1 será apresentado no ENAJUS 2026.',role:'Documentar empiricamente a lacuna que justifica o programa.',outputs:['Manuscrito científico','Corpus deduplicado','Mapas bibliométricos','Bridge papers'],tags:['PRISMA-ScR','bibliometria','implementação']},
  {id:'e2',code:'E2',title:'Entre campos dispersos',subtitle:'Mapa integrativo de evidências',category:'principal',categoryLabel:'Linha principal',status:'Em fechamento',statusGroup:'active',accent:'#2f6f73',summary:'Organiza evidências sobre como conformações espaciais medeiam a entrega de serviços públicos.',question:'O que a literatura empírica dispersa sabe sobre como conformações espaciais organizam, medeiam e legitimam a entrega de políticas públicas?',methodology:['Revisão sistemática integrativa conforme PRISMA 2021.','Síntese narrativa orientada pelo SWiM.','Busca multibase em quatro campos.','Codificação pelas famílias ARENAS e contextos de copresença.'],expected:'Mapa de evidências, matriz de estudos, fluxograma PRISMA e síntese dos mecanismos.',evidence:'Pipeline implantada e validada; triagem final depende de revisão humana.',role:'Ponte entre a demonstração da lacuna e o paper fundador.',outputs:['Evidence map','Matriz de extração','Síntese PRISMA/SWiM','Padrões por mecanismo'],tags:['PRISMA 2021','SWiM','evidence map']},
  {id:'e3',code:'E3',title:'Framework ARENAS',subtitle:'Paper fundador',category:'principal',categoryLabel:'Linha principal',status:'Em construção',statusGroup:'active',accent:'#0f2538',summary:'Formula o prédio público em uso como unidade sociomaterial de implementação.',question:'Como investigar a participação dos prédios públicos em uso na implementação de políticas públicas?',methodology:['Paper teórico-programático.','Síntese de E1, E2, sociomaterialidade, política judiciária e governança predial.','Cinco mecanismos e proposições empiricamente testáveis.','Materialismo sociomaterial moderado.'],expected:'Paper fundador com unidade de análise, mecanismos, proposições e agenda futura.',evidence:'Primeira versão em construção, com matriz dos mecanismos e inputs registrados.',role:'Consolidar a contribuição teórica central do pós-doutorado.',outputs:['Paper fundador','Cinco proposições','Matriz dos mecanismos','Agenda empírica'],tags:['framework','sociomaterialidade','teoria']},
  {id:'enajus',code:'ENAJUS 2026',title:'Governança predial sociomaterial',subtitle:'Ensaio teórico setorial',category:'apoio',categoryLabel:'Estudo de apoio',status:'Submetido',statusGroup:'available',accent:'#31526a',summary:'Ensaio sobre edifícios judiciais no contexto da justiça híbrida.',question:'Como a governança dos edifícios judiciais pode incorporar espaço, tecnologias, normas, profissionais e usuários?',methodology:['Ensaio teórico duplo-cego.','Integração entre governança predial, implementação e justiça híbrida.','Cinco proposições empiricamente testáveis.'],expected:'Artigo setorial que funcione como ponte judicial para os mecanismos ARENAS.',evidence:'Manuscrito, resumo expandido e figura conceitual concluídos.',role:'Oferecer um caso programático no campo judicial.',outputs:['Manuscrito','Resumo expandido','Figura conceitual','Proposições'],tags:['governança','Judiciário','ensaio']},
  {id:'sm',code:'SM',title:'Cartografia da sociomaterialidade',subtitle:'Base teórica multibase',category:'apoio',categoryLabel:'Estudo de apoio',status:'Em andamento',statusGroup:'active',accent:'#2f6f73',summary:'Mapeia o campo da sociomaterialidade e sua ponte com implementação e espaço.',question:'Como o campo da sociomaterialidade se organiza e onde estão suas conexões com implementação e infraestrutura?',methodology:['Mapeamento bibliométrico multibase.','Três anéis: CORE_SM, ADJ_SM e BRIDGE_ARENAS.','Análises de redes e trabalhos de ponte.'],expected:'Cartografia bibliométrica e base conceitual para o E3.',evidence:'Pipeline implementada; coleta completa depende de acesso às APIs.',role:'Fornecer a base teórica sociomaterial.',outputs:['Manuscrito','Mapa de anéis','Redes de citação','Bridge papers'],tags:['bibliometria','STS','ANT']},
  {id:'jud',code:'JUD',title:'Política judiciária',subtitle:'Bibliometria setorial',category:'apoio',categoryLabel:'Estudo de apoio',status:'Relatório completo',statusGroup:'available',accent:'#4a5058',summary:'Documenta a ausência da materialidade física na literatura de política judiciária.',question:'Em que medida a infraestrutura física aparece na literatura de política e administração judiciária?',methodology:['Bibliometria setorial.','Análise de termos e estruturas temáticas.','Delimitação de anéis nuclear e estendido.'],expected:'Artigo autônomo e evidência setorial para o E2.',evidence:'Relatório completo, aguardando revisão.',role:'Demonstrar a lacuna no campo da administração da justiça.',outputs:['Relatório','Artigo setorial','Evidência para E2','Pipeline'],tags:['Justiça','política judiciária','bibliometria']},
  {id:'prof',code:'ARENAS-PROF',title:'Escala dos profissionais',subtitle:'Trabalho mediado pelo espaço',category:'instrumento',categoryLabel:'Instrumento',status:'Validação planejada',statusGroup:'planned',accent:'#7352ad',summary:'Escala para captar como profissionais percebem reconhecimento, funcionalidade e acesso.',question:'Como profissionais de linha de frente percebem o papel dos arranjos espaciais no trabalho?',methodology:['30 itens em escala Likert.','Reconhecimento, funcionalidade e acesso.','Reancoragem sociomaterial.','AFE, AFC e validação multi-setorial.'],expected:'Escala validada, manual e documentação psicométrica.',evidence:'Instrumento definido; piloto anterior serve como base preliminar.',role:'Testar mecanismos de mediação do trabalho.',outputs:['Escala validada','Manual','Validade e confiabilidade','Estudos multi-setoriais'],tags:['psicometria','Likert','profissionais']},
  {id:'cid',code:'ARENAS-CID',title:'Escala dos cidadãos',subtitle:'Experiência nos serviços públicos',category:'instrumento',categoryLabel:'Instrumento',status:'Pool a validar',statusGroup:'planned',accent:'#7352ad',summary:'Mede orientação, dignidade, acolhimento, barreiras e clareza de fluxo.',question:'Como o cidadão percebe a experiência espacial ao acessar serviços públicos?',methodology:['Pool de 30 itens.','Seis dimensões de experiência.','Pré-teste cognitivo.','Validação psicométrica e invariância.'],expected:'Escala validada para avaliar experiência cidadã e legibilidade institucional.',evidence:'Pool definido; pré-teste e validação pendentes.',role:'Criar uma medida comparável da experiência do usuário.',outputs:['Escala validada','Pré-teste cognitivo','Manual','Invariância'],tags:['cidadãos','experiência','acesso']},
  {id:'metodo',code:'ARENAS-MÉTODO',title:'Ler e redesenhar prédios públicos',subtitle:'Checklist e conhecimento aplicado',category:'instrumento',categoryLabel:'Ferramenta aplicada',status:'Protótipo aberto',statusGroup:'available',accent:'#2f6f73',summary:'Transforma os mecanismos em lentes para diagnóstico, decisão e aprendizagem.',question:'Como tornar o framework acionável por gestores públicos?',methodology:['Mnemônico ARENAS.','Cinco lentes mais integração sociomaterial.','Checklist e ontologia leve.','Ciclo de observação, diagnóstico, redesenho, avaliação e aprendizagem.'],expected:'Ferramenta prática para decisões sobre reformas, serviços e gestão predial.',evidence:'Checklist, ontologia, cartas e guia de oficina em protótipo.',role:'Converter teoria em capacidade de diagnóstico e redesenho.',outputs:['Checklist','Ontologia','Fluxo de aplicação','Caso de referência'],tags:['gestão','checklist','diagnóstico']},
  {id:'oficina',code:'ARENAS-OFICINA',title:'Baralho de diagnóstico e co-design',subtitle:'24 cartas e guia de facilitação',category:'instrumento',categoryLabel:'Ferramenta aplicada',status:'Protótipo aberto',statusGroup:'available',accent:'#2f6f73',summary:'Estrutura oficinas participativas de leitura e redesenho.',question:'Como facilitar diagnósticos coletivos que incluam profissionais, usuários e gestores?',methodology:['24 cartas.','Referência, diagnóstico, exemplo e redesenho.','Dinâmica de divergência e convergência.','Guia de facilitação e orientações éticas.'],expected:'Kit replicável para diagnóstico compartilhado e backlog de intervenção.',evidence:'Cartas e guia integram o protótipo atual.',role:'Criar uma interface participativa entre framework e conhecimento local.',outputs:['Baralho','Guia de oficina','Registro de diagnóstico','Backlog'],tags:['oficina','co-design','cartas']},
  {id:'livro',code:'LIVRO ARENAS',title:'Prédios Públicos como Arenas Sociomateriais',subtitle:'Síntese do programa',category:'sintese',categoryLabel:'Síntese e disseminação',status:'Planejado',statusGroup:'planned',accent:'#c1782b',summary:'Integra lacuna, evidências, framework, instrumentos e agenda em uma obra de síntese.',question:'Como consolidar a contribuição teórica, metodológica e aplicada do programa?',methodology:['Síntese progressiva dos artigos.','Quatro partes e nove capítulos.','Programa empírico e agenda de cinco anos.'],expected:'Livro acadêmico-aplicado em português e proposta internacional.',evidence:'Arquitetura editorial e editoras-alvo definidas.',role:'Reunir o pós-doutorado em uma obra de formação e agenda futura.',outputs:['Livro em português','Proposta internacional','Casos e protocolos','Agenda futura'],tags:['livro','síntese','agenda']}
];

const grid = document.querySelector('#product-grid');
const emptyState = document.querySelector('#empty-state');
const searchInput = document.querySelector('#product-search');
const statusFilter = document.querySelector('#status-filter');
const filterButtons = [...document.querySelectorAll('[data-filter]')];
const dialog = document.querySelector('#product-dialog');
const dialogContent = document.querySelector('#dialog-content');
const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');
let activeFilter = 'all';
let lastFocusedElement = null;

const escapeHtml = (value = '') => String(value)
  .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;').replaceAll("'", '&#039;');

function renderProducts() {
  const term = searchInput.value.trim().toLocaleLowerCase('pt-BR');
  const status = statusFilter.value;
  const filtered = products.filter((product) => {
    const categoryMatch = activeFilter === 'all' || product.category === activeFilter;
    const statusMatch = status === 'all' || product.statusGroup === status;
    const haystack = [product.code, product.title, product.subtitle, product.summary, product.tags.join(' '), product.methodology.join(' ')].join(' ').toLocaleLowerCase('pt-BR');
    return categoryMatch && statusMatch && (!term || haystack.includes(term));
  });
  grid.innerHTML = filtered.map((product) => `
    <article class="product-card" style="--accent:${escapeHtml(product.accent)}">
      <div class="product-card-header"><span class="product-code">${escapeHtml(product.code)}</span><span class="product-status">${escapeHtml(product.status)}</span></div>
      <h3>${escapeHtml(product.title)}</h3>
      <p>${escapeHtml(product.summary)}</p>
      <div class="product-tags">${product.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join('')}</div>
      <div class="product-card-actions"><button class="button" type="button" data-open-product="${escapeHtml(product.id)}">Explorar produto</button></div>
    </article>`).join('');
  emptyState.hidden = filtered.length > 0;
}

function openProduct(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;
  lastFocusedElement = document.activeElement;
  dialogContent.innerHTML = `
    <div class="dialog-meta"><span>${escapeHtml(product.code)}</span><span>${escapeHtml(product.categoryLabel)}</span><span>${escapeHtml(product.status)}</span></div>
    <h2 class="dialog-title" id="dialog-title">${escapeHtml(product.title)}</h2>
    <p class="dialog-summary">${escapeHtml(product.summary)}</p>
    <div class="dialog-grid">
      <section class="dialog-section is-wide"><h3>Pergunta ou objetivo central</h3><p>${escapeHtml(product.question)}</p></section>
      <section class="dialog-section"><h3>Metodologia</h3><ul>${product.methodology.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></section>
      <section class="dialog-section"><h3>Produto esperado</h3><p>${escapeHtml(product.expected)}</p><h3>Entregáveis</h3><ul>${product.outputs.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></section>
      <section class="dialog-section"><h3>Etapa atual</h3><p>${escapeHtml(product.evidence)}</p></section>
      <section class="dialog-section"><h3>Função no programa</h3><p>${escapeHtml(product.role)}</p></section>
    </div>
    <div class="dialog-links"><button class="button button-dark" type="button" data-close-dialog>Fechar</button></div>`;
  dialog.showModal();
  dialog.querySelector('.dialog-close')?.focus();
}

function closeDialog() {
  if (dialog.open) dialog.close();
  lastFocusedElement?.focus();
}

filterButtons.forEach((button) => button.addEventListener('click', () => {
  activeFilter = button.dataset.filter;
  filterButtons.forEach((item) => item.classList.toggle('is-active', item === button));
  renderProducts();
}));
searchInput.addEventListener('input', renderProducts);
statusFilter.addEventListener('change', renderProducts);

document.addEventListener('click', (event) => {
  const productButton = event.target.closest('[data-open-product]');
  if (productButton) openProduct(productButton.dataset.openProduct);
  if (event.target.closest('[data-close-dialog]')) closeDialog();
});
dialog.addEventListener('click', (event) => { if (event.target === dialog) closeDialog(); });

menuToggle.addEventListener('click', () => {
  const open = siteNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});
siteNav.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    siteNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
  }
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 980) {
    siteNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});

renderProducts();
