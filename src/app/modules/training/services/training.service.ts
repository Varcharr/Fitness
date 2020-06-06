import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TrainingService {
  constructor() {}

  exercises: [
    {
      name: 'cucanj';
      img: 'https://www.google.com/search?q=squat+images&rlz=1C1CHBF_enRS847RS847&sxsrf=ALeKk03i5vN6s8qGFu9xzW8divfVgIvsVA:1591444779382&tbm=isch&source=iu&ictx=1&fir=TKgTU8Q7JTO_8M%253A%252ChMM6Y0Q1bWeW8M%252C_&vet=1&usg=AI4_-kTFefBMp8sSZPwCkvJqCH4_tENJ4g&sa=X&ved=2ahUKEwjNuITmke3pAhXtQEEAHd6aBycQ9QEwAHoECAsQLw&biw=2560&bih=1248#imgrc=TKgTU8Q7JTO_8M:';
      time: 60;
    },
    {
      name: 'trcanje';
      img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/166-mtrappe-dsc2528-1580750632.jpg';
      time: 60;
    }
  ];

  fetchTrainings() {
    return [
      {
        id: 1,
        name: 'Treninng za noge',
        exercises: [
          {
            name: 'Cucanj',
            img:
              'https://image.shutterstock.com/image-vector/exercise-guide-by-woman-doing-260nw-1303854643.jpg',
            time: 60,
          },
          {
            name: 'Trcanje',
            img:
              'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/166-mtrappe-dsc2528-1580750632.jpg',
            time: 60,
          },
        ],
        calories: 500,
        desc: 'Lorem Ipsum',
      },
      {
        id: 2,
        name: 'Kondicija',
        exercises: [
          {
            name: 'Plivanje',
            img:
              'https://image.shutterstock.com/image-vector/exercise-guide-by-woman-doing-260nw-1303854643.jpg',
            time: 60,
          },
          {
            name: 'Trcanje',
            img:
              'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/166-mtrappe-dsc2528-1580750632.jpg',
            time: 60,
          },
        ],
        calories: 410,
        desc: 'Trening kondicije',
      },
      {
        id: 2,
        name: 'Ruke',
        exercises: [
          {
            name: 'Sklekovi',
            img:
              'https://image.shutterstock.com/image-vector/exercise-guide-by-woman-doing-260nw-1303854643.jpg',
            time: 60,
          },
          {
            name: 'Tegovi',
            img:
              'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/166-mtrappe-dsc2528-1580750632.jpg',
            time: 60,
          },
        ],
        calories: 210,
        desc: 'Trening za ruke',
      },
    ];
  }
  fetchExercises() {
    return [1, 2, 3];
  }
  saveTraining(trainig) {
    console.log(trainig);
  }
}
