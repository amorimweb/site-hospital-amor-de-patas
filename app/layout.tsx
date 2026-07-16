import type {Metadata} from 'next';import './globals.css';
export const metadata:Metadata={title:'Hospital Amor de Patas | Parauapebas',description:'Hospital veterinário e pet shop 24 horas em Parauapebas.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
