import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import 'boxicons';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
// Componentes
import GGLogo from '../../components/misc/GGLogo';
import Footer from '../../components/misc/Footer';
import Carousel from "../../components/misc/carrousel";

function Marketing(){
    const images = [
        'images/carrousel/carrousel0/image0.png',
        'images/carrousel/carrousel0/image1.png',
        'images/carrousel/carrousel0/image2.png'
    ];
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
          question: '¿Qué es el marketing digital?',
          answer: 'El marketing digital es un conjunto de estrategias y tácticas diseñadas para coordinar los esfuerzos de comunicación de las empresas en el entorno online. Su objetivo principal es conectar, atraer y persuadir a los clientes en función de sus intereses y preferencias.',
        },
        {
          question: '¿Cuál es el objetivo de nuestra empresa de marketing?',
          answer: 'Nuestro objetivo en marketing digital es desarrollar herramientas innovadoras que impulsen el crecimiento de individuos y empresas. También ofrecemos un seguimiento personalizado, utilizando programación y enfoques creativos que desafían los métodos tradicionales.',
        },
        {
          question: '¿El marketing digital ofrece resultados inmediatos?',
          answer: 'El marketing digital es un proceso que generalmente produce resultados a largo plazo. A medida que se evalúan los resultados y se ajustan las estrategias, se logra consistencia y éxito sostenido con el tiempo.',
        },
      ];
      
    return(
        <main className="main-serviceView">
            <GGLogo />

            <section className="hero-section">
                <div className="hero-image2">
                    <h1>Marketing Digital</h1>
                </div>
            </section>

            <section className="content-section">
            <div className="content">
                    <h2>Introduccion</h2>
                    <p>En Good Guys, ayudamos a impulsar tu negocio a través de estrategias de marketing digital personalizadas. 
                        Colaboramos con nuestros clientes para alcanzar su audiencia objetivo y aumentar su visibilidad online 
                        mediante técnicas y herramientas innovadoras.
                    </p>
                </div>

                <div className="content">
                    <h2>Estrategias de Mercado</h2>
                    <p>Planeamos y visualizamos el público objetivo y los medios más efectivos para alcanzarlo. Utilizamos 
                        nuevas herramientas y marketing para crear innovaciones que destacan por encima de las 
                        tendencias habituales.</p>
                </div>

                <div className="content">
                    <h2>Compromiso con el Cliente</h2>
                    <p>Nos enfocamos en encontrar la mejor manera de crecer juntos y alcanzar nuestros objetivos. Por ello, el costo 
                        de nuestros servicios se acordará según el trabajo.</p>
                </div>
                <div className="content">
                    <h2>Preguntas Frecuentes</h2>
                    {faqs.map((faq, index) => (
                        <div key={index} className="faq-item">
                        <div className="faq-question" onClick={() => toggleFAQ(index)}>
                            <h3>{faq.question}</h3>
                            <span>{openIndex === index ? <FaChevronUp /> : <FaChevronDown />}</span>
                        </div>
                        {openIndex === index && (
                            <div className="faq-answer">
                            <p>{faq.answer}</p>
                            </div>
                        )}
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}

export default Marketing;
