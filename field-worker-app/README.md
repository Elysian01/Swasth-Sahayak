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

## 📝 Notes

- [`react-native-reanimated` docs](https://docs.swmansion.com/react-native-reanimated/)

## AsyncStorage Keys

```md
1. AccessToken
2. Language
3. uploadData
```

## Download Region Data Format

```js
data = {
  "follow-up": [
    {
      "patient-id": 123,
      "fieldworker-id": 1234,
      "patient-name": "Abhishek Gupta",
      "patient-address": "26/C, Hosur Rd, Electronics City Phase 1, Electronic City, Bengaluru, Karnataka 560100",
      "patient-token": "123",
      "visited-status": false 
    },
    {
      "patient-id": 124,
      "fieldworker-id": 1234,
      "patient-name": "Abhishek Gupta",
      "patient-address": "26/C, Hosur Rd, Electronics City Phase 1, Electronic City, Bengaluru, Karnataka 560100",
      "patient-token": "123",
      "visited-status": false 
    }
  ],

  "patient-details": [
    {
      "patient-id": 123,
      "fieldworker-id": 1234,
      "patient-name": "Abhishek Gupta",
      "patient-address": "xyz",
      "patient-token": 48464651, 
      "patient-abhaid": "1234456715344821",
      "ongoing-medication-orders": {
        "ICD10-code": 1264,
        "docters-comment": "xyz",
        "date": "12-05-2014"
      },   
      "recent-3-prescriptions": [{
        "ICD10-code": 1264,
        "prescription": "xyz",
        "date": "12-05-2014"
      }]
    }
  ],
  "doctors": [
    {
      "doctor-name": "Abhishek Gupta",
      "slot-list": [
        { "date": "12-05-2014", "open-slots": 0 },
        { "date": "13-05-2014", "open-slots": 2 },
        { "date": "14-05-2014", "open-slots": 3 },
        { "date": "15-05-2014", "open-slots": 4 }
      ]
    },
    {
      "doctor-name": "Aakash Bhardwaj",
      "slot-list": [
        { "date": "12-05-2014", "open-slots": 1 },
        { "date": "13-05-2014", "open-slots": 0 },
        { "date": "14-05-2014", "open-slots": 3 },
        { "date": "15-05-2014", "open-slots": 0 }
      ]
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
    "ICD10-code2" : [
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
  // docters slots booked
  "doctors": [
    {
      "patient-abhaid": "1234456715344821",
      "doctor-name": "Abhishek Gupta",
      "booked-slots": "12-05-2014"
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
			"patient-sector": "1",
			"patient-pincode": "123456",
			"patient-preferred-langauge": "English",
    }
  ]
}
```




