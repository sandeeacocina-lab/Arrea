import type {Metadata} from 'next';
import {SiteHeader} from '@/components/site-header';
import {SiteFooter} from '@/components/site-footer';
import BriefingForm from '@/components/briefing-form';
import './briefing.css';
export const metadata:Metadata={title:'Cuéntanos tu evento',description:'Prepara tu próximo evento empresarial con ARREA. Completa el briefing y descarga tu copia en PDF.'};
export default function BriefingPage(){return <><a className="skip-link" href="#briefing">Saltar al formulario</a><SiteHeader pagePath="/briefing/"/><main id="briefing" className="briefing-page shell"><div className="briefing-intro"><p className="eyebrow">BRIEFING DE NUEVO EVENTO</p><h1>Cuéntanos<br/>tu evento.</h1><p>Tu objetivo es nuestro punto de partida. Comparte lo que ya sabes y prepararemos la primera reunión.</p></div><BriefingForm/></main><SiteFooter/></>;}

