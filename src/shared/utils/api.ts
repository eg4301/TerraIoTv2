// @ts-nocheck
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';

export const init = (apiKey, url) => {
  Amplify.configure({
    API: {
      GraphQL: {
        defaultAuthMode: 'apiKey',
        endpoint: url,
        region: process.env.REGION,
        apiKey,
      },
    },
  });
};

export const execute = async ({ statement, name }, variables) => {
  const client = generateClient();
  const { data } = await client.graphql({
    query: statement,
    variables,
    authMode: 'apiKey',
  });
  return data[name];
};

export const executeContinuously = async (
  { statement, name },
  variables,
  token = null
) => {
  try {
    const client = generateClient();
    const limit = 200;
    const params = { ...variables, limit, nextToken: token };
    const { data } = await client.graphql({
      query: statement,
      variables: params,
      authMode: 'apiKey',
    });
    const { items, nextToken } = data[name];
    if (nextToken) {
      const nextItems = await executeContinuously(
        { statement, name },
        variables,
        nextToken
      );
      return items.concat(nextItems);
    }
    return items;
  } catch (err) {
    console.log('error in continuous execution', JSON.stringify(err));
    throw err;
  }
};

export const executeByParts = async (query, objList) => {
  try {
    const limit = 25;
    let cur = 0;
    let result = [];
    while (cur < objList.length) {
      const promises = objList
        .slice(cur, cur + limit)
        .map((input) => execute(query, { input }));
      // eslint-disable-next-line no-await-in-loop
      const chunk = await Promise.all(promises);
      result = result.concat(chunk);
      cur += limit;
    }
    return result;
  } catch (err) {
    console.log('error in continuous execution', JSON.stringify(err));
    throw err;
  }
};
