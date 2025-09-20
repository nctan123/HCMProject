import SectionNav from './SectionNav';
import SectionRenderer from './SectionRenderer';

type Props = {
    activeSection: number;
    setActiveSection: (index: number) => void;
};

export default function MainContentArea({
                                            activeSection,
                                            setActiveSection
                                        }: Props) {
    // Show QuizGame in full screen when selected
    if (activeSection === 6) {
        return (
            <main className="relative z-10">
                <SectionNav activeSection={activeSection} setActiveSection={setActiveSection}/>
                <SectionRenderer activeSection={activeSection}/>
            </main>
        );
    }

    return (
        <main className="relative z-10">
            <SectionNav activeSection={activeSection} setActiveSection={setActiveSection}/>

            <div className="container mx-auto px-6 py-16">
                <div className="max-w-4xl mx-auto">
                    <SectionRenderer activeSection={activeSection}/>
                </div>
            </div>
        </main>
    );
}
