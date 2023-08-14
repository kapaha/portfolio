import { useEffect, useRef } from 'react';
import {
    createTypedInstance,
    destroyTypedInstance,
    TYPED_HERO_OPTIONS,
} from '../../library/typed';
import Socials from './Socials';
import owner from '../../data/owner.json';

export function Hero() {
    const typedElement = useRef(null);
    const typedInstance = useRef(null);

    useEffect(() => {
        typedInstance.current = createTypedInstance(
            typedElement.current,
            TYPED_HERO_OPTIONS
        );

        return () => destroyTypedInstance(typedInstance.current);
    }, []);

    return (
        <div className="hero-container">
            <h1 className="title">
                Hi, I'm a <span ref={typedElement} className="animated-text" />
            </h1>
            <h2 className="sub-title">{owner.description}</h2>
            <div className="btn-group">
                <a href="#about" className="btn btn-red-border">
                    About me
                </a>
                <a href="#projects" className="btn btn-blue">
                    Projects
                </a>
            </div>
            <Socials />
        </div>
    );
}
