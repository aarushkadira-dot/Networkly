import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, LucideIcon } from 'lucide-react';

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    gradient?: string;
}

interface FeaturePageSection {
    title: string;
    type: 'prose' | 'features' | 'benefits';
    content?: string;
    features?: FeatureCardProps[];
    benefits?: string[];
}

interface FeaturePageTemplateProps {
    title: string;
    description: string;
    icon: LucideIcon;
    iconGradient?: string;
    sections: FeaturePageSection[];
}

export default function FeaturePageTemplate({
    title,
    description,
    icon: Icon,
    iconGradient = 'from-primary to-secondary',
    sections,
}: FeaturePageTemplateProps) {
    return (
        <div className="min-h-screen bg-dark-navy text-white pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-6">
                <Link to="/all-features" className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Features
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${iconGradient} flex items-center justify-center`}>
                            <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
                    </div>

                    <p className="text-xl text-neutral-300 mb-12">
                        {description}
                    </p>

                    <div className="space-y-12">
                        {sections.map((section, index) => (
                            <section key={index}>
                                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>

                                {section.type === 'prose' && section.content && (
                                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                                        <p className="text-neutral-300 leading-relaxed">
                                            {section.content}
                                        </p>
                                    </div>
                                )}

                                {section.type === 'features' && section.features && (
                                    <div className="grid md:grid-cols-2 gap-6">
                                        {section.features.map((feature, idx) => {
                                            const FeatureIcon = feature.icon;
                                            return (
                                                <div key={idx} className="bg-white/5 rounded-xl p-6 border border-white/10">
                                                    <FeatureIcon className={`w-8 h-8 ${feature.gradient || 'text-primary'} mb-3`} />
                                                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                                    <p className="text-neutral-300 text-sm">
                                                        {feature.description}
                                                    </p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}

                                {section.type === 'benefits' && section.benefits && (
                                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                                        <ul className="space-y-3 text-neutral-300">
                                            {section.benefits.map((benefit, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <span className="text-primary mt-1">✓</span>
                                                    <span>{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </section>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
