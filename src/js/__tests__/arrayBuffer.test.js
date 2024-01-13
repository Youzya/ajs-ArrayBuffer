const getBuffer = require('../arrayBuffer/getBuffer.js');
const arrayBufferConverter = require('../arrayBuffer/arrayBufferConverter.js');

test('load data', () => {
    const buffer = getBuffer();
    const bufferArray = new arrayBufferConverter();
    bufferArray.load(buffer);
    expect(bufferArray.buffer).toEqual(getBuffer());
  });
  
  test('get string from buffer', () => {
    const buffer = getBuffer();
    const bufferArray = new arrayBufferConverter();
    bufferArray.load(buffer);
    expect(bufferArray.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
  });
  