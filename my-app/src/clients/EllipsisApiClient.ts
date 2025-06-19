
export interface BackendApiError {
  errorMessage: string;
}


export class EllipsisApiClient {
  readonly baseUrl: string;

  constructor() {
    console.log('Creating EllipsisApiClient');
  }

  async exampleApiCall(
    account_id: number,
    account_login: string,
    email: string,
    full_name: string,
    avatar_url: string,
    tags: Object | null
  ): Promise<string | BackendApiError> {
    const body = {
      account_id: account_id,
      account_login: account_login,
      email: email,
      full_name: full_name,
      avatar_url: avatar_url,
      tags: tags,
    };
    const response = await fetch(`${this.baseUrl}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Failed to POST /user: body=${body} response=${text}`);
    }
    return response.json();
  }

}
