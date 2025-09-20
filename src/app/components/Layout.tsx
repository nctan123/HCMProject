import {ReactNode} from 'react';
import AnimatedBackground from './AnimatedBackground';

type Props = {
    children: ReactNode;
};

export default function Layout({children}: Props) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <AnimatedBackground/>
            {children}
        </div>
    );
}
