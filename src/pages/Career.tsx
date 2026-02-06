import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { initScrollAnimations } from '../utils/scrollAnimations';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface JobPosting {
    id: string;
    title: string;
    status: 'OPEN' | 'CLOSED';
    description: string;
    responsibilities: string[];
    qualifications: string[];
    niceToHave: string[];
    applyEmail: string;
}

const jobPostings: JobPosting[] = [
    {
        id: '1',
        title: 'Full Stack Developer',
        status: 'CLOSED',
        description: 'We are seeking a talented Full Stack Developer to join our dynamic team. You will be responsible for developing and maintaining web applications using modern technologies.',
        responsibilities: [
            'Design, develop, and maintain scalable web applications',
            'Collaborate with cross-functional teams to define and implement new features',
            'Write clean, maintainable, and efficient code',
            'Participate in code reviews and provide constructive feedback',
            'Troubleshoot and debug applications',
            'Stay up-to-date with emerging technologies and industry trends'
        ],
        qualifications: [
            'Bachelor\'s degree in Computer Science or related field',
            '3+ years of experience in full stack development',
            'Proficiency in JavaScript, TypeScript, React, and Node.js',
            'Experience with databases (SQL and NoSQL)',
            'Strong understanding of RESTful APIs and microservices architecture',
            'Excellent problem-solving and communication skills'
        ],
        niceToHave: [
            'Experience with cloud platforms (AWS, Azure, or GCP)',
            'Knowledge of Docker and Kubernetes',
            'Familiarity with CI/CD pipelines',
            'Experience with GraphQL',
            'Open source contributions'
        ],
        applyEmail: 'careers@do_lo_tech.com'
    }
];

const Career = () => {
    const [openJobId, setOpenJobId] = useState<string | null>(null);

    useEffect(() => {
        // Initialize scroll animations after component mounts
        initScrollAnimations();
    }, []);

    const toggleJob = (jobId: string) => {
        setOpenJobId(openJobId === jobId ? null : jobId);
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <section className="pt-32 pb-20 gradient-hero">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center animate-on-scroll">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            Join Our Team
                        </h1>
                        <p className="text-muted-foreground text-lg">
                            Be part of a dynamic team that's shaping the future of technology
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-foreground mb-8 animate-on-scroll">
                            Open Positions
                        </h2>

                        <div className="space-y-4">
                            {jobPostings.map((job, index) => (
                                <div
                                    key={job.id}
                                    className={`border border-border rounded-lg overflow-hidden animate-on-scroll delay-${Math.min((index + 1) * 100, 600)}`}
                                >
                                    {/* Accordion Header */}
                                    <button
                                        onClick={() => toggleJob(job.id)}
                                        className="w-full px-6 py-4 flex items-center justify-between bg-secondary/30 hover:bg-secondary/50 transition-colors"
                                    >
                                        <div className="flex items-center gap-4">
                                            <h3 className="text-xl font-semibold text-primary">
                                                {job.title}
                                            </h3>
                                            <span
                                                className={`px-3 py-1 text-xs font-bold rounded ${job.status === 'OPEN'
                                                    ? 'bg-green-500/20 text-green-400'
                                                    : 'bg-red-500/20 text-red-400'
                                                    }`}
                                            >
                                                {job.status}
                                            </span>
                                        </div>
                                        <ChevronDown
                                            className={`w-5 h-5 text-foreground transition-transform duration-300 ${openJobId === job.id ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </button>

                                    {/* Accordion Content */}
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${openJobId === job.id ? 'max-h-[2000px]' : 'max-h-0'
                                            }`}
                                    >
                                        <div className="p-6 bg-card space-y-6">
                                            {/* Description */}
                                            <div>
                                                <h4 className="text-lg font-semibold text-foreground mb-3">
                                                    We are seeking...
                                                </h4>
                                                <p className="text-muted-foreground leading-relaxed">
                                                    {job.description}
                                                </p>
                                            </div>

                                            {/* Responsibilities */}
                                            <div>
                                                <h4 className="text-lg font-semibold text-foreground mb-3">
                                                    Responsibilities
                                                </h4>
                                                <ul className="space-y-2">
                                                    {job.responsibilities.map((item, idx) => (
                                                        <li
                                                            key={idx}
                                                            className="flex items-start gap-2 text-muted-foreground"
                                                        >
                                                            <span className="text-primary mt-1">•</span>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Qualifications */}
                                            <div>
                                                <h4 className="text-lg font-semibold text-foreground mb-3">
                                                    Qualifications
                                                </h4>
                                                <ul className="space-y-2">
                                                    {job.qualifications.map((item, idx) => (
                                                        <li
                                                            key={idx}
                                                            className="flex items-start gap-2 text-muted-foreground"
                                                        >
                                                            <span className="text-primary mt-1">•</span>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Nice to Have */}
                                            <div>
                                                <h4 className="text-lg font-semibold text-foreground mb-3">
                                                    Nice to Have
                                                </h4>
                                                <ul className="space-y-2">
                                                    {job.niceToHave.map((item, idx) => (
                                                        <li
                                                            key={idx}
                                                            className="flex items-start gap-2 text-muted-foreground"
                                                        >
                                                            <span className="text-primary mt-1">•</span>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Apply Section */}
                                            <div className="pt-4 border-t border-border">
                                                <h4 className="text-lg font-semibold text-foreground mb-2">
                                                    To Apply
                                                </h4>
                                                <p className="text-muted-foreground">
                                                    Send your resume and cover letter to:{' '}
                                                    <a
                                                        href={`mailto:${job.applyEmail}`}
                                                        className="text-primary hover:text-primary/80 transition-colors font-medium"
                                                    >
                                                        {job.applyEmail}
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Career;
