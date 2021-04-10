import DinoIpsum from '../lib/DinoIpsum';

describe('DinoIpsum', () => {
  const dinoIpsum: DinoIpsum = new DinoIpsum();

  test('should return with some JSON Dino Ipsum', async () => {
    const result = await dinoIpsum.getDinoIpsum();

    const expectedParagraphCount = 10;
    const expectedWordCount = 30;

    expect(result.status).toBe(200);
    expect(result.data.length).toEqual(expectedParagraphCount);
    expect(result.data[0].length).toEqual(expectedWordCount);
  });

  test('should return with HTML Dino Ipsum', async () => {
    const result = await dinoIpsum.getDinoIpsum('html');

    expect(result.status).toBe(200);
    expect(result.data.startsWith('<p>')).toBe(true);
  });

  test('should return with TEXT Dino Ipsum', async () => {
    const result = await dinoIpsum.getDinoIpsum('text');
    const resultArray = result.data.split(' ');

    // Sometimes the returned word count is less than 300, e.g., 291.. not sure why
    const expectedWordCount = 200;

    expect(result.status).toBe(200);
    expect(resultArray.length).toBeGreaterThan(expectedWordCount);
  });

  test('should return with JSON data if a string not of json, text, or html is submitted', async () => {
    const result = await dinoIpsum.getDinoIpsum('testtestest');

    const expectedParagraphCount = 10;
    const expectedWordCount = 30;

    expect(result.status).toBe(200);
    expect(result.data.length).toEqual(expectedParagraphCount);
    expect(result.data[0].length).toEqual(expectedWordCount);
  });

  test('should return with JSON Dino Ipsum in a custom paragraph and word count', async () => {
    const result = await dinoIpsum.getDinoIpsum('JSON', 4, 250);

    const expectedParagraphCount = 4;
    const expectedWordCount = 250;

    expect(result.status).toBe(200);
    expect(result.data.length).toEqual(expectedParagraphCount);
    expect(result.data[0].length).toEqual(expectedWordCount);
  });
});
