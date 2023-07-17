import { Conversation } from '@/types/chat';

export interface ChatbarInitialState {
  searchTerm: string;
  filteredConversations: Conversation[];
  includeMessages: boolean;
}

export const initialState: ChatbarInitialState = {
  searchTerm: '',
  filteredConversations: [],
  includeMessages: false,
};
