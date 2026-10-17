import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Sparkles, Calendar, Award, ShoppingBag, Users } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const { t } = useLanguage();

  const cards = [
    {
      id: 'experience',
      icon: <Calendar size={28} className="why-icon" />,
      title: t.whyChooseUs.card1Title,
      description: t.whyChooseUs.card1Desc,
      tag: 'Estd. 1995',
    },
    {
      id: 'brands',
      icon: <Award size={28} className="why-icon" />,
      title: t.whyChooseUs.card2Title,
      description: t.whyChooseUs.card2Desc,
      tag: 'Bayer, Tata, FMC & More',
    },
    {
      id: 'access',
      icon: <ShoppingBag size={28} className="why-icon" />,
      title: t.whyChooseUs.card3Title,
      description: t.whyChooseUs.card3Desc,
      tag: 'Complete Range',
    },
    {
      id: 'service',
      icon: <Users size={28} className="why-icon" />,
      title: t.whyChooseUs.card4Title,
      description: t.whyChooseUs.card4Desc,
      tag: 'Local Touch',
    },
  ];

  return (
    <section id="why-us" className="section-pad why-us-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={16} />
            <span>{t.whyChooseUs.badge}</span>
          </div>
          <h2 className="section-title">
            {t.whyChooseUs.title}
          </h2>
          <p className="section-subtitle">
            {t.whyChooseUs.subtitle}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="why-us-grid">
          {cards.map((card) => (
            <div key={card.id} className="why-card card-surface">
              <div className="why-card__top">
                <div className="why-card__icon-box">
                  {card.icon}
                </div>
                <span className="why-card__tag">{card.tag}</span>
              </div>
              <h3 className="why-card__title">{card.title}</h3>
              <p className="why-card__desc">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .why-us-section {
          background-color: #FFFFFF;
        }

        .why-us-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 640px) {
          .why-us-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .why-us-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 1.75rem;
          }
        }

        .why-card {
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          border-radius: var(--radius-lg);
          border: 1.5px solid var(--color-border-subtle);
          transition: all var(--transition-normal);
          background: #FFFFFF;
        }
        .why-card:hover {
          border-color: var(--color-golden-yellow);
          transform: translateY(-5px);
          box-shadow: 0 16px 30px -4px rgba(20, 83, 45, 0.1);
        }

        .why-card__top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .why-card__icon-box {
          width: 56px;
          height: 56px;
          border-radius: var(--radius-md);
          background-color: var(--color-warm-cream);
          border: 1px solid var(--color-golden-yellow-light);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-forest-green);
          transition: all var(--transition-fast);
        }
        .why-card:hover .why-card__icon-box {
          background-color: var(--color-forest-green);
          color: var(--color-golden-yellow);
        }

        .why-card__tag {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--color-agricultural-green);
          background: var(--color-agricultural-green-subtle);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
          white-space: nowrap;
        }

        .why-card__title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--color-forest-green);
          margin-bottom: 0.75rem;
          line-height: 1.35;
        }

        .why-card__desc {
          font-size: 0.88rem;
          color: var(--color-charcoal-muted);
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
};
