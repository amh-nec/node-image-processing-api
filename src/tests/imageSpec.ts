import {resizeImage} from '../image-util/image';

it('image return true', () => {
    expect(resizeImage('encenadaport.jpg', 200, 200)).toEqual(true);
  });