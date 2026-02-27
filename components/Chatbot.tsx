import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, User, Bot, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenAI } from "@google/genai";

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; content: string }[]>([
    { role: 'model', content: "Hola, bienvenido a BLUENET. ¿En qué puedo ayudarte hoy?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [turnCount, setTurnCount] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatSessionRef = useRef<any>(null);

  const MAX_TURNS = 7;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Effect to toggle tooltip every 5 seconds when closed
  useEffect(() => {
    if (isOpen) {
      setShowTooltip(false);
      return;
    }

    // Initial delay to start the loop
    const loop = setInterval(() => {
      setShowTooltip(true);
      // Hide after 3 seconds
      setTimeout(() => {
        setShowTooltip(false);
      }, 3000);
    }, 5000);

    return () => clearInterval(loop);
  }, [isOpen]);

  const initializeChat = async () => {
    if (chatSessionRef.current) return;

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const chat = ai.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: `Eres el asistente virtual de BLUENET Trust & Escrow. Tu misión es ayudar al visitante a entender nuestros servicios y resolver sus dudas de forma breve, natural y amable.
          
          INFORMACIÓN REAL DE BLUENET (Úsala para responder):
          - Directores: Mauricio Ramírez (mramirez@bluenetcr.com, +506 8392 1000) y Julián Aguilar (jaguilar@bluenetcr.com, +506 8659 5546).
          - Experiencia: Más de 15 años en el mercado financiero y legal de Costa Rica.
          - Servicios Principales: 
            1. Escrow (Custodia de fondos para transacciones seguras, inmobiliarias o comerciales).
            2. Fideicomisos (Administración, garantía y protección de patrimonios).
            3. Cumplimiento/Compliance (Seguridad legal, normativa SUGEF y ética).
            4. Soluciones a la medida (Estructuras financieras personalizadas).
          - Ubicación: Costa Rica.
          - Valores: Transparencia, seguridad, confidencialidad y ética profesional.
          
          REGLAS DE COMPORTAMIENTO:
          1. LENGUAJE NATURAL: Habla como una persona amable, no como un abogado o un robot. Evita tecnicismos innecesarios.
          2. BREVEDAD: Tus respuestas deben ser cortas (máximo 2-3 oraciones). Ve al grano.
          3. NO VENDAS AGRESIVAMENTE: Tu prioridad es informar y ayudar. No envíes al formulario en cada respuesta.
          4. CIERRE: Solo sugiere agendar consulta si la duda es compleja o si el usuario muestra interés claro.
          5. PRECIOS: Si preguntan costos, explica amablemente que dependen de cada caso y sugiere una valoración personalizada.
          
          IMPORTANTE: Tienes un límite de 7 interacciones por sesión. Úsalas para aportar valor real.`,
        },
      });
      chatSessionRef.current = chat;
    } catch (error) {
      console.error("Error initializing chat:", error);
    }
  };

  useEffect(() => {
    if (isOpen) {
      initializeChat();
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading || turnCount >= MAX_TURNS) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      if (!chatSessionRef.current) {
        await initializeChat();
      }

      let messageToSend = userMessage;
      if (turnCount === MAX_TURNS - 1) {
        messageToSend += " [INSTRUCCIÓN DEL SISTEMA: Esta es la ÚLTIMA interacción permitida. Responde la duda del usuario y despídete cortésmente invitando a agendar una consulta. NO hagas preguntas de seguimiento ni intentes continuar la conversación.]";
      }

      const result = await chatSessionRef.current.sendMessage({ message: messageToSend });
      const response = result.text; 

      setMessages(prev => [...prev, { role: 'model', content: response }]);
      setTurnCount(prev => prev + 1);
    } catch (error) {
      console.error("Error generating response:", error);
      setMessages(prev => [...prev, { role: 'model', content: "Lo siento, tuve un problema técnico. Por favor intenta de nuevo o contáctanos directamente." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleGoToForm = () => {
    setIsOpen(false);
    const formElement = document.getElementById('consultation-form'); // Assuming the form has this ID based on App.tsx logic looking for IDs
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
      formElement.classList.add('active'); // Trigger reveal animation if applicable
    } else {
      // Fallback if ID is different, try to find by selector or just scroll to bottom
       const formSection = document.querySelector('section#contact') || document.querySelector('form')?.closest('section');
       formSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[340px] max-w-[calc(100vw-48px)] bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white/20 flex flex-col font-sans"
            style={{ maxHeight: 'min(500px, calc(100vh - 120px))', height: '450px' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-5 flex justify-between items-center text-white shadow-md">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <img 
                    src="https://i.imgur.com/W4Utut6.png" 
                    alt="Logo" 
                    className="w-12 h-12 object-contain"
                  />
                  <h3 className="font-bold text-base tracking-wide">BLUENET ASISTENTE</h3>
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.6)]"></div>
                  <p className="text-[10px] text-gray-300 uppercase tracking-wider font-medium">en línea</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-5 space-y-5 bg-gray-50/50 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-4 text-sm leading-relaxed shadow-sm ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-br from-brand-accent to-blue-600 text-white rounded-2xl rounded-tr-sm'
                        : 'bg-white text-gray-800 border border-gray-100 rounded-2xl rounded-tl-sm'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-4 rounded-2xl rounded-tl-sm border border-gray-100 shadow-sm flex gap-1.5 items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-5 bg-white border-t border-gray-100">
              {turnCount >= MAX_TURNS ? (
                <div className="text-center space-y-3 animate-fade-in">
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Sesión finalizada</p>
                  <button
                    onClick={handleGoToForm}
                    className="w-full py-3.5 bg-black hover:bg-gray-900 text-white rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Agendar Consulta <ArrowRight size={16} />
                  </button>
                </div>
              ) : (
                <div className="relative flex items-center gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Escribe tu consulta..."
                    className="flex-1 py-3 px-5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-accent/10 focus:border-brand-accent/50 focus:bg-white transition-all shadow-inner"
                    disabled={isLoading}
                  />
                  <button
                    onClick={handleSend}
                    disabled={!input.trim() || isLoading}
                    className="p-3 bg-black text-white rounded-xl hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg transform active:scale-95"
                  >
                    <Send size={18} />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button Container */}
      <div className="relative flex items-center justify-end">
        <AnimatePresence>
          {!isOpen && showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md text-gray-800 px-4 py-2 rounded-xl shadow-lg whitespace-nowrap text-xs font-semibold border border-white/50 z-40 pointer-events-none"
            >
              ¿Cómo podemos ayudarte?
              {/* Arrow */}
              <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white/90 transform rotate-45 border-r border-t border-white/50"></div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center justify-center transition-all duration-300 relative group ${
            isOpen 
              ? 'w-14 h-14 bg-brand-accent hover:bg-brand-accentLight text-white rounded-full shadow-lg shadow-blue-500/30' 
              : 'w-16 h-16 bg-transparent'
          }`}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="video-icon"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full h-full overflow-hidden rounded-full"
              >
                <video 
                  src="https://mqajxigehitkgdtepqzi.supabase.co/storage/v1/object/public/Video%20surf/Greets_lowers_hand_greets_f27a895ddb%20(1).mov"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Tooltip/Badge */}
          {!isOpen && turnCount === 0 && (
            <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white z-10"></span>
          )}
        </motion.button>
      </div>
    </div>
  );
};

export default Chatbot;
