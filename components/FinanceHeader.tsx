
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TrendingUp, ArrowUpRight, Activity } from 'lucide-react';

const FinanceHeader: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  const { t } = useLanguage();
  const [rates, setRates] = useState<{ compra: number; venta: number } | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  const fetchRates = async () => {
    try {
      setLoading(true);
      // Usamos la API de Hacienda de Costa Rica para datos reales del BCCR
      const response = await fetch('https://api.hacienda.go.cr/indicadores/tc', {
        cache: 'no-store'
      });
      const data = await response.json();
      if (data && data.compra && data.venta) {
        setRates({
          compra: data.compra.valor,
          venta: data.venta.valor
        });
      }
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
      // Fallback a valores de mercado si hay error de red
      setRates({ compra: 512.45, venta: 518.20 });
    } finally {
      setLoading(false);
      setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }
  };

  useEffect(() => {
    fetchRates();
    const interval = setInterval(fetchRates, 300000); // 5 min
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 60000);
    return () => {
      clearInterval(interval);
      clearInterval(timeInterval);
    };
  }, []);

  const TickerItem = () => (
    <div className="flex items-center gap-12 px-8 py-2 border-r border-white/5">
      <div className="flex items-center gap-3">
        <span className="text-[10px] font-black text-brand-accent uppercase tracking-[0.2em]">{t('finance.label')}</span>
        <Activity size={10} className="text-brand-accent animate-pulse" />
      </div>
      
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="text-[9px] font-bold text-gray-500 uppercase tracking-tighter">{t('finance.buy')}</span>
          <span className="text-sm font-bold text-[#00FF41] font-mono drop-shadow-[0_0_5px_rgba(0,255,65,0.3)]">
            ₡{rates?.compra.toFixed(2)}
          </span>
          <ArrowUpRight size={12} className="text-[#00FF41]" />
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-[9px] font-bold text-gray-500 uppercase tracking-tighter">{t('finance.sell')}</span>
          <span className="text-sm font-bold text-[#00FF41] font-mono drop-shadow-[0_0_5px_rgba(0,255,65,0.3)]">
            ₡{rates?.venta.toFixed(2)}
          </span>
          <ArrowUpRight size={12} className="text-[#00FF41]" />
        </div>
      </div>

      <div className="flex items-center gap-2 ml-4">
        <span className="text-[8px] font-black text-white/40 uppercase tracking-widest">USD/CRC</span>
        <span className="text-[8px] font-black text-brand-accent uppercase">{currentTime}</span>
        <span className="text-[8px] font-black text-green-500 uppercase tracking-widest opacity-60">{t('finance.live')}</span>
      </div>
      
      <div className="w-1.5 h-1.5 rounded-full bg-brand-accent/20 mx-2"></div>
    </div>
  );

  return (
    <div 
      className={`fixed top-0 left-0 w-full z-[60] bg-black border-b border-white/10 h-10 flex items-center overflow-hidden transition-all duration-700 transform ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      {loading && !rates ? (
        <div className="w-full flex justify-center items-center">
           <span className="text-[10px] font-black text-brand-accent animate-pulse uppercase tracking-[0.4em]">{t('finance.loading')}</span>
        </div>
      ) : (
        <div className="relative flex whitespace-nowrap w-full">
          {/* Contenedor de la animación infinita sin pausa */}
          <div className="flex animate-ticker-forever">
            {[...Array(8)].map((_, i) => <TickerItem key={`ticker-1-${i}`} />)}
          </div>
          <div className="flex animate-ticker-forever" aria-hidden="true">
            {[...Array(8)].map((_, i) => <TickerItem key={`ticker-2-${i}`} />)}
          </div>
        </div>
      )}
      
      <style>{`
        @keyframes ticker-forever {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker-forever {
          animation: ticker-forever 35s linear infinite;
          will-change: transform;
        }
        /* Eliminamos deliberadamente la pausa on hover para que nunca se detenga */
      `}</style>
    </div>
  );
};

export default FinanceHeader;
