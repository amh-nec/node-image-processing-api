import {resizeImage} from '../image-util/image';

  it('Does not throw error',()=>{
    expect(async () => {
    resizeImage('encenadaport.jpg', 200, 200);
  }).not.toThrow();
  });

  it('Invalid Image Name', async () => {
    expect((await resizeImage('encenadaportsdfsdfs.jpg', 200, 200)).Result).toEqual(false);
  });

  it('Invalid Image width', async () => {
    expect((await resizeImage('encenadaport.jpg', -200, 200)).Result).toEqual(false);
  });

  it('Invalid Image height', async () => {
    expect((await resizeImage('encenadaport.jpg', 200, -200)).Result).toEqual(false);
  });

  it('Valid image resize', async () => {
    expect((await resizeImage('encenadaport.jpg', 200, 200)).Result).toEqual(true);
  });