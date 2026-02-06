import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
    delay?: string;
}

export const AnimatedSection = ({ children, className = '', delay = '' }: AnimatedSectionProps) => {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

    return (
        <div
            ref={ref}
            className={`${isVisible ? 'animate-on-scroll' : 'opacity-0'} ${delay} ${className}`}
        >
            {children}
        </div>
    );
};
