"use client";

import { useState } from "react";

const geoRecords = [
  { id: "area-01", name: "  setor norte ", format: "KML", coordinates: [-46.1, -19.1] },
  { id: "area-02", name: "SETOR SUL", format: "Shapefile", coordinates: [-46.2, -19.2] },
  { id: "area-03", name: "Área sem geometria", format: "GeoJSON", coordinates: null },
];
const documents = [
  { question: "Como investigar divergência de estoque?", title: "DOC-01 · Conferência de estoque", excerpt: "Compare o saldo informado com as movimentações do período. Registre a divergência antes de solicitar ajustes.", answer: "Confira o saldo e as movimentações do período. Registre a divergência para investigação; o procedimento não autoriza alterar dados diretamente." },
  { question: "Como conferir um cadastro fiscal?", title: "DOC-02 · Revisão de cadastro", excerpt: "Confira os campos obrigatórios e encaminhe dúvidas tributárias ao responsável pela validação fiscal.", answer: "Confira os campos obrigatórios do cadastro e encaminhe dúvidas tributárias ao responsável fiscal. A documentação não define o enquadramento tributário." },
  { question: "Qual comando apaga os lançamentos?", title: "Sem documento correspondente", excerpt: "Nenhuma orientação disponível para esta solicitação.", answer: "Não há evidência na documentação fictícia para responder. A ação exige investigação e validação de um responsável técnico." },
];
const members = [
  { name: "Associado fictício A", code: "DEMO-001", status: "Em dia", history: "Junho: R$ 80,00 · confirmado (fictício)" },
  { name: "Associado fictício B", code: "DEMO-002", status: "Pendente", history: "Junho: R$ 80,00 · pendente (fictício)" },
  { name: "Associado fictício C", code: "DEMO-003", status: "Em dia", history: "Junho: R$ 80,00 · confirmado (fictício)" },
];
const tenantRecords = [
  { company: "demo-a", code: "A-001", product: "Item fictício A", stock: 12 },
  { company: "demo-a", code: "A-002", product: "Item fictício B", stock: 8 },
  { company: "demo-b", code: "B-001", product: "Item fictício C", stock: 21 },
];
const services = [
  { category: "Documentos", name: "Solicitação de documento", text: "Nesta simulação, confira os documentos necessários e consulte o canal responsável antes de iniciar a solicitação." },
  { category: "Atendimento", name: "Agendamento de atendimento", text: "Nesta simulação, escolha o assunto e confira os horários disponíveis no canal responsável. Nenhum agendamento é realizado aqui." },
];

function FarmGeoDemo() {
  const [processed, setProcessed] = useState(false);
  const valid = geoRecords.filter(record => record.coordinates !== null);
  const output = valid.map(record => ({ id: record.id, nome: record.name.trim().toLocaleLowerCase("pt-BR").replace(/(^|\s)\S/g, letter => letter.toLocaleUpperCase("pt-BR")), coordenadas: record.coordinates }));
  return <><div className="demo-toolbar"><p>Lote de exemplo · 3 registros fictícios</p><button className="button button-primary" onClick={() => setProcessed(!processed)}>{processed ? "Reiniciar demonstração" : "Processar lote fictício"}</button></div><div className="demo-columns"><div><h3>01 · Entrada</h3><ul className="demo-records">{geoRecords.map(record => <li key={record.id}><strong>{record.name}</strong><span>{record.format} · {record.coordinates ? "Coordenadas de exemplo" : "Geometria ausente"}</span></li>)}</ul></div><div aria-live="polite" aria-atomic="true"><h3>02 · Validação e saída</h3>{processed ? <><p className="demo-result">2 registros preparados · 1 separado para revisão</p><ul className="demo-records">{output.map(record => <li key={record.id}><strong>{record.nome}</strong><span>{record.id} · coordenadas preservadas</span></li>)}</ul><p className="demo-warning">area-03: geometria ausente. Registro separado para revisão, sem preencher coordenadas inventadas.</p></> : <p className="demo-empty">Execute o lote para conferir a padronização dos nomes e o tratamento de um registro incompleto.</p>}</div></div><div className="demo-map"><h3>03 · Visualização esquemática</h3><svg viewBox="0 0 500 130" role="img" aria-label={processed ? "Duas áreas fictícias preparadas para visualização" : "Áreas aguardando processamento"}><path className="map-grid" d="M0 32H500M0 65H500M0 98H500M100 0V130M200 0V130M300 0V130M400 0V130"/><path className={processed ? "map-land" : "map-pending"} d="M40 30L180 16L200 88L80 106ZM265 24L430 42L408 112L270 98Z"/></svg><p>{processed ? "Áreas fictícias Norte e Sul disponíveis no esquema. Sem localização geográfica real." : "A visualização será destacada após o processamento."}</p></div></>;
}

function KnowledgeDemo() {
  const [selected, setSelected] = useState(0);
  const document = documents[selected];
  return <><label className="demo-label" htmlFor="document-query">Pergunta de exemplo</label><select id="document-query" value={selected} onChange={event => setSelected(Number(event.target.value))}>{documents.map((doc, index) => <option value={index} key={doc.question}>{doc.question}</option>)}</select><div className="demo-columns" aria-live="polite" aria-atomic="true"><div><h3>{document.title}</h3><blockquote>{document.excerpt}</blockquote><p className="demo-caption">Documento inteiramente fictício.</p></div><div><h3>Resposta demonstrativa</h3><p className="demo-answer">{document.answer}</p><p className="demo-caption">Resposta predefinida, sem chamada a modelos de IA.</p></div></div></>;
}

function AssociationDemo() {
  const [filter, setFilter] = useState("Todos");
  const [selected, setSelected] = useState<string | null>(null);
  const filtered = members.filter(member => filter === "Todos" || member.status === filter);
  const member = members.find(item => item.code === selected);
  return <><label className="demo-label" htmlFor="member-filter">Situação do associado</label><select id="member-filter" value={filter} onChange={event => { setFilter(event.target.value); setSelected(null); }}>{["Todos", "Em dia", "Pendente"].map(option => <option key={option}>{option}</option>)}</select><div className="demo-table-wrap" tabIndex={0} role="region" aria-label="Consulta de dados fictícios"><table><caption>Associados fictícios · {filtered.length} resultado(s)</caption><thead><tr><th scope="col">Associado</th><th scope="col">Situação</th><th scope="col">Consulta</th></tr></thead><tbody>{filtered.map(item => <tr key={item.code}><th scope="row">{item.name}<small>{item.code}</small></th><td>{item.status}</td><td><button className="demo-text-button" aria-label={`Ver histórico de ${item.name}`} onClick={() => setSelected(item.code)}>Ver histórico</button></td></tr>)}</tbody></table></div><div className="demo-feedback" role="status">{member ? <><strong>{member.name}</strong><p>{member.history}</p><p>Consulta local de exemplo. Nenhuma cobrança é gerada.</p></> : <p>Selecione um associado para consultar seu histórico fictício.</p>}</div></>;
}

function TenantDemo() {
  const [company, setCompany] = useState("demo-a");
  const visible = tenantRecords.filter(record => record.company === company);
  return <><label className="demo-label" htmlFor="company-context">Contexto de empresa fictícia</label><select id="company-context" value={company} onChange={event => setCompany(event.target.value)}><option value="demo-a">Empresa fictícia A</option><option value="demo-b">Empresa fictícia B</option></select><p className="demo-context">empresaId: <code>{company}</code> → filtro local de registros</p><div className="demo-table-wrap"><table><caption>Estoque fictício da empresa selecionada</caption><thead><tr><th scope="col">Código</th><th scope="col">Item</th><th scope="col">Quantidade</th></tr></thead><tbody>{visible.map(record => <tr key={record.code}><th scope="row">{record.code}</th><td>{record.product}</td><td>{record.stock}</td></tr>)}</tbody></table></div><p className="demo-feedback" role="status">{visible.length} registro(s) no contexto {company}. Este filtro de interface não implementa segurança entre empresas.</p></>;
}

function ServicesDemo() {
  const [selected, setSelected] = useState(0);
  const [showGuidance, setShowGuidance] = useState(false);
  const service = services[selected];
  return <><label className="demo-label" htmlFor="service-category">Categoria de exemplo</label><select id="service-category" value={selected} onChange={event => { setSelected(Number(event.target.value)); setShowGuidance(false); }}>{services.map((item, index) => <option key={item.category} value={index}>{item.category}</option>)}</select><div className="demo-service"><h3>{service.name}</h3><p>Um caminho organizado: categoria → informação → orientação.</p><button className="button demo-secondary" onClick={() => setShowGuidance(!showGuidance)} aria-expanded={showGuidance} aria-controls="service-guidance">{showGuidance ? "Ocultar orientação" : "Consultar orientação fictícia"}</button></div><div id="service-guidance" className="demo-feedback" role="status" hidden={!showGuidance}><strong>Orientação demonstrativa</strong><p>{service.text}</p><p>Resposta fixa de exemplo. Não é um chat real nem uma integração com IA.</p></div></>;
}

export function ProjectDemo({ slug }: { slug: string }) {
  return <div className="demo-body">{slug === "farmgeo" ? <FarmGeoDemo /> : slug === "base-conhecimento" ? <KnowledgeDemo /> : slug === "aacb" ? <AssociationDemo /> : slug === "ponto-fixo" ? <TenantDemo /> : <ServicesDemo />}</div>;
}
