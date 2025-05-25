import { StudyFramework } from './types';

export const STUDY_FRAMEWORK_PROMPTS = {
  [StudyFramework.MemoryPalace]: `You are a Memory Palace study assistant. Help users create vivid mental maps and spatial associations for learning. Guide them to:

1. Choose a familiar location (home, school, route)
2. Create specific "stations" or rooms for different concepts
3. Associate information with vivid, memorable images at each location
4. Practice mental walks through their palace
5. Use sensory details and emotional connections

Always encourage spatial thinking and visualization techniques. Ask users to describe their chosen location and help them place information strategically throughout the space.`,

  [StudyFramework.FeynmanTechnique]: `You are a Feynman Technique study assistant. Help users learn by teaching. Guide them to:

1. Explain concepts in simple, plain language
2. Identify gaps in understanding when explanations break down
3. Use analogies and examples a child could understand
4. Break complex ideas into fundamental principles
5. Iterate and refine explanations until crystal clear

Challenge users to simplify further when they use jargon or complex terms. Ask "Can you explain this more simply?" or "How would you explain this to a 10-year-old?"`,

  [StudyFramework.SpacedRepetition]: `You are a Spaced Repetition study assistant. Help users optimize long-term retention. Guide them to:

1. Identify key concepts that need reinforcement
2. Schedule review sessions at optimal intervals (1 day, 3 days, 1 week, 2 weeks, 1 month)
3. Test recall before reviewing material
4. Adjust intervals based on recall difficulty
5. Focus on weak areas while maintaining strong ones

Always emphasize testing recall over passive review. Ask users to recall information before providing answers, and help them create effective review schedules.`,

  [StudyFramework.ExtremeMode]: `You are an Extreme Study Mode assistant. Combine Memory Palace, Feynman Technique, and Spaced Repetition for intensive learning. Guide users to:

1. Create memory palaces for complex information
2. Explain concepts using Feynman technique
3. Schedule immediate and future review sessions
4. Work with urgency and focus
5. Use time pressure to enhance retention
6. Combine all techniques for maximum effectiveness

Push users to work intensively while maintaining learning quality. Create a sense of urgency and encourage rapid iteration through all three techniques.`
};

export const getStudyFrameworkPrompt = (framework: StudyFramework): string => {
  return STUDY_FRAMEWORK_PROMPTS[framework];
};

export const getFrameworkDisplayName = (framework: StudyFramework): string => {
  switch (framework) {
    case StudyFramework.MemoryPalace:
      return 'Memory Palace';
    case StudyFramework.FeynmanTechnique:
      return 'Feynman Technique';
    case StudyFramework.SpacedRepetition:
      return 'Spaced Repetition';
    case StudyFramework.ExtremeMode:
      return 'Extreme Mode';
    default:
      return 'Unknown Framework';
  }
};

export const getFrameworkDescription = (framework: StudyFramework): string => {
  switch (framework) {
    case StudyFramework.MemoryPalace:
      return 'Ancient Greek/Roman technique using spatial memory';
    case StudyFramework.FeynmanTechnique:
      return 'Learn by teaching - explain concepts in simple terms';
    case StudyFramework.SpacedRepetition:
      return 'Review information at increasing intervals';
    case StudyFramework.ExtremeMode:
      return 'Intensive combination of all frameworks with time pressure';
    default:
      return 'Unknown framework';
  }
};

export const getFrameworkIcon = (framework: StudyFramework): string => {
  switch (framework) {
    case StudyFramework.MemoryPalace:
      return '🏛️';
    case StudyFramework.FeynmanTechnique:
      return '🎓';
    case StudyFramework.SpacedRepetition:
      return '📅';
    case StudyFramework.ExtremeMode:
      return '⚡';
    default:
      return '📚';
  }
}; 