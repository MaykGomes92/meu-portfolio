'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SucessoContato from '@/components/SucessoContato/SucessoContato'
import Header from '@/components/Header/Header'
import Sidebar from '@/components/Sidebar/Sidebar'
import PageTransicao from '@/components/PageTransicao/PageTransicao'
import Loading from '@/components/Loading'
import ParticlesComponent from '@/components/particles'
export default function Page() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [load, setUpdateLoad] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setUpdateLoad(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const resetForm = () => {
    setIsSuccess(false)
    setIsSubmitting(false)
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)

    const payload = {
      accessKey: '03934f0c-6b2e-41be-8e6d-3657181ac97f',
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    }

    try {
      const res = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        setIsSuccess(true)
      } else {
        alert('Erro ao enviar o formulário.')
      }
    } catch (err) {
      alert('Erro na conexão.')
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }


  return (
    <>
      <PageTransicao />
      <div className='hidden md:block'>
        <ParticlesComponent id="particles" />
      </div>
      <motion.div className="relative z-20 h-[100vh]"
        animate={{ opacity: 1, }}
        initial={{ opacity: 0 }}
        transition={{ duration: .6, delay: 0.8 }}
      >
        <Header />
        <Sidebar />
        <div className="py-10 px-6">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-2 text-light-gray text-center mt-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Entre em <span className="text-neon-blue">Contato</span>
          </motion.h1>

          <motion.p
            className="text-light-gray text-center mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Tem uma pergunta ou quer trabalhar junto? Sinta-se à vontade para entrar em contato!
          </motion.p>

          <div className="max-w-2xl mx-auto border-2 border-white/20 rounded-lg shadow-lg bg-[#2a2a2a]">
            {isSuccess ? (
              <SucessoContato onReset={resetForm} />
            ) : (
              <motion.form
                onSubmit={onSubmit}
                className="glassmorphism p-8 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <input type="hidden" name="accessKey" value="03934f0c-6b2e-41be-8e6d-3657181ac97f" />
                <div className="mb-6">
                  <label htmlFor="name" className="block text-light-gray mb-2">Nome</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="w-full bg-white/10 border-2 border-white/20 focus:border-neon-blue rounded-lg py-3 px-4 text-light-gray outline-none transition-colors"
                    placeholder="Seu nome"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-light-gray mb-2">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full bg-white/10 border-2 border-white/20 focus:border-neon-blue rounded-lg py-3 px-4 text-light-gray outline-none transition-colors"
                    placeholder="seu.email@exemplo.com"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-light-gray mb-2">Assunto</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="w-full bg-white/10 border-2 border-white/20 focus:border-neon-blue rounded-lg py-3 px-4 text-light-gray outline-none transition-colors"
                    placeholder="Sobre o que se trata?"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-light-gray mb-2">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full bg-white/10 border-2 border-white/20 focus:border-neon-blue rounded-lg py-3 px-4 text-light-gray outline-none transition-colors resize-none"
                    placeholder="Sua mensagem aqui..."
                    required
                  />
                </div>

                <div className="flex justify-center">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`text-dark-black  rounded-lg  bg-[rgb(0,212,255)] px-6 py-3 font-bold shadow-[0_0_15px_rgba(0,212,255,0.5)]  transition   duration-300   hover:shadow-[0_0_25px_rgba(0,212,255,0.7)]  cursor-pointer  ease-in-out ${isSubmitting ? 'opacity-70' : ''}`}
                    whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-deep-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Enviando...
                      </div>
                    ) : (
                      'Enviar Mensagem'
                    )}
                    <input type="hidden" name="redirectTo" value='contato' />
                  </motion.button>
                </div>
              </motion.form>
            )}
          </div>
          <motion.div
            className="mt-16 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-neon-blue text-center">
              Outras Formas de Contato
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {/* Email */}
              <motion.div className="glassmorphism border-2 border-white/20 rounded-lg p-6 flex flex-col items-center text-center bg-[#2a2a2a]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0, 212, 255, 0.6)' }}
              >
                <div className="w-12 h-12 bg-[#00D4FF20] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-light-gray">Email</h3>
                <a href="mailto:maykcontato98@hotmail.com" className="text-neon-blue hover:underline">
                  maykcontato@hotmail.com
                </a>
              </motion.div>

              {/* LinkedIn */}
              <motion.div className="glassmorphism border-2 border-white/20 rounded-lg p-6 flex flex-col items-center text-center bg-[#2a2a2a]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0, 212, 255, 0.6)' }}
              >
                <div className="w-12 h-12 bg-[#00D4FF20] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-neon-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-light-gray">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/mayk-gomes-11b86222b/" target="_blank" rel="noopener noreferrer" className="text-neon-blue hover:underline">
                  linkedin.com/in/maykgomes
                </a>
              </motion.div>

              {/* GitHub */}
              <motion.div className="glassmorphism border-2 border-white/20 rounded-lg p-6 flex flex-col items-center text-center bg-[#2a2a2a]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0, 212, 255, 0.6)' }}
              >
                <div className="w-12 h-12 bg-[#00D4FF20] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-neon-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-light-gray">GitHub</h3>
                <a href="https://github.com/MaykGomes92" target="_blank" rel="noopener noreferrer" className="text-neon-blue hover:underline">
                  github.com/maykgomes
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
