import HistoricalContext from './sections/HistoricalContext';
import FormationBases from './sections/FormationBases';
import DevelopmentTimeline from './sections/DevelopmentTimeline';
import PartyApplication from './sections/PartyApplication';
import Video from './sections/Video';
import AIUse from './sections/AIUse';
import QuizGame from './QuizGame';

type Props = {
  activeSection: number;
};

export default function SectionRenderer({ activeSection }: Props) {
  switch (activeSection) {
    case 0:
      return <HistoricalContext />;
    case 1:
      return <FormationBases />;
    case 2:
      return <DevelopmentTimeline />;
    case 3:
      return <PartyApplication />;
    case 4:
      return <Video />;
    case 5:
      return <AIUse />;
    case 6:
      return <QuizGame />;
    default:
      return <HistoricalContext />;
  }
}
