import {resizeImage} from '../image-util/image';

it('Does not throw error',()=>{
  expect(async () => {
  resizeImage('encenadaport.jpg', 200, 200);
}).not.toThrow();
});

it('Invalid Image Name', () => {
    expect(resizeImage('encenadaportsdfsdfs.jpg', 200, 200).Result).toEqual(false);
  });


  it('Invalid Image width', () => {
    expect(resizeImage('encenadaport.jpg', -200, 200).Result).toEqual(false);
  });

  it('Invalid Image height', () => {
    expect(resizeImage('encenadaport.jpg', 200, -200).Result).toEqual(false);
  });

  it('Valid image resize', () => {
    expect(resizeImage('encenadaport.jpg', 200, 200).Result).toEqual(true);
  });