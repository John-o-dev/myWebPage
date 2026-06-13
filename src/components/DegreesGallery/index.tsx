import React, { useState, useEffect, useRef } from "react";

/**
 * Componente React (Next.js) que implementa a feature: "Galeria de Certificados + Modal de Detalhes".
 * - Acessibilidade básica: modal com `aria` e fechamento por ESC / backdrop / botão.
 * Ver onde hospedar imagens dos certificados.
 * Obs.: O certificado em si é apenas uma imagem ou PDF, as informações de titulo, descrição, tecnologias, etc que são os metadados. tem que ser inseridos manualmente (no código, por enquanto). Ou seja, não é algo que se pega automaticamente de uma plataforma de cursos. Assim, ao desenvolver a plataforma, implementar uma interface para adicionar os certificados e metadados.
*/

type Certificate = {
  id: string;
  title: string;
  provider: string;         // plataforma ou instituição
  date: string;             // YYYY-MM-DD
  description: string;
  skills: string[];
  techs: string[];
  imageUrl?: string;         // thumbnail url
  projectUrl?: string;       // link para o projeto aplicado
};

// Mock data - troque pelos seus certificados reais
const MOCK_CERTS: Certificate[] = [
  {
    id: "c1",
    title: "Curso Moderno de React",
    provider: "Plataforma X",
    date: "2024-08-12",
    description:
      "Curso prático cobrindo hooks, roteamento, estado e testes. Construção de um projeto final: dashboard interativo.",
    skills: ["Hooks", "State Management", "Testing"],
    techs: ["React", "TypeScript", "Tailwind"],
    imageUrl: "/images/cert-react.png",
    projectUrl: "https://github.com/usuario/projeto-react",
  },
  {
    id: "c2",
    title: "API REST com Node.js",
    provider: "Plataforma Y",
    date: "2023-11-02",
    description:
      "Concepção e implementação de APIs RESTful com autenticação, validação e pipelines de deploy.",
    skills: ["REST", "Auth", "Validation"],
    techs: ["Node.js", "Express", "Jest"],
    imageUrl: "/images/cert-node.png",
    projectUrl: "https://github.com/usuario/projeto-node",
  },
  {
    id: "c3",
    title: "Frontend Avançado com Angular",
    provider: "Plataforma Z",
    date: "2025-01-20",
    description: "Componentização, RxJS e otimização de performance em aplicações Angular.",
    skills: ["RxJS", "NgRx", "Performance"],
    techs: ["Angular", "TypeScript", "SCSS"],
    imageUrl: "/images/cert-angular.png",
  },
];

export default function CertGalleryModalComponent({
  certificates = MOCK_CERTS,
}: {
  certificates?: Certificate[];
}) {
  const [query, setQuery] = useState("");
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [openCert, setOpenCert] = useState<Certificate | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  // keyboard: fechar modal com ESC
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenCert(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // foco no botão fechar quando modal abre
  useEffect(() => {
    if (openCert && closeBtnRef.current) closeBtnRef.current.focus();
  }, [openCert]);

  // extrai lista única de tecnologias (para filtros)
  const techSet = Array.from(
    new Set(certificates.flatMap((c) => c.techs.map((t) => t.toLowerCase())))
  );

  function matchesFilter(c: Certificate) {
    const q = query.trim().toLowerCase();
    if (selectedTech && !c.techs.map((t) => t.toLowerCase()).includes(selectedTech)) return false;
    if (!q) return true;
    return (
      c.title.toLowerCase().includes(q) ||
      c.provider.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.skills.join(" ").toLowerCase().includes(q) ||
      c.techs.join(" ").toLowerCase().includes(q)
    );
  }

  const filtered = certificates.filter(matchesFilter);

  return (

    <section className="max-w-6xl mx-auto p-6">
      <header className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold">Galeria de Certificados</h2>
          <p className="text-sm text-muted-foreground">Valide seus aprendizados mostrando cursos e projetos aplicados.</p>
        </div>

        <div className="flex gap-2 items-center">
          <div className="relative">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar curso, tecnologia, habilidade..."
              className="w-72 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Buscar certificados"
            />
          </div>
          <div>
            <button
              onClick={() => {
                setQuery("");
                setSelectedTech(null);
              }}
              className="text-sm px-3 py-2 border rounded-md bg-white hover:bg-gray-50"
            >
              Limpar
            </button>
          </div>
        </div>
      </header>

      <div className="mb-4 flex items-center gap-3">
        <span className="text-sm font-medium">Filtrar por tecnologia:</span>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setSelectedTech(null)}
            className={`text-sm px-2 py-1 rounded-full border ${selectedTech === null ? "bg-indigo-600 text-white" : "bg-white"}`}
            aria-pressed={selectedTech === null}
          >
            Todas
          </button>

          {techSet.map((t) => (
            <button
              key={t}
              onClick={() => setSelectedTech(t)}
              className={`text-sm px-2 py-1 rounded-full border ${selectedTech === t ? "bg-indigo-600 text-white" : "bg-white"}`}
              aria-pressed={selectedTech === t}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de certificados */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.length === 0 && (
          <div className="col-span-full p-6 rounded-md border bg-white">
            <p className="text-sm text-gray-600">Nenhum certificado corresponde aos filtros.</p>
          </div>
        )}

        {filtered.map((cert) => (
          <article
            key={cert.id}
            className="group relative rounded-lg border p-4 bg-white hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setOpenCert(cert)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") setOpenCert(cert);
            }}
            aria-label={`Abrir detalhes do certificado ${cert.title}`}
          >
            <div className="h-40 w-full bg-gray-100 rounded-md flex items-center justify-center overflow-hidden">
              {/* Em produção, substitua por <Image src={cert.imageUrl} ... /> */}
              <img
                src={cert.imageUrl ?? "https://via.placeholder.com/480x320?text=Certificate"}
                alt={`${cert.title} - ${cert.provider}`}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="mt-3">
              <h3 className="text-lg font-semibold">{cert.title}</h3>
              <p className="text-xs text-gray-500">{cert.provider} • {new Date(cert.date).toLocaleDateString()}</p>

              <div className="mt-3 flex gap-2 flex-wrap">
                {cert.techs.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 border rounded-full bg-gray-50">{t}</span>
                ))}
              </div>
            </div>

            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-xs rounded-full px-2 py-1 bg-indigo-600 text-white">Ver</span>
            </div>
          </article>
        ))}
      </div>

      {/* Modal */}
      {openCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6"
          role="dialog"
          aria-modal="true"
          aria-label={`Detalhes do certificado ${openCert.title}`}
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpenCert(null)}
            aria-hidden="true"
          />

          <div className="relative max-w-4xl w-full bg-white rounded-lg shadow-xl overflow-auto" style={{ maxHeight: '90vh' }}>
            <div className="flex justify-between items-start p-6 border-b">
              <div>
                <h3 className="text-2xl font-bold">{openCert.title}</h3>
                <p className="text-sm text-gray-500">{openCert.provider} • {new Date(openCert.date).toLocaleDateString()}</p>
              </div>

              <div>
                <button
                  ref={closeBtnRef}
                  onClick={() => setOpenCert(null)}
                  className="px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-200"
                  aria-label="Fechar modal"
                >
                  Fechar
                </button>
              </div>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <div className="w-full h-48 bg-gray-100 rounded-md overflow-hidden">
                  <img
                    src={openCert.imageUrl ?? "https://via.placeholder.com/640x420?text=Certificate+Image"}
                    alt={`${openCert.title} certificate`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="mt-4">
                  <h4 className="text-sm font-medium">Tecnologias</h4>
                  <div className="mt-2 flex gap-2 flex-wrap">
                    {openCert.techs.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 border rounded-full bg-gray-50">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="text-sm font-medium">Habilidades</h4>
                  <ul className="mt-2 list-disc list-inside text-sm text-gray-700">
                    {openCert.skills.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="md:col-span-2">
                <h4 className="text-sm font-medium">Descrição do curso</h4>
                <p className="mt-2 text-gray-700">{openCert.description}</p>

                <div className="mt-6 flex items-center gap-3">
                  {openCert.projectUrl ? (
                    <a
                      href={openCert.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
                    >
                      Ver Projeto
                    </a>
                  ) : (
                    <button className="px-4 py-2 rounded-md border text-sm text-gray-600" disabled>
                      Nenhum projeto vinculado
                    </button>
                  )}

                  <a
                    href={openCert.imageUrl ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-md border text-sm"
                  >
                    Abrir Certificado
                  </a>
                </div>

                <div className="mt-6">
                  <h5 className="text-xs text-gray-500">Meta: demonstrar que o aluno aplicou o conteúdo aprendido em um projeto prático.</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
