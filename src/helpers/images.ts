const photoLinks = [
    "https://store.japantourguideagency.com/wp-content/uploads/2022/04/sei-0L0_WPZc5Mc-unsplash.jpg",
  "https://store.japantourguideagency.com/wp-content/uploads/2022/04/jezael-melgoza-7H77FWkK_x4-unsplash.jpg",
  "https://store.japantourguideagency.com/wp-content/uploads/2022/04/svetlana-gumerova-PMkQ7WVWqr0-unsplash.jpg",
  
 
];

const getRandomInt = (
  min: number = 0,
  max: number = photoLinks.length - 1
): number => {
  const _min = Math.ceil(min);
  const _max = Math.floor(max);
  return Math.floor(Math.random() * (_max - _min)) + _min;
};

export const getRandomPhotoPairUrls = (): string[] => {
  const linkOne = photoLinks[getRandomInt()];
  const filteredPhotoLinks = photoLinks.filter((l) => l !== linkOne);
  const linkTwo = filteredPhotoLinks[getRandomInt()];
  return [linkOne, linkTwo];
};
