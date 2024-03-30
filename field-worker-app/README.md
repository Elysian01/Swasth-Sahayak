# Health Field Worker App

<p>
  <!-- iOS -->
  <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  <!-- Android -->
  <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  <!-- Web -->
</p>

## 🚀 How to use

> `npx create-react-native-app my-app -t with-reanimated`

- Run `yarn` or `npm install`
- Run `yarn start` or `npm run start` to try it out.

- Run `eas build -p android --profile preview` to build Android-Tablet-APK

## 📝 Notes

- [`react-native-reanimated` docs](https://docs.swmansion.com/react-native-reanimated/)

## AsyncStorage Keys

```md
1. FieldWorkerId
2. FieldWorkerName
3. AccessToken
4. Language
5. uploadData
```

## Download Region Data Format

```js
data = {
  "field-worker-details": {
    "field-worker-assigned-sector": 7
  },
  "follow-up": [
    {
      "follow-up-id": 1,
      "fieldworker-id": 1234,
      "patient-name": "Abhishek Gupta",
      "patient-address": "26/C, Hosur Rd, Electronics City Phase 1, Electronic City, Bengaluru, Karnataka 560100",
      "patient-token": "123",
      "patient-abhaid": "1234567812345678",
      "visited-status": false 
    },
    {
      "follow-up-id": 2,
      "fieldworker-id": 1234,
      "patient-name": "Abhishek Gupta",
      "patient-address": "26/C, Hosur Rd, Electronics City Phase 1, Electronic City, Bengaluru, Karnataka 560100",
      "patient-token": "123",
      "patient-abhaid": "1234567812345677",
      "visited-status": false 
    }
  ],

  "patient-details": [
    {
      "fieldworker-id": 1234,
      "patient-name": "Abhishek Gupta",
      "patient-address": "26/C, Hosur Rd, Electronics City Phase 1, Electronic City, Bengaluru, Karnataka 560100", 
      "patient-abhaid": "1234567812345678",
      "ongoing-medication-orders": {
        "ICD10-code": "F90.0",
        "doctor-name": "Abhishek Gupta 1",
        "doctor-comment": "Abhishek lorem Ipsum is Lore than others who receive it. Lorem Ipsum is Lore than others who receive it. Lorem Ipsum is Lore than others who receive it and is Lore than others who receive it and is Lore than others who receive it",
        "date": "12-05-2014",
        "questionnaire-type": "default"
      },   
      "recent-3-prescriptions": [
        {
        "ICD10-code": "F90.0",
        "prescription": "prescription-1 lorem Ipsum is Lore than others who receive it. Lorem Ipsum is Lore than others who receive it. Lorem Ipsum is Lore than others who receive it and is Lore than others who receive it and is Lore than others who receive it",
        "date": "12-05-2014",
        "doctor-name":"Aakash Bhardwaj 1"
        }, 
        {
        "ICD10-code": "F90.0",
        "prescription": "prescription-2 lorem Ipsum is Lore than others who receive it. Lorem Ipsum is Lore than others who receive it. Lorem Ipsum is Lore than others who receive it and is Lore than others who receive it and is Lore than others who receive it",
        "date": "13-05-2014",
        "doctor-name":"Aakash Bhardwaj 2"
        }, 
        {
        "ICD10-code": "F90.0",
        "prescription": "prescription-3 lorem Ipsum is Lore than others who receive it. Lorem Ipsum is Lore than others who receive it. Lorem Ipsum is Lore than others who receive it and is Lore than others who receive it and is Lore than others who receive it",
        "date": "14-05-2014",
        "doctor-name":"Aakash Bhardwaj 3"
        }
    ]
    }, {
      "fieldworker-id": 1234,
      "patient-name": "Rushikesh Gupta",
      "patient-address": "26/C, Hosur Rd, Electronics City Phase 1, Electronic City, Bengaluru, Karnataka 560100", 
      "patient-abhaid": "1234567812345677",
      "ongoing-medication-orders": {
        "ICD10-code": "F90.0",
        "doctor-name": "Rushikesh Gupta 2",
        "doctor-comment": "Abhishek lorem Ipsum is Lore than others who receive it. Lorem Ipsum is Lore than others who receive it. Lorem Ipsum is Lore than others who receive it and is Lore than others who receive it and is Lore than others who receive it",
        "date": "12-05-2014",
        "questionnaire-type": "default"
      },   
      "recent-3-prescriptions": [
        {
        "ICD10-code": "F90.0",
        "prescription": "prescription-1 lorem Ipsum is Lore than others who receive it. Lorem Ipsum is Lore than others who receive it. Lorem Ipsum is Lore than others who receive it and is Lore than others who receive it and is Lore than others who receive it",
        "date": "12-05-2014",
        "doctor-name":"Aakash Bhardwaj 1"
        }, 
        {
        "ICD10-code": "F90.0",
        "prescription": "prescription-2 lorem Ipsum is Lore than others who receive it. Lorem Ipsum is Lore than others who receive it. Lorem Ipsum is Lore than others who receive it and is Lore than others who receive it and is Lore than others who receive it",
        "date": "13-05-2014",
        "doctor-name":"Aakash Bhardwaj 2"
        }, 
        {
        "ICD10-code": "F90.0",
        "prescription": "prescription-3 lorem Ipsum is Lore than others who receive it. Lorem Ipsum is Lore than others who receive it. Lorem Ipsum is Lore than others who receive it and is Lore than others who receive it and is Lore than others who receive it",
        "date": "14-05-2014",
        "doctor-name":"Aakash Bhardwaj 3"
        }
    ]
    }
  ],
  "doctors": [
    {
      "doctor-id": 1,
      "doctor-name": "Abhishek Gupta",
      "open-slots": 12
    },
    {
      "doctor-id": 2,
      "doctor-name": "Aakash Bhardwaj",
      "open-slots": 1
    },
    {
      "doctor-id": 3,
      "doctor-name": "Ajay Gupta",
      "open-slots": 1
    },
    {
      "doctor-id": 4,
      "doctor-name": "Guru Bhardwaj",
      "open-slots": 10
    }
  ],

  "questionnaire" :{
    "default" : [
      {
      "type": "MCQ",
      "question-id": 1,
      "question": "Trouble falling asleep, staying asleep, or sleeping too much",
      "options": ["Not qualified","agree","disagree","neutral"]
      },
      {
      "type": "NAT",
      "question-id": 2,
      "question": "Feeling down, depressed or hopeless"
      },
      {
      "type": "TEXT",
      "question-id": 3,
      "question": "Feeling bad about yourself - or that you’re a failure or have let yourself or your family down"
      }
    ],
    "ICD10-code1" : [
      {
      "type": "MCQ",
      "question": "xyz",
      "question-id": 1,
      "options": ["Not qualified","agree","disagree","neutral"]
      },
      {
      "type": "NAT",
      "question-id": 2,
      "question": "xyz"
      },
      {
      "type": "TEXT",
      "question-id": 3,
      "question": "xyz"
      }
    ],
    "F90.0" : [
      {
      "type": "MCQ",
      "question": "xyz",
      "question-id": 1,
      "options": ["Not qualified","agree","disagree","neutral"]
      },
      {
      "type": "NAT",
      "question-id": 2,
      "question": "xyz"
      },
      {
      "type": "TEXT",
      "question-id": 3,
      "question": "xyz"
      }
    ]
  }
}
```


## Upload Data Format

```js
data = {
  // for follow-up-status
  "follow-up": [
    {
      "follow-up-id": 1,
      "patient-id": 123,
      "fieldworker-id": 1234,
      "patient-name": "Abhishek Gupta",
      "patient-address": "26/C, Hosur Rd, Electronics City Phase 1, Electronic City, Bengaluru, Karnataka 560100",
      "patient-token": "123",
      "patient-abhaid": "1234567812345678",
      "visited-status": true 
    },
    {
      "follow-up-id": 2,
      "patient-id": 124,
      "fieldworker-id": 1234,
      "patient-name": "Abhishek Gupta",
      "patient-address": "26/C, Hosur Rd, Electronics City Phase 1, Electronic City, Bengaluru, Karnataka 560100",
      "patient-token": "123",
      "patient-abhaid": "1234567812345678",
      "visited-status": true 
    }
  ],
  // docters slots remaining
  "doctors": [
    {
      "doctor-id": 1,
      "doctor-name": "Abhishek Gupta",
      "open-slots": 2
    },
    {
      "doctor-id": 2,
      "doctor-name": "Aakash Bhardwaj",
      "open-slots": 1
    },
    {
      "doctor-id": 3,
      "doctor-name": "Ajay Gupta",
      "open-slots": 1
    },
    {
      "doctor-id": 4,
      "doctor-name": "Guru Bhardwaj",
      "open-slots": 10
    }
  ],

  "questionnaire-response": [
    {
      "patient-abhaid": "1234456715344821",
      "questionnaire-type": "default",
      "responses": [{"question-id": 1, "response": "not at all"}]
    }
  ],

  "fieldworker-comments": [
    {
      "patient-abhaid": "1234456715344821",
      "comment": "xyz",
      "date": "12-05-2014"
    }
  ],

  "artifacts": [
  {
    "patient-abhaid": "1234456715344821",
    "date": "12-05-2014",
    "object": "0b0101101",
  },
  {
    "patient-abhaid": "1234456715344821",
    "date": "12-05-2014",
    "object": "0b0101101",
  },
],

  "chosen-doctor": [
    {
      "doctor-id": 1,
      "patient-abhaid": "1234456715344821",
    }
  ]

  "patient-registeration": [
    {
        "fieldworker-id": 1234,
        "patient-firstname": "Abhishek",
        "patient-lastname": "Gupta",
        "patient-dob": "12-05-2000",
        "patient-gender": "Male",
	"patient-abhaid": "1234567812345678",
	"patient-phoneNumber": "1234567891",
	"patient-address": "xyz",
	"patient-blockCode": "1",
	"patient-pincode": "123456",
	"patient-preferred-langauge": "English",
    }
  ]
}
```




