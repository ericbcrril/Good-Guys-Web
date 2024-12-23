import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import 'boxicons';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
// Componentes
import GGLogo from '../../components/misc/GGLogo';
import Footer from '../../components/misc/Footer';
import Carousel from "../../components/misc/carrousel";
//Scripts
import sendMessage from "../../scripts/sendWaMessage";

function WebDevelopment(){
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
        question: '¿Cuál es el tiempo estimado de entrega?',
        answer: 'El tiempo estimado para completar un proyecto de desarrollo web depende de la complejidad del sitio y las funcionalidades requeridas. Generalmente, un sitio web básico puede tardar entre 2 a 4 semanas, mientras que proyectos más complejos pueden requerir de 6 a 12 semanas.',
        },
        {
        question: '¿Cuánto cuesta el desarrollo de un sitio web?',
        answer: 'El costo de un sitio web varía según las necesidades específicas del cliente, incluyendo diseño, funcionalidades, y tecnologías utilizadas. Ofrecemos opciones personalizados que se ajustan a diferentes presupuestos.',
        },
        {
        question: '¿Qué tipo de soporte técnico ofrecen?',
        answer: 'Proveemos soporte técnico post-lanzamiento que incluye mantenimiento del sitio, actualizaciones de seguridad, y asistencia para resolver cualquier problema técnico que pueda surgir. Además, ofrecemos paquetes de soporte continuo para asegurar que su sitio web funcione de manera óptima.',
        },
    ];

    const caracts = [
        {
            id: 0,
            tipo: "Web estática",
            costo: 210,
            descripcion: "Sitios web con contenido fijo que no cambia sin intervención manual.",
            servicios: ["Diseño de la web", 
                        "Construccion del proyecto acordado", 
                        "Compatibilidad con dispositivos de escritorio, moviles y tablets", 
                        "Hosting web + Nombre de dominio", 
                        "Primer mes de host Web gratis"],
            ejemplos: ["Portafolios", "Páginas informativas", "Para negocios"],
            interactividad: "Baja",
            tecnologias: ["HTML", "CSS", "JavaScript", "React"],
            almacenamiento: "No necesitan bases de datos ni otro servicio adicional",
        },
        {
            id: 1,
            tipo: "Aplicación web",
            costo: 310,
            descripcion: "Webs dinámicas que permiten interacciones avanzadas y realizan tareas complejas.",
            servicios: ["Diseño de la web", 
                        "Construccion del proyecto acordado", 
                        "Compatibilidad con dispositivos de escritorio, moviles y tablets", 
                        "Hosting web + Nombre de dominio",
                        "Base de datos + VPS", 
                        "Primer mes de host Web + VPS gratis"],
            ejemplos: ["Gmail", "Chats en linea", "Tiendas en linea"],
            interactividad: "Alta",
            tecnologias: ["React", "Node.js", "MongoDB"],
            almacenamiento: "Necesitan alojar bases de datos para manejar el contenido dinámico (VPS)",
        }
    ];

    return(
        <main className="main-serviceView">
            <GGLogo />

            <section className="hero-section">
                <div className="hero-image0">
                    <h1>Desarrollo Web</h1>
                </div>
            </section>

            <section className="content-section">
                <div className="content">
                    <h2>Introducción</h2>
                    <p>En Good Guys optamos por el desarrollo de sitios web personalizados que se adaptan a las necesidades de nuestros clientes.
                        Desde la creación de sitios web corporativos hasta aplicaciones en línea, nuestro equipo utiliza distintas tecnologías
                        para ofrecer soluciones efectivas, escalables y seguras.</p>
                </div>
                {/*
                <div className="content">
                    <h2>Nuestros Proyectos</h2>
                    <Carousel images={images} autoSlide={true} interval={5000}/>
                </div>
                */}
                <div className="content">
                    <h2>Tecnologías</h2>
                    <table class="table-tecs">
                        <tbody>
                            <tr>
                                <td>
                                    <img src="images/logos/react-logo.webp" alt="React" />
                                </td>
                                <td>
                                    <p>React es una biblioteca de JavaScript para construir interfaces de usuario. 
                                    Se utiliza principalmente en el desarrollo de aplicaciones de una sola página, 
                                    permitiendo la creación de componentes reutilizables y una experiencia de usuario rápida y dinámica.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="images/logos/html-logo.webp" alt="HTML5" />
                                </td>
                                <td>
                                    <p>HTML5 es el lenguaje de marcado estándar utilizado para crear la estructura de páginas web. 
                                    Permite la integración de multimedia, semántica mejorada y nuevas características para el desarrollo web moderno.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="images/logos/css-logo.webp" alt="CSS3" />
                                </td>
                                <td>
                                    <p>CSS3 es la última versión del lenguaje de estilos en cascada, que se utiliza para controlar la apariencia visual de las páginas web. 
                                    Añade mejoras como animaciones, transiciones y layouts avanzados, proporcionando más control sobre el diseño y la presentación.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="images/logos/js-logo.webp" alt="JavaScript" />
                                </td>
                                <td>
                                    <p>JavaScript es un lenguaje de programación que permite añadir interactividad y dinamismo a los sitios web. 
                                    Es una parte fundamental del desarrollo web y se ejecuta en el lado del cliente para proporcionar una experiencia de usuario rica.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="images/logos/node-logo.webp" alt="Node.js" />
                                </td>
                                <td>
                                    <p>Node.js es un entorno de ejecución de JavaScript del lado del servidor. 
                                    Permite construir aplicaciones escalables y de alto rendimiento utilizando JavaScript en el backend, 
                                    con un enfoque basado en eventos y programación asíncrona.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="images/logos/mongodb-logo.webp" alt="MongoDB" />
                                </td>
                                <td>
                                    <p>MongoDB es una base de datos NoSQL orientada a documentos. 
                                    Es ideal para manejar grandes volúmenes de datos no estructurados, con un enfoque flexible y escalable 
                                    que facilita el almacenamiento y la recuperación de datos en aplicaciones modernas.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="content">
                    <h2>Trabajemos Juntos</h2></div>
                        <div className="trb-j">
                            {caracts.map((caracts, index) => (
                                    <div className="rec-plan">
                                        <h4>{caracts.costo}$</h4>
                                        <h3>{caracts.tipo}</h3>
                                        <hr />
                                        <p>{caracts.descripcion}</p>
                                        <div className="rec-plan-servs">
                                            {caracts.servicios.map((serv, index) => (
                                                <p>- {serv}.</p>   
                                            ))}
                                            <p>🔊 El precio puede variar dependiendo de la complejidad de la web.</p>
                                        </div>
                                        <button id={caracts.id} onClick={() => sendMessage(caracts.id)}>Seleccionar</button>
                                    </div>
                            ))}
                            <div className="rec-plan">
                                        <h4>$$</h4>
                                        <h3>Otro tipo</h3>
                                        <hr />
                                        <p>Cuentanos como es la web a diseñar.</p>
                                        <div className="rec-plan-servs">
                                            <input placeholder="Tu nombre" type="text" id="name" />
                                            <textarea placeholder="Tu proyecto" name="" id="message" cols="35" rows={15}></textarea>
                                        </div>
                                        <button id="wh" onClick={() => sendMessage("wh")}>Enviar</button>
                                    </div>
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

export default WebDevelopment;
