import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query') || '';
  const owner = searchParams.get('owner') || '';
  const lawFirm = searchParams.get('lawFirm') || '';
  const attorney = searchParams.get('attorney') || '';
  const status = searchParams.get('status') || '';

  // Construct the API request URL
  const apiUrl = new URL('https://vit-tm-task.api.trademarkia.app/api/v3/us');
  apiUrl.searchParams.append('input_query', query);
  apiUrl.searchParams.append('owners', owner);
  apiUrl.searchParams.append('law_firms', lawFirm);
  apiUrl.searchParams.append('attorneys', attorney);
  apiUrl.searchParams.append('status', status);

  try {
    // Perform the API request
    const response = await fetch(apiUrl.toString(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        input_query: query,
        owners: [owner],
        law_firms: [lawFirm],
        attorneys: [attorney],
        status: [status],
        page: 1,
        rows: 10,
        sort_by: 'default',
        sort_order: 'desc',
      }),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);

  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Error occurred while fetching data.' }, { status: 500 });
  }
}
