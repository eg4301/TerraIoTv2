import { CreateEventTemplateInput } from '../../API';
import { execute } from '../utils/api';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';

class EventTemplateService {
  async createEventTemplate(input: CreateEventTemplateInput) {
    const eventTemplate = await execute(
      {
        statement: mutations.createEventTemplate,
        name: 'createEventTemplate',
      },
      {
        input,
      }
    );

    return eventTemplate;
  }

  async getEventTemplatesByUserId(userId: string) {
    const eventTemplates = await execute(
      {
        statement: queries.getUserEventTemplates,
        name: 'getUserEventTemplates',
      },
      { userId }
    );

    return eventTemplates.items || [];
  }
}

export const eventTemplateService = new EventTemplateService();
