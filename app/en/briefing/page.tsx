import type {Metadata} from 'next';
import {SiteHeader} from '@/components/en/site-header';
import {SiteFooter} from '@/components/en/site-footer';
import BriefingForm from '@/components/en/briefing-form';
import '../../briefing/briefing.css';
export const metadata:Metadata={title:'Tell us about your event',description:'Plan your next business event with ARREA. Complete the brief and download your PDF copy.'};
export default function BriefingPage(){return <><a className="skip-link" href="#briefing">Skip to form</a><SiteHeader pagePath="/briefing/"/><main id="briefing" className="briefing-page shell"><div className="briefing-intro"><p className="eyebrow">NEW EVENT BRIEF</p><h1>Tell us about<br/>your event.</h1><p>Your goal is our starting point. Share what you already know and we will prepare our first meeting.</p></div><BriefingForm/></main><SiteFooter/></>;}

