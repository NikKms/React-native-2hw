import postPhoto from '../../assets/img/postPhoto.jpg';
import postPhoto2 from '../../assets/img/photo2.jpg';
import qwerty from '../../assets/img/qwerty.jpg';

export const addToData = newData =>
  data.push({
    id: Math.random(),
    ...newData,
    photo: qwerty,
  });

export const data = [
  {
    id: 1,
    photo: postPhoto,
    postName: 'Moutains',
    countComents: 5,
    countLikes: 10,
    likes: true,
    location: 'Ivano-Frankivsk',
  },
  {
    id: 2,
    photo: postPhoto2,
    postName: 'Sea',
    countComents: 3,
    countLikes: 7,
    likes: false,
    location: 'Odessa',
  },
];
