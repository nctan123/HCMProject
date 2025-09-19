import SectionNav from './SectionNav';
import SectionRenderer from './SectionRenderer';
import QuizSidebar from './QuizSidebar';

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
        <SectionNav activeSection={activeSection} setActiveSection={setActiveSection} />
        <SectionRenderer activeSection={activeSection} />
      </main>
    );
  }

  return (
    <main className="relative z-10">
      <SectionNav activeSection={activeSection} setActiveSection={setActiveSection} />

      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-8">
            <SectionRenderer activeSection={activeSection} />
          </div>

          <div className="lg:col-span-1 space-y-6">
            <QuizSidebar />
          </div>
        </div>
      </div>
    </main>
  );
}
