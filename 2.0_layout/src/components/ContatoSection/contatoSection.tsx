import { useEffect, useRef, useState, type FormEvent } from "react";
import styles from './contatoSection.module.css';

const faqItems = [
  {
    q: "Qual o prazo médio de um projeto?",
    a: "Varia com o escopo — um site institucional costuma levar de 2 a 4 semanas; sistemas maiores, de 6 a 10. Combinamos um cronograma antes de começar.",
  },
  {
    q: "Como funciona o orçamento?",
    a: "Envio uma proposta fechada após entender o escopo numa conversa inicial — sem cobrança por hora surpresa no meio do caminho.",
  },
  {
    q: "Você dá manutenção depois da entrega?",
    a: "Sim, ofereço planos de suporte e pequenas evoluções mensais para quem quiser manter o projeto atualizado.",
  },
];

export default function ContatoSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <>
      <div className={styles.wrap}>

        <div className={`${styles.hero} ${styles.fade}`}>
          <p className={styles.eyebrow}>Contato</p>
          <h1 className={styles.headline}>Vamos transformar sua ideia em um produto di
            ital?</h1>
          <p className={styles.lede}>Conte um pouco sobre seu projeto — escolha o canal que preferir abaixo ou preencha o formulário. Costumo responder rápido.</p>
          <div className={styles.avail}>
            <span className={styles.avail_dot}></span>Disponível para novos projetos
          </div>
        </div>

        <div className={styles.channel_grid}>
          <a href="#" className={`${styles.ch_card} ${styles.fade} ${styles.animation_delay_05s}`}>
            <div className={`${styles.ch_icon} ${styles.email}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18v12H3z" /><path d="M3 7l9 6 9-6" /></svg>
            </div>
            <h4>Email</h4>
            <span>johnny.o.dev@gmail.com</span>
          </a>
          <a href="#" className={`${styles.ch_card} ${styles.ch_wa} ${styles.fade} ${styles.animation_delay_2s}`}>
            <div className={styles.ch_icon}>
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15l-1 3.6 3.7-1A10 10 0 1 0 12 2zm5.2 13.9c-.2.6-1.3 1.2-1.8 1.2-.5 0-1-.2-3.2-1.2-2.6-1.2-4.3-3.9-4.4-4.1-.1-.2-1-1.3-1-2.5s.6-1.8.9-2c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5s.7 1.8.8 1.9c.1.2.1.4 0 .6-.1.2-.2.3-.4.5-.2.2-.4.4-.5.6-.2.2-.4.4-.2.8.2.4.9 1.5 1.9 2.4 1.3 1.2 2.4 1.5 2.8 1.7.4.2.6.2.8-.1.2-.2.9-1 1.1-1.4.2-.4.4-.3.7-.2.3.1 1.8.9 2.1 1 .3.2.5.2.6.4.1.2.1.9-.1 1.4z" /></svg>
            </div>
            <h4>WhatsApp</h4>
            <span>Resposta mais rápida</span>
            <span className={styles.ch_wa_tag}>Chat comigo →</span>
          </a>
          <a href="#" className={`${styles.ch_card} ${styles.fade} ${styles.animation_delay_03s}`}>
            <div className={`${styles.ch_icon} ${styles.telefone}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2.1z" /></svg>
            </div>
            <h4>Telefone</h4>
            <span>(11) 91596-7787</span>
          </a>
          <a href="#" className={`${styles.ch_card} ${styles.fade} ${styles.animation_delay_4s}`}>
            <div className={`${styles.ch_icon} ${styles.localizacao}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
            </div>
            <h4>Localização</h4>
            <span>Guarulhos, SP</span>
          </a>
        </div>

        <div className={`${styles.services_row} ${styles.fade} ${styles.animation_delay_05s}`}>
          <div className={styles.service_chip}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 6l-2 12" /></svg>
            Desenvolvimento Web
          </div>
          <div className={styles.service_chip}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="7" height="7" rx="1.4" /><rect x="14" y="3" width="7" height="7" rx="1.4" /><rect x="3" y="14" width="7" height="7" rx="1.4" /><rect x="14" y="14" width="7" height="7" rx="1.4" /></svg>
            Web Design
          </div>
          <div className={styles.service_chip}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4h13l3 3v13H4z" /><path d="M9 9h7M9 13h7M9 17h4" /></svg>
            Criação de Conteúdo
          </div>
          <div className={styles.service_chip}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><path d="M8 12a4 4 0 0 1 8 0" /></svg>
            Consultoria Técnica
          </div>
        </div>

        <div className={styles.main_grid}>
          <div className={`${styles.fad} ${styles.animation_delay_6s}`}>
            <h3 className={styles.block_title}>Por que trabalhar comigo</h3>
            <ul className={styles.info_list}>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
                <div><strong>Resposta em até 24h</strong>Sem enrolação — você sabe rápido se encaixa no seu prazo.</div>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                <div><strong>Do design ao código</strong>Acompanho o projeto inteiro, não só uma parte dele.</div>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v16H4z" /><path d="M4 9h16" /></svg>
                <div><strong>Processo transparente</strong>Você acompanha o andamento, sem surpresas no final.</div>
              </li>
            </ul>

            <h3 className={styles.block_title}>Perguntas frequentes</h3>

            <div className={styles.faq}>
              {faqItems.map((item, i) => (
                <div
                  key={item.q}
                  className={`${styles.faq_item} ${openIndex === i ? styles.open : ""}`}
                >
                  <button
                    type="button"
                    className={styles.faq_q}
                    onClick={() => toggleFaq(i)}
                    aria-expanded={openIndex === i}
                  >
                    {item.q}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </button>
                  <div className={styles.faq_a}>
                    <p>{item.a}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          <form className={`${styles.contact_form} ${styles.fade} ${styles.animation_delay_07s}`}>
            <h3 className={styles.block_title}>Envie uma mensagem</h3>
            <div className={styles.field}>
              <input type="text" placeholder=" " required />
              <label>Seu nome</label>
            </div>
            <div className={styles.field}>
              <input type="email" placeholder=" " required />
              <label>Seu email</label>
            </div>
            <div className={styles.field}>
              <input type="tel" placeholder=" " />
              <label>Seu telefone (opcional)</label>
            </div>
            <div className={styles.field}>
              <textarea placeholder=" " required></textarea>
              <label>Conte sobre seu projeto</label>
            </div>
            <button type="submit" className={styles.submit_btn} id="submitBtn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4z" /></svg>
              <span className={styles.txt_default}>Enviar mensagem</span>
              <span className={styles.txt_sent}>Enviado ✓</span>
            </button>
          </form>
          
        </div>
      </div>

      <a href="#" className={styles.wa_float} title="Chat no WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15l-1 3.6 3.7-1A10 10 0 1 0 12 2zm5.2 13.9c-.2.6-1.3 1.2-1.8 1.2-.5 0-1-.2-3.2-1.2-2.6-1.2-4.3-3.9-4.4-4.1-.1-.2-1-1.3-1-2.5s.6-1.8.9-2c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5s.7 1.8.8 1.9c.1.2.1.4 0 .6-.1.2-.2.3-.4.5-.2.2-.4.4-.5.6-.2.2-.4.4-.2.8.2.4.9 1.5 1.9 2.4 1.3 1.2 2.4 1.5 2.8 1.7.4.2.6.2.8-.1.2-.2.9-1 1.1-1.4.2-.4.4-.3.7-.2.3.1 1.8.9 2.1 1 .3.2.5.2.6.4.1.2.1.9-.1 1.4z" /></svg>
      </a>
    </>
  )
}